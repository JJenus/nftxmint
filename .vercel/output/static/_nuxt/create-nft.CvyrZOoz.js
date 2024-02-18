import{_ as I}from"./nuxt-link.CABO5njq.js";import{u as x}from"./entry.ZTtEzJTa.js";import{c as i,b as y,a as N}from"./authStates.DgrL-N5C.js";import{u as D}from"./index.7JPeSv1M.js";import{a as h,D as F,k as d,x as s,l as k,q as C,u as r,J as S,N as $,Z as P,G as M,H as A,P as w,o as u,F as U,L as V}from"./swiper-vue.D71CgVZz.js";import{e as q}from"./showAlert.o-xGKRew.js";import"./cookie.HXZoi7Bq.js";const B=()=>{const b=i("all-transactions",()=>[]),m=i("art-transactions",()=>[]),c=i("music-transactions",()=>[]),f=i("pic-transactions",()=>[]),l=i("gaming-transactions",()=>[]),p=i("user-collections",()=>[]),g=i("user-nfts",()=>[]),n=(e,o)=>{const t={method:"get",url:`${x().public.BE_API}/collections${o}`,timeout:2e4};y.request(t).then(_=>{e.value=_.data}).catch(_=>{console.log(_)})},a=(e,o)=>{const t=N().data.value.id,_={method:"get",url:`${x().public.BE_API}/users/${t}${o}`,timeout:2e4};y.request(_).then(v=>{e.value=v.data}).catch(v=>{console.log(v)})};return a(p,"/collections"),a(g,"/nfts"),n(b,""),n(m,"/category/art"),n(c,"/category/music"),n(f,"/category/photography"),n(l,"/category/gaming"),{all:b,art:m,music:c,photography:f,gaming:l,userCollections:p,userNFts:g}},E={class:"mb-7 d-flex align-items-center"},L=s("i",{class:"ki-solid ki-left fs-1"},null,-1),T=s("div",{class:"mx-md-auto ms-5 fs-1 fw-bold"},"Create an NFT",-1),j={class:"row g-8 justify-content-center"},z={class:"col-12 col-lg-6"},O=w('<div class="fs-3 fw-semibold mb-5"> Once your item is minted you will not be able to change any of its information. </div><div class="border-dashed py-2 oder-lg-2 order-1 w-100 p-5 rounded border-primary mb-5 d-flex flex-row justify-content-between align-items-center"><div><div class="d-flex flex-column mb-4"><span class="fw-bold">Minting fee </span><div class="fs-2 fw-bold">100</div></div></div><i class="fa-brands fa-ethereum fs-3x text-warning me-4"></i></div>',2),R={class:"form",action:"#",method:"post"},G={class:"fv-row"},H=["src"],J=w('<div class="dz-message needsclick position-absolute"><i class="ki-duotone ki-file-up fs-3x text-primary"><span class="path1"></span><span class="path2"></span></i><div class="ms-4"><h3 class="fs-5 fw-bold text-gray-900 mb-1"> click to upload. </h3><span class="fs-7 fw-semibold text-gray-500">Max size: 5mb</span></div></div>',1),Z={class:"col-12 col-lg-6"},K={class:"card card-stretch border-0 card-flush bg-transparent"},Q={class:"card-body"},W={key:0,class:"mb-5 order-lg-1 order-2"},X=s("label",{for:"",class:"form-label"},"Pick Collection",-1),Y=["value"],ee={key:1,class:"mb-5"},te=s("div",{class:"text-info text-sm fw-semibold"}," Don't own a collection? ",-1),se=s("i",{class:"ki-solid ki-plus-square fs-2 me-2"},null,-1),oe=w('<div class="mb-5"><label for="" class="form-label">Name</label><input placeholder="Preferred nft name" type="text" class="form-control form-control-solid"></div><div class="mb-5"><label for="" class="form-label">Items available</label><input placeholder="Supply" type="text" class="form-control form-control-solid"></div><div class="mb-5"><label for="" class="form-label">Description</label><textarea class="form-control"></textarea></div>',3),ae="Mint NFT",me={__name:"create-nft",setup(b){const m=x().public,c=B().userCollections;D({title:`${m.APP} - ${ae}`});const f=h(),l=h(),p=h({name:"",category:"",supply:1,nftImg:"",collectionId:"",price:"",userId:N().data.value.id}),g=()=>{const a=l.value;if(!a)return q("Select an image");const e=new FormData;e.append("file",a),e.append("upload_preset","ml_default"),y.request({method:"post",url:"https://api.cloudinary.com/v1_1/"+m.CLOUD_NAME+"/image/upload",data:e,headers:{"Content-Type":"multipart/form-data"}}).then(o=>{if(o.data&&o.data.secure_url){const t=o.data.secure_url;return console.log("Image uploaded successfully:",t),t}else return console.error("Failed to upload image:",o.data),null}).catch(o=>(console.error("Error uploading image:",o),null))},n=a=>{const e=a.target.files[0];if(!e)return;const o=new FileReader;o.onload=t=>{l.value=t.target.result},o.readAsDataURL(e)};return F(()=>{console.log(c.value)}),(a,e)=>{const o=I;return u(),d("div",null,[s("div",E,[k(o,{to:"/studio/create",class:"btn btn-light btn-icon rounded-circle"},{default:C(()=>[L]),_:1}),T]),s("div",j,[s("div",z,[O,s("form",R,[s("div",G,[s("div",{onClick:e[1]||(e[1]=t=>r(f).click()),class:"dropzone position-relative w-100 min-h-300px d-flex align-items-center justify-content-center",id:"kt_dropzonejs_nft_single_studio"},[s("input",{ref_key:"inputSelect",ref:f,type:"file",class:"d-none",onChange:e[0]||(e[0]=t=>n(t))},null,544),r(l)?(u(),d("img",{key:0,class:"mh-250px mh-lg-300px mw-300px mw-lg-500px",src:r(l),alt:"",srcset:""},null,8,H)):S("",!0),J])])])]),s("div",Z,[s("div",K,[s("div",Q,[r(c).length>0?(u(),d("div",W,[X,$(s("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r(p).collectionId=t),class:"form-control",name:"",id:""},[(u(!0),d(M,null,A(r(c),t=>(u(),d("option",{value:t.id,key:t.id},U(t.name),9,Y))),128))],512),[[P,r(p).collectionId]])])):(u(),d("div",ee,[te,k(o,{to:"/studio/create-collection",class:"border border-2 rounded mt-3 d-flex align-items-center p-3 fw-bold fs-6"},{default:C(()=>[se,V(" Create collection ")]),_:1})])),oe,s("div",null,[s("button",{onClick:e[3]||(e[3]=t=>g()),class:"btn btn-primary w-100"}," Create NFT ")])])])])])])}}};export{me as default};
