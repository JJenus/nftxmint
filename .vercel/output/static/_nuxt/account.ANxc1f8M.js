import{_ as y}from"./nuxt-link.b7sbEXvA.js";import{u as k,a as w,_ as C}from"./entry.6-x_fUt2.js";import{u as N}from"./index.TzHh2TMF.js";import{u as A,a as I}from"./authStates.Ig55YP20.js";import{a as z,D as E,u as e,k as m,x as t,E as F,F as i,l as c,q as u,G as R,H as $,I as b,J as f,o as p,L as _}from"./swiper-vue.NczeWK1y.js";import"./cookie.0dD0VmNt.js";import"./axios.L6U4YIEh.js";const D={key:0},L={class:"mb-8"},P={class:"card card-flush mb-9",id:"kt_user_profile_panel"},T={class:"card-body mt-n19"},V={class:"m-0"},j={class:"d-flex flex-stack align-items-end pb-4 mt-n19"},B={class:"overlay overflow-hidden symbol symbol-125px symbol-circle symbol-lg-150px symbol-fixed position-relative mt-n3"},S=["src"],U=t("div",{class:"position-absolute translate-middle bottom-0 start-100 ms-n1 bg-success rounded-circle h-15px w-15px"},null,-1),G={class:"overlay-layer bg-dark bg-opacity-25"},H={"data-kt-image-input-action":"change","data-bs-toggle":"tooltip","data-bs-dismiss":"click",title:"Change avatar",class:"btn btn-sm btn-icon btn-icon-white btn-active-icon-secondary"},M=t("i",{class:"ki-solid ki-pencil fs-1"},null,-1),O={class:"d-flex flex-stack flex-wrap align-items-end"},q={class:"d-flex flex-column"},J={class:"d-flex align-items-center mb-2"},K={href:"#",class:"text-gray-800 text-hover-primary fs-2 fw-bolder me-1"},Q=t("a",{href:"#",class:"","data-bs-toggle":"tooltip","data-bs-placement":"right","aria-label":"Account is verified","data-bs-original-title":"Account is verified","data-kt-initialized":"1"},[t("i",{class:"ki-outline ki-verify fs-1 text-primary"})],-1),W=t("span",{class:"fw-bold d-none text-gray-600 fs-6 mb-2 d-block"}," Explore the limitless possibilities of digital ownership. NFTex, where creativity meets the blockchain! ",-1),X={class:"d-flex align-items-center fw-bold fs-2 mb-3"},Y=t("i",{class:"fa-brands fa-ethereum fs-2 text-warning me-1"},null,-1),Z={class:"pb-0"},tt={class:"d-flex align-items-center flex-wrap fw-semibold fs-7 pe-2"},et=t("span",{class:"bullet bullet-dot h-5px w-5px bg-gray-400 me-3"},null,-1),st={href:"#",class:"mw-200px mw-lg-400px text-truncate text-info itext-gray-400 text-hover-primary"},at=t("span",{class:"bullet bullet-dot h-5px w-5px bg-gray-400 ms-3"},null,-1),ot={class:"mt-5"},nt=t("div",{class:"d-flex"},[t("button",{class:"btn btn-sm btn-secondary bg-body btn-icon"},[t("i",{class:"ki-outline ki-setting-2 fs-2"})])],-1),lt={id:"kt_user_profile_nav",class:"rounded bg-gray-200 d-flex flex-stack flex-wrap mb-9 p-2","data-kt-sticky":"false","data-kt-sticky-width":"{default: '100%'}","data-kt-sticky-animation":"true","data-kt-sticky-zindex":"1295"},it={class:"hover-scroll-xi hide-scrollbar"},ct={class:"nav flex-wraip border-transparent"},rt=["onClick"],dt="User Dashboard",vt={__name:"account",setup(mt){const h=k().public;N({title:`${h.APP} - ${dt}`});const r=A();r.isAuthenticated()||r.logout();const s=I().data,g=w(),o=z("collected"),x=[{name:"Collected",path:"/account/"},{name:"Created",path:"/account/created"}];return E(()=>{const n=g.path.split("/");console.log("ROUTE",n),n[2]?o.value=n[2]:o.value="collected"}),(n,l)=>{const d=y,v=C;return e(r).isAuthenticated()?(p(),m("div",D,[t("div",L,[t("div",null,[t("div",P,[t("div",{class:"card-header rounded-top bgi-size-cover h-200px",style:F(`background-position: 100% 50%;
							background-image: url('${e(s).bannerImg?e(s).bannerImg:"/assets/media/auth/bg11-dark.jpg"}');`)},null,4),t("div",T,[t("div",V,[t("div",j,[t("div",B,[t("img",{src:e(s).profileImg?e(s).profileImg:"https://robohash.org/nftexchaing.png",alt:"image",class:"overlay-wrapper border border-white border-4 rounded-circle"},null,8,S),U,t("div",G,[t("button",H,[M,t("input",{onChange:l[0]||(l[0]=a=>n.changeImage(a)),class:"d-none",type:"file",name:"avatar",accept:".png, .jpg, .jpeg"},null,32)])])])]),t("div",O,[t("div",q,[t("div",J,[t("a",K,i(e(s).name?e(s).name:"unknown collector"),1),Q]),W,t("div",X,[Y,t("span",Z,i(e(s).balance)+" ETH ",1)]),t("div",tt,[et,t("a",st,i(e(s).ethAddress),1),at]),t("div",ot,[c(d,{to:"/crypto/fund-wallet",class:"btn btn-primary w-200px w-lg-350px"},{default:u(()=>[_(" Fund wallet ")]),_:1})])]),nt])])])])]),t("div",null,[t("div",lt,[t("div",it,[t("ul",ct,[(p(),m(R,null,$(x,a=>t("li",{onClick:ut=>o.value=a.name,class:"nav-item my-1"},[c(d,{class:b([e(o)==a.name.toLowerCase()?"active":"","btn btn btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-5 fs-lg-base nav-link px-3 px-lg-4 mx-1"]),to:a.path},{default:u(()=>[_(i(a.name),1)]),_:2},1032,["class","to"])],8,rt)),64)),e(s).userRole==="admin"?(p(),m("li",{key:0,onClick:l[1]||(l[1]=a=>o.value="users"),class:b([e(s).userRole!=="admin"?"d-none":"","nav-item my-1"])},[c(d,{class:b([e(o)=="users"?"active":"","btn btn btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-5 fs-lg-base nav-link px-3 px-lg-4 mx-1"]),to:"/account/users"},{default:u(()=>[_(" Users ")]),_:1},8,["class"])],2)):f("",!0)])])])])]),c(v)])):f("",!0)}}};export{vt as default};
