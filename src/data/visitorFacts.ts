/** Location-specific orientation. Times are suggested planning ranges, not official opening hours. */
type Kind = 'river'|'water'|'village'|'office'|'waterfall'|'gorge'|'flora'|'wildlife'|'forest'|'geology'|'dam'|'pier'|'landmark'|'lodging'|'cave'|'activity'|'guide';
type Zone = 'sok'|'headquarters'|'trail'|'reservoir'|'reservoirPier'|'multi';
type Access = 'riverside'|'operator'|'village'|'parkGate'|'forestGuide'|'roadDam'|'pierBoat'|'lakeGuide'|'raftOperator'|'localVaries';
type Duration = 'short'|'half'|'full'|'overnight'|'flexible';
type Profile = { kind:Kind; zone:Zone; access:Access; duration:Duration; extra?:{en:string;th:string;zh:string} };

export const visitorProfiles: Record<string,Profile> = {
 'sok-river':{kind:'river',zone:'sok',access:'riverside',duration:'short'},
 'sok-river-canoeing':{kind:'activity',zone:'sok',access:'operator',duration:'half'},
 'bamboo-rafting':{kind:'activity',zone:'sok',access:'operator',duration:'half'},
 'khao-sok-village':{kind:'village',zone:'sok',access:'village',duration:'short'},
 'national-park-headquarters':{kind:'office',zone:'headquarters',access:'parkGate',duration:'short'},
 'ton-kloi-waterfall':{kind:'waterfall',zone:'trail',access:'forestGuide',duration:'full',extra:{en:'About 7 km from the park headquarters on the main forest route; hiking access depends on current ranger rules.',th:'อยู่ห่างที่ทำการอุทยานราว 7 กม. ตามแนวเส้นทางป่า การเดินขึ้นอยู่กับข้อกำหนดเจ้าหน้าที่',zh:'位于总部附近主要雨林步道约 7 公里处，实际可达路段和向导要求以园方规定为准。'}},
 'bang-hua-rat-waterfall':{kind:'waterfall',zone:'trail',access:'parkGate',duration:'half',extra:{en:'A waterfall stop on the park-side forest route, reached by walking rather than a lake boat.',th:'จุดน้ำตกบนเส้นทางเดินป่าฝั่งที่ทำการอุทยาน ไม่ใช่เส้นทางเรือในทะเลสาบ',zh:'位于国家公园总部一侧的森林步道沿线，不属于湖区乘船景点。'}},
 'wang-hin-waterfall':{kind:'waterfall',zone:'trail',access:'parkGate',duration:'half',extra:{en:'Also listed as Wing Hin; verify the local spelling and waterfall trail with rangers.',th:'พบชื่อ Wing Hin ด้วย ควรยืนยันชื่อและเส้นทางกับเจ้าหน้าที่',zh:'也见 Wing Hin 拼法，出发前应向护林员核对名称及步道。'}},
 'sip-et-chan-waterfall':{kind:'waterfall',zone:'trail',access:'forestGuide',duration:'full',extra:{en:'Eleven-tier waterfall route: plan for demanding forest walking rather than a roadside stop.',th:'น้ำตกสิบเอ็ดชั้นควรวางแผนเป็นเส้นทางเดินป่าที่ใช้แรง ไม่ใช่จุดแวะริมถนน',zh:'十一层瀑布属于较费体力的林间路线，不是公路边的快速停靠点。'}},
 'tang-nam-gorge':{kind:'gorge',zone:'trail',access:'forestGuide',duration:'full',extra:{en:'Approximately 6 km from park headquarters on the Ton Kloi trail; avoid the narrow gorge during rain.',th:'ห่างที่ทำการอุทยานราว 6 กม. บนเส้นทางโตนกลอย หลีกเลี่ยงช่องเขาเมื่อฝนตก',zh:'位于通克洛伊步道上，距公园总部约 6 公里；下雨时不要进入狭窄峡谷。'}},
 'rafflesia-flower':{kind:'flora',zone:'trail',access:'forestGuide',duration:'half',extra:{en:'Seasonal flowering is unpredictable; ask about a current sighting before booking a flower-focused walk.',th:'ดอกบานตามฤดูกาลและคาดเดาไม่ได้ ควรสอบถามการพบเห็นล่าสุดก่อนจองทริป',zh:'花期不固定，专程寻找大王花前应先询问近期是否有开花记录。'}},
 'wildlife-watching':{kind:'wildlife',zone:'headquarters',access:'forestGuide',duration:'half'},
 'birdwatching':{kind:'wildlife',zone:'headquarters',access:'parkGate',duration:'half'},
 'night-safari':{kind:'activity',zone:'headquarters',access:'forestGuide',duration:'half',extra:{en:'Only arrange a permitted guided night walk; do not enter closed forest paths independently.',th:'ควรใช้ทริปกลางคืนที่ได้รับอนุญาตและมีผู้นำทาง ห้ามเข้าทางป่าปิดเอง',zh:'仅参加获准的向导夜间步行，不得自行进入封闭林道。'}},
 'rainforest-plants':{kind:'flora',zone:'headquarters',access:'parkGate',duration:'half'},
 'limestone-karsts':{kind:'geology',zone:'multi',access:'localVaries',duration:'flexible'},
 'ratchaprapha-dam':{kind:'dam',zone:'reservoir',access:'roadDam',duration:'short'},
 'cheow-lan-pier':{kind:'pier',zone:'reservoirPier',access:'roadDam',duration:'short'},
 'three-brothers-rocks':{kind:'landmark',zone:'reservoir',access:'pierBoat',duration:'half'},
 'prai-wan-raft-house':{kind:'lodging',zone:'reservoir',access:'raftOperator',duration:'overnight'},
 'nam-talu-cave':{kind:'cave',zone:'reservoir',access:'lakeGuide',duration:'full',extra:{en:'A stream cave with flash-flood danger; closure decisions take priority over booked tours.',th:'ถ้ำทางน้ำที่เสี่ยงน้ำหลาก ต้องยึดประกาศปิดถ้ำเหนือกำหนดทริป',zh:'洞内有溪流及突发洪水风险，园方关闭决定优先于已订行程。'}},
 'coral-cave':{kind:'cave',zone:'reservoir',access:'lakeGuide',duration:'half'},
 'diamond-cave':{kind:'cave',zone:'reservoir',access:'lakeGuide',duration:'half'},
 'lake-kayaking':{kind:'activity',zone:'reservoir',access:'raftOperator',duration:'half'},
 'lake-sunrise':{kind:'activity',zone:'reservoir',access:'raftOperator',duration:'overnight'},
 'khao-sok-photography':{kind:'guide',zone:'multi',access:'localVaries',duration:'flexible'},
 'rainy-season-guide':{kind:'guide',zone:'multi',access:'localVaries',duration:'flexible'},
 'family-visit':{kind:'guide',zone:'multi',access:'localVaries',duration:'flexible'},
 'two-day-itinerary':{kind:'guide',zone:'multi',access:'localVaries',duration:'overnight'},
 'three-day-itinerary':{kind:'guide',zone:'multi',access:'localVaries',duration:'overnight'},
};

const locale = {
 en:{ labels:['Place / activity','Category','Specific area','How to reach / start','Suggested time','Main feature','Entry and booking','Site-specific note'],
 kind:{river:'River and riverside landscape',water:'Natural water feature',village:'Village and visitor services',office:'National park visitor office',waterfall:'Forest waterfall',gorge:'Limestone river gorge',flora:'Botanical observation',wildlife:'Wildlife and bird observation',forest:'Rainforest habitat',geology:'Karst landscape',dam:'Dam and reservoir infrastructure',pier:'Boat departure pier',landmark:'Lake rock formation',lodging:'Floating accommodation',cave:'Limestone cave',activity:'Outdoor activity',guide:'Travel planning guide'},
 zone:{sok:'Khlong Sok village / river area, Phanom District, Surat Thani',headquarters:'Khao Sok National Park entrance area, Phanom District, Surat Thani',trail:'Forest trails from Khao Sok National Park headquarters, Phanom District',reservoir:'Cheow Lan Lake / Ratchaprapha Reservoir, Ban Ta Khun District, Surat Thani',reservoirPier:'Ratchaprapha Dam boat pier, Ban Ta Khun District, Surat Thani',multi:'Khao Sok village and/or Cheow Lan Lake, Surat Thani; separate travel zones'},
 access:{riverside:'Use safe public riverside points near the village',operator:'Arrange a river launch point and equipment with a local operator',village:'Road access to Khao Sok village',parkGate:'Start at park headquarters; confirm trail status with rangers',forestGuide:'Start via park headquarters and follow any required guided route',roadDam:'Reach the dam or pier area by road; confirm the exact public entrance',pierBoat:'Travel to Ratchaprapha pier, then use a booked lake boat',lakeGuide:'Boat from the lake pier plus the authorized walking route and guide',raftOperator:'Confirm raft-house operator, boat transfer and meeting pier',localVaries:'Depends on the selected activity and whether it is in the forest or lake area'},
 duration:{short:'Short orientation or photo stop; allow transfer time',half:'Plan a half-day window, subject to route and weather',full:'Allow most of a day for walking, transfers and return',overnight:'Overnight or multi-day planning recommended',flexible:'Choose duration according to the selected route'},
 booking:'National park fees, boat charges and guide/operator costs are separate where applicable; check the current terms.',note:'Actual opening, route access and safety conditions may change; follow official ranger notices.'},
 th:{ labels:['ชื่อสถานที่ / กิจกรรม','ประเภท','พื้นที่เฉพาะ','จุดเริ่มต้น / การเดินทาง','เวลาที่ควรเผื่อ','จุดเด่น','ค่าเข้าและการจอง','ข้อมูลเฉพาะสถานที่'],
 kind:{river:'แม่น้ำและภูมิทัศน์ริมน้ำ',water:'แหล่งน้ำธรรมชาติ',village:'หมู่บ้านและบริการนักเดินทาง',office:'ที่ทำการอุทยานและบริการข้อมูล',waterfall:'น้ำตกในป่า',gorge:'ช่องเขาหินปูนและทางน้ำ',flora:'การศึกษาพืช',wildlife:'สังเกตสัตว์ป่าและนก',forest:'ระบบนิเวศป่าดิบ',geology:'ภูมิประเทศหินปูน',dam:'เขื่อนและอ่างเก็บน้ำ',pier:'ท่าเรือออกเดินทาง',landmark:'กลุ่มหินกลางทะเลสาบ',lodging:'ที่พักแพลอยน้ำ',cave:'ถ้ำหินปูน',activity:'กิจกรรมกลางแจ้ง',guide:'คู่มือวางแผนเที่ยว'},
 zone:{sok:'ย่านหมู่บ้านและแม่น้ำคลองศก อำเภอพนม สุราษฎร์ธานี',headquarters:'ย่านทางเข้าอุทยานแห่งชาติเขาสก อำเภอพนม สุราษฎร์ธานี',trail:'ทางเดินป่าจากที่ทำการอุทยานเขาสก อำเภอพนม',reservoir:'ทะเลสาบเชี่ยวหลาน / อ่างเก็บน้ำรัชชประภา อำเภอบ้านตาขุน สุราษฎร์ธานี',reservoirPier:'ท่าเรือเขื่อนรัชชประภา อำเภอบ้านตาขุน สุราษฎร์ธานี',multi:'ฝั่งหมู่บ้านเขาสกและ/หรือทะเลสาบเชี่ยวหลาน ซึ่งอยู่คนละพื้นที่'},
 access:{riverside:'ใช้จุดชมริมแม่น้ำที่ปลอดภัยและเปิดให้เข้าใกล้หมู่บ้าน',operator:'นัดจุดลงเรือและอุปกรณ์กับผู้ให้บริการในพื้นที่',village:'เดินทางทางถนนถึงหมู่บ้านเขาสก',parkGate:'เริ่มที่ทำการอุทยานและสอบถามสถานะเส้นทาง',forestGuide:'เริ่มที่ทำการอุทยานและใช้ผู้นำทางตามข้อกำหนด',roadDam:'เดินทางทางถนนถึงเขื่อนหรือท่าเรือและยืนยันทางเข้าสาธารณะ',pierBoat:'ไปท่าเรือรัชชประภาแล้วขึ้นเรือที่จองไว้',lakeGuide:'ต่อเรือจากท่าเรือและเดินตามเส้นทางถ้ำที่อนุญาตพร้อมผู้นำทาง',raftOperator:'ยืนยันชื่อแพ ผู้ให้บริการ ท่าเรือและรอบรับส่ง',localVaries:'ขึ้นกับกิจกรรมที่เลือกและตำแหน่งฝั่งป่าหรือทะเลสาบ'},
 duration:{short:'แวะชมและรับข้อมูลระยะสั้น โดยเผื่อเวลาเดินทาง',half:'เผื่อเวลาครึ่งวันตามเส้นทางและสภาพอากาศ',full:'เผื่อเวลาส่วนใหญ่ของวันสำหรับเดินและเดินทางกลับ',overnight:'เหมาะกับการวางแผนค้างคืนหรือหลายวัน',flexible:'เลือกตามเส้นทางและกิจกรรมที่สนใจ'},
 booking:'ค่าเข้าอุทยาน ค่าเรือ และค่าผู้นำทางอาจแยกกัน โปรดตรวจสอบเงื่อนไขปัจจุบัน',note:'เวลาเปิด เส้นทาง และความปลอดภัยอาจเปลี่ยนตามประกาศเจ้าหน้าที่'},
 zh:{ labels:['地点／活动名称','景点类型','具体所在区域','交通方式／出发点','建议预留时间','主要看点','门票及预约','该地点特别提示'],
 kind:{river:'河流与沿岸自然景观',water:'天然水景',village:'村庄与旅游服务设施',office:'国家公园游客服务中心',waterfall:'雨林瀑布',gorge:'石灰岩溪谷',flora:'植物生态观察',wildlife:'野生动物及观鸟',forest:'热带雨林生态',geology:'石灰岩喀斯特地貌',dam:'大坝与水库设施',pier:'游船出发码头',landmark:'湖上石灰岩地标',lodging:'湖上漂浮住宿',cave:'石灰岩洞穴',activity:'户外旅游活动',guide:'旅行规划攻略'},
 zone:{sok:'泰国素叻他尼府帕农县考索村／索克河一带',headquarters:'泰国素叻他尼府帕农县考索国家公园入口一带',trail:'素叻他尼府帕农县国家公园总部出发的雨林步道',reservoir:'素叻他尼府班塔坤县乔兰湖／拉差帕帕水库',reservoirPier:'素叻他尼府班塔坤县拉差帕帕大坝码头',multi:'考索村雨林区与／或乔兰湖区，属于不同出发区域'},
 access:{riverside:'从考索村附近安全开放的河岸观景点进入',operator:'向当地经营者预约河上活动并核实下水点和装备',village:'可沿道路抵达考索村',parkGate:'从公园总部出发，向护林员确认步道开放情况',forestGuide:'由公园总部一侧出发，并按园方要求聘请向导',roadDam:'沿道路前往大坝／码头，核实公共入口位置',pierBoat:'先到拉差帕帕码头，再乘预订的湖上船只',lakeGuide:'从湖区码头乘船，之后沿获准的洞穴路线由向导带领',raftOperator:'向水上屋经营者确认住宿名称、集合码头及船只接驳',localVaries:'视选定活动及雨林区或湖区的具体地点而定'},
 duration:{short:'短程停留与拍照，另预留交通时间',half:'建议预留半天，并根据天气及路线调整',full:'建议安排大半天至一天，包括往返时间',overnight:'建议按住宿或多日旅行规划',flexible:'按选定路线与活动类型安排'},
 booking:'国家公园门票、船费和向导／经营者费用可能分别收取，出发前核对现行规定。',note:'开放时间、步道通行及安全措施随现场公告调整。'}
} as const;

export function getVisitorFacts(slug:string, lang:'en'|'th'|'zh', name:string, feature:string) {
 const p=visitorProfiles[slug];
 if(!p) throw new Error(`No visitor profile: ${slug}`);
 const t=locale[lang];
 const values=[name,t.kind[p.kind],t.zone[p.zone],t.access[p.access],t.duration[p.duration],feature,t.booking,p.extra?.[lang] || t.note];
 return t.labels.map((label,i)=>({label,value:values[i]}));
}
