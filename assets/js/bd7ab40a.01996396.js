"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[8366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),i=n(86010),a=n(53438),o=n(39960),l=n(13919),c=n(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t;let{item:n}=e;const i=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},87721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));n(52991);const a={title:"Delivering alerts to external systems"},o=void 0,l={unversionedId:"detections/alerting/delivering-alerts",id:"detections/alerting/delivering-alerts",title:"Delivering alerts to external systems",description:"Matano integrates with external systems to deliver alerts. A detection can be configured to route alerts to one or multiple destinations based on a static configuration or dynamically based on the content of the triggering event.",source:"@site/docs/detections/alerting/delivering-alerts.md",sourceDirName:"detections/alerting",slug:"/detections/alerting/delivering-alerts",permalink:"/docs/detections/alerting/delivering-alerts",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/detections/alerting/delivering-alerts.md",tags:[],version:"current",frontMatter:{title:"Delivering alerts to external systems"},sidebar:"tutorialSidebar",previous:{title:"Working with alerts",permalink:"/docs/detections/alerting/working-with-alerts"},next:{title:"Overview",permalink:"/docs/enrichment/overview"}},c={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Matano integrates with external systems to deliver alerts. A detection can be configured to route alerts to one or multiple destinations based on a static configuration or dynamically based on the content of the triggering event."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example static destination list in detection.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"alert:\n  destinations:\n  - my_slack_team\n  - main_jira\n")),(0,i.kt)("p",null,"For a full guide on on setting up alert destination integrations and the routing logic for alerts from a detection, read ",(0,i.kt)("a",{parentName:"p",href:"/docs/integrations/destinations"},"Alert destinations"),"."))}m.isMDXComponent=!0}}]);