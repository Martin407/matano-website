"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),N=l,c=u["".concat(p,".").concat(N)]||u[N]||k[N]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={title:"Zeek",sidebar_position:8},i=void 0,o={unversionedId:"log-sources/managed-log-sources/zeek",id:"log-sources/managed-log-sources/zeek",title:"Zeek",description:"The Zeek Matano managed log source lets you ingest your Zeek logs directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/zeek.md",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/zeek",permalink:"/docs/log-sources/managed-log-sources/zeek",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/zeek.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Zeek",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Suricata",permalink:"/docs/log-sources/managed-log-sources/suricata"},next:{title:"Overview",permalink:"/docs/tables/overview"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"S3 (default)",id:"s3-default",level:3},{value:"S3 Path scheme to table:",id:"s3-path-scheme-to-table",level:4},{value:"Schema",id:"schema",level:2}],m={toc:s};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Zeek Matano managed log source lets you ingest your Zeek logs directly into Matano."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Use the managed log source by specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,l.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"ZEEK"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'name: "zeek"\n\nmanaged:\n  type: "ZEEK"\n')),(0,l.kt)("p",null,"Then create tables for each of the Zeek logs you want to ingest. For example, if you want to ingest Zeek DNS and HTTP logs, create table files like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"my-matano-dir/\n\u2514\u2500\u2500 log_sources/\n    \u2514\u2500\u2500 zeek/\n        \u2514\u2500\u2500 log_source.yml\n        \u2514\u2500\u2500 tables/\n            \u2514\u2500\u2500 dns.yml\n            \u2514\u2500\u2500 http.yml\n            \u2514\u2500\u2500 ...\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'# log_sources/zeek/tables/dns.yml\nname: "dns"\n')),(0,l.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,l.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("p",null,"The Zeek managed log source supports the following tables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"capture_loss"),(0,l.kt)("li",{parentName:"ul"},"connection"),(0,l.kt)("li",{parentName:"ul"},"dce_rpc"),(0,l.kt)("li",{parentName:"ul"},"dhcp"),(0,l.kt)("li",{parentName:"ul"},"dnp3"),(0,l.kt)("li",{parentName:"ul"},"dns"),(0,l.kt)("li",{parentName:"ul"},"dpd"),(0,l.kt)("li",{parentName:"ul"},"files"),(0,l.kt)("li",{parentName:"ul"},"ftp"),(0,l.kt)("li",{parentName:"ul"},"http"),(0,l.kt)("li",{parentName:"ul"},"intel"),(0,l.kt)("li",{parentName:"ul"},"irc"),(0,l.kt)("li",{parentName:"ul"},"kerberos"),(0,l.kt)("li",{parentName:"ul"},"known_certs"),(0,l.kt)("li",{parentName:"ul"},"known_hosts"),(0,l.kt)("li",{parentName:"ul"},"known_services"),(0,l.kt)("li",{parentName:"ul"},"modbus"),(0,l.kt)("li",{parentName:"ul"},"mysql"),(0,l.kt)("li",{parentName:"ul"},"notice"),(0,l.kt)("li",{parentName:"ul"},"ntlm"),(0,l.kt)("li",{parentName:"ul"},"ntp"),(0,l.kt)("li",{parentName:"ul"},"ocsp"),(0,l.kt)("li",{parentName:"ul"},"pe"),(0,l.kt)("li",{parentName:"ul"},"radius"),(0,l.kt)("li",{parentName:"ul"},"rdp"),(0,l.kt)("li",{parentName:"ul"},"rfb"),(0,l.kt)("li",{parentName:"ul"},"signature"),(0,l.kt)("li",{parentName:"ul"},"sip"),(0,l.kt)("li",{parentName:"ul"},"smb_cmd"),(0,l.kt)("li",{parentName:"ul"},"smb_files"),(0,l.kt)("li",{parentName:"ul"},"smb_mapping"),(0,l.kt)("li",{parentName:"ul"},"smtp"),(0,l.kt)("li",{parentName:"ul"},"snmp"),(0,l.kt)("li",{parentName:"ul"},"socks"),(0,l.kt)("li",{parentName:"ul"},"software"),(0,l.kt)("li",{parentName:"ul"},"ssh"),(0,l.kt)("li",{parentName:"ul"},"ssl"),(0,l.kt)("li",{parentName:"ul"},"stats"),(0,l.kt)("li",{parentName:"ul"},"syslog"),(0,l.kt)("li",{parentName:"ul"},"traceroute"),(0,l.kt)("li",{parentName:"ul"},"tunnel"),(0,l.kt)("li",{parentName:"ul"},"weird"),(0,l.kt)("li",{parentName:"ul"},"x509")),(0,l.kt)("h2",{id:"ingest"},"Ingest"),(0,l.kt)("h3",{id:"s3-default"},"S3 (default)"),(0,l.kt)("p",null,"For a log source named ",(0,l.kt)("inlineCode",{parentName:"p"},"zeek"),", a file under the path ",(0,l.kt)("inlineCode",{parentName:"p"},"zeek/afe3c55a-8b05-4ac7-be76-b6fda08af95d/conn.log.gz")," will be routed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"connection")," table."),(0,l.kt)("h4",{id:"s3-path-scheme-to-table"},"S3 Path scheme to table:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*capture_loss*")," -> ",(0,l.kt)("strong",{parentName:"li"},"capture_loss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*conn*")," -> ",(0,l.kt)("strong",{parentName:"li"},"connection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*dce_rpc*")," -> ",(0,l.kt)("strong",{parentName:"li"},"dce_rpc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*dhcp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"dhcp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*dnp3*")," -> ",(0,l.kt)("strong",{parentName:"li"},"dnp3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*dns*")," -> ",(0,l.kt)("strong",{parentName:"li"},"dns")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*dpd*")," -> ",(0,l.kt)("strong",{parentName:"li"},"dpd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*files*")," -> ",(0,l.kt)("strong",{parentName:"li"},"files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*ftp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"ftp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*http*")," -> ",(0,l.kt)("strong",{parentName:"li"},"http")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*intel*")," -> ",(0,l.kt)("strong",{parentName:"li"},"intel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*irc*")," -> ",(0,l.kt)("strong",{parentName:"li"},"irc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*kerberos*")," -> ",(0,l.kt)("strong",{parentName:"li"},"kerberos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*known_certs*")," -> ",(0,l.kt)("strong",{parentName:"li"},"known_certs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*known_hosts*")," -> ",(0,l.kt)("strong",{parentName:"li"},"known_hosts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*known_services*")," -> ",(0,l.kt)("strong",{parentName:"li"},"known_services")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*modbus*")," -> ",(0,l.kt)("strong",{parentName:"li"},"modbus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*mysql*")," -> ",(0,l.kt)("strong",{parentName:"li"},"mysql")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*notice*")," -> ",(0,l.kt)("strong",{parentName:"li"},"notice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*ntlm*")," -> ",(0,l.kt)("strong",{parentName:"li"},"ntlm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*ntp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"ntp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*ocsp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"ocsp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*pe*")," -> ",(0,l.kt)("strong",{parentName:"li"},"pe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*radius*")," -> ",(0,l.kt)("strong",{parentName:"li"},"radius")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*rdp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"rdp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*rfb*")," -> ",(0,l.kt)("strong",{parentName:"li"},"rfb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*signature*")," -> ",(0,l.kt)("strong",{parentName:"li"},"signature")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*sip*")," -> ",(0,l.kt)("strong",{parentName:"li"},"sip")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*smb_cmd*")," -> ",(0,l.kt)("strong",{parentName:"li"},"smb_cmd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*smb_files*")," -> ",(0,l.kt)("strong",{parentName:"li"},"smb_files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*smb_mapping*")," -> ",(0,l.kt)("strong",{parentName:"li"},"smb_mapping")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*smtp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"smtp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*snmp*")," -> ",(0,l.kt)("strong",{parentName:"li"},"snmp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*socks*")," -> ",(0,l.kt)("strong",{parentName:"li"},"socks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*software*")," -> ",(0,l.kt)("strong",{parentName:"li"},"software")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*ssh*")," -> ",(0,l.kt)("strong",{parentName:"li"},"ssh")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*ssl*")," -> ",(0,l.kt)("strong",{parentName:"li"},"ssl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*stats*")," -> ",(0,l.kt)("strong",{parentName:"li"},"stats")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*syslog*")," -> ",(0,l.kt)("strong",{parentName:"li"},"syslog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*traceroute*")," -> ",(0,l.kt)("strong",{parentName:"li"},"traceroute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*tunnel*")," -> ",(0,l.kt)("strong",{parentName:"li"},"tunnel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*weird*")," -> ",(0,l.kt)("strong",{parentName:"li"},"weird")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*x509*")," -> ",(0,l.kt)("strong",{parentName:"li"},"x509"))),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("p",null,"Zeek data is normalized to ECS fields. You can view the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/zeek/log_source.yml"},"complete mappings")," to see the full schemas."))}k.isMDXComponent=!0}}]);