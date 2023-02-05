"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[5265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Lookup enrichment table data",sidebar_position:3},i=void 0,l={unversionedId:"enrichment/lookup-data",id:"enrichment/lookup-data",title:"Lookup enrichment table data",description:"You can use enrichment tables to lookup data in the Matano system, including in Python detections.",source:"@site/docs/enrichment/lookup-data.md",sourceDirName:"enrichment",slug:"/enrichment/lookup-data",permalink:"/docs/enrichment/lookup-data",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/enrichment/lookup-data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Lookup enrichment table data",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Working with enrichment tables",permalink:"/docs/enrichment/working-with-enrichment-tables"},next:{title:"Alert destinations",permalink:"/docs/integrations/destinations/"}},c={},p=[{value:"Specifying lookup keys",id:"specifying-lookup-keys",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use enrichment tables to lookup data in the Matano system, including in Python detections."),(0,o.kt)("h2",{id:"specifying-lookup-keys"},"Specifying lookup keys"),(0,o.kt)("p",null,"To specify which column keys you can lookup data based on, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"lookup_keys")," property in your ",(0,o.kt)("inlineCode",{parentName:"p"},"enrichment.yml"),". Matano supports looking up data based on multiple columns. Specify an array of column names in your ",(0,o.kt)("inlineCode",{parentName:"p"},"enrichment.yml")," to enable lookup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# enrichment/user_info/enrichment.yml\n\nname: user_info\nlookup_keys: ["user_id", "email"]\n')),(0,o.kt)("p",null,"In this example, we create a user information enrichment table that allows us to lookup data both using the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," column as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," column as keys."))}u.isMDXComponent=!0}}]);