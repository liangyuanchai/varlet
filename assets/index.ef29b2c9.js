import{_ as y}from"./elevation.8f12812c.js";import{q as z,o as r,c as d,a as k,B as p,n as g,f as b,m as E,l,t as n,r as C,d as u,e as R,h as o,i as a,F as D,V as w,W as N,j as I,w as P,k as U}from"./vendor.8a125dba.js";import{I as M}from"./index.bf70d0d0.js";import{A as Y}from"./AppType.7d5457e5.js";import{R as O}from"./index.23ced9c1.js";import{S as F}from"./index.b19cdc8b.js";import{M as q}from"./index.b83f6d0f.js";import{B as G}from"./index.e53c4209.js";import{C as W}from"./index.3a539e19.js";import{d as H}from"./index.77fe3760.js";import{u as J,a as T,_ as K,b as Q,c as X}from"./en-US.51e06fb5.js";import{w as Z,a as $}from"./utils.efdc8a96.js";import"./shared.61f3a471.js";import"./elements.6bb3d81f.js";import"./index.789f7251.js";import"./index.e6a6c965.js";import"./zIndex.2c847fc6.js";import"./components.33246c91.js";import"./lock.2797eacf.js";function tt(t){return["left","center","right"].includes(t)}const et={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:tt},elevation:{type:Boolean,default:!0}};const ot=z({name:"VarAppBar",props:et}),at={class:"var-app-bar__left"},lt={key:0,class:"var-app-bar__title"},nt={class:"var-app-bar__right"};function st(t,i,m,e,A,B){return r(),d("div",{class:E(["var-app-bar",{"var-elevation--3":t.elevation}]),style:g({background:t.color,color:t.textColor})},[k("div",at,[p(t.$slots,"left"),t.titlePosition==="left"?(r(),d("div",{key:0,class:"var-app-bar__title",style:g({paddingLeft:t.$slots.left?0:void 0})},[p(t.$slots,"default",{},()=>[l(n(t.title),1)])],4)):b("v-if",!0)]),t.titlePosition==="center"?(r(),d("div",lt,[p(t.$slots,"default",{},()=>[l(n(t.title),1)])])):b("v-if",!0),k("div",nt,[t.titlePosition==="right"?(r(),d("div",{key:0,class:"var-app-bar__title",style:g({paddingRight:t.$slots.right?0:void 0})},[p(t.$slots,"default",{},()=>[l(n(t.title),1)])],4)):b("v-if",!0),p(t.$slots,"right")])],6)}var S=y(ot,[["render",st]]);S.install=function(t){t.component(S.name,S)};var it={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},rt={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:j,use:ct,pack:f,packs:Et,merge:Rt}=J(),dt=t=>{X(t),ct(t)};T("zh-CN",K);T("en-US",Q);j("zh-CN",it);j("en-US",rt);const ut={name:"AppBarExample",directives:{Ripple:O},components:{VarAppBar:S,VarIcon:M,VarMenu:q,VarButton:G,VarCell:W,AppType:Y},setup(){const t=C(!1),i=C([]),m=C("#fff"),e=()=>{F({content:f.value.search,position:"top"})},A=()=>{F({content:f.value.goBack,position:"top"})},B=()=>{i.value=[{label:f.value.options1,value:"menu1"},{label:f.value.options2,value:"menu2"}],t.value=!0};return Z(s=>{dt(s),t.value=!1}),$(H,s=>{m.value=s==="darkThemes"?"#272727":"#fff"}),{offsetY:t,bgColor:m,menuList:i,pack:f,searchData:e,goBack:A,changeOffset:B}}},pt=t=>(w("data-v-5707b37e"),t=t(),N(),t),ft=pt(()=>k("div",{class:"space"},null,-1));function mt(t,i,m,e,A,B){const s=u("app-type"),c=u("var-app-bar"),_=u("var-icon"),v=u("var-button"),x=u("var-cell"),L=u("var-menu"),V=R("ripple");return r(),d(D,null,[o(s,null,{default:a(()=>[l(n(e.pack.basicAppBar),1)]),_:1}),o(c,{title:e.pack.title},null,8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.customStyle),1)]),_:1}),o(c,{title:e.pack.title,"title-position":"center",color:"#ff9f00"},null,8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.addSlotsAtTitle),1)]),_:1}),o(c,null,{default:a(()=>[l(n(e.pack.addTheTitleFromTheSlot),1)]),_:1}),o(s,null,{default:a(()=>[l(n(e.pack.addLeftSlot),1)]),_:1}),o(c,{title:e.pack.title,"title-position":"center"},{left:a(()=>[o(v,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:a(()=>[o(_,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.addRightSlot),1)]),_:1}),o(c,{title:e.pack.title},{right:a(()=>[o(v,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.searchData},{default:a(()=>[o(_,{name:"magnify",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.addLeftAndRightSlot),1)]),_:1}),o(c,{title:e.pack.title},{left:a(()=>[o(v,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:a(()=>[o(_,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),right:a(()=>[o(L,{"offset-y":42,"offset-x":-20,show:e.offsetY,"onUpdate:show":i[0]||(i[0]=h=>e.offsetY=h)},{menu:a(()=>[k("div",{class:"menu-list",style:g({background:e.bgColor})},[(r(!0),d(D,null,I(e.menuList,h=>P((r(),U(x,{class:"menu-cell",key:h.value},{default:a(()=>[l(n(h.label),1)]),_:2},1536)),[[V]])),128))],4)]),default:a(()=>[o(v,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.changeOffset},{default:a(()=>[o(_,{name:"menu",size:24})]),_:1},8,["onClick"])]),_:1},8,["show"])]),_:1},8,["title"]),ft],64)}var wt=y(ut,[["render",mt],["__scopeId","data-v-5707b37e"]]);export{wt as default};
