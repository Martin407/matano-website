"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[5900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Duo",sidebar_position:3},l=void 0,i={unversionedId:"log-sources/managed/duo",id:"log-sources/managed/duo",title:"Duo",description:"The Duo Matano managed log source lets you ingest your Duo logs directly into Matano.",source:"@site/docs/log-sources/managed/duo.md",sourceDirName:"log-sources/managed",slug:"/log-sources/managed/duo",permalink:"/docs/log-sources/managed/duo",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed/duo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Duo",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Falcon Data Replicator",permalink:"/docs/log-sources/managed/crowdstrike/fdr"},next:{title:"GitHub",permalink:"/docs/log-sources/managed/github"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"Pull (default)",id:"pull-default",level:3},{value:"Secret",id:"secret",level:4},{value:"Schema",id:"schema",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Duo Matano managed log source lets you ingest your Duo logs directly into Matano."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Use the managed log source by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,r.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"DUO"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: duo\n\nmanaged:\n  type: DUO\n  properties:\n    api_hostname: <MY_API_HOSTNAME>  # e.g. api-eac94d5a.duosecurity.com\n    integration_key: <MY_INTEGRATION_KEY>\n")),(0,r.kt)("p",null,"For the tables you would like to enable from this managed log source, under a ",(0,r.kt)("inlineCode",{parentName:"p"},"tables/")," subdirectory in your log source directory, create a file with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<table_name>.yml>"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-matano-dir/\n\u2514\u2500\u2500 log_sources/\n    \u2514\u2500\u2500 duo/\n        \u2514\u2500\u2500 log_source.yml\n        \u2514\u2500\u2500 tables/\n            \u2514\u2500\u2500 admin.yml\n            \u2514\u2500\u2500 auth.yml\n            \u2514\u2500\u2500 offline_enrollment.yml\n            \u2514\u2500\u2500 summary.yml\n            \u2514\u2500\u2500 telephony.yml\n")),(0,r.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,r.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"The Duo managed log source supports the following tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"admin"),(0,r.kt)("li",{parentName:"ul"},"auth"),(0,r.kt)("li",{parentName:"ul"},"offline_enrollment"),(0,r.kt)("li",{parentName:"ul"},"summary"),(0,r.kt)("li",{parentName:"ul"},"telephony")),(0,r.kt)("h2",{id:"ingest"},"Ingest"),(0,r.kt)("h3",{id:"pull-default"},"Pull (default)"),(0,r.kt)("p",null,"Matano integrates with your Duo account to automatically pull relevant logs on a regular basis (every 5 min)."),(0,r.kt)("p",null,"To get started with the integration, specify the following properties in the log source configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"managed:\n  type: DUO\n  properties:\n    api_hostname: <MY_API_HOSTNAME>  # e.g. api-eac94d5a.duosecurity.com\n    integration_key: <MY_INTEGRATION_KEY>\n")),(0,r.kt)("p",null,"After the first deployment, this log source will also generate a secret in AWS secret's manager to store secrets related to this integration."),(0,r.kt)("h4",{id:"secret"},"Secret"),(0,r.kt)("p",null,"To finish onboarding the log source, populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," key in the secret generated by Matano in AWS Secrets Manager, with the value from your OAuth app."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Duo log data is normalized to ECS fields. Custom fields are normalized into the ",(0,r.kt)("inlineCode",{parentName:"p"},"duo")," field. You can view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/duo/tables/"},"complete mapping")," to see the full schema."))}p.isMDXComponent=!0}}]);