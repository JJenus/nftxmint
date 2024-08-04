import{u as P,b as g,a as S,c as f}from"./entry.kVMd8BoX.js";import{u as B}from"./index.FadZSnFi.js";import{i as y,e as k,s as $}from"./showAlert.gTKGgNLp.js";import{a as q}from"./authStates.pUPv8EVz.js";import{c as M}from"./currency.es.-or6eeOG.js";import{a as d,y as U,u as e,A as _,E as t,Q as i,M as a,P as w,W as x,z as p}from"./swiper-vue.ErH13jIa.js";import"./cookie.0laOhF-G.js";const F={key:0,class:"container-fluid mt-5"},V={key:0,class:"row g-8"},j={class:"col-12 col-md-7 col-lg-7"},D={class:"display-6 mb-7 d-md-none"},G=t("i",{class:"ki-duotone ki-black-right-line fs-1 text-white"},[t("span",{class:"path1"}),t("span",{class:"path2"})],-1),H={class:"card"},L=x('<div class="card-header m-0 py-1 d-flex align-items-center justify-content-between"><div class="text-white"><button class="btn bg-body btn-icon-white btn-active-icon-primary p-0"><i class="ki-solid ki-right-left fs-1"></i></button></div><div class="d-flex align-items-center"><span class="badge d-none badge-white badge-circle fs-6 badge-outline">3</span><button class="btn btn-primaryi bg-body btn-icon-white btin-icon btn-active-icon-danger p-1 pe-0"><i class="ki-solid ki-heart btn-active-icon-primary fs-1"></i></button></div></div>',1),O={class:"card-body p-0"},R=["src"],z={class:"col"},Q={class:"mb-5"},W={class:"display-6 mb-3 d-none d-md-block"},Y=t("i",{class:"ki-duotone ki-black-right-line fs-1 text-white"},[t("span",{class:"path1"}),t("span",{class:"path2"})],-1),J={class:"d-flex flex-column flex-md-row"},K={class:"btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-primary"},X=t("i",{class:"ki-solid ki-burger-menu-3 fs-3"},null,-1),Z=t("div",null,[t("button",{class:"btn d-none p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-info"},[t("i",{class:"ki-solid ki-eye fs-3"}),i(" 234 views ")])],-1),tt=t("div",null,[t("button",{class:"btn d-none p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-danger"},[t("i",{class:"ki-solid ki-heart fs-3"}),i(" 3 likes ")])],-1),st={class:"btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-warning"},et=t("i",{class:"ki-solid ki-book-open fs-3"},null,-1),nt={class:"card mb-10"},ot={class:"card-body"},at=t("div",{class:"text-muted"},"Current price",-1),it={class:"d-flex align-items-center justify-content-between"},ct={class:"display-6"},lt={class:"fw-bold pt-1"},dt=t("div",{class:"text-muted mt-1 d-none"}," Listed by ",-1),rt={class:"d-flex flex-column text-center"},ut={class:"d-flex align-items-start justify-content-center mb-7"},_t=x('<i class="ki-duotone text-white ki-element-plus fs-4 mt-1 me-2 fw-bold"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i><span class="fw-bold fs-3x" id="kt_modal_create_campaign_budget_label"></span>',2),pt={class:"fw-bold fs-3x"},mt=t("div",{id:"kt_docs_forms_advanced_interactive_slider",class:"noUi-sm"},null,-1),bt={class:"mt-4"},ht={key:0},ft={key:1,class:""},vt=t("span",{class:"spinner-border spinner-border-sm ms-2"},null,-1),gt=t("div",{class:"card"},[t("div",{class:"card-body"})],-1),It={__name:"[id]",setup(yt){const r=P().public;B({title:`${r.APP} - Asset`}),g().settings;const u=g().isPageLoading;u.value=!0;const m=d(!1),T=S(),C=d(T.params.id),n=d({}),b=d({}),l=d(1),A=()=>{{const o=document.querySelector("#kt_docs_forms_advanced_interactive_slider");noUiSlider.create(o,{start:[1],connect:!0,range:{min:1,max:n.value.supply},step:1}),o.noUiSlider.on("update",function(s,c){l.value=Math.round(s[c]),c&&(l.value=Math.round(s[c]))})}},h=()=>M(n.value.price,{symbol:"",precision:8}).multiply(l.value),E=()=>{const o={url:`${r.BE_API}/nfts/${C.value}`,method:"GET"};f.request(o).then(s=>{n.value=s.data,console.log(s.data),I()}).catch(s=>{y("NFT not found!"),setTimeout(()=>{window.location.href="/"},3e3)})},I=()=>{const o={url:`${r.BE_API}/collections/${n.value.collectionId}`,method:"GET"};f.request(o).then(s=>{b.value=s.data,console.log(s.data);try{u.value=!1,setTimeout(()=>{A()},2e3)}catch(c){console.log(c)}}).catch(s=>{y("Collection not found!"),setTimeout(()=>{window.location.href="/"},3e3)}).finally(()=>u.value=!1)},N=()=>{const o=q();if(!o.checkBalance(h().value))return k("Insufficient balance!");const s={...n.value};s.price=h().value,s.supply=l.value,s.userId=o.data.value.id,m.value=!0;const c={url:`${r.BE_API}/nfts/buy`,method:"POST",data:s};f.request(c).then(v=>{console.log(v.data),o.loadUser(),$(`Congratulations! You now own ${s.name}.`)}).catch(v=>{k("Unable to acquire "+s.name)}).finally(()=>m.value=!1)};return U(()=>{E()}),(o,s)=>e(u)?w("",!0):(p(),_("div",F,[e(n).name?(p(),_("div",V,[t("div",j,[t("h1",D,[i(a(e(n).name)+" ",1),G,i(" "+a(e(b).name),1)]),t("div",H,[L,t("div",O,[t("img",{class:"w-100 imh-450px card-rounded-bottom",alt:"nft",src:e(n).nftImg},null,8,R)])])]),t("div",z,[t("div",Q,[t("h1",W,[i(a(e(n).name)+" ",1),Y,i(" "+a(e(b).name),1)]),t("div",J,[t("div",null,[t("button",K,[X,i(" "+a(e(n).supply)+" items ",1)])]),Z,tt,t("div",null,[t("button",st,[et,i(" "+a(e(n).category),1)])])])]),t("div",nt,[t("div",ot,[at,t("div",it,[t("div",null,[t("h1",ct,a(e(n).price)+" ETH",1),t("div",lt," Total: "+a(h())+" ETH ",1),dt]),t("div",null,[t("div",rt,[t("div",ut,[_t,t("span",pt,a(e(l)),1)]),mt])])]),t("div",bt,[t("button",{onClick:s[0]||(s[0]=c=>N()),class:"btn btn-primary w-100 w-lg-75"},[e(m)?(p(),_("span",ft,[i(" Processing "),vt])):(p(),_("span",ht,"Buy "+a(e(l))+" Now",1))])])])]),gt])])):w("",!0)]))}};export{It as default};