import{_ as u}from"./NFTexLogo.vue.i_IYAOrN.js";import{_ as h}from"./nuxt-link.729bxFks.js";import{u as d,a as x}from"./entry.HhESNUrk.js";import{u as g}from"./index.V1aEXA0O.js";import{u as b}from"./authStates.K7nf3EFk.js";import{a as y}from"./axios.L6U4YIEh.js";import{d as v,a as m,o as s,k as t,x as e,l as k,u as c,J as w,z as C,q as A,L as N,Y as V,Z as B}from"./swiper-vue.8CwPRiLZ.js";import{_ as E}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./cookie.P-GduYWQ.js";const I=""+globalThis.__publicAssetsURL("assets/media/illustrations/sigma-1/17-dark.png"),L=""+globalThis.__publicAssetsURL("assets/media/auth/verify-email.png"),S=i=>(V("data-v-c8e7ea7b"),i=i(),B(),i),P={class:"d-flex flex-column flex-root",id:"kt_app_root"},R={class:"d-flex flex-column flex-center flex-column-fluid"},T={class:"d-flex flex-column flex-center text-center p-10"},$={class:"card card-flush w-lg-650px py-5"},q={class:"card-body py-15 py-lg-20"},z={class:"mb-14"},F={key:0,class:"fw-bolder text-success mb-5"},U={key:1,class:"fw-bolder text-muted mb-5"},D={key:2,class:"fs-6 mb-8"},G=S(()=>e("span",{class:"fw-semibold text-gray-500"},"Email verified, proceed to sign in. ",-1)),J=[G],M={class:"mb-11"},O={key:1,class:"spinner-border spinner-border-lg text-muted"},Y={class:"mb-0"},Z={key:0,src:I,class:"mw-100 mh-300px",alt:""},j={key:1,src:L,class:"mw-100 mh-300px",alt:""},H="Verify Account",K=v({__name:"verify-email",setup(i){const p=d(),f=d().public;g({title:`${f.APP} - ${H}`});const r=x().query.id;console.log(r),m(!1);const a=m(!1);return(()=>{var n;const _={method:"post",data:{id:r},url:`${p.public.BE_API}/auth/verify-email`,timeout:15e3,headers:{Authorization:"Bearer "+((n=b().userData.value)==null?void 0:n.token)}};y.request(_).then(o=>{const l=o.data;console.log(l)}).catch(o=>{console.log(o),o.response.data}).finally(()=>{a.value=!1})})(),(_,n)=>{const o=u,l=h;return s(),t("div",P,[e("div",R,[e("div",T,[e("div",$,[e("div",q,[e("div",z,[k(o)]),c(a)?(s(),t("h1",U," Verifying... ")):(s(),t("h1",F," Verification Complete ")),c(a)?w("",!0):(s(),t("div",D,J)),e("div",M,[c(a)?(s(),t("span",O)):(s(),C(l,{key:0,to:"/sign-in",class:"btn btn-sm btn-primary"},{default:A(()=>[N(" Sign in ")]),_:1}))]),e("div",Y,[c(a)?(s(),t("img",j)):(s(),t("img",Z))])])])])])])}}}),ns=E(K,[["__scopeId","data-v-c8e7ea7b"]]);export{ns as default};
