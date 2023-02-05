"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[2325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"Detections"},i=void 0,c={unversionedId:"detections/index",id:"detections/index",title:"Detections",description:"To react to your security data in realtime in Matano, you work with detections. Matano lets you define detections as code (DaaC). A detection is a Python program that is invoked with data from a log source in realtime and can create an alert.",source:"@site/docs/detections/index.md",sourceDirName:"detections",slug:"/detections/",permalink:"/docs/detections/",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/detections/index.md",tags:[],version:"current",frontMatter:{title:"Detections"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/tables/overview"},next:{title:"Writing detections",permalink:"/docs/detections/writing"}},s={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To react to your security data in realtime in Matano, you work with detections. Matano lets you define ",(0,o.kt)("em",{parentName:"p"},"detections as code")," (DaaC). A ",(0,o.kt)("em",{parentName:"p"},"detection")," is a Python program that is invoked with data from a ",(0,o.kt)("a",{parentName:"p",href:"/docs/log-sources/"},"log source")," in realtime and can create an ",(0,o.kt)("em",{parentName:"p"},"alert"),"."),(0,o.kt)("p",null,"To create a detection, you configure the Matano table(s) that you want the detection to respond to and author Python code that processes records from the log source and, if the data matches whatever condition you express in your Python code, an alert is created in realtime."),(0,o.kt)("p",null,"The topics in this section provide an overview of working with detections and alerts in Matano. They include information about creating, defining, and authoring detections and creating, configuring, and responding to alerts."))}u.isMDXComponent=!0}}]);