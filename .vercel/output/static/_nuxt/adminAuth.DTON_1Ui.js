import{e as r}from"./entry.HhESNUrk.js";import{u as a}from"./cookie.P-GduYWQ.js";import{u}from"./authStates.K7nf3EFk.js";import"./swiper-vue.8CwPRiLZ.js";import"./axios.L6U4YIEh.js";const p=r((i,s)=>{var e;const o=a("auth");if(o.value==null||o.value==null)return u().logout();const t=u();if(!t.isAuthenticated()||((e=t.userData.value)==null?void 0:e.user.userType)!=="admin")return t.logout()});export{p as default};
