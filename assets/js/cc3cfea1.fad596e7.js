"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[1627],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>d});var a=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function l(e,A){if(null==e)return{};var t,a,n=function(e,A){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var A=a.useContext(i),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},c=function(e){var A=s(e.components);return a.createElement(i.Provider,{value:A},e.children)},f={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},u=a.forwardRef((function(e,A){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||r;return t?a.createElement(m,o(o({ref:A},c),{},{components:t})):a.createElement(m,o({ref:A},c))}));function d(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var i in A)hasOwnProperty.call(A,i)&&(l[i]=A[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1465:(e,A,t)=>{t.r(A),t.d(A,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(3905)),r=t(3878),o=t(2677);const l={},i=void 0,s={type:"mdx",permalink:"/alternative-to/elastic",source:"@site/src/pages/alternative-to/elastic.md",description:"Matano is an open source security lake platform (SIEM alternative) that provides a more scalable and cost-effective alternative to Elastic Security.",frontMatter:{}},c=[{value:"Comparison",id:"comparison",level:2},{value:"Summary",id:"summary",level:2}],f={toc:c};function u(e){let{components:A,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,t,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:image",content:o.Z})),(0,n.kt)("h1",{id:"open-source-elastic-alternative"},"Open source Elastic Alternative"),(0,n.kt)("p",null,"Matano is an open source security lake platform (SIEM alternative) that provides a more scalable and cost-effective alternative to Elastic Security."),(0,n.kt)("p",null,"Elastic Security is a security analytics platform that is built on top of the Elastic Stack (formerly known as the Elasticsearch, Logstash, and Kibana stack)."),(0,n.kt)("h2",{id:"comparison"},"Comparison"),(0,n.kt)("p",null,"Some similarities between Matano and Elastic Security include:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Elastic Common Schema (ECS)"),": Matano and Elastic Security both support the Elastic Common Schema (ECS) to normalize security data. This makes it easy to use the same detections and queries across multiple data sources."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enrichment"),": Matano supports enrichment and custom lookup tables to enrich incoming events with contextual information such as GeoIP, threat intelligence, and business information. Matano integrates with popular threat intelligence providers such as AbuseCH, AlienVault, and more. Elastic Security supports automated enrichment including several integrations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Alerting"),": Matano and Panther both support alerting using a variety of channels, including email, Slack, and webhook."),(0,n.kt)("p",null,"Some key differences between Matano and Elastic Security include:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scalability"),": Matano is designed to be highly scalable and handle petabyte level volumes of log data. While Elastic works well for smaller volumes of ingest, it does not scale to large volumes of data and becomes unreasonably expensive due to its index heavy architecture. Matano's lakehouse platform decouples storage from compute, allowing you to cost effectively retain data in object storage and efficiently analyze your data at massive scale."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cost"),": Matano is built using Rust, uses an entirely serverless architecture, and leverages modern Big Data technology like Apache Parquet, resulting in an order of magnitude lower cost than that of Elastic Security."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Log Transformation"),": Matano includes a serverless log transformation pipeline to transform and normalize unstructured security logs into a structured format using a standard schema. While Matano and Elastic Security both support the Elastic Common Schema (ECS) and ship with integrations for common security data sources, Elastic requires you to maintain a fleet of Logstash instances to transform and normalize your logs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Security Data Lake"),": Matano is built around a security data lake in your cloud, and uses a modern lakehouse architecture. This allows you to leverage the power of Big Data technology to store and analyze your security data. Elastic Security stores your data in an Elasticsearch database, which results in ballooning storage costs as data grows."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Architecture"),": Elastic is optimized for searching and point lookups. It suffers from performance issues when running aggregations and complex queries that require correlation. Matano is built around a lakehouse architecture that can easily handle complex joins and aggregations, and is optimized for running complex queries."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Vendor lock-in"),": Matano uses the open Apache Iceberg table format, which means that the data it collects and stores is not tied to any specific vendor or platform. This allow organizations to avoid vendor lock-in by owning their data and being able to analyze using any tool, from Snowflake and BigQuery to Amazon Athena or Apache Spark. Elastic Security is tied to the Elastic Stack, which means that it is not possible to use the data collected and stored in Elastic Security with any other tool."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Detection as code"),": Matano allows you to write detections as code using the Python programming language. Matano's detection as code approach is more flexible and powerful than Elastic's custom EQL query rules. Matano supports advanced correlation across data sources and alerts using SQL to build more effective detections, which is not possible using Elastic."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Real time detections"),": Matano runs detections in realtime on streaming data in motion. Elastic can only execute detection rules once the data has landed inside the SIEM, which is inefficient and slow for detections that require limited correlation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Open source")," Matano is an open source Apache-2.0 licensed project, which means that it is free to use and can be deployed on any cloud infrastructure. Elastic Security is a proprietary commercial product, and Elasticsearch no longer offers an open source licensed version (although the OpenSearch fork does exist)."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("div",{className:"flex justify-center"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"},"Matano"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Traditional SIEM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Alerting"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Enrichment"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Correlation"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.s7,{mdxType:"AltMeh"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Scalability"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.ab,{mdxType:"AltNo"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Cost effectivity"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.ab,{mdxType:"AltNo"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Built on data lake/lakehouse"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.ab,{mdxType:"AltNo"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"No Vendor lock-in"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.ab,{mdxType:"AltNo"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Realtime detections"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.ab,{mdxType:"AltNo"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Detections as code"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.jX,{mdxType:"AltYes"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(r.ab,{mdxType:"AltNo"})))))))}u.isMDXComponent=!0},3878:(e,A,t)=>{t.d(A,{ab:()=>l,jX:()=>o,s7:()=>i});var a=t(7294);function n(e,A){return()=>a.createElement(r,{text:e,alt:A})}function r(e){let{text:A,alt:t}=e;return a.createElement("span",{role:"img","aria-label":t},A)}const o=n("\u2705","Yes"),l=n("\u274c","No"),i=n("\u26a0\ufe0f","Meh")},2677:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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"}}]);