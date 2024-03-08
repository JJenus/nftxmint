import{k as o,n as k,u as h,c as m}from"./entry.RpivB97r.js";import{u as g}from"./cookie.mKsuEFFw.js";var A=(r=>(r.READ="read",r.UNREAD="unread",r))(A||{});const R=()=>{const r={id:"",name:"",email:"",profileImg:"/assets/media/svg/avatars/blank.svg",phone:"",status:"",userRole:"",createdAt:"",ethAddress:"",balance:"",bannerImg:""},l=o("user-transactions",()=>[]),s=o("notifications",()=>[]),d=o("new-notifications",()=>!1),c=o("userData",()=>r),f=o("users",()=>[]),D=o("active-user"),n=()=>{var t,e;(t=v().userData.value)!=null&&t.user||k("/sign-in");const u={method:"get",url:`${h().public.BE_API}/users`,timeout:2e4,headers:{Authorization:"Bearer "+((e=v().userData.value)==null?void 0:e.token)}};m.request(u).then(a=>{f.value=a.data.filter(i=>i.userRole!=="admin").sort((i,E)=>new Date(E.createdAt).getTime()-new Date(i.createdAt).getTime())}).catch(a=>{a.response.data.message.includes("Access denied")||a.response.status})},w=()=>{var t;const u={method:"get",url:`${h().public.BE_API}/notifications/${c.value.id}`,timeout:15e3,headers:{Authorization:"Bearer "+((t=v().userData.value)==null?void 0:t.token)}};m.request(u).then(e=>{s.value=e.data.sort((a,i)=>new Date(i.createdAt).getTime()-new Date(a.createdAt).getTime()),s.value.forEach(a=>{a.status===A.UNREAD&&(d.value=!0)})}).catch(e=>{})},B=()=>{var t;if(!d.value)return;const u={method:"put",data:s.value,url:`${h().public.BE_API}/notifications/all`,timeout:25e3,headers:{Authorization:"Bearer "+((t=v().userData.value)==null?void 0:t.token)}};m.request(u).then(e=>{s.value=e.data.sort((a,i)=>new Date(i.createdAt).getTime()-new Date(a.createdAt).getTime()),s.value.forEach(a=>{a.status===A.UNREAD&&(d.value=!0)})}).catch(e=>{console.log(e)})},b=()=>{var t;const u={method:"get",url:`${h().public.BE_API}/users/${c.value.id}`,timeout:2e4,headers:{Authorization:"Bearer "+((t=v().userData.value)==null?void 0:t.token)}};m.request(u).then(e=>{c.value=e.data}).catch(e=>{(e.response.data.message.includes("Access denied")||e.response.status===401)&&console.log("Access denied")})},p=()=>c.value.userRole==="admin";return{data:c,users:f,active:D,notifications:s,newNotification:d,transactions:l,getUsers:n,getNotifications:w,showNotifications:B,loadUser:b,isAdmin:p,checkBalance:u=>{if(p())return!0;const t=Number(u);return Number(c.value.balance)>=t}}},v=()=>{const r=R(),l=o("user",()=>null),s=o("isAuthenticated",()=>!1),d=g("auth",{maxAge:60*60*24});return o("authAction",()=>"login"),{isAuthenticated:()=>{if(s.value)return!0;const n=g("auth");return n.value==null||n.value==null?!1:(s.value=!0,l.value=n.value,r.data.value=n.value.user,!0)},userData:l,logout:async()=>{l.value=null,s.value=!1,g("auth").value=null,window.location.href="/"},login:async n=>{d.value=n,r.data.value=n.user,l.value=n,s.value=!0,window.location.href="/account"}}};export{R as a,v as u};
