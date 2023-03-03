"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{8402:function(r,e,t){t.d(e,{Z:function(){return z}});var a=t(1527),n=t(959),o=t(4761),i=t(1135),l=t(4778),s=t(5924),u=t(7141),c=t(5601),d=t(7965),f=t(3438),b=t(781),m=t(8960),p=t(846),h=t(4019),v=t(712),g=t(4163);function Z(r){return(0,g.Z)("MuiLinearProgress",r)}(0,v.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);let y=["className","color","value","valueBuffer","variant"],k=r=>r,x,C,w,P,$,j,B=(0,c.F4)(x||(x=k`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=(0,c.F4)(C||(C=k`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),I=(0,c.F4)(w||(w=k`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),M=r=>{let{classes:e,variant:t,color:a}=r,n={root:["root",`color${(0,f.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,f.Z)(a)}`],bar1:["bar",`barColor${(0,f.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,f.Z)(a)}`,"buffer"===t&&`color${(0,f.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,u.Z)(n,Z,e)},R=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,d.$n)(r.palette[e].main,.62):(0,d._j)(r.palette[e].main,.5),L=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.root,e[`color${(0,f.Z)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,l.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:R(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),q=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,f.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>{let t=R(e,r.color);return(0,l.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,c.iv)(P||(P=k`
    animation: ${0} 3s infinite linear;
  `),I)),N=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.bar,e[`barColor${(0,f.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,l.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,c.iv)($||($=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),B)),E=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.bar,e[`barColor${(0,f.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,l.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:R(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,c.iv)(j||(j=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S)),D=n.forwardRef(function(r,e){let t=(0,h.Z)({props:r,name:"MuiLinearProgress"}),{className:n,color:o="primary",value:u,valueBuffer:c,variant:d="indeterminate"}=t,f=(0,i.Z)(t,y),p=(0,l.Z)({},t,{color:o,variant:d}),v=M(p),g=function(){let r=(0,b.Z)(m.Z);return r}(),Z={},k={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==u){Z["aria-valuenow"]=Math.round(u),Z["aria-valuemin"]=0,Z["aria-valuemax"]=100;let r=u-100;"rtl"===g.direction&&(r=-r),k.bar1.transform=`translateX(${r}%)`}if("buffer"===d&&void 0!==c){let r=(c||0)-100;"rtl"===g.direction&&(r=-r),k.bar2.transform=`translateX(${r}%)`}return(0,a.jsxs)(L,(0,l.Z)({className:(0,s.Z)(v.root,n),ownerState:p,role:"progressbar"},Z,{ref:e},f,{children:["buffer"===d?(0,a.jsx)(q,{className:v.dashed,ownerState:p}):null,(0,a.jsx)(N,{className:v.bar1,ownerState:p,style:k.bar1}),"determinate"===d?null:(0,a.jsx)(E,{className:v.bar2,ownerState:p,style:k.bar2})]}))});function z(){let[r,e]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let r=setInterval(()=>{e(r=>{if(100===r)return 0;for(let r=0;r<5;r++);return Math.min(r+5,100)})},100);return()=>{clearInterval(r)}},[]),(0,a.jsx)(o.Z,{sx:{width:"50%"},children:(0,a.jsx)(D,{variant:"determinate",value:r})})}},3054:function(r,e,t){t.d(e,{Z:function(){return y}});var a=t(1527),n=t(959),o=t(1135),i=t(4778),l=t(3348),s=t(9250),u=t(3682),c=t(3097),d=t(846),f=t(4019);let b=["component","direction","spacing","divider","children"],m=r=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[r],p=({ownerState:r,theme:e})=>{let t=(0,i.Z)({display:"flex",flexDirection:"column"},(0,l.k9)({theme:e},(0,l.P$)({values:r.direction,breakpoints:e.breakpoints.values}),r=>({flexDirection:r})));if(r.spacing){let a=(0,s.hB)(e),n=Object.keys(e.breakpoints.values).reduce((e,t)=>(("object"==typeof r.spacing&&null!=r.spacing[t]||"object"==typeof r.direction&&null!=r.direction[t])&&(e[t]=!0),e),{}),o=(0,l.P$)({values:r.direction,base:n}),i=(0,l.P$)({values:r.spacing,base:n});"object"==typeof o&&Object.keys(o).forEach((r,e,t)=>{let a=o[r];if(!a){let a=e>0?o[t[e-1]]:"column";o[r]=a}});let u=(e,t)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${m(t?o[t]:r.direction)}`]:(0,s.NA)(a,e)}});t=(0,c.Z)(t,(0,l.k9)({theme:e},i,u))}return(0,l.dt)(e.breakpoints,t)},h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(r,e)=>[e.root]})(p),v=n.forwardRef(function(r,e){let t=(0,f.Z)({props:r,name:"MuiStack"}),l=(0,u.Z)(t),{component:s="div",direction:c="column",spacing:d=0,divider:m,children:p}=l,v=(0,o.Z)(l,b);return(0,a.jsx)(h,(0,i.Z)({as:s,ownerState:{direction:c,spacing:d},ref:e},v,{children:m?function(r,e){let t=n.Children.toArray(r).filter(Boolean);return t.reduce((r,a,o)=>(r.push(a),o<t.length-1&&r.push(n.cloneElement(e,{key:`separator-${o}`})),r),[])}(p,m):p}))});var g=t(3963),Z=t(8900);function y(){let[r,e]=n.useState("web"),t=(0,g.useRouter)();return(0,a.jsxs)(v,{spacing:2,direction:"row",children:[(0,a.jsx)(Z.Z,{variant:"/"==t.pathname?"outlined":"contained",onClick:()=>t.push("/"),children:"Page 1"}),(0,a.jsx)(Z.Z,{variant:"/page2"==t.pathname?"outlined":"contained",onClick:()=>t.push("/page2"),children:"Page 2"}),(0,a.jsx)(Z.Z,{variant:"/page3"==t.pathname?"outlined":"contained",onClick:()=>t.push("/page3"),children:"Page 3"})]})}},4011:function(r,e,t){t.d(e,{K:function(){return n}});let a={method:"GET",headers:{Accept:"application/json"}},n=async r=>{try{let e=await fetch(r,a),t=await e.json();if(!e.ok){let r=await e.text();throw Error("HTTP error!: ".concat(e.status," ").concat(r))}return t}catch(r){console.log(r.message)}}}}]);