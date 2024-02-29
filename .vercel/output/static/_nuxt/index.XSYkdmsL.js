import{a as K,u as Y}from"./index.uCmjTaPq.js";import{h as W,w as Z,j as J,p as Q,d as D,u as G,b as R}from"./entry.D9pw3SQe.js";import{c as x,d as ee,a as M,D as te,f as se,o as u,k as h,l as m,q as _,G as I,H as k,u as w,z as P,x as r,V as A,Y as T,U as E,L as ie,F as N}from"./swiper-vue.D71CgVZz.js";import{_ as oe}from"./nuxt-link.0SDSKYFG.js";async function ae(e,t){return await ne(t).catch(s=>(console.error("Failed to get image meta for "+t,s+""),{width:0,height:0,ratio:0}))}async function ne(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const s=new Image;s.onload=()=>{const o={width:s.width,height:s.height,ratio:s.width/s.height};t(o)},s.onerror=o=>i(o),s.src=e})}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function re(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const s=parseInt(i.replace("x",""));s&&t.add(s)}return Array.from(t)}function ce(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function le(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(s=>s)){const s=i.split(":");s.length!==2?t["1px"]=s[0].trim():t[s[0].trim()]=s[1].trim()}else Object.assign(t,e);return t}function de(e){const t={options:e},i=(o,a={})=>B(t,o,a),s=(o,a={},n={})=>i(o,{...n,modifiers:D(a,n.modifiers||{})}).url;for(const o in e.presets)s[o]=(a,n,c)=>s(a,n,{...e.presets[o],...c});return s.options=e,s.getImage=i,s.getMeta=(o,a)=>me(t,o,a),s.getSizes=(o,a)=>ge(t,o,a),t.$img=s,s}async function me(e,t,i){const s=B(e,t,{...i});return typeof s.getMeta=="function"?await s.getMeta():await ae(e,s.url)}function B(e,t,i){var f,g;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:s,defaults:o}=ue(e,i.provider||e.options.provider),a=fe(e,i.preset);if(t=W(t)?t:Z(t),!s.supportsAlias)for(const b in e.options.alias)t.startsWith(b)&&(t=J(e.options.alias[b],t.substr(b.length)));if(s.validateDomains&&W(t)){const b=Q(t).host;if(!e.options.domains.find(j=>j===b))return{url:t}}const n=D(i,a,o);n.modifiers={...n.modifiers};const c=n.modifiers.format;(f=n.modifiers)!=null&&f.width&&(n.modifiers.width=y(n.modifiers.width)),(g=n.modifiers)!=null&&g.height&&(n.modifiers.height=y(n.modifiers.height));const d=s.getImage(t,n,e);return d.format=d.format||c||"",d}function ue(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function fe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ge(e,t,i){var v,z,V,C,O;const s=y((v=i.modifiers)==null?void 0:v.width),o=y((z=i.modifiers)==null?void 0:z.height),a=le(i.sizes),n=(V=i.densities)!=null&&V.trim()?re(i.densities.trim()):e.options.densities;ce(n);const c=s&&o?o/s:0,d=[],f=[];if(Object.keys(a).length>=1){for(const p in a){const S=L(p,String(a[p]),o,c,e);if(S!==void 0){d.push({size:S.size,screenMaxWidth:S.screenMaxWidth,media:`(max-width: ${S.screenMaxWidth}px)`});for(const $ of n)f.push({width:S._cWidth*$,src:F(e,t,i,S,$)})}}pe(d)}else for(const p of n){const S=Object.keys(a)[0];let $=L(S,String(a[S]),o,c,e);$===void 0&&($={size:"",screenMaxWidth:0,_cWidth:(C=i.modifiers)==null?void 0:C.width,_cHeight:(O=i.modifiers)==null?void 0:O.height}),f.push({width:p,src:F(e,t,i,$,p)})}he(f);const g=f[f.length-1],b=d.length?d.map(p=>`${p.media?p.media+" ":""}${p.size}`).join(", "):void 0,j=b?"w":"x",l=f.map(p=>`${p.src} ${p.width}${j}`).join(", ");return{sizes:b,srcset:l,src:g==null?void 0:g.src}}function L(e,t,i,s,o){const a=o.options.screens&&o.options.screens[e]||parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let c=parseInt(t);if(!a||!c)return;n&&(c=Math.round(c/100*a));const d=s?Math.round(c*s):i;return{size:t,screenMaxWidth:a,_cWidth:c,_cHeight:d}}function F(e,t,i,s,o){return e.$img(t,{...i.modifiers,width:s._cWidth?s._cWidth*o:void 0,height:s._cHeight?s._cHeight*o:void 0},i)}function pe(e){var i;e.sort((s,o)=>s.screenMaxWidth-o.screenMaxWidth);let t=null;for(let s=e.length-1;s>=0;s--){const o=e[s];o.media===t&&e.splice(s,1),t=o.media}for(let s=0;s<e.length;s++)e[s].media=((i=e[s+1])==null?void 0:i.media)||""}function he(e){e.sort((i,s)=>i.width-s.width);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.width===t&&e.splice(i,1),t=s.width}}const _e=e=>({url:e}),ve=Object.freeze(Object.defineProperty({__proto__:null,getImage:_e},Symbol.toStringTag,{value:"Module"})),U={screens:{xs:320,sm:576,md:768,lg:992,xl:1200,xxl:1400,"2xl":1536},presets:{},provider:"none",domains:[],alias:{},densities:[1,2],format:["webp","avif","jpeg","jpg","png","gif","webp"]};U.providers={none:{provider:ve,defaults:{}}};const q=()=>{const e=G(),t=R();return t.$img||t._img||(t._img=de({...U,nuxt:{baseURL:e.app.baseURL}}))},ye={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},we=e=>{const t=x(()=>({provider:e.provider,preset:e.preset})),i=x(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),s=q(),o=x(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||s.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:o}},be={...ye,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},X=ee({name:"NuxtImg",props:be,emits:["load","error"],setup:(e,t)=>{const i=q(),s=we(e),o=M(!1),a=x(()=>i.getSizes(e.src,{...s.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...s.modifiers.value,width:y(e.width),height:y(e.height)}})),n=x(()=>{const l={...s.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(l.sizes=a.value.sizes,l.srcset=a.value.srcset),l}),c=x(()=>{let l=e.placeholder;if(l===""&&(l=!0),!l||o.value)return!1;if(typeof l=="string")return l;const v=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return i(e.src,{...s.modifiers.value,width:v[0],height:v[1],quality:v[2]||50,blur:v[3]||3},s.options.value)}),d=x(()=>e.sizes?a.value.src:i(e.src,s.modifiers.value,s.options.value)),f=x(()=>c.value?c.value:d.value);if(e.preload){const l=Object.values(a.value).every(v=>v);K({link:[{rel:"preload",as:"image",nonce:e.nonce,...l?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:f.value}}]})}const g=M(),j=R().isHydrating;return te(()=>{if(c.value){const l=new Image;l.src=d.value,e.sizes&&(l.sizes=a.value.sizes||"",l.srcset=a.value.srcset),l.onload=v=>{o.value=!0,t.emit("load",v)};return}g.value&&(g.value.complete&&j&&(g.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),g.value.onload=l=>{t.emit("load",l)},g.value.onerror=l=>{t.emit("error",l)})}),()=>se("img",{ref:g,src:f.value,...n.value,...t.attrs})}}),Se={class:"py-4"},xe={class:"card"},Me={class:"card-body p-0"},$e=["src"],je={__name:"MainSlide",setup(e){const t=M([{name:"Tour De Pac",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/gaming/7d4217892337d4900e2fad175c5c0011.jpg"},{name:"Again",floor:"20.23 ETH",volume:"12,21",image:"/assets/media/nft/art/48f515409362ec557603578c18fd2134.jpg"},{name:"Maldiva",floor:"1.23 Matic",volume:"11,420",image:"/assets/media/nft/memberships/3cd9c9d97e35a7ff5ee11baf5dca7b90.jpg"},{name:"Greener",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/memberships/maverick-membership.webp"},{name:"Melbourn",floor:"4.23 ETH",volume:"1,000",image:"/assets/media/nft/music/what-are-music-nfts.webp"},{name:"Vice City",floor:"2.23 ETH",volume:"17,000",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"}]);return(i,s)=>{const o=T,a=E;return u(),h("div",Se,[m(a,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:w(A)],"space-between":10,breakpoints:{768:{slidesPerView:3},992:{slidesPerView:4}},loop:!0,autoplay:{delay:6e3,disableOnInteraction:!0}},{default:_(()=>[(u(!0),h(I,null,k(w(t),(n,c)=>(u(),P(o,{key:c},{default:_(()=>[r("div",xe,[r("div",Me,[r("img",{src:n.image,alt:"",class:"w-100 h-300px rounded"},null,8,$e)])])]),_:2},1024))),128))]),_:1},8,["modules"])])}}},Ie=je,ke={class:"card hover-elevate-up hover-slide card-stretch h-100"},Pe={class:"card-footer p-4 py-5"},Ae={class:"mb-2 fs-4 d-flex align-items-center"},Te=r("i",{class:"ki-outline ki-check-circle text-success fs-2 ms-3"},null,-1),Ee={class:"d-flex justify-content-between"},He={class:"d-flex flex-column"},Ne=r("div",{class:"fs-5 text-muted"},"Floor",-1),ze={class:"fs-4 fw-bold"},Ve={class:"d-flex flex-column"},Ce=r("div",{class:"fs-5 text-muted"},"Volume",-1),Oe={class:"fs-4 fw-bold"},We={__name:"Collection",props:{collection:{required:!0}},setup(e){return(t,i)=>{const s=X,o=oe;return u(),h("div",ke,[m(o,{to:"/category/"+e.collection.category,class:"card-body p-0 h-100"},{default:_(()=>[m(s,{onClick:i[0]||(i[0]=a=>t.open(e.collection.name)),src:e.collection.image,alt:"",class:"w-100 h-200px rounded-top"},null,8,["src"])]),_:1},8,["to"]),r("div",Pe,[m(o,{to:"/asset/collection/"+e.collection.name},{default:_(()=>[r("h5",Ae,[ie(N(e.collection.name)+" ",1),Te]),r("div",Ee,[r("div",He,[Ne,r("div",ze,N(e.collection.floor),1)]),r("div",Ve,[Ce,r("div",Oe,N(e.collection.volume),1)])])]),_:1},8,["to"])])])}}},H=We,Le={__name:"ArtShowCase",setup(e){const t=M([{category:"art",name:"Khan",floor:"0.23 ETH",volume:"17,000",image:"/assets/media/nft/art/48f515409362ec557603578c18fd2134.jpg"},{category:"art",name:"Rango",floor:"1.23 Matic",volume:"11,420",image:"/assets/media/nft/gaming/GyEkb_tl0e0gXf_Vdce7Pkkc5OBU-ORbYUa4b-iIW4t39Gy5293OvnI5LLcwIxTI4XKO8yg5bHXldgDcPDdSnmrApGFHfLZyfs8V.jpg"},{category:"art",name:"Ido",floor:"1.23 Matic",volume:"11,420",image:"/assets/media/nft/art/2757e233bc2708e8d0f5ad3079b39d21.jpg"},{category:"art",name:"Chi",floor:"4.23 ETH",volume:"1,000",image:"/assets/media/nft/art/198b0fa57beea4256eadfefb74bc1602.jpg"},{category:"art",name:"Khan",floor:"2.23 ETH",volume:"17,000",image:"/assets/media/nft/art/turn-digital-arti-into-nft.webp"}]);return(i,s)=>{const o=H,a=T,n=E;return u(),h("div",null,[m(n,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:w(A)],"space-between":10,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:4},992:{slidesPerView:5}},loop:!0,autoplay:{delay:8e3,disableOnInteraction:!0}},{default:_(()=>[(u(!0),h(I,null,k(w(t),(c,d)=>(u(),P(a,{class:"py-5 h-100",key:d},{default:_(()=>[m(o,{collection:c},null,8,["collection"])]),_:2},1024))),128))]),_:1},8,["modules"])])}}},Fe=Le,De={__name:"MusicShowCase",setup(e){const t=M([{category:"music",name:"I am me",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"},{category:"music",name:"Lavrina",floor:"20.23 ETH",volume:"12,21",image:"/assets/media/nft/music/9785f0b062da87518076fa7d8b6a0381.jpg"},{category:"music",name:"Estadi Magri",floor:"1.23 Matic",volume:"11,420",image:"/assets/media/nft/music/c5c3ff4a66c4c34f1c93333476162631.jpg"},{category:"music",name:"I am me",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"},{category:"music",name:"Adingra",floor:"4.23 ETH",volume:"1,000",image:"/assets/media/nft/music/what-are-music-nfts.webp"},{category:"music",name:"Methusa",floor:"2.23 ETH",volume:"17,000",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"}]);return(i,s)=>{const o=H,a=T,n=E;return u(),h("div",null,[m(n,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:w(A)],"space-between":10,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:4},992:{slidesPerView:5}},loop:!0,autoplay:{delay:8e3,disableOnInteraction:!0}},{default:_(()=>[(u(!0),h(I,null,k(w(t),(c,d)=>(u(),P(a,{class:"py-5 h-100",key:d},{default:_(()=>[m(o,{collection:c},null,8,["collection"])]),_:2},1024))),128))]),_:1},8,["modules"])])}}},Ge=De,Re={__name:"GamingShowCase",setup(e){const t=M([{category:"gaming",name:"Tour De Pac",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/gaming/7d4217892337d4900e2fad175c5c0011.jpg"},{name:"Again",category:"gaming",floor:"20.23 ETH",volume:"12,21",image:"/assets/media/nft/gaming/20f9fd3c07cb3ed1c085221ee0acdd06.jpg"},{category:"gaming",name:"Maldiva",floor:"1.23 Matic",volume:"11,420",image:"/assets/media/nft/gaming/dbb8f49a7ee1d7c6d42d35321535f6bc.jpg"},{category:"gaming",name:"Greener",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/gaming/GyEkb_tl0e0gXf_Vdce7Pkkc5OBU-ORbYUa4b-iIW4t39Gy5293OvnI5LLcwIxTI4XKO8yg5bHXldgDcPDdSnmrApGFHfLZyfs8V.jpg"},{category:"gaming",name:"Melbourn",floor:"4.23 ETH",volume:"1,000",image:"/assets/media/nft/music/what-are-music-nfts.webp"},{category:"gaming",name:"Vice City",floor:"2.23 ETH",volume:"17,000",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"}]);return(i,s)=>{const o=H,a=T,n=E;return u(),h("div",null,[m(n,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:w(A)],"space-between":10,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:4},992:{slidesPerView:5}},loop:!0,autoplay:{delay:8e3,disableOnInteraction:!0}},{default:_(()=>[(u(!0),h(I,null,k(w(t),(c,d)=>(u(),P(a,{class:"py-5 h-100",key:d},{default:_(()=>[m(o,{collection:c},null,8,["collection"])]),_:2},1024))),128))]),_:1},8,["modules"])])}}},Be=Re,Ue={__name:"PhotographyShowCase",setup(e){const t=M([{category:"photography",name:"I am me",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"},{category:"photography",name:"Lavrina",category:"music",floor:"20.23 ETH",volume:"12,21",image:"/assets/media/nft/music/9785f0b062da87518076fa7d8b6a0381.jpg"},{category:"photography",name:"Estadi Magri",category:"music",floor:"1.23 Matic",volume:"11,420",image:"/assets/media/nft/music/c5c3ff4a66c4c34f1c93333476162631.jpg"},{category:"photography",name:"I am me",category:"music",floor:"91.23 Matic",volume:"11,420",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"},{category:"photography",name:"Adingra",category:"music",floor:"4.23 ETH",volume:"1,000",image:"/assets/media/nft/music/what-are-music-nfts.webp"},{category:"photography",name:"Methusa",category:"music",floor:"2.23 ETH",volume:"17,000",image:"/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg"}]);return(i,s)=>{const o=H,a=T,n=E;return u(),h("div",null,[m(n,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:w(A)],"space-between":10,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:4},992:{slidesPerView:5}},loop:!0,autoplay:{delay:8e3,disableOnInteraction:!0}},{default:_(()=>[(u(!0),h(I,null,k(w(t),(c,d)=>(u(),P(a,{class:"py-5 h-100",key:d},{default:_(()=>[m(o,{collection:c},null,8,["collection"])]),_:2},1024))),128))]),_:1},8,["modules"])])}}},qe=Ue,Xe={class:"container-fluid"},Ke={class:"card mb-10 border-0 bg-transparent"},Ye={class:"card-body min-h-300px"},Ze={class:"d-flex flex-column flex-md-row justify-content-around align-items-center"},Je=r("div",{class:"mw-350px ms-md-4 ms-xl-1"},[r("h1",{class:"display-4"}," Discover, collect and sell extraordinary NFTs. "),r("h6",{class:"text-muted"}," Next generation NFTs, art, music, photography, and more. ")],-1),Qe={class:"text-center ms-auito"},et={class:"mb-4 d-none"},tt={class:"mb-4"},st=r("h1",{class:"fs-1 mb-2"},"Art NFTs",-1),it={class:"mb-4"},ot=r("h1",{class:"fs-1 mb-2"},"Music NFTs",-1),at={class:"mb-4"},nt=r("h1",{class:"fs-1 mb-2"},"Gaming NFTs",-1),rt={class:"mb-4"},ct=r("h1",{class:"fs-1 mb-2"},"Photography NFTs",-1),ft={__name:"index",setup(e){const t=G().public;return Y({title:`Welcome to ${t.APP}`}),(i,s)=>{const o=X,a=Ie,n=Fe,c=Ge,d=Be,f=qe;return u(),h("div",Xe,[r("div",Ke,[r("div",Ye,[r("div",Ze,[Je,r("div",Qe,[m(o,{class:"min-w-500 mhi-300px card-rounded",alt:"",src:"/assets/media/nft/art/art-main.png",sizes:"md:450px"})])])])]),r("div",et,[m(a)]),r("div",tt,[st,m(n)]),r("div",it,[ot,m(c)]),r("div",at,[nt,m(d)]),r("div",rt,[ct,m(f)])])}}};export{ft as default};