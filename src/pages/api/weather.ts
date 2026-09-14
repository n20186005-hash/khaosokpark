export const prerender = false;
import type { APIRoute } from 'astro';
import { siteConfig } from '../../config';
const TTL = 1800;
const CACHE_URL = 'https://khaosok.local/__weather';
const { lat, lng } = siteConfig.coords;

const UPSTREAM =
  'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${lat}&longitude=${lng}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature' +
  ',precipitation,weather_code,wind_speed_10m,wind_gusts_10m,is_day' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,' +
  'precipitation_sum,precipitation_probability_max,uv_index_max,sunrise,sunset' +
  '&timezone=Asia%2FBangkok&forecast_days=7&wind_speed_unit=kmh';

// 山顶（约 800 米石灰岩峰林）气温估算，用于海拔温差与登山穿衣建议
const RIDGE_URL =
  'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${lat}&longitude=${lng}&elevation=800` +
  '&current=temperature_2m&timezone=Asia%2FBangkok&forecast_days=1';

type Row = { d: string; c: number; hi: number; lo: number; r: number; p: number; u: number };

async function fetchWeather() {
  const [main, ridge] = await Promise.all([
    fetch(UPSTREAM, { headers: { accept: 'application/json' } }),
    fetch(RIDGE_URL, { headers: { accept: 'application/json' } }).catch(() => null),
  ]);
  if (!main.ok) throw new Error('upstream ' + main.status);
  const j: any = await main.json();
  const d = j.daily, c = j.current;
  const num = (v: unknown, fallback = 0) => (typeof v === 'number' ? v : fallback);
  const days: Row[] = (d.time as string[]).map((t, i) => ({
    d: t,
    c: num(d.weather_code[i]),
    hi: Math.round(num(d.temperature_2m_max[i])),
    lo: Math.round(num(d.temperature_2m_min[i])),
    r: num(d.precipitation_sum[i]),
    p: num(d.precipitation_probability_max?.[i]),
    u: num(d.uv_index_max?.[i]),
  }));

  let ridgeTemp: number | null = null;
  try {
    if (ridge?.ok) {
      const rj: any = await ridge.json();
      ridgeTemp = Math.round(num(rj.current?.temperature_2m, NaN)) || null;
    }
  } catch {
    ridgeTemp = null;
  }

  return {
    now: {
      temp: Math.round(num(c.temperature_2m)),
      feels: Math.round(num(c.apparent_temperature)),
      hum: Math.round(num(c.relative_humidity_2m)),
      wind: Math.round(num(c.wind_speed_10m)),
      gust: Math.round(num(c.wind_gusts_10m)),
      code: num(c.weather_code),
      rain: num(c.precipitation),
      uv: num(d.uv_index_max?.[0]),
      rainProb: num(d.precipitation_probability_max?.[0]),
      day: c.is_day === 1,
      sunrise: d.sunrise?.[0] ?? '',
      sunset: d.sunset?.[0] ?? '',
    },
    // 山顶参考温度（海拔约 800 米）与与湖区的温差
    ridge: {
      temp: ridgeTemp,
      diff: ridgeTemp === null ? null : Math.round(num(c.temperature_2m) - ridgeTemp),
    },
    days,
  };
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=600, s-maxage=${TTL}, stale-while-revalidate=3600`,
    },
  });

export const GET: APIRoute = async () => {
  const store = (globalThis as any).caches?.default;
  if (store) {
    const hit = await store.match(CACHE_URL);
    if (hit) return hit;
  }
  try {
    const data = await fetchWeather();
    const res = json(data);
    if (store) await store.put(CACHE_URL, res.clone());
    return res;
  } catch {
    return json({ error: 'unavailable' }, 503);
  }
};
