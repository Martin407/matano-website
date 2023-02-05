"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[5984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=f(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2,title:"Matano configuration file reference"},i=void 0,c={unversionedId:"reference/matano-configuration-file",id:"reference/matano-configuration-file",title:"Matano configuration file reference",description:"The Matano configuration file stores configuration around your matano deployment. The file is named matano.config.yml and lives at the root of your Matano directory.",source:"@site/docs/reference/matano-configuration-file.md",sourceDirName:"reference",slug:"/reference/matano-configuration-file",permalink:"/docs/reference/matano-configuration-file",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/reference/matano-configuration-file.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Matano configuration file reference"},sidebar:"tutorialSidebar",previous:{title:"Metadata reporting",permalink:"/docs/reference/metadata-reporting"},next:{title:"Matano CLI reference",permalink:"/docs/reference/cli-reference"}},l={},f=[],u={toc:f};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Matano configuration file stores configuration around your matano deployment. The file is named ",(0,o.kt)("inlineCode",{parentName:"p"},"matano.config.yml")," and lives at the root of your Matano directory."),(0,o.kt)("p",null,"The structure of the configuration is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# matano.config.yml\n\n# Mandatory. AWS Account and region to deploy to.\naws_account: 123456789012\naws_region: us-east-1\n\n# (optional) Custom AWS tags to add to all Matano resources\naws_tags:\n  key: value\n  dept: "123"\n')))}s.isMDXComponent=!0}}]);