import{u as g}from"./appSettings.n2CBBHoi.js";import{d as v,a as u,k as l,l as i,z as e,M as r,N as d,u as o,O as b}from"./swiper-vue.YPEZXV01.js";import{e as h,s as x}from"./showAlert.o-xGKRew.js";import{u as A}from"./entry.24sVpUhz.js";import{a as y}from"./axios.jBgBFr4V.js";const S={class:"d-flex align-items-center justify-content-center flex-column"},w=e("h1",{class:"fs-2x fw-bold mb-8"},"Admin App Settings",-1),F={class:"mb-5"},k=e("label",{for:"",class:"form-label"},"Eth Address",-1),B={class:"row g-5 row-cols-2 mb-5"},C={class:"col"},M=e("label",{for:"",class:"form-label"},"Minting fee",-1),V={class:"col"},E=e("label",{for:"",class:"form-label"},"Gas fee",-1),U={class:"mb-3"},q=["disabled"],N={key:0},O={key:1,class:"spinner-border spinner-border-sm"},G=v({__name:"app-setting",setup(P){const c=g(),f=c.settings,s=u({...f.value}),a=u(!1),p=()=>s.value.ethAddress&&s.value.mintingFee&&s.value.gasFee,_=()=>{if(s.value.defaultLanguage="en",!p())return h("all fields are required");a.value=!0;const m={method:"POST",url:`${A().public.BE_API}/settings`,timeout:2e4,data:s.value};y.request(m).then(t=>{x("Saved"),c.load()}).catch(t=>{console.log(t)}).finally(()=>a.value=!1)};return(m,t)=>(l(),i("div",S,[w,e("form",{onSubmit:t[3]||(t[3]=b(n=>_(),["prevent"])),class:"needs-validation"},[e("div",F,[k,r(e("input",{type:"text",name:"crypto",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=n=>o(s).ethAddress=n)},null,512),[[d,o(s).ethAddress]])]),e("div",B,[e("div",C,[M,r(e("input",{type:"text",name:"",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=n=>o(s).mintingFee=n)},null,512),[[d,o(s).mintingFee]])]),e("div",V,[E,r(e("input",{type:"text",name:"",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=n=>o(s).gasFee=n)},null,512),[[d,o(s).gasFee]])])]),e("div",U,[e("button",{disabled:o(a),class:"btn btn-primary w-100"},[o(a)?(l(),i("span",O)):(l(),i("span",N,"Save Settings"))],8,q)])],32)]))}});export{G as default};
