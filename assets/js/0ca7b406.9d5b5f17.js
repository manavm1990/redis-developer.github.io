"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var i=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=s,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return a?i.createElement(g,r(r({ref:t},d),{},{components:a})):i.createElement(g,r({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,r=new Array(n);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<n;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),s=a(52263);const n="authorByline_VoxI",r="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,s.Z)(),l=a.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:n},i.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),i.createElement("div",null,i.createElement("div",{className:r},"Author:"),i.createElement("div",null,i.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),i.createElement("hr",null)))}},85792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),s=(a(67294),a(3905)),n=a(50358);const r={id:"index-autodiscover",title:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",sidebar_label:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",slug:"/explore/redisinsight/autodiscover",authors:["ajeet"]},o=void 0,l={unversionedId:"explore/redisinsight/autodiscover/index-autodiscover",id:"explore/redisinsight/autodiscover/index-autodiscover",title:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",description:"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data. RedisInsight comes with the compatibility to connect to your database through the Sentinel instance too. Please note that RedisInsight v2.0 is an open source visual tool built by Redis that lets you do both GUI- and CLI-based interactions with your Redis database.",source:"@site/docs/explore/redisinsight/autodiscover/index-autodiscover.mdx",sourceDirName:"explore/redisinsight/autodiscover",slug:"/explore/redisinsight/autodiscover",permalink:"/explore/redisinsight/autodiscover",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/autodiscover/index-autodiscover.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-autodiscover",title:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",sidebar_label:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",slug:"/explore/redisinsight/autodiscover",authors:["ajeet"]},sidebar:"docs",previous:{title:"Perform Database Search and Analytics using RediSearch Browser Tool",permalink:"/explore/redisinsight/redisearch"},next:{title:"Installing RedisInsight using Helm",permalink:"/explore/redisinsight/usinghelm"}},c={},d=[{value:"Step 1. Setup and configure Amazon Elasticache",id:"step-1-setup-and-configure-amazon-elasticache",level:3},{value:"Step 2. Configure the VPC",id:"step-2-configure-the-vpc",level:3},{value:"Step 3. Configure the Security Groups",id:"step-3-configure-the-security-groups",level:3},{value:"Step 4. Configure and setup Amazon EC2",id:"step-4-configure-and-setup-amazon-ec2",level:3},{value:"Step 5. Create and configure IAM role",id:"step-5-create-and-configure-iam-role",level:3},{value:"Step 6. Assign the permissions",id:"step-6-assign-the-permissions",level:3},{value:"Step 7. Connect to Elasticache from EC2 instance",id:"step-7-connect-to-elasticache-from-ec2-instance",level:3},{value:"Step 8. Setup RedisInsight",id:"step-8-setup-redisinsight",level:3},{value:"Step 9. Access RedisInsight",id:"step-9-access-redisinsight",level:3},{value:"Step 10. Autodiscover Elasticache Instance",id:"step-10-autodiscover-elasticache-instance",level:3},{value:"References",id:"references",level:3}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,{frontMatter:r,mdxType:"Authors"}),(0,s.kt)("p",null,"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data. RedisInsight comes with the compatibility to connect to your database through the Sentinel instance too. Please note that RedisInsight v2.0 is an open source visual tool built by Redis that lets you do both GUI- and CLI-based interactions with your Redis database."),(0,s.kt)("p",null,"RedisInsight lets you automatically add Redis Enterprise Software and Redis Enterprise Cloud databases. RedisInsight also allows you to automatically discover Elasticache Redis caches."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"ElastiCache Redis caches cannot be accessed from outside the VPC, as they don\u2019t have public IP addresses assigned to them.If you want to work with ElastiCache Redis caches with RedisInsight, you can either setup an SSH tunnel between RedisInsight and your Elasticache instance, in case you're not using Redis Cluster.")),(0,s.kt)("p",null,"This tutorial shows how to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Setup and configure Amazon Elasticache"),(0,s.kt)("li",{parentName:"ul"},"Configure the VPC"),(0,s.kt)("li",{parentName:"ul"},"Configuring the security groups"),(0,s.kt)("li",{parentName:"ul"},"Configure and setup Amazon EC2"),(0,s.kt)("li",{parentName:"ul"},"Create and configure IAM role"),(0,s.kt)("li",{parentName:"ul"},"Assign the permissions"),(0,s.kt)("li",{parentName:"ul"},"Connect to Elasticache from EC2 instance"),(0,s.kt)("li",{parentName:"ul"},"Setup RedisInsight"),(0,s.kt)("li",{parentName:"ul"},"Access RedisInsight"),(0,s.kt)("li",{parentName:"ul"},"Autodiscover Elasticache Instance")),(0,s.kt)("h3",{id:"step-1-setup-and-configure-amazon-elasticache"},"Step 1. Setup and configure Amazon Elasticache"),(0,s.kt)("p",null,"Login to ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com"},"AWS Management Console"),' and click "Get Started now"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(53448).Z,width:"1306",height:"586"})),(0,s.kt)("p",null,'Choose "Redis" as the cluster engine'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(38249).Z,width:"1326",height:"1408"})),(0,s.kt)("p",null,"Configure Redis settings:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(72846).Z,width:"1444",height:"1268"})),(0,s.kt)("p",null,"Copy and save the Elasticache primary endpoint URL:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(67803).Z,width:"1886",height:"998"})),(0,s.kt)("h3",{id:"step-2-configure-the-vpc"},"Step 2. Configure the VPC"),(0,s.kt)("p",null,"Configure and chose VPC that has your ElastiCache instances"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(60853).Z,width:"1918",height:"954"})),(0,s.kt)("h3",{id:"step-3-configure-the-security-groups"},"Step 3. Configure the Security Groups"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(79164).Z,width:"1912",height:"422"})),(0,s.kt)("p",null,"Configure inbound and outbound rules to allow RedisInsight and Redis ports:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(98611).Z,width:"1892",height:"1022"})),(0,s.kt)("h3",{id:"step-4-configure-and-setup-amazon-ec2"},"Step 4. Configure and setup Amazon EC2"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(31275).Z,width:"1882",height:"1162"})),(0,s.kt)("h3",{id:"step-5-create-and-configure-iam-role"},"Step 5. Create and configure IAM role"),(0,s.kt)("p",null,"You can use the AWS Management Console to create a role that an IAM user can assume"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(48467).Z,width:"1964",height:"1352"})),(0,s.kt)("p",null,"Under Select type of trusted entity, choose EC2. In other words, the role is used by an EC2 instance"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(38983).Z,width:"1866",height:"890"})),(0,s.kt)("p",null,"Click \u201cNext\u201d."),(0,s.kt)("h3",{id:"step-6-assign-the-permissions"},"Step 6. Assign the permissions"),(0,s.kt)("p",null,"Assign the below permissions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"AmazonS3ReadOnlyAccess"),(0,s.kt)("li",{parentName:"ul"},"AmazonElastiCacheReadOnlyAccess")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(35637).Z,width:"1852",height:"1116"})),(0,s.kt)("h3",{id:"step-7-connect-to-elasticache-from-ec2-instance"},"Step 7. Connect to Elasticache from EC2 instance"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"redis-cli")," command to connect to the remote Amazon Elasticache for Redis server endpoint URL."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," ubuntu@ip-10-0-0-254:~$ redis-cli -h redisinsightdemo.8cfnjo.ng.0001.use1.cache.amazonaws.com -p 6379\n redisinsightdemo.8cfnjo.ng.0001.use1.cache.amazonaws.com:6379>\n")),(0,s.kt)("h3",{id:"step-8-setup-redisinsight"},"Step 8. Setup RedisInsight"),(0,s.kt)("p",null,"In order to access the RedisInsight GUI, run the following Docker command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," ubuntu@ip-10-0-0-254:~$ sudo docker run -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n Unable to find image 'redislabs/redisinsight:latest' locally\n latest: Pulling from redislabs/redisinsight\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' sudo docker ps\n CONTAINER ID   IMAGE                           COMMAND                  CREATED         STATUS         PORTS                                       NAMES\n caf3d674fb81   redislabs/redisinsight:latest   "bash ./docker-entry\u2026"   4 seconds ago   Up 3 seconds   0.0.0.0:8001->8001/tcp, :::8001->8001/tcp   cool_pascal\n')),(0,s.kt)("h3",{id:"step-9-access-redisinsight"},"Step 9. Access RedisInsight"),(0,s.kt)("p",null,"To access the RedisInsight GUI, open your preferred browser and access https://localhost:8001"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(39430).Z,width:"1934",height:"740"}),"\n",(0,s.kt)("img",{alt:"elasticache",src:a(5247).Z,width:"1970",height:"1096"})),(0,s.kt)("h3",{id:"step-10-autodiscover-elasticache-instance"},"Step 10. Autodiscover Elasticache Instance"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In case you encounter the below error message:"),(0,s.kt)("p",{parentName:"admonition"},"This EC2 instance does not have permissions to discover your ElastiCache instances. To grant permission, create an IAM role with the DescribeCacheClusters permission and attach the role to this EC2 instance."),(0,s.kt)("p",{parentName:"admonition"},"You might have to attach IAM role to the instance as shown below:"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("img",{alt:"elasticache",src:a(94559).Z,width:"1928",height:"1198"}))),(0,s.kt)("p",null,"Now you can should be able to autodiscover Elasticache"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(70770).Z,width:"1910",height:"540"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(30662).Z,width:"1908",height:"564"})),(0,s.kt)("p",null,"Add the selected instance:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(8523).Z,width:"1860",height:"782"})),(0,s.kt)("p",null,"Add the discovered instance:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"elasticache",src:a(75639).Z,width:"1932",height:"1064"})),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisearch"},"Unified Search and Analytics using RediSearch Browser Tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/redistimeseries"},"Managing time-series data using RedisTimeSeries Browser Tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/profiler"},"Analyze Your Redis commands using RedisInsight Profiler tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Debugging Redis using RedisInsight Slowlog Tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight"))),(0,s.kt)("h2",{id:""}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}u.isMDXComponent=!0},53448:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image1-9dcda70ebda273909457bf40362172a4.png"},38983:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image10-b5cf941684eb2db63455563c9b90dc80.png"},35637:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image11-9195351da78048535ea44db1a850fd0a.png"},98611:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image12-3a6db8b459800aea91fd8a33fc985fae.png"},39430:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image13-4556a8120cb71da97914bfaccaf95873.png"},5247:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image14-9b3e9eae5d34ba7581b5bd41934278a3.png"},94559:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image15-6d841ccacdf337e6825970fabb2f1534.png"},70770:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image16-a6ac51652c5fe6934062d3f10323245d.png"},30662:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image18-5b96f1956b16cb6a59fd10a1a300ef8a.png"},8523:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image19-c5c55f58ce4c3e9387f208e790e5fd86.png"},38249:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image2-9e2d6857fb799879f5e9a828b32efe8b.png"},75639:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image20-6c9da3f487a96449b3c4a769e3adc3f0.png"},72846:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image3-929d86b0699da1685ccff09c5a527bc2.png"},67803:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image5-b2b2805e50a67d9c8e9b91a7b87e6ffe.png"},60853:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image6-013bbc72138323f32427a43f4eae109f.png"},79164:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image7-758aa0639e52f090b115ae605abee49e.png"},31275:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image8-ad606bd5ca207c8a14ddb2f9068b89f7.png"},48467:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image9-9b48d4edcf59f40b810195ba3aaa551c.png"}}]);