import{a as b,A as r,E as e,B as d,C as n,u as o,M as C,N as u,O as p,Y as k,z as t,G as w,Z as h,_ as E,$ as A,a0 as N}from"./swiper-vue.ErH13jIa.js";import{_ as B}from"./Token.vue.xjGtlOOX.js";import{u as F}from"./entry.kVMd8BoX.js";import{u as I}from"./index.FadZSnFi.js";import{u as T}from"./collections.UulanZRR.js";import"./authStates.pUPv8EVz.js";import"./cookie.0laOhF-G.js";const O={class:"px-5 mx-4"},$={class:"d-lg-none mx-in3"},P={class:"card"},x={class:"card-body p-0"},G=["src"],M={href:"/asset/aaa",class:"d-none d-lg-block"},V={class:"card"},z={class:"card-body p-0"},D=["src"],L={class:""},R={class:"fs-1 mb-2 mt-7"},Y={class:"container-fluid my-4"},Z={class:"row row-cols-1 row-cols-md-3 row-cols-lg-4 g-7"},X={__name:"art",setup(j){const v=F().public,f=b("Art"),y=f.value+" NFT";I({title:`${v.APP} - ${y}`});const c=T().art,S=c.value.reduce((s,_)=>(_.nfts.forEach(l=>s.push(l)),s),[]);return(s,_)=>{const l=N,m=k,g=B;return t(),r("div",null,[e("div",O,[e("div",$,[d(m,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:o(h),"SwiperEffectCoverflow"in s?s.SwiperEffectCoverflow:o(E),"SwiperEffectCards"in s?s.SwiperEffectCards:o(A)],effect:"cards","cards-effect":{},"centered-slides":!0,"grab-cursor":!0,"slides-per-view":"auto",loop:!0,autoplay:{delay:4e3,disableOnInteraction:!0}},{default:n(()=>[(t(!0),r(u,null,p(o(c),(a,i)=>(t(),w(l,{key:i},{default:n(()=>[e("div",P,[e("div",x,[e("img",{src:a.bannerImg,alt:"",class:"w-100 h-350px h-lg-350px rounded"},null,8,G)])])]),_:2},1024))),128))]),_:1},8,["modules"])]),e("a",M,[d(m,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:o(h)],"space-between":10,"slides-per-view":"auto",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0}},{default:n(()=>[(t(!0),r(u,null,p(o(c),(a,i)=>(t(),w(l,{key:i},{default:n(()=>[e("div",V,[e("div",z,[e("img",{src:a.bannerImg,alt:"",class:"w-100 h-350px h-lg-500px rounded"},null,8,D)])])]),_:2},1024))),128))]),_:1},8,["modules"])])]),e("div",L,[e("h1",R,C(o(f))+" NFTs",1),e("div",Y,[e("div",Z,[(t(!0),r(u,null,p(o(S),a=>(t(),r("div",{key:a.id,class:"col"},[d(g,{token:a},null,8,["token"])]))),128))])])])])}}};export{X as default};
