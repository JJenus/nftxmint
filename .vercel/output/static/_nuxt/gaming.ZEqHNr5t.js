import{a as b,A as r,E as e,B as d,C as l,u as o,M as C,N as u,O as p,Y as k,z as t,G as w,Z as h,_ as E,$ as N,a0 as A}from"./swiper-vue.ErH13jIa.js";import{_ as B}from"./Token.vue.xjGtlOOX.js";import{u as F}from"./entry.kVMd8BoX.js";import{u as I}from"./index.FadZSnFi.js";import{u as T}from"./collections.UulanZRR.js";import"./authStates.pUPv8EVz.js";import"./cookie.0laOhF-G.js";const O={class:"px-5 mx-4"},$={class:"d-lg-none mx-in3"},G={class:"card"},P={class:"card-body p-0"},x=["src"],M={href:"/asset/aaa",class:"d-none d-lg-block"},V={class:"card"},z={class:"card-body p-0"},D=["src"],L={class:""},R={class:"fs-1 mb-2 mt-7"},Y={class:"container-fluid my-4"},Z={class:"row row-cols-1 row-cols-md-3 row-cols-lg-4 g-7"},X={__name:"gaming",setup(j){const g=F().public,f=b("Gaming"),v=f.value+" NFT";I({title:`${g.APP} - ${v}`});const i=T().gaming,y=i.value.reduce((s,_)=>(_.nfts.forEach(n=>s.push(n)),s),[]);return(s,_)=>{const n=A,m=k,S=B;return t(),r("div",null,[e("div",O,[e("div",$,[d(m,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:o(h),"SwiperEffectCoverflow"in s?s.SwiperEffectCoverflow:o(E),"SwiperEffectCards"in s?s.SwiperEffectCards:o(N)],effect:"cards","cards-effect":{},"centered-slides":!0,"grab-cursor":!0,"slides-per-view":"auto",loop:!0,autoplay:{delay:4e3,disableOnInteraction:!0}},{default:l(()=>[(t(!0),r(u,null,p(o(i),(a,c)=>(t(),w(n,{key:c},{default:l(()=>[e("div",G,[e("div",P,[e("img",{src:a.bannerImg,alt:"",class:"w-100 h-350px h-lg-350px rounded"},null,8,x)])])]),_:2},1024))),128))]),_:1},8,["modules"])]),e("a",M,[d(m,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:o(h)],"space-between":10,"slides-per-view":"auto",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0}},{default:l(()=>[(t(!0),r(u,null,p(o(i),(a,c)=>(t(),w(n,{key:c},{default:l(()=>[e("div",V,[e("div",z,[e("img",{src:a.bannerImg,alt:"",class:"w-100 h-350px h-lg-500px rounded"},null,8,D)])])]),_:2},1024))),128))]),_:1},8,["modules"])])]),e("div",L,[e("h1",R,C(o(f))+" NFTs",1),e("div",Y,[e("div",Z,[(t(!0),r(u,null,p(o(y),a=>(t(),r("div",{key:a.id,class:"col"},[d(S,{token:a},null,8,["token"])]))),128))])])])])}}};export{X as default};