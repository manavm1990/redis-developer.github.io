(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(102),s=n(113);n(103),n(55);t.a=function(e){var t=a.a.useState(!1),n=t[0],r=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!n)}})))),n&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(i.a,{components:s.a},e.children)))}},107:function(e,t,n){"use strict";var r=n(0),a=n(108);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},111:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(107),s=n(104),c=n(56),o=n.n(c),d=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,b=e.groupId,p=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(r.useState)(c),j=O[0],g=O[1],v=r.Children.toArray(e.children);if(null!=b){var k=h[b];null!=k&&k!==j&&u.some((function(e){return e.value===k}))&&g(k)}var y=function(e){g(e),null!=b&&f(b,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},112:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},169:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-1-9cae87f442d005c2d5eef9ce7e277e66.png"},170:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-2-9313ccd8080b582bd7d3af6feb4471b4.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-4-d68706c4379a22cc84955f90af69c91e.png"},172:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-5-984c27aa9a4337754665886668670275.png"},173:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-7-b087dde1884f48b22eb5f3e1a1d66d54.png"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(102)),s=n(111),c=n(112),o=(n(103),n(106),{id:"index-docker",title:"Run Redis using Docker",sidebar_label:"Docker",slug:"/create/docker/"}),d={unversionedId:"create/docker/index-docker",id:"create/docker/index-docker",isDocsHomePage:!1,title:"Run Redis using Docker",description:"<Tabs",source:"@site/docs/create/docker/index-docker.mdx",slug:"/create/docker/",permalink:"/create/docker/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/index-docker.mdx",version:"current",sidebar_label:"Docker",sidebar:"docs",previous:{title:"Create a database using Redis Enterprise Cloud",permalink:"/create/cloud/"},next:{title:"Install and Create Redis database from Source Code",permalink:"/create/from-source/"}},l=[{value:"Redis",id:"redis",children:[{value:"Pre-requisite:",id:"pre-requisite",children:[]},{value:"Step 1: Run the Redis container",id:"step-1-run-the-redis-container",children:[]},{value:"Step 2: Verify if Redis container is running or not:",id:"step-2-verify-if-redis-container-is-running-or-not",children:[]},{value:"Step 3: Connect to your database",id:"step-3-connect-to-your-database",children:[]},{value:"Step 4: Testing Redis container",id:"step-4-testing-redis-container",children:[]},{value:"Step 5: Running Redis container with Persistent Storage",id:"step-5-running-redis-container-with-persistent-storage",children:[]}]},{value:"Redis Enterprise",id:"redis-enterprise",children:[{value:"Pre-requisite",id:"pre-requisite-1",children:[]},{value:"Step 1: Click on \u201cSetup\u201d",id:"step-1-click-on-setup",children:[]},{value:"Step 2:  Enter your preferred FQDN",id:"step-2--enter-your-preferred-fqdn",children:[]},{value:"Step 3: Enter the admin credentials",id:"step-3-enter-the-admin-credentials",children:[]},{value:"Step 4:  Create a Database:",id:"step-4--create-a-database",children:[]},{value:"Step 5: Connecting using redis-cli",id:"step-5-connecting-using-redis-cli",children:[]}]}],u={toc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.a,{defaultValue:"Redis",values:[{label:"Redis",value:"Redis"},{label:"Redis Enterprise",value:"Redis Enterprise"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"Redis",mdxType:"TabItem"},Object(i.b)("h2",{id:"redis"},"Redis"),Object(i.b)("h3",{id:"pre-requisite"},"Pre-requisite:"),Object(i.b)("p",null,"Ensure that Docker is installed in your system. Follow ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"https://docs.docker.com/engine/install/")," if you haven\u2019t installed yet."),Object(i.b)("h3",{id:"step-1-run-the-redis-container"},"Step 1: Run the Redis container"),Object(i.b)("p",null,"Execute the following command to run Redis container in the background in a \u201cdetached\u201d mode."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --name myredis -d redis\n")),Object(i.b)("p",null,"where,\nmyredis is the name of Docker container\n-d represent running Redis in a background in a \u201cdetached\u201d mode.\nredis is the name of Docker Image that it fetches from Docker Hub."),Object(i.b)("h3",{id:"step-2-verify-if-redis-container-is-running-or-not"},"Step 2: Verify if Redis container is running or not:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES\n241f2411637e   redis     "docker-entrypoint.s\u2026"   2 minutes ago   Up 2 minutes   6379/tcp   myredis\n')),Object(i.b)("h3",{id:"step-3-connect-to-your-database"},"Step 3: Connect to your database"),Object(i.b)("p",null,'The below CLI uses the first three alphanumeric character of Container ID  and opens up "sh" shell of Redis Docker container:'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker exec -it 241 sh\n# redis-cli\n")),Object(i.b)("h3",{id:"step-4-testing-redis-container"},"Step 4: Testing Redis container"),Object(i.b)("p",null,"Execute the below command to test the Redis server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"127.0.0.1:6379>ping\nPONG\n")),Object(i.b)("p",null,"Please note: By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf."),Object(i.b)("h3",{id:"step-5-running-redis-container-with-persistent-storage"},"Step 5: Running Redis container with Persistent Storage"),Object(i.b)("p",null,'In order to enable persistence,  you have to pass the "appendonly" option as "yes" as shown in the below example:'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --name some-redis -d redis redis-server --appendonly yes\n")),Object(i.b)("p",null,"If persistence is enabled, data is stored in the VOLUME /data, which can be used with --volumes-from some-volume-container or -v /docker/host/dir:/data ")),Object(i.b)(c.a,{value:"Redis Enterprise",mdxType:"TabItem"},Object(i.b)("h2",{id:"redis-enterprise"},"Redis Enterprise"),Object(i.b)("h3",{id:"pre-requisite-1"},"Pre-requisite"),Object(i.b)("p",null,"Ensure that Docker is installed in your system."),Object(i.b)("p",null,"If you're new, refer ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"https://docs.docker.com/docker-for-mac/install/")," to install Docker on Mac. "),Object(i.b)("p",null,"To pull and start the Redis Enterprise Software Docker container, run this docker run command in the terminal or command-line for your operating system."),Object(i.b)("p",null,"Note: On Windows, make sure Docker is configured to run Linux-based containers."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run -d --cap-add sys_resource --name rp -p 8443:8443 -p 9443:9443 -p 12000:12000 redislabs/redis\n")),Object(i.b)("p",null,"In the web browser on the host machine, go to https://localhost:8443 to see the Redis Enterprise Software web console."),Object(i.b)("h3",{id:"step-1-click-on-setup"},"Step 1: Click on \u201cSetup\u201d"),Object(i.b)("p",null,"Click Setup to start the node configuration steps."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(169).default})),Object(i.b)("h3",{id:"step-2--enter-your-preferred-fqdn"},"Step 2:  Enter your preferred FQDN"),Object(i.b)("p",null,"In the Node Configuration settings, enter a cluster FQDN such as demo.redislabs.com. Then click Next button."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(170).default})),Object(i.b)("p",null,"Enter your license key, if you have one. If not, click the Next button to use the trial version."),Object(i.b)("h3",{id:"step-3-enter-the-admin-credentials"},"Step 3: Enter the admin credentials"),Object(i.b)("p",null,"Enter an email and password for the admin account for the web console."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(171).default})),Object(i.b)("p",null,"These credentials are also used for connections to the REST API.\nClick OK to confirm that you are aware of the replacement of the HTTPS SSL/TLS certificate on the node, and proceed through the browser warning."),Object(i.b)("h3",{id:"step-4--create-a-database"},"Step 4:  Create a Database:"),Object(i.b)("p",null,"Select \u201credis database\u201d and the \u201csingle region\u201d deployment, and click Next."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(172).default})),Object(i.b)("p",null,"Enter a database name such as demodb and click Activate to create your database"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(173).default})),Object(i.b)("p",null,"You now have a Redis database!"),Object(i.b)("h3",{id:"step-5-connecting-using-redis-cli"},"Step 5: Connecting using redis-cli"),Object(i.b)("p",null,"After you create the Redis database, you are ready to store data in your database. redis-cli is a built-in simple command-line tool to interact with Redis database. Run redis-cli, located in the /opt/redislabs/bin directory, to connect to port 12000 and store and retrieve a key in database1"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker exec -it rp bash\nredislabs@fd8dca50f905:/opt$\n /opt/redislabs/bin/redis-cli -p 12000\n127.0.0.1:12000> auth <enter password>\nOK\n127.0.0.1:12000> set key1 123\nOK\n127.0.0.1:12000> get key1\n"123"\n')))))}b.isMDXComponent=!0}}]);