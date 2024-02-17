import{_ as v}from"./nuxt-link.729bxFks.js";import{u}from"./entry.HhESNUrk.js";import{u as b}from"./index.V1aEXA0O.js";import"./sweetalert2.all.cno0K6ji.js";import{a as n,k as r,x as s,l as _,q as x,u as i,J as h,P as o,o as m}from"./swiper-vue.8CwPRiLZ.js";const g={class:"mb-7 d-flex align-items-center"},y=s("i",{class:"ki-solid ki-left fs-1"},null,-1),w=s("div",{class:"mx-md-auto ms-5 fs-1 fw-bold"},"Create Collection",-1),k={class:"d-flex flex-column flex-md-row justify-content-center"},C={class:"cardi card-stretch me-md-8 mb-8"},N={class:"card-body"},A={class:"form",action:"#",method:"post"},F={class:"row g-5"},S={class:"fv-row col-12 col-lg-8"},M=["src"],V=o('<div class="dz-message needsclick position-absolute"><i class="ki-duotone ki-file-up fs-3x text-primary"><span class="path1"></span><span class="path2"></span></i><div class="ms-4"><h3 class="fs-5 fw-bold text-gray-900 mb-1"> Click to upload. </h3><span class="fs-7 fw-semibold text-gray-500">Max size: 5mb</span></div></div>',1),j=o('<div class="col d-flex flex-column"><div class="mb-5 order-lg-1 order-2"><label for="" class="form-label">Category</label><select class="form-control" name="" id=""><option value="">Art</option><option value="">Music</option><option value="">Photography</option><option value="">Gaming</option></select></div><div class="border-dashed oder-lg-2 order-1 w-100 p-5 rounded border-primary mb-5 d-flex flex-row justify-content-between align-items-center"><div><div class="d-flex flex-column mb-4"><span class="fw-bold"> Fee </span><div class="fs-2 fw-bold">100</div></div></div><i class="fa-brands fa-ethereum fs-5x text-warning me-4"></i></div></div>',1),z=o('<div class="row my-8"><div class="col-12 col-md-8"><label for="" class="form-label">Collection name</label><input placeholder="Avengers" type="text" class="form-control form-control-solid"></div><div class="col-12 col-md-4"><label for="" class="form-label">Symbol</label><input placeholder="AVS" type="text" class="form-control form-control-solid"></div></div><div><button class="btn btn-primary w-100"> Deploy collection </button></div>',2),P=o('<div class="card card-stretch border-0 card-flush bg-body mw-md-275px"><div class="card-body"><div class="mb-0"><div class="mb-8"><h4 class="text-gray-700 w-bolder mb-8"> After you deploy your contract you’ll be able to </h4><div class="my-2"><div class="d-flex align-items-start mb-3"><span class="ki-solid ki-element-7 fs-2 me-3"></span><div class="text-gray-600 fw-semibold fs-6"><h6>Manage collection</h6><span class="text-muted"> Edit collection details, earnings, and links. </span></div></div><div class="d-flex align-items-start mb-3"><span class="ki-solid ki-element-plus fs-2 me-3"></span><div class="text-gray-600 fw-semibold fs-6"><h6>Add NFTs</h6><span class="text-muted"> Mint NFT, set price, make gains </span></div></div><div class="d-flex align-items-start mb-3"><span class="ki-solid ki-share fs-2 me-3"></span><div class="text-gray-600 fw-semibold fs-6"><h6 class="">Sell NFTs</h6><span class="text-muted"> Allow others to buy your NFTs </span></div></div></div></div></div></div></div>',1),I={__name:"create-collection",setup(T){const p=u().public;b({title:`${p.APP} - Deploy Collection`});const d=n(),a=n(),f=c=>{const e=c.target.files[0];if(!e)return;const t=new FileReader;t.onload=l=>{a.value=l.target.result},t.readAsDataURL(e)};return(c,e)=>{const t=v;return m(),r("div",null,[s("div",g,[_(t,{to:"/studio/create",class:"btn btn-light btn-icon rounded-circle"},{default:x(()=>[y]),_:1}),w]),s("div",k,[s("div",C,[s("div",N,[s("form",A,[s("div",F,[s("div",S,[s("div",{onClick:e[1]||(e[1]=l=>i(d).click()),class:"dropzone w-100 min-h-200px d-flex align-items-center justify-content-center",id:"kt_dropzonejs_nft_collection_studio"},[s("input",{ref_key:"inputSelect",ref:d,type:"file",class:"d-none",onChange:e[0]||(e[0]=l=>f(l))},null,544),i(a)?(m(),r("img",{key:0,class:"mh-250px mh-lg-300px mw-300px mw-lg-500px",src:i(a),alt:"",srcset:""},null,8,M)):h("",!0),V])]),j]),z])])]),P])])}}};export{I as default};
