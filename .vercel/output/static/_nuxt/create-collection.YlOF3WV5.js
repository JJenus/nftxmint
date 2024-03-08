import{_ as C}from"./nuxt-link.ucpENo2h.js";import{a as c,q as m,A as e,x as F,y as N,P as S,u as l,L as I,N as v,Z as M,H as D,O as h,M as U,Q as x,l as u}from"./swiper-vue.5_csNmSw.js";import{b as V,u as T,c as y}from"./entry.RpivB97r.js";import{u as E}from"./index.YfxZm1KT.js";import{a as p}from"./authStates.3EwJlzAx.js";import{e as d,s as P}from"./showAlert.gTKGgNLp.js";import"./vue.f36acd1f.3nyhIRPG.js";import"./cookie.mKsuEFFw.js";const B={class:"mb-7 d-flex align-items-center"},j=e("i",{class:"ki-solid ki-left fs-1"},null,-1),q=e("div",{class:"mx-md-auto ms-5 fs-1 fw-bold"},"Create Collection",-1),z={class:"d-flex flex-column flex-md-row justify-content-center"},L={class:"cardi card-stretch me-md-8 mb-8"},$={class:"card-body"},G={class:"row g-5"},O={class:"fv-row col-12 col-lg-8"},R=["src"],H=x('<div class="dz-message needsclick position-absolute"><i class="ki-duotone ki-file-up fs-3x text-primary"><span class="path1"></span><span class="path2"></span></i><div class="ms-4"><h3 class="fs-5 fw-bold text-gray-900 mb-1"> Click to upload. </h3><span class="fs-7 fw-semibold text-gray-500">Max size: 5mb</span></div></div>',1),Q={class:"col d-flex flex-column"},Y={class:"mb-5 order-lg-1 order-2"},Z=e("label",{for:"",class:"form-label"},"Category",-1),J=e("option",{value:"art"},"Art",-1),K=e("option",{value:"music"},"Music",-1),W=e("option",{value:"photography"}," Photography ",-1),X=e("option",{value:"gaming"},"Gaming",-1),ee=[J,K,W,X],se={class:"border-dashed oder-lg-2 order-1 w-100 p-5 rounded border-primary mb-5 d-flex flex-row justify-content-between align-items-center"},te=e("i",{class:"fa-solid fa-gas-pump fs-4x text-warning me-4"},null,-1),oe={class:"d-flex flex-column mb-4"},le=e("span",{class:"fw-bold fs-5 text-muted mb-3"},"Gas fee ",-1),ae={class:"fs-2 fw-bold text-end"},ne={class:"row my-8"},ie={class:"col-12 col-md-8"},de=e("label",{for:"",class:"form-label"},"Collection name",-1),re={class:"col-12 col-md-4"},ce=e("label",{for:"",class:"form-label"},"Symbol",-1),me=["disabled"],ue={key:0},pe={key:1,class:""},fe=e("span",{class:"spinner-border spinner-border-sm ms-2"},null,-1),_e=x('<div class="card card-stretch border-0 card-flush bg-body mw-md-275px"><div class="card-body"><div class="mb-0"><div class="mb-8"><h4 class="text-gray-700 w-bolder mb-8"> After you deploy your contract you’ll be able to </h4><div class="my-2"><div class="d-flex align-items-start mb-3"><span class="ki-solid ki-element-7 fs-2 me-3"></span><div class="text-gray-600 fw-semibold fs-6"><h6>Manage collection</h6><span class="text-muted"> Edit collection details, earnings, and links. </span></div></div><div class="d-flex align-items-start mb-3"><span class="ki-solid ki-element-plus fs-2 me-3"></span><div class="text-gray-600 fw-semibold fs-6"><h6>Add NFTs</h6><span class="text-muted"> Mint NFT, set price, make gains </span></div></div><div class="d-flex align-items-start mb-3"><span class="ki-solid ki-share fs-2 me-3"></span><div class="text-gray-600 fw-semibold fs-6"><h6 class="">Sell NFTs</h6><span class="text-muted"> Allow others to buy your NFTs </span></div></div></div></div></div></div></div>',1),Ce={__name:"create-collection",setup(ve){const g=V().settings,f=T().public;E({title:`${f.APP} - Deploy Collection`});const n=c(!1),b=c(),r=c(),o=c({name:"",symbol:"",category:"",userId:p().data.value.id,bannerImg:"",contractAddress:p().data.value.ethAddress}),w=()=>{if(!o.value.bannerImg)return d("Image upload error");y.request({method:"post",url:`${f.BE_API}/collections`,data:o.value}).then(i=>{console.log(i.data),p().loadUser(),P("Congratulations! Your collection is deployed.")}).catch(i=>(console.error("Error uploading image:",i),n.value=!1,d("Failed t create collection"),null)).finally(()=>{n.value=!1})},k=i=>{const s=r.value;if(!s)return d("Select an image");if(!o.value.category||!o.value.name||!o.value.symbol)return d("All fields are required");if(!p().checkBalance(g.value.gasFee))return d("Insufficient balance! Fund your wallet.");const a=new FormData;a.append("file",s),a.append("upload_preset","ml_default"),n.value=!0,y.request({method:"post",url:"https://api.cloudinary.com/v1_1/"+f.CLOUD_NAME+"/image/upload",data:a,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{if(t.data&&t.data.secure_url){const _=t.data.secure_url;return console.log("Image uploaded successfully:",_),o.value.bannerImg=_,w(),_}else return n.value=!1,d("Unable to create collection"),console.error("Failed to upload image:",t.data),null}).catch(t=>(console.error("Error uploading image:",t),n.value=!1,d("Failed to create collection"),null))},A=i=>{const s=i.target.files[0];if(!s)return;const a=new FileReader;a.onload=t=>{r.value=t.target.result},a.readAsDataURL(s)};return(i,s)=>{const a=C;return u(),m("div",null,[e("div",B,[F(a,{to:"/studio/create",class:"btn btn-light btn-icon rounded-circle"},{default:N(()=>[j]),_:1}),q]),e("div",z,[e("div",L,[e("div",$,[e("form",{class:"form",onSubmit:s[5]||(s[5]=S(t=>k(),["prevent"]))},[e("div",G,[e("div",O,[e("div",{onClick:s[1]||(s[1]=t=>l(b).click()),class:"dropzone overflow-hidden w-100 min-h-200px d-flex align-items-center justify-content-center",id:"kt_dropzonejs_nft_collection_studio"},[e("input",{ref_key:"inputSelect",ref:b,type:"file",class:"d-none",onChange:s[0]||(s[0]=t=>A(t))},null,544),l(r)?(u(),m("img",{key:0,class:"mh-250px mh-lg-300px mw-300px mw-lg-350px",src:l(r),alt:"",srcset:""},null,8,R)):I("",!0),H])]),e("div",Q,[e("div",Y,[Z,v(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>l(o).category=t),class:"form-control",name:"",id:""},ee,512),[[M,l(o).category]])]),e("div",se,[te,e("div",oe,[le,e("div",ae,D(l(g).gasFee),1)])])])]),e("div",ne,[e("div",ie,[de,v(e("input",{placeholder:"Avengers",type:"text",class:"form-control form-control-solid","onUpdate:modelValue":s[3]||(s[3]=t=>l(o).name=t)},null,512),[[h,l(o).name]])]),e("div",re,[ce,v(e("input",{placeholder:"AVS",type:"text",class:"form-control form-control-solid","onUpdate:modelValue":s[4]||(s[4]=t=>l(o).symbol=t)},null,512),[[h,l(o).symbol]])])]),e("div",null,[e("button",{disabled:l(n),type:"submit",class:"btn btn-primary w-100"},[l(n)?(u(),m("span",pe,[U(" Processing... "),fe])):(u(),m("span",ue,"Deploy collection"))],8,me)])],32)])]),_e])])}}};export{Ce as default};
