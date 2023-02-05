"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[1207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Matano Tables overview",sidebar_label:"Overview",sidebar_position:3},i=void 0,l={unversionedId:"tables/overview",id:"tables/overview",title:"Matano Tables overview",description:"All Matano data is stored as Apache Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg.",source:"@site/docs/tables/overview.md",sourceDirName:"tables",slug:"/tables/overview",permalink:"/docs/tables/overview",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/tables/overview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Matano Tables overview",sidebar_label:"Overview",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Zeek",permalink:"/docs/log-sources/managed-log-sources/zeek"},next:{title:"Detections",permalink:"/docs/detections/"}},s={},c=[{value:"Schema",id:"schema",level:2},{value:"Partitioning",id:"partitioning",level:2},{value:"Querying a Matano table",id:"querying-a-matano-table",level:2},{value:"Optimization and Iceberg Table maintenance",id:"optimization-and-iceberg-table-maintenance",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Performing ACID transactions",id:"performing-acid-transactions",level:3},{value:"Notes",id:"notes",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All Matano data is stored as Apache Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Matano tables have schemas based on the specified log source configuration. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/schema"},"Log source schema")," for more on specifying the schema. You are encouraged to conform to ECS when defining schemas to improve correlation. All Matano tables are required to have a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ts"))," column in their schema."),(0,r.kt)("h2",{id:"partitioning"},"Partitioning"),(0,r.kt)("p",null,"Matano log tables are partitioned ",(0,r.kt)("strong",{parentName:"p"},"hourly")," by time (on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," column). Matano tables use Apache Iceberg ",(0,r.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/partitioning/"},"hidden partitioning")," so you don't need to manually specify the hour partition. Instead, if you specify a predicate on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," column, that will be automatically mapped to the corresponding partition by Iceberg. For example, you can write the following query, and it will automatically map to using the correct partitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM aws_cloudtrail\nWHERE ts BETWEEN timestamp '2018-12-01 10:00:00' AND timestamp '2018-12-01 12:00:00'\n")),(0,r.kt)("h2",{id:"querying-a-matano-table"},"Querying a Matano table"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See more on ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-table-data.html"},"Querying Iceberg tables")," in Athena.")),(0,r.kt)("p",null,"You can query a Matano table from Athena using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM matano.table_name [WHERE predicate]\n")),(0,r.kt)("h2",{id:"optimization-and-iceberg-table-maintenance"},"Optimization and Iceberg Table maintenance"),(0,r.kt)("p",null,"Apache Iceberg tables require regular table maintenance to ensure optimal performance and cost efficiency. Matano automatically performs Iceberg table maintenance, including rewriting data files (compaction), expiring snapshots, and rewriting manifests. The maintenance is run asynchronously every hour on each partition. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/blog/2022/11/04/automated-iceberg-table-maintenance"},"this blog post"),"."),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("h3",{id:"performing-acid-transactions"},"Performing ACID transactions"),(0,r.kt)("p",null,"Iceberg tables support ACID transactions such as deleting, inserting, and updating. You can use this feature if you need to modify your data for compliance, legal, or any other reason, without having to copy and re-load your entire dataset."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-updating-iceberg-table-data.html"},"Updating Iceberg table data")," on the syntax to perform Update and Delete transactions on your tables."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Matano tables are stored in an AWS Glue database named ",(0,r.kt)("strong",{parentName:"p"},"matano"),", with the Iceberg table name as the table name specified as per your log source configuration."))}u.isMDXComponent=!0}}]);