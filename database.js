const DB_KEY='aljuman_lab_db_v1';
const defaultDB={patients:[],reports:[],tests:[],settings:{labArabic:'مختبر الجمان الجانبي',labEnglish:'Al-Juman Al-Janabi Laboratory',address:'الصقلاوية - الشهداء الثانية',phone:'07831216789',license:'',authorized:'',password:'1234',theme:'light'},counters:{patient:0,report:0}};
function loadDB(){try{return Object.assign(defaultDB,JSON.parse(localStorage.getItem(DB_KEY)||'{}'));}catch(e){return structuredClone(defaultDB)}}
let db=loadDB();
function saveDB(){localStorage.setItem(DB_KEY,JSON.stringify(db));refreshAll();}
function nextId(type){db.counters[type]=(db.counters[type]||0)+1;let year=new Date().getFullYear();return year+'-'+String(db.counters[type]).padStart(4,'0')}
function todayISO(){return new Date().toISOString().slice(0,10)}
function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}