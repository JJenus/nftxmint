import{b as D,n as y,u as m}from"./entry.HhESNUrk.js";import{t as x,Q as E}from"./swiper-vue.8CwPRiLZ.js";import{u as g}from"./cookie.P-GduYWQ.js";import{a as p}from"./axios.L6U4YIEh.js";const b="$s";function c(...e){const u=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(u);const[t,s]=e;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const l=b+t,f=D(),d=x(f.payload.state,l);if(d.value===void 0&&s){const a=s();if(E(a))return f.payload.state[l]=a,a;d.value=a}return d}var A=(e=>(e.READ="read",e.UNREAD="unread",e))(A||{});const k=()=>{const e={id:"",name:"",email:"",profileImg:"/assets/media/svg/avatars/blank.svg",phone:"",status:!1,role:"",createdAt:"",ethAddress:"",balance:"",bannerImg:""},u=c("user-transactions",()=>[]),t=c("notifications",()=>[]),s=c("new-notifications",()=>!1),l=c("userData",()=>e),f=c("users",()=>[]),d=c("active-user");return{data:l,users:f,active:d,notifications:t,newNotification:s,transactions:u,getUsers:()=>{var i,o;(i=h().userData.value)!=null&&i.user||y("/sign-in");const v={method:"get",url:`${m().public.BE_API}/users`,timeout:2e4,headers:{Authorization:"Bearer "+((o=h().userData.value)==null?void 0:o.token)}};p.request(v).then(n=>{f.value=n.data.filter(r=>r.role!=="admin").sort((r,w)=>new Date(w.createdAt).getTime()-new Date(r.createdAt).getTime())}).catch(n=>{n.response.data.message.includes("Access denied")||n.response.status})},getNotifications:()=>{var i;const v={method:"get",url:`${m().public.BE_API}/notifications/${l.value.id}`,timeout:15e3,headers:{Authorization:"Bearer "+((i=h().userData.value)==null?void 0:i.token)}};p.request(v).then(o=>{t.value=o.data.sort((n,r)=>new Date(r.createdAt).getTime()-new Date(n.createdAt).getTime()),t.value.forEach(n=>{n.status===A.UNREAD&&(s.value=!0)})}).catch(o=>{})},showNotifications:()=>{var i;if(!s.value)return;const v={method:"put",data:t.value,url:`${m().public.BE_API}/notifications/all`,timeout:25e3,headers:{Authorization:"Bearer "+((i=h().userData.value)==null?void 0:i.token)}};p.request(v).then(o=>{t.value=o.data.sort((n,r)=>new Date(r.createdAt).getTime()-new Date(n.createdAt).getTime()),t.value.forEach(n=>{n.status===A.UNREAD&&(s.value=!0)})}).catch(o=>{console.log(o)})}}},h=()=>{const e=k(),u=c("user",()=>null),t=c("isAuthenticated",()=>!1),s=g("auth",{maxAge:60*60*24});return{isAuthenticated:()=>{if(t.value)return!0;const a=g("auth");return a.value==null||a.value==null?!1:(t.value=!0,u.value=a.value,e.data.value=a.value.user,!0)},userData:u,logout:async()=>{u.value=null,t.value=!1,g("auth").value=null,window.location.href="/"},login:async a=>{s.value=a,e.data.value=a.user,u.value=a,t.value=!0,window.location.href="/account"}}};export{k as a,h as u};
