import{d as j,r as m,c as g,o as S,_ as k,a as n,b as l,w as I,v as b,e as s,F as _,f as p,t as y,g as E,S as C,p as w,h as x,i as L}from"./index-hkiIi-r-.js";const V=r=>(w("data-v-a46cbbed"),r=r(),x(),r),D={key:0},P=V(()=>s("label",{for:"emoji-search"},"Search",-1)),B={class:"emoji-body"},F=["onClick"],M=["src","onClick","alt"],v="https://fastly.jsdelivr.net/gh/limin04551/vue3-twemoji-picker/public/img/svg/",G=j({__name:"EmojiPicker",setup(r){const a=m(),c=m(""),d=t=>{C.loadFromString(t)},f=g(()=>{if(c.value){const t=[];for(const i of a.value){const e=[];for(const o of i.emojis)if(o.n.join("").includes(c.value.toLocaleLowerCase())){let u=o.u;e.push({...o,r:u})}e.length&&t.push({...i,emojis:e})}return t}else return a.value});return S(async()=>{const t=await k(()=>import("./emojis-BYzzbN0P.js"),[]);a.value=t.default}),(t,i)=>a.value&&a.value.length>0?(n(),l("div",D,[P,I(s("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>c.value=e),id:"emoji-search",type:"text"},null,512),[[b,c.value]]),s("div",null,[(n(!0),l(_,null,p(f.value,e=>(n(),l("div",null,[s("h3",null,y(e.title),1),s("div",B,[(n(!0),l(_,null,p(e.emojis,o=>{var u;return n(),l("div",{class:"emoji-image",onClick:h=>d(v+o.u.u+".svg")},[s("img",{src:v+o.u.u+".svg",onClick:h=>d(o),loading:"lazy",alt:(u=o.n)==null?void 0:u.join(", "),onerror:'this.style.display = "none"'},null,8,M)],8,F)}),256))])]))),256))])])):E("",!0)}}),O=L(G,[["__scopeId","data-v-a46cbbed"]]);export{O as default};