"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[5025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(a),m=r,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||n;return a?o.createElement(d,l(l({ref:t},p),{},{components:a})):o.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={title:"Google Workspace",slug:"/log-sources/managed/google-workspace",sidebar_position:5},l=void 0,i={unversionedId:"log-sources/managed/google-workspace",id:"log-sources/managed/google-workspace",title:"Google Workspace",description:"The Google Workspace managed log source allows you to collect logs from various Google Workspace audit, activity, and report endpoints into Matano.",source:"@site/docs/log-sources/managed/google-workspace.md",sourceDirName:"log-sources/managed",slug:"/log-sources/managed/google-workspace",permalink:"/docs/log-sources/managed/google-workspace",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed/google-workspace.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Google Workspace",slug:"/log-sources/managed/google-workspace",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/log-sources/managed/github"},next:{title:"Microsoft Graph",permalink:"/docs/log-sources/managed/microsoft-graph"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Secret",id:"secret",level:3},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"Pull (default)",id:"pull-default",level:3},{value:"Schema",id:"schema",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Google Workspace managed log source allows you to collect logs from various Google Workspace audit, activity, and report endpoints into Matano."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started with the Google Workspace managed log source, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Have an existing administrator account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/workspacemigrate/answer/9222993?hl=en"},"Create a service account")," using the administrator account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/workspacemigrate/answer/10839762#zippy=%2Cstep-authorize-your-client-id"},"Authorize access to the Admin SDK API")," for the ServiceAccount."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/workspace/guides/create-credentials#optional_set_up_domain-wide_delegation_for_a_service_account"},"Enable domain-wide Delegation")," for your service account."),(0,r.kt)("li",{parentName:"ul"},"Note your administrator email, service account email, and the private key for your credentials.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Use the Google Workspace managed log source by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,r.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOGLE_WORKSPACE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: google_workspace\n\nmanaged:\n  type: GOOGLE_WORKSPACE\n  properties:\n    admin_email: admin@example.com\n    client_email: service-acct@my-org.iam.gserviceaccount.com\n")),(0,r.kt)("p",null,"For the tables you would like to enable for this managed log source, under a ",(0,r.kt)("inlineCode",{parentName:"p"},"tables/")," subdirectory in your log source directory, create a file with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<table_name>.yml>"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-matano-dir/\n\u2514\u2500\u2500 log_sources/\n    \u2514\u2500\u2500 google_workspace/\n        \u2514\u2500\u2500 log_source.yml\n        \u2514\u2500\u2500 tables/\n            \u2514\u2500\u2500 login.yml\n")),(0,r.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,r.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,r.kt)("h3",{id:"secret"},"Secret"),(0,r.kt)("p",null,"To finish onboarding the log source, populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"private_key")," key in the secret generated by Matano in AWS Secrets Manager, with the value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"private_key")," field in the credential key JSON generated for your service account."),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"The Google Workspace managed log source supports the following tables:"),(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Table"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Identifier"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/admin-sdk/reports/v1/appendix/activity/login"},"Login")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"login")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Track sign-in activity from users to your domain."))))),(0,r.kt)("h2",{id:"ingest"},"Ingest"),(0,r.kt)("h3",{id:"pull-default"},"Pull (default)"),(0,r.kt)("p",null,"Matano integrates with your Google Workspace account to automatically pull relevant logs on a regular basis (every 1 min)."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Google Workspace event data is normalized to ECS fields. Custom fields are normalized into the ",(0,r.kt)("inlineCode",{parentName:"p"},"google_workspace")," field. You can view the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/reports/v1/appendix/activity/login"},"complete mapping")," to see the full schema."))}u.isMDXComponent=!0}}]);