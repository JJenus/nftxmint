import{_ as c}from"./Token.vue.1_4z_JjI.js";import{u as l}from"./collections.Z8dcVtuY.js";import{a as i}from"./authStates.3EwJlzAx.js";import{q as e,u as a,I as d,J as m,l as t,x as _,A as u}from"./swiper-vue.5_csNmSw.js";import"./entry.RpivB97r.js";import"./cookie.mKsuEFFw.js";const p={key:0,class:"min-h-300px rounded border border-primary d-flex align-items-center justify-content-center"},f=u("h1",null,"No created items",-1),h=[f],k={key:1,class:"row row-cols-1 row-cols-md-3 row-cols-lg-4"},F={__name:"created",setup(v){const o=l().userNFts.value.filter(r=>r.ownerId===i().data.value.id);return(r,w)=>{const n=c;return t(),e("div",null,[a(o).length<1?(t(),e("div",p,h)):(t(),e("div",k,[(t(!0),e(d,null,m(a(o),s=>(t(),e("div",{key:s.id,class:"col"},[_(n,{token:s},null,8,["token"])]))),128))]))])}}};export{F as default};
