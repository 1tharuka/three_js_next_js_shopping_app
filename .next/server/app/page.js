(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},14855:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(56814),r(56172),r(35866);var s=r(23191),i=r(88716),a=r(37922),l=r.n(a),n=r(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,56814)),"C:\\Users\\Admin\\Desktop\\shoping_app\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,56172)),"C:\\Users\\Admin\\Desktop\\shoping_app\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Admin\\Desktop\\shoping_app\\src\\app\\page.js"],m="/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},25055:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,36179))},56814:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(19510),i=r(57371);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(72301).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var l=r(67938);r(76277);var n=r(47165);async function o(){return await n.L.fetch("*[_type == 'product'][0...10] | order(_createdAt desc) {price,product,'image':image.asset -> url,'categoryName': category -> name,\"slug\": slug.current}")}let c=async({name:e,link:t})=>{let r=await o();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[s.jsx("h3",{className:"text-black text-2xl",children:e}),s.jsx("h3",{children:(0,s.jsxs)(i.default,{href:t,className:"text-primary text-sm flex gap-1",children:["See All ",s.jsx(a,{})]})})]}),s.jsx("div",{className:"flex  gap-6  overflow-hidden overflow-x-scroll",id:"card",children:r.map((e,t)=>s.jsx("div",{children:s.jsx(l.Z,{price:e.price,name:e.product,image:(0,n.u)(e.image).url(),categoryName:e.categoryName,link:e.slug})},t))})]})};var d=r(17710);let m={src:"/_next/static/media/garle3.3b7b8643.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mOAgaVzJrm0VeZe6GkoeXTzzN7U////M8MlO2qLlq6a2/e/r7Hk//JZ3f8vHdrw//rx7Sf////PxRAeFKDmamP6Py0m6P/E1so/dUUZ/9YumPzn+M6V/8/t3+DFkBoVxG+ip5VjaWL4OjUq+P/Mnvo/fS3V/xfN6J1/fs9KUbg1NuamK5ysTP83V+T+r8pP+3J25zJusISDtSUbiDbQ0an0dbH7X5adBHRH7xmoPrBDmUCEn6fblqQw7/+TWyv+A+1/+f//J0G48cWl1XLpsWF/2iqz/s/prft96cjW/7+/vvRiYGBgAAAB6m+QvcyZTgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};var u=r(86174);let x=()=>(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between h-full mt-14",children:[s.jsx("div",{className:"flex-1",children:s.jsx(d.default,{src:m,alt:"ai",width:500,height:500})}),(0,s.jsxs)("div",{className:"flex-1",children:[s.jsx("h1",{className:"text-4xl md:text-5xl font-semibold tracking-wide mt-4 mb-4",children:"FashionAI: Redefining T-Shirt Design with Artificial Intelligence"}),s.jsx("p",{className:"text-sm  font-medium tracking-wide mt-4 mb-4 text-gray-500",children:"Welcome to SmartThreads, where cutting-edge technology meets fashion-forward design. Our innovative web app harnesses the power of artificial intelligence to revolutionize the way you shop for and interact with t-shirts."}),s.jsx(u.z,{children:(0,s.jsxs)(i.default,{href:"/ai",className:"flex gap-1",children:["Ai-powered ",s.jsx(a,{})]})})]})]});r(71159);let p=[{name:"Home",href:"/"},{name:"Men",href:"/Men"},{name:"Women",href:"/Woman"},{name:"Children",href:"/Children"},{name:"Ai-powered",href:"/ai"}];async function h(){return await n.L.fetch("*[_type == 'hero'][0]{title,subtitle,'image':image.asset -> url}")}let g=async()=>{let e=await h();return(0,s.jsxs)("div",{className:"flex flex-col md:flex-row mx-auto max-w-2xl md:max-w-7xl items-center justify-between h-full",children:[(0,s.jsxs)("div",{className:"flex flex-col items-start flex-1",children:[(0,s.jsxs)("h1",{className:"text-4xl md:text-6xl font-semibold tracking-wide mt-4 mb-4",children:[e.title," data"]}),s.jsx("h4",{className:"text-sm md:text-xl font-medium tracking-wide mt-4 mb-4 text-gray-500",children:e.subtitle}),s.jsx("div",{className:"flex gap-4 flex-wrap",children:p.map((e,t)=>s.jsx(u.z,{variant:"outline",className:"text-primary text-sm mt-2 mb-2",children:s.jsx(i.default,{href:e.href,children:e.name})},t))})]}),s.jsx("div",{className:"flex right-0 mt-5 ml-2",children:s.jsx(d.default,{src:(0,n.u)(e.image).url(),width:500,height:500,alt:"hero"})})]})};function f(){return(0,s.jsxs)("div",{className:"w-full h-full",children:[s.jsx(g,{}),s.jsx("div",{className:"mt-14 w-full",children:s.jsx(c,{name:"All Items",link:"/seall"})}),s.jsx("div",{className:"mt-14 w-full",children:s.jsx(x,{})})]})}},36179:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s={src:"/_next/static/media/garle3.3b7b8643.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mOAgaVzJrm0VeZe6GkoeXTzzN7U////M8MlO2qLlq6a2/e/r7Hk//JZ3f8vHdrw//rx7Sf////PxRAeFKDmamP6Py0m6P/E1so/dUUZ/9YumPzn+M6V/8/t3+DFkBoVxG+ip5VjaWL4OjUq+P/Mnvo/fS3V/xfN6J1/fs9KUbg1NuamK5ysTP83V+T+r8pP+3J25zJusISDtSUbiDbQ0an0dbH7X5adBHRH7xmoPrBDmUCEn6fblqQw7/+TWyv+A+1/+f//J0G48cWl1XLpsWF/2iqz/s/prft96cjW/7+/vvRiYGBgAAAB6m+QvcyZTgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,299,621,481,852,419],()=>r(14855));module.exports=s})();