(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(327)),o={id:"index-database-migration-aws-elasticache-redis-enterprise-cloud",title:"How to migrate your database from AWS ElastiCache to Redis without any downtime",sidebar_label:"Online Data Migration from AWS Elasticache to Redis",slug:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",authors:["ajeet"]},s={unversionedId:"create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud",id:"create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud",isDocsHomePage:!1,title:"How to migrate your database from AWS ElastiCache to Redis without any downtime",description:"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention.",source:"@site/docs/create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud.mdx",slug:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",permalink:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud.mdx",version:"current",lastUpdatedAt:1642784806,sidebar_label:"Online Data Migration from AWS Elasticache to Redis",sidebar:"docs",previous:{title:"How to Build a Real-Time Bidding Platform on AWS using NodeJS, AWS Lambda, and Redis",permalink:"/create/aws/bidding-on-aws"},next:{title:"How to Build a Real-Time Chat application on AWS using Python and Redis",permalink:"/create/aws/chatapp"}},c=[{value:"Introducing RIOT",id:"introducing-riot",children:[]},{value:"Prerequisites:",id:"prerequisites",children:[]},{value:"Step 1 - Setting up an Amazon EC2 instance",id:"step-1---setting-up-an-amazon-ec2-instance",children:[]},{value:"Step 2 - Install the redis-cli tool",id:"step-2---install-the-redis-cli-tool",children:[]},{value:"Verify the connectivity with the ElastiCache database",id:"verify-the-connectivity-with-the-elasticache-database",children:[]},{value:"Step 3 - Using the RIOT migration tool",id:"step-3---using-the-riot-migration-tool",children:[]},{value:"Prerequisites:",id:"prerequisites-1",children:[{value:"Install Java",id:"install-java",children:[]},{value:"Installing RIOT",id:"installing-riot",children:[]}]},{value:"Step 4 - Migrate the data",id:"step-4---migrate-the-data",children:[]},{value:"Important notes",id:"important-notes",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:c};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention. "),Object(r.b)("p",null,"If you want to migrate your data from Amazon ElastiCache to Redis Enterprise Cloud, for example, the usual process is to back up your ElastiCache data to an Amazon S3 bucket and then import your data using the Redis Enterprise Cloud UI. This process can require painful downtime and could result in data loss. Other available techniques include creating point-in-time snapshots of the source Redis server and applying the changes to the destination servers to keep both the servers in sync. That might sound like a good approach, but it can be challenging when you have to maintain dozens of scripts to implement the migration strategy. "),Object(r.b)("p",null,"So we\u2019ve come up with a different approach:"),Object(r.b)("h2",{id:"introducing-riot"},"Introducing RIOT"),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:n(373).default})),Object(r.b)("p",null,"RIOT is an open source online migration tool built by Julien Ruaux, a Solution Architect at Redis. RIOT implements client-side replication using a producer/consumer approach. The producer is the combination of the key and value readers that have a connection to ElastiCache. The key reader component identifies keys to be replicated using scan and keyspace notifications. For each key, the value reader component performs a DUMP and handles the resulting key+bytes to the consumer (writer), which performs a RESTORE on the Redis Enterprise connection."),Object(r.b)("p",null,"This blog post will show how to perform a seamless online migration of databases from ElastiCache to Redis Enterprise Cloud."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites:"),Object(r.b)("p",null,"You will require a few resources to use the migration tool:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Redis Enterprise Cloud subscription, sign up ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/try-free/"}),"here")),Object(r.b)("li",{parentName:"ul"},"Amazon ElastiCache (a primary endpoint in the case of a single-master EC and a configuration endpoint in the case of a clustered EC: Refer to Finding Connection Endpoints on the ElastiCache documentation to learn more)"),Object(r.b)("li",{parentName:"ul"},"An Amazon EC2 instance based on Linux")),Object(r.b)("h2",{id:"step-1---setting-up-an-amazon-ec2-instance"},"Step 1 - Setting up an Amazon EC2 instance"),Object(r.b)("p",null,"You can either create a new EC2 instance or leverage an existing one. In our example, we will first create an instance on Amazon Web Services (AWS). The most common scenario is to access an ElastiCache cluster from an Amazon EC2 instance in the same Amazon Virtual Private Cloud (Amazon VPC). We have used Ubuntu 16.04 LTS for this setup, but you can choose the Ubuntu or Debian distribution of your choice."),Object(r.b)("p",null,"Use SSH to connect to this new EC2 instance from your computer as shown here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"ssh -i \u201cpublic key\u201d <AWS EC2 Instance>\n")),Object(r.b)("h2",{id:"step-2---install-the-redis-cli-tool"},"Step 2 - Install the redis-cli tool"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ sudo apt update\n# sudo apt install -y redis-tools\n")),Object(r.b)("h2",{id:"verify-the-connectivity-with-the-elasticache-database"},"Verify the connectivity with the ElastiCache database"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ redis-cli -h <Elasticache Primary Endpoint > -p 6379\n")),Object(r.b)("p",null,"Command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ sudo redis-cli -h <elasticache primary endpoint> -p 6379\n")),Object(r.b)("p",null,"Ensure that the above command allows you to connect to the remote Redis database successfully. "),Object(r.b)("h2",{id:"step-3---using-the-riot-migration-tool"},"Step 3 - Using the RIOT migration tool"),Object(r.b)("p",null,"Run the commands below to set up the migration tool. "),Object(r.b)("h2",{id:"prerequisites-1"},"Prerequisites:"),Object(r.b)("h3",{id:"install-java"},"Install Java"),Object(r.b)("p",null,"We recommended using OpenJDK 11 or later:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo add-apt-repository ppa:openjdk-r/ppa && sudo apt-get update -q && sudo apt install -y openjdk-11-jdk\n")),Object(r.b)("h3",{id:"installing-riot"},"Installing RIOT"),Object(r.b)("p",null,"Unzip the package and make sure the RIOT binaries are in place, as shown here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"wget https://github.com/Redislabs-Solution-Architects/riot/releases/download/v2.0.8/riot-redis-2.0.8.zip\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"unzip riot-redis-2.0.8.zip\ncd riot-redis-2.0.8/bin/\n")),Object(r.b)("p",null,"You can check the version of RIOT by running the command below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'./riot-redis --version\nRIOT version "2.0.8"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"bin/riot-redis --help\nUsage: riot-redis [OPTIONS] [COMMAND]\n  -q, --quiet         Log errors only\n  -d, --debug         Log in debug mode (includes normal stacktrace)\n  -i, --info          Set log level to info\n  -h, --help          Show this help message and exit.\n  -V, --version       Print version information and exit.\nRedis connection options\n  -r, --redis=<uri>   Redis connection string (default: redis://localhost:6379)\n  -c, --cluster       Connect to a Redis Cluster\n  -m, --metrics       Show metrics\n  -p, --pool=<int>    Max pool connections (default: 8)\nCommands:\n  replicate, r  Replicate a source Redis database in a target Redis database\n  info, i       Display INFO command output\n  latency, l    Calculate latency stats\n  ping, p       Execute PING command\n")),Object(r.b)("p",null,"Once Java and RIOT are installed, we are all set to begin the migration process with the command below, which replicates data directly from the source (ElastiCache) to the target (Redis Enterprise Cloud)."),Object(r.b)("h2",{id:"step-4---migrate-the-data"},"Step 4 - Migrate the data"),Object(r.b)("p",null,"Finally, it\u2019s time to replicate the data from ElastiCache to Redis Enterprise Cloud by running the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo ./riot-redis -r redis://<source Elasticache endpoint>:6379 replicate -r redis://password@<Redis Enterprise Cloud endpoint>:port --live\n")),Object(r.b)("p",null,"ElastiCache can be configured in two ways: clustered and non-clustered. In the chart below, the first row shows what commands you should perform for the non-clustered scenario, while the second row shows the command for the clustered scenario with a specific database namespace:"),Object(r.b)("p",null,"As you can see, whenever you have a clustered ElastiCache, you need to pass the ",Object(r.b)("inlineCode",{parentName:"p"},"\u2013cluster")," option before specifying the source ElastiCache endpoint."),Object(r.b)("h2",{id:"important-notes"},"Important notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Perform user acceptance testing of the migration before using it in production."),Object(r.b)("li",{parentName:"ul"},"Once the migration is complete, ensure that application traffic gets successfully redirected to the Redis Enterprise endpoint."),Object(r.b)("li",{parentName:"ul"},"Perform the migration process during a period of low traffic to minimize the chance of data loss.")),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"If you\u2019re looking for a simple and easy-to-use live migration tool that can help you move data from Amazon ElastiCache to Redis Enterprise Cloud with no downtime, RIOT is a promising option."))}d.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},373:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ajeet-riot-blog-1-c485eb485da7e268572402897924d564.png"}}]);