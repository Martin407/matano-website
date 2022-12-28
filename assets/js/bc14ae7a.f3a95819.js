"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[3027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return a?l.createElement(g,o(o({ref:t},c),{},{components:a})):l.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<n;u++)o[u]=a[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"AWS CloudTrail"},o=void 0,i={unversionedId:"log-sources/managed-log-sources/cloudtrail",id:"log-sources/managed-log-sources/cloudtrail",title:"AWS CloudTrail",description:"The CloudTrail Matano managed log source lets you ingest your AWS CloudTrail logs directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/cloudtrail.md",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/cloudtrail",permalink:"/docs/log-sources/managed-log-sources/cloudtrail",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/cloudtrail.md",tags:[],version:"current",frontMatter:{title:"AWS CloudTrail"},sidebar:"tutorialSidebar",previous:{title:"Falcon Data Replicator",permalink:"/docs/log-sources/managed-log-sources/crowdstrike/fdr"},next:{title:"Office 365",permalink:"/docs/log-sources/managed-log-sources/o365"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"S3 (default)",id:"s3-default",level:3},{value:"Path scheme to table:",id:"path-scheme-to-table",level:4},{value:"Schema",id:"schema",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The CloudTrail Matano managed log source lets you ingest your AWS CloudTrail logs directly into Matano."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Use the managed log source by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,r.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_CLOUDTRAIL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'name: "aws_cloudtrail"\n\nmanaged:\n  type: "AWS_CLOUDTRAIL"\n')),(0,r.kt)("p",null,"Then create tables for each of the Cloudtrail log types you want to ingest,  under a ",(0,r.kt)("inlineCode",{parentName:"p"},"tables/")," subdirectory for your log source. For example, if you want to ingest Cloudtrail (default) and Cloudtrail Insights logs, create table files like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-matano-dir/\n\u2514\u2500\u2500 log_sources/\n    \u2514\u2500\u2500 cloudtrail/\n        \u2514\u2500\u2500 log_source.yml\n        \u2514\u2500\u2500 tables/\n            \u2514\u2500\u2500 default.yml\n            \u2514\u2500\u2500 insights.yml\n            \u2514\u2500\u2500 ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# log_sources/aws_cloudtrail/tables/default.yml\nname: "default"\n')),(0,r.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,r.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"The AWS CloudTrail managed log source supports the following tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A table is created for actual CloudTrail logs."))),(0,r.kt)("li",{parentName:"ul"},"digest",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CloudTrail digest files are transformed into a separate Matano table."))),(0,r.kt)("li",{parentName:"ul"},"insights",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CloudTrail insights logs are processed into a Matano table.")))),(0,r.kt)("p",null,"Matano automatically ingests data in your CloudTrail bucket into the corresponding table (e.g. cloudtrail_insights, cloudtrail)."),(0,r.kt)("h2",{id:"ingest"},"Ingest"),(0,r.kt)("h3",{id:"s3-default"},"S3 (default)"),(0,r.kt)("p",null,"For a log source named ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_cloudtrail"),", a file under the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/AWSLogs/249463413804/CloudTrail-Digest/us-east-1/2022/10/15/249463413804_CloudTrail-Digest_us-east-1_cheeseiad_us-east-1_20221015T195315Z.json.gz")," will be routed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"digest")," table."),(0,r.kt)("h4",{id:"path-scheme-to-table"},"Path scheme to table:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*Insights*")," -> ",(0,r.kt)("strong",{parentName:"li"},"insights")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*Digest*")," -> ",(0,r.kt)("strong",{parentName:"li"},"digest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"else")," -> ",(0,r.kt)("strong",{parentName:"li"},"default"))),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"CloudTrail data is normalized to ECS fields. Custom fields are normalized into the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," field. You can view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_cloudtrail/log_source.yml"},"complete mapping")," to see the full schema."))}d.isMDXComponent=!0}}]);