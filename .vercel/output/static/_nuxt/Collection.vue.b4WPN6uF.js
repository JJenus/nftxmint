import{u as q}from"./vue.f36acd1f._EhHB3U1.js";import{h as k,w as H,j as O,p as D,d as A,u as U,b as E}from"./entry.24sVpUhz.js";import{c as y,d as L,a as S,o as F,f as T,k as C,l as V,q as W,x as G,z as g,L as J,G as b,u as $}from"./swiper-vue.YPEZXV01.js";import{_ as K}from"./nuxt-link.1Sph3F1l.js";async function X(e,t){return await Q(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Q(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>s(o),i.src=e})}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Y(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function Z(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ee(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function te(e){const t={options:e},s=(o,r={})=>R(t,o,r),i=(o,r={},n={})=>s(o,{...n,modifiers:A(r,n.modifiers||{})}).url;for(const o in e.presets)i[o]=(r,n,d)=>i(r,n,{...e.presets[o],...d});return i.options=e,i.getImage=s,i.getMeta=(o,r)=>ie(t,o,r),i.getSizes=(o,r)=>re(t,o,r),t.$img=i,i}async function ie(e,t,s){const i=R(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await X(e,i.url)}function R(e,t,s){var f,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=se(e,s.provider||e.options.provider),r=oe(e,s.preset);if(t=k(t)?t:H(t),!i.supportsAlias)for(const v in e.options.alias)t.startsWith(v)&&(t=O(e.options.alias[v],t.substr(v.length)));if(i.validateDomains&&k(t)){const v=D(t).host;if(!e.options.domains.find(_=>_===v))return{url:t}}const n=A(s,r,o);n.modifiers={...n.modifiers};const d=n.modifiers.format;(f=n.modifiers)!=null&&f.width&&(n.modifiers.width=h(n.modifiers.width)),(l=n.modifiers)!=null&&l.height&&(n.modifiers.height=h(n.modifiers.height));const c=i.getImage(t,n,e);return c.format=c.format||d||"",c}function se(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function oe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function re(e,t,s){var m,x,z,I,M;const i=h((m=s.modifiers)==null?void 0:m.width),o=h((x=s.modifiers)==null?void 0:x.height),r=ee(s.sizes),n=(z=s.densities)!=null&&z.trim()?Y(s.densities.trim()):e.options.densities;Z(n);const d=i&&o?o/i:0,c=[],f=[];if(Object.keys(r).length>=1){for(const u in r){const p=j(u,String(r[u]),o,d,e);if(p!==void 0){c.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of n)f.push({width:p._cWidth*w,src:N(e,t,s,p,w)})}}ne(c)}else for(const u of n){const p=Object.keys(r)[0];let w=j(p,String(r[p]),o,d,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(I=s.modifiers)==null?void 0:I.width,_cHeight:(M=s.modifiers)==null?void 0:M.height}),f.push({width:u,src:N(e,t,s,w,u)})}ae(f);const l=f[f.length-1],v=c.length?c.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,_=v?"w":"x",a=f.map(u=>`${u.src} ${u.width}${_}`).join(", ");return{sizes:v,srcset:a,src:l==null?void 0:l.src}}function j(e,t,s,i,o){const r=o.options.screens&&o.options.screens[e]||parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let d=parseInt(t);if(!r||!d)return;n&&(d=Math.round(d/100*r));const c=i?Math.round(d*i):s;return{size:t,screenMaxWidth:r,_cWidth:d,_cHeight:c}}function N(e,t,s,i,o){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},s)}function ne(e){var s;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function ae(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const de=e=>({url:e}),ce=Object.freeze(Object.defineProperty({__proto__:null,getImage:de},Symbol.toStringTag,{value:"Module"})),B={screens:{xs:320,sm:576,md:768,lg:992,xl:1200,xxl:1400,"2xl":1536},presets:{},provider:"none",domains:[],alias:{},densities:[1,2],format:["webp","avif","jpeg","jpg","png","gif","webp"]};B.providers={none:{provider:ce,defaults:{}}};const P=()=>{const e=U(),t=E();return t.$img||t._img||(t._img=te({...B,nuxt:{baseURL:e.app.baseURL}}))},le={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},fe=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),s=y(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=P(),o=y(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:o}},ue={...le,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},me=L({name:"NuxtImg",props:ue,emits:["load","error"],setup:(e,t)=>{const s=P(),i=fe(e),o=S(!1),r=y(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),n=y(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(a.sizes=r.value.sizes,a.srcset=r.value.srcset),a}),d=y(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||o.value)return!1;if(typeof a=="string")return a;const m=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return s(e.src,{...i.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},i.options.value)}),c=y(()=>e.sizes?r.value.src:s(e.src,i.modifiers.value,i.options.value)),f=y(()=>d.value?d.value:c.value);if(e.preload){const a=Object.values(r.value).every(m=>m);q({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:f.value}}]})}const l=S(),_=E().isHydrating;return F(()=>{if(d.value){const a=new Image;a.src=c.value,e.sizes&&(a.sizes=r.value.sizes||"",a.srcset=r.value.srcset),a.onload=m=>{o.value=!0,t.emit("load",m)};return}l.value&&(l.value.complete&&_&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=a=>{t.emit("load",a)},l.value.onerror=a=>{t.emit("error",a)})}),()=>T("img",{ref:l,src:f.value,...n.value,...t.attrs})}}),ge={class:"card hover-elevate-up hover-slide card-stretch h-100"},he={class:"card-footer p-4 py-5"},ve={class:"mb-2 fs-4 d-flex align-items-center"},pe=g("i",{class:"ki-outline ki-check-circle text-success fs-2 ms-3"},null,-1),ye={class:"d-flex justify-content-between"},we={class:"d-flex flex-column"},_e=g("div",{class:"fs-5 text-muted"},"Floor",-1),Se={class:"fs-4 fw-bold"},be={class:"d-flex flex-column"},xe=g("div",{class:"fs-5 text-muted"},"Total volume",-1),ze={class:"fs-4 fw-bold text-end pe-2"},$e=L({__name:"Collection",props:{collection:{}},setup(e){const t=e,s=S(0),i=S(99999);return t.collection&&t.collection.nfts.forEach(o=>{s.value+=o.supply;const r=Number(o.price);i.value>r&&(i.value=r)}),(o,r)=>{const n=me,d=K;return C(),V("div",ge,[W(d,{to:"/category/"+o.collection.category,class:"card-body p-0 h-100"},{default:G(()=>[W(n,{src:o.collection.bannerImg,alt:"",class:"w-100 h-200px rounded-top"},null,8,["src"])]),_:1},8,["to"]),g("div",he,[g("div",null,[g("h5",ve,[J(b(o.collection.name)+" ",1),pe]),g("div",ye,[g("div",we,[_e,g("div",Se,b($(i)),1)]),g("div",be,[xe,g("div",ze,b($(s)),1)])])])])])}}});export{$e as _,me as a};
