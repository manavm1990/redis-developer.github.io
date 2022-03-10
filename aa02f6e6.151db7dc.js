(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1e3:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image15-90817153bafdcf49dbde6976de8a7b4b.png"},1001:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image16-8e4918edea321878451a27838413af9c.png"},1002:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image18-afc25856e123b89be0e4328ef7afefb8.png"},257:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return c}));var i=a(3),n=a(7),s=(a(0),a(339)),r={id:"index-usingredisinsight",title:"How to visualize Graph data using RedisInsight",sidebar_label:"RedisGraph using RedisInsight",slug:"/howtos/redisgraph/using-redisinsight",authors:["ajeet"]},l={unversionedId:"howtos/redisgraph/using-redisinsight/index-usingredisinsight",id:"howtos/redisgraph/using-redisinsight/index-usingredisinsight",isDocsHomePage:!1,title:"How to visualize Graph data using RedisInsight",description:"If you\u2019re a Redis user who prefers to use a Graphical User Interface(GUI) for graph queries, then RedisInsight is a right tool for you. It\u2019s 100% free pure desktop Redis GUI that provides easy-to-use browser tools to query, visualize and interactively manipulate graphs. You can add new graphs, run queries and explore the results over the GUI tool.",source:"@site/docs/howtos/redisgraph/using-redisinsight/index-usingredisinsight.mdx",slug:"/howtos/redisgraph/using-redisinsight",permalink:"/howtos/redisgraph/using-redisinsight",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-redisinsight/index-usingredisinsight.mdx",version:"current",lastUpdatedAt:1637878347,sidebar_label:"RedisGraph using RedisInsight",sidebar:"docs",previous:{title:"Explore Python Codebase using RedisGraph",permalink:"/howtos/redisgraph/explore-python-code"},next:{title:"How to query Graph data in Redis using .NET",permalink:"/howtos/redisgraph/using-dotnet"}},o=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3: Click \u201cRedisGraph\u201d and then \u201cAdd Graph\u201d",id:"step-3-click-redisgraph-and-then-add-graph",children:[]},{value:"Step 4. Create a new Graph called \u201cFriends\u201d",id:"step-4-create-a-new-graph-called-friends",children:[]},{value:"Step 5. Add new nodes(individuals) and links",id:"step-5-add-new-nodesindividuals-and-links",children:[]},{value:"Step 6: View all the individuals (nodes)",id:"step-6-view-all-the-individuals-nodes",children:[]},{value:"Step 7. Viewing just one individual(node)",id:"step-7-viewing-just-one-individualnode",children:[]},{value:"Step 8: Visualize the relationship between the individuals",id:"step-8-visualize-the-relationship-between-the-individuals",children:[]},{value:"Step 9. Create and visualize the multiple relationships",id:"step-9-create-and-visualize-the-multiple-relationships",children:[]},{value:"Step 10. Create and visualize the relationship between two individuals (Susan and Bill)",id:"step-10-create-and-visualize-the-relationship-between-two-individuals-susan-and-bill",children:[]},{value:"Step 11. Create and visualize the relationship between two indiviual (Bill and Jane)",id:"step-11-create-and-visualize-the-relationship-between-two-indiviual-bill-and-jane",children:[]},{value:"Step 12. Building a social networking",id:"step-12-building-a-social-networking",children:[]},{value:"Step 13. Cleaning up the Graph",id:"step-13-cleaning-up-the-graph",children:[]},{value:"Importing the Bulk Graph data",id:"importing-the-bulk-graph-data",children:[]},{value:"Step 14. Cloning the repository**",id:"step-14-cloning-the-repository",children:[]},{value:"Step 15. Execute the script",id:"step-15-execute-the-script",children:[]},{value:"Step 16. Run the cypher query",id:"step-16-run-the-cypher-query",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],d={toc:o};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"If you\u2019re a Redis user who prefers to use a Graphical User Interface(GUI) for graph queries, then RedisInsight is a right tool for you. It\u2019s 100% free pure desktop Redis GUI that provides easy-to-use browser tools to query, visualize and interactively manipulate graphs. You can add new graphs, run queries and explore the results over the GUI tool."),Object(s.b)("p",null,"RedisInsight supports ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisgraph/"}),"RedisGraph")," and allows you to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Build and execute queries"),Object(s.b)("li",{parentName:"ul"},"Navigate your graphs"),Object(s.b)("li",{parentName:"ul"},"Browse, analyze, and export results"),Object(s.b)("li",{parentName:"ul"},"Keyboard shortcuts to zoom"),Object(s.b)("li",{parentName:"ul"},"Button to reset view; center entire graph"),Object(s.b)("li",{parentName:"ul"},"Zoom capability via mouse wheel(Double right-click to zoom out, Double right-click to zoom out.)"),Object(s.b)("li",{parentName:"ul"},"Ability to copy commands with a button click"),Object(s.b)("li",{parentName:"ul"},"Ability to persist nodes display choices between queries")),Object(s.b)("p",null,"As a benefit, you get faster turnarounds when building your application using Redis and RedisGraph."),Object(s.b)("p",null,"Follow the below steps to see how your data is connected via the RedisInsight Browser tool."),Object(s.b)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.redis.com/howtos/redisgraph"}),"Follow this link to create a Redis database")," using Redis Enterprise Cloud with RedisGraph module enabled"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(984).default})),Object(s.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(s.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(985).default})),Object(s.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(s.b)("p",null,'Select "Connect to a Redis database"\n',Object(s.b)("img",{alt:"My Image",src:a(986).default})),Object(s.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(s.b)("h2",{id:"step-3-click-redisgraph-and-then-add-graph"},"Step 3: Click \u201cRedisGraph\u201d and then \u201cAdd Graph\u201d"),Object(s.b)("p",null,"Select RedisGraph from the menu."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(987).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-4-create-a-new-graph-called-friends"},"Step 4. Create a new Graph called \u201cFriends\u201d"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(988).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-5-add-new-nodesindividuals-and-links"},"Step 5. Add new nodes(individuals) and links"),Object(s.b)("p",null,"Let us add individuals to the graph. CREATE is used to introduce new nodes and relationships.Run the below cypher query on RedisInsight GUI to add a label called person and property called \u201cname\u201d."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'CREATE (:Person{name:"Tom" }),  (:Person{name:"Alex" }), (:Person{name:"Susan" }), (:Person{name:"Bill" }), (:Person{name:"Jane" })\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(989).default,title:"image_tooltip"})),Object(s.b)("p",null,"As we see that \u201c1\u201d label is added and that refers to a person label. It\u2019s the same for every node and hence created once. Overall there are 5 nodes created. The five \u201cname\u201d properties refer to 5 name properties that have been added."),Object(s.b)("h2",{id:"step-6-view-all-the-individuals-nodes"},"Step 6: View all the individuals (nodes)"),Object(s.b)("p",null,"Match describes the relationship between queried entities, using ascii art to represent pattern(s) to match against. Nodes are represented by parentheses () , and Relationships are represented by brackets [] ."),Object(s.b)("p",null,"As shown below, we have added lowercase \u201cp\u201d in front of our label and is a variable we can make a reference to. It returns all the nodes with a label called \u201cPerson\u201d."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"MATCH (p:Person) RETURN p\n")),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(990).default,title:"image_tooltip"})),Object(s.b)("p",null,'You can select "Graph View" on the right menu to display the graphical representation as shown below:'),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(991).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-7-viewing-just-one-individualnode"},"Step 7. Viewing just one individual(node)"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'MATCH (p:Person {name:"Tom"}) RETURN p\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(992).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-8-visualize-the-relationship-between-the-individuals"},"Step 8: Visualize the relationship between the individuals"),Object(s.b)("p",null,"Run the below query to build a relationship between two nodes and how the relationship flows from one node(\u201cTom\u201d) to the another node(\u201cAlex\u201d)."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'MATCH (p1:Person {name: "Tom" }), (p2:Person {name: "Alex" }) CREATE (p1)-[:Knows]->(p2)\n')),Object(s.b)("p",null,"The symbol \u201c>\u201d (greater than) shows which way the relationship flows."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(993).default,title:"image_tooltip"})),Object(s.b)("p",null,"You can view the relationship in the form of graph as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(994).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-9-create-and-visualize-the-multiple-relationships"},"Step 9. Create and visualize the multiple relationships"),Object(s.b)("p",null,"Run the below query to create and visualize relationsship between the multiple individuals "),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'MATCH (p1:Person {name: "Tom" }), (p2:Person {name: "Susan" }), (p3:Person {name: "Bill" }) CREATE (p1)-[:Knows]->(p2), (p1)-[:Knows]->(p3)\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(995).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-10-create-and-visualize-the-relationship-between-two-individuals-susan-and-bill"},"Step 10. Create and visualize the relationship between two individuals (Susan and Bill)"),Object(s.b)("p",null,"Let us look at how to generate graph showcasing the relationship between two individuals - Susan and Bill"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'MATCH (p1:Person {name: "Susan"}), (p2:Person {name: "Bill"}) CREATE (p1)-[:Knows]->(p2)\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(996).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-11-create-and-visualize-the-relationship-between-two-indiviual-bill-and-jane"},"Step 11. Create and visualize the relationship between two indiviual (Bill and Jane)"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'MATCH (p1:Person {name: "Bill"}), (p2:Person {name: "Jane"}) CREATE (p1)-[:Knows]->(p2)\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(997).default,title:"image_tooltip"})),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(998).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-12-building-a-social-networking"},"Step 12. Building a social networking"),Object(s.b)("p",null,"This can be achieved by \u201cfriend of friends\u201d kind of relationship. Say, If Tom wanted to social network with Jane. He has two contacts that know Jane - one is Susan and the other person is Bill."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(999).default,title:"image_tooltip"})),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'MATCH p = (p1:Person {name: "Tom" })-[:Knows*1..3]-(p2:Person {name: "Jane"}) RETURN p\n')),Object(s.b)("p",null,"In this query, we assign a variable \u201cp\u201d to a node graph path. We search for \u201cTom\u201d as p1 and \u201cJane\u201d as \u201cp2\u201d. We say interested in knows link with 1..3 degree of separation."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(1e3).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-13-cleaning-up-the-graph"},"Step 13. Cleaning up the Graph"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(1001).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"importing-the-bulk-graph-data"},"Importing the Bulk Graph data"),Object(s.b)("p",null,"Let us try to insert bulk data using Python and then extrapolate it in the form of nodes and relationships."),Object(s.b)("h2",{id:"step-14-cloning-the-repository"},"Step 14. Cloning the repository**"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"$ git clone https://github.com/redis-developer/redis-datasets\ncd redis-datasets/redisgraph/datasets/iceandfire\n")),Object(s.b)("h2",{id:"step-15-execute-the-script"},"Step 15. Execute the script"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"$ python3 bulk_insert.py GOT_DEMO -n data/character.csv -n data/house.csv -n data/book.csv -n data/writer.csv -r data/wrote.csv -r data/belongs.csv -h 192.168.1.9 -p 6379\n\n\n\n2124 nodes created with label 'b'character''\n438 nodes created with label 'b'house''\n12 nodes created with label 'b'book''\n3 nodes created with label 'b'writer''\n14 relations created for type 'b'wrote''\n2208 relations created for type 'b'belongs''\nConstruction of graph 'GOT_DEMO' complete: 2577 nodes created, 2222 relations created in 0.169954 seconds\n\n\n")),Object(s.b)("h2",{id:"step-16-run-the-cypher-query"},"Step 16. Run the cypher query"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'GRAPH.QUERY GOT_DEMO "MATCH (w:writer)-[wrote]->(b:book) return w,b"\n')),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(1002).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redisgraph/"}),"RedisGraph Project")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Visualize Redis database keys using RedisInsight Browser Tool")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/streams"}),"Using Redis Streams with RedisInsight"))),Object(s.b)("h2",{id:""}),Object(s.b)("div",null,Object(s.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(s.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},339:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),b=i,h=p["".concat(r,".").concat(b)]||p[b]||u[b]||s;return a?n.a.createElement(h,l(l({ref:t},d),{},{components:a})):n.a.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<s;d++)r[d]=a[d];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},984:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deployment-bbcdfc9c2f618977490875fa0f5f71bf.png"},985:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},986:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},987:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-9406fbdcc2540cf595dcbeb643b7fbc0.png"},988:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-8817a729063371a8c5ceb28f44aadd59.png"},989:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-15e2444ead8acf721a8cdb2df504fff1.png"},990:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-a7e57251d836cddd6c3bffc52913c1dc.png"},991:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-90c445e979bc0d634742c7d6e156b329.png"},992:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-9ae241d8f23188ee367aa6b385ee89f4.png"},993:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-8e3481df7cb9ed181c0f3f6472ada32e.png"},994:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image9-2889ccb2378455113ff832bc3163e959.png"},995:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image10-cb537995ea5d6e70fe9df801653afa0a.png"},996:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image11-6f72ffdaca55d21bfddac84b0208d614.png"},997:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image12-4f1da6836c81f84d8067ddb5476c23fb.png"},998:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image13-34185b149fe10c4a64544d9e035bab29.png"},999:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image14-438d336c9b7e5f6e6af50f8095b1ed58.png"}}]);