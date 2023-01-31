"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[3668],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),d=a,f=p["".concat(l,".").concat(d)]||p[d]||g[d]||r;return o?n.createElement(f,s(s({ref:t},u),{},{components:o})):n.createElement(f,s({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},83773:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const r={title:"AWS Config",sidebar_position:5},s=void 0,i={unversionedId:"log-sources/managed-log-sources/aws/aws-config",id:"log-sources/managed-log-sources/aws/aws-config",title:"AWS Config",description:"The AWS Config managed log source lets you ingest your AWS Config configuration history data directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/aws/aws-config.md",sourceDirName:"log-sources/managed-log-sources/aws",slug:"/log-sources/managed-log-sources/aws/aws-config",permalink:"/docs/log-sources/managed-log-sources/aws/aws-config",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/aws/aws-config.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"AWS Config",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"VPC Flow",permalink:"/docs/log-sources/managed-log-sources/aws/vpcflow"},next:{title:"AWS ELB",permalink:"/docs/log-sources/managed-log-sources/aws/aws-elb"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"S3",id:"s3",level:3},{value:"Schema",id:"schema",level:2}],u={toc:c};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The AWS Config managed log source lets you ingest your AWS Config configuration history data directly into Matano."),(0,a.kt)("p",null,"AWS Config lets you track configuration history, and configuration changes to your AWS resources. The configuration history table tracks all changes made to resources tracked by AWS Config."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Use the managed log source by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,a.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_CONFIG_HISTORY"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: "aws_config_history"\n\nmanaged:\n  type: "AWS_CONFIG_HISTORY"\n')),(0,a.kt)("h2",{id:"tables"},"Tables"),(0,a.kt)("p",null,"The AWS Config history managed log source supports a single table containing AWS Config configuration history data."),(0,a.kt)("h2",{id:"ingest"},"Ingest"),(0,a.kt)("h3",{id:"s3"},"S3"),(0,a.kt)("p",null,"Matano supports ingestion using S3. You can set up AWS Config to send configuration history data to an S3 bucket. The data is delivered every 6 hours. Consult the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/mt/configuration-history-configuration-snapshot-files-aws-config/"},"AWS documentation")," for more information."),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("p",null,"AWS Config configuration history data is normalized to ECS fields. Custom fields are normalized into the ",(0,a.kt)("inlineCode",{parentName:"p"},"aws.config_history")," field. You can view the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_config_history/log_source.yml"},"complete mapping")," to see the full schema."))}g.isMDXComponent=!0}}]);