"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3721],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return c}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(i),c=n,g=u["".concat(o,".").concat(c)]||u[c]||h[c]||s;return i?a.createElement(g,r(r({ref:t},p),{},{components:i})):a.createElement(g,r({ref:t},p))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<s;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},38160:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=i(87462),n=i(63366),s=(i(67294),i(3905)),r=["components"],l={id:"index-usingredisinsight",title:"How to visualize Graph data using RedisInsight",sidebar_label:"RedisGraph using RedisInsight",slug:"/howtos/redisgraph/using-redisinsight",authors:["ajeet"]},o=void 0,d={unversionedId:"howtos/redisgraph/using-redisinsight/index-usingredisinsight",id:"howtos/redisgraph/using-redisinsight/index-usingredisinsight",title:"How to visualize Graph data using RedisInsight",description:"If you\u2019re a Redis user who prefers to use a Graphical User Interface(GUI) for graph queries, then RedisInsight is a right tool for you. It\u2019s 100% free pure desktop Redis GUI that provides easy-to-use browser tools to query, visualize and interactively manipulate graphs. You can add new graphs, run queries and explore the results over the GUI tool.",source:"@site/docs/howtos/redisgraph/using-redisinsight/index-usingredisinsight.mdx",sourceDirName:"howtos/redisgraph/using-redisinsight",slug:"/howtos/redisgraph/using-redisinsight",permalink:"/howtos/redisgraph/using-redisinsight",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-redisinsight/index-usingredisinsight.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-usingredisinsight",title:"How to visualize Graph data using RedisInsight",sidebar_label:"RedisGraph using RedisInsight",slug:"/howtos/redisgraph/using-redisinsight",authors:["ajeet"]},sidebar:"docs",previous:{title:"Explore Python Codebase using RedisGraph",permalink:"/howtos/redisgraph/explore-python-code"},next:{title:"RedisGraph and .NET",permalink:"/howtos/redisgraph/using-dotnet"}},p={},h=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",level:2},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:2},{value:"Step 3: Click \u201cRedisGraph\u201d and then \u201cAdd Graph\u201d",id:"step-3-click-redisgraph-and-then-add-graph",level:2},{value:"Step 4. Create a new Graph called \u201cFriends\u201d",id:"step-4-create-a-new-graph-called-friends",level:2},{value:"Step 5. Add new nodes(individuals) and links",id:"step-5-add-new-nodesindividuals-and-links",level:2},{value:"Step 6: View all the individuals (nodes)",id:"step-6-view-all-the-individuals-nodes",level:2},{value:"Step 7. Viewing just one individual(node)",id:"step-7-viewing-just-one-individualnode",level:2},{value:"Step 8: Visualize the relationship between the individuals",id:"step-8-visualize-the-relationship-between-the-individuals",level:2},{value:"Step 9. Create and visualize the multiple relationships",id:"step-9-create-and-visualize-the-multiple-relationships",level:2},{value:"Step 10. Create and visualize the relationship between two individuals (Susan and Bill)",id:"step-10-create-and-visualize-the-relationship-between-two-individuals-susan-and-bill",level:2},{value:"Step 11. Create and visualize the relationship between two indiviual (Bill and Jane)",id:"step-11-create-and-visualize-the-relationship-between-two-indiviual-bill-and-jane",level:2},{value:"Step 12. Building a social networking",id:"step-12-building-a-social-networking",level:2},{value:"Step 13. Cleaning up the Graph",id:"step-13-cleaning-up-the-graph",level:2},{value:"Importing the Bulk Graph data",id:"importing-the-bulk-graph-data",level:2},{value:"Step 14. Cloning the repository**",id:"step-14-cloning-the-repository",level:2},{value:"Step 15. Execute the script",id:"step-15-execute-the-script",level:2},{value:"Step 16. Run the cypher query",id:"step-16-run-the-cypher-query",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],u={toc:h};function c(e){var t=e.components,l=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you\u2019re a Redis user who prefers to use a Graphical User Interface(GUI) for graph queries, then RedisInsight is a right tool for you. It\u2019s 100% free pure desktop Redis GUI that provides easy-to-use browser tools to query, visualize and interactively manipulate graphs. You can add new graphs, run queries and explore the results over the GUI tool."),(0,s.kt)("p",null,"RedisInsight supports ",(0,s.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgraph/"},"RedisGraph")," and allows you to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Build and execute queries"),(0,s.kt)("li",{parentName:"ul"},"Navigate your graphs"),(0,s.kt)("li",{parentName:"ul"},"Browse, analyze, and export results"),(0,s.kt)("li",{parentName:"ul"},"Keyboard shortcuts to zoom"),(0,s.kt)("li",{parentName:"ul"},"Button to reset view; center entire graph"),(0,s.kt)("li",{parentName:"ul"},"Zoom capability via mouse wheel(Double right-click to zoom out, Double right-click to zoom out.)"),(0,s.kt)("li",{parentName:"ul"},"Ability to copy commands with a button click"),(0,s.kt)("li",{parentName:"ul"},"Ability to persist nodes display choices between queries")),(0,s.kt)("p",null,"As a benefit, you get faster turnarounds when building your application using Redis and RedisGraph."),(0,s.kt)("p",null,"Follow the below steps to see how your data is connected via the RedisInsight Browser tool."),(0,s.kt)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.redis.com/howtos/redisgraph"},"Follow this link to create a Redis database")," using Redis Enterprise Cloud with RedisGraph module enabled"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(56324).Z,width:"1508",height:"1112"})),(0,s.kt)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,s.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(94248).Z,width:"1464",height:"1256"})),(0,s.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,s.kt)("p",null,'Select "Connect to a Redis database"\n',(0,s.kt)("img",{alt:"My Image",src:i(8636).Z,width:"1790",height:"838"})),(0,s.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,s.kt)("h2",{id:"step-3-click-redisgraph-and-then-add-graph"},"Step 3: Click \u201cRedisGraph\u201d and then \u201cAdd Graph\u201d"),(0,s.kt)("p",null,"Select RedisGraph from the menu."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(66254).Z,width:"1278",height:"398"})),(0,s.kt)("h2",{id:"step-4-create-a-new-graph-called-friends"},"Step 4. Create a new Graph called \u201cFriends\u201d"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(25148).Z,width:"1290",height:"498"})),(0,s.kt)("h2",{id:"step-5-add-new-nodesindividuals-and-links"},"Step 5. Add new nodes(individuals) and links"),(0,s.kt)("p",null,"Let us add individuals to the graph. CREATE is used to introduce new nodes and relationships.Run the below cypher query on RedisInsight GUI to add a label called person and property called \u201cname\u201d."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'CREATE (:Person{name:"Tom" }),  (:Person{name:"Alex" }), (:Person{name:"Susan" }), (:Person{name:"Bill" }), (:Person{name:"Jane" })\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(5603).Z,width:"1358",height:"534"})),(0,s.kt)("p",null,"As we see that \u201c1\u201d label is added and that refers to a person label. It\u2019s the same for every node and hence created once. Overall there are 5 nodes created. The five \u201cname\u201d properties refer to 5 name properties that have been added."),(0,s.kt)("h2",{id:"step-6-view-all-the-individuals-nodes"},"Step 6: View all the individuals (nodes)"),(0,s.kt)("p",null,"Match describes the relationship between queried entities, using ascii art to represent pattern(s) to match against. Nodes are represented by parentheses () , and Relationships are represented by brackets [] ."),(0,s.kt)("p",null,"As shown below, we have added lowercase \u201cp\u201d in front of our label and is a variable we can make a reference to. It returns all the nodes with a label called \u201cPerson\u201d."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MATCH (p:Person) RETURN p\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(50431).Z,width:"1348",height:"518"})),(0,s.kt)("p",null,'You can select "Graph View" on the right menu to display the graphical representation as shown below:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(95912).Z,width:"1606",height:"1202"})),(0,s.kt)("h2",{id:"step-7-viewing-just-one-individualnode"},"Step 7. Viewing just one individual(node)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p:Person {name:"Tom"}) RETURN p\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(85372).Z,width:"1600",height:"1172"})),(0,s.kt)("h2",{id:"step-8-visualize-the-relationship-between-the-individuals"},"Step 8: Visualize the relationship between the individuals"),(0,s.kt)("p",null,"Run the below query to build a relationship between two nodes and how the relationship flows from one node(\u201cTom\u201d) to the another node(\u201cAlex\u201d)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Tom" }), (p2:Person {name: "Alex" }) CREATE (p1)-[:Knows]->(p2)\n')),(0,s.kt)("p",null,"The symbol \u201c>\u201d (greater than) shows which way the relationship flows."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(85024).Z,width:"1596",height:"726"})),(0,s.kt)("p",null,"You can view the relationship in the form of graph as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(90230).Z,width:"1594",height:"866"})),(0,s.kt)("h2",{id:"step-9-create-and-visualize-the-multiple-relationships"},"Step 9. Create and visualize the multiple relationships"),(0,s.kt)("p",null,"Run the below query to create and visualize relationsship between the multiple individuals"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Tom" }), (p2:Person {name: "Susan" }), (p3:Person {name: "Bill" }) CREATE (p1)-[:Knows]->(p2), (p1)-[:Knows]->(p3)\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(34582).Z,width:"1590",height:"1042"})),(0,s.kt)("h2",{id:"step-10-create-and-visualize-the-relationship-between-two-individuals-susan-and-bill"},"Step 10. Create and visualize the relationship between two individuals (Susan and Bill)"),(0,s.kt)("p",null,"Let us look at how to generate graph showcasing the relationship between two individuals - Susan and Bill"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Susan"}), (p2:Person {name: "Bill"}) CREATE (p1)-[:Knows]->(p2)\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(74649).Z,width:"1598",height:"970"})),(0,s.kt)("h2",{id:"step-11-create-and-visualize-the-relationship-between-two-indiviual-bill-and-jane"},"Step 11. Create and visualize the relationship between two indiviual (Bill and Jane)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Bill"}), (p2:Person {name: "Jane"}) CREATE (p1)-[:Knows]->(p2)\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(35533).Z,width:"1622",height:"804"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(27034).Z,width:"1594",height:"830"})),(0,s.kt)("h2",{id:"step-12-building-a-social-networking"},"Step 12. Building a social networking"),(0,s.kt)("p",null,"This can be achieved by \u201cfriend of friends\u201d kind of relationship. Say, If Tom wanted to social network with Jane. He has two contacts that know Jane - one is Susan and the other person is Bill."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(45114).Z,width:"1588",height:"854"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH p = (p1:Person {name: "Tom" })-[:Knows*1..3]-(p2:Person {name: "Jane"}) RETURN p\n')),(0,s.kt)("p",null,"In this query, we assign a variable \u201cp\u201d to a node graph path. We search for \u201cTom\u201d as p1 and \u201cJane\u201d as \u201cp2\u201d. We say interested in knows link with 1..3 degree of separation."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(60998).Z,width:"1516",height:"1350"})),(0,s.kt)("h2",{id:"step-13-cleaning-up-the-graph"},"Step 13. Cleaning up the Graph"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(65869).Z,width:"1600",height:"514"})),(0,s.kt)("h2",{id:"importing-the-bulk-graph-data"},"Importing the Bulk Graph data"),(0,s.kt)("p",null,"Let us try to insert bulk data using Python and then extrapolate it in the form of nodes and relationships."),(0,s.kt)("h2",{id:"step-14-cloning-the-repository"},"Step 14. Cloning the repository","*","*"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ git clone https://github.com/redis-developer/redis-datasets\ncd redis-datasets/redisgraph/datasets/iceandfire\n")),(0,s.kt)("h2",{id:"step-15-execute-the-script"},"Step 15. Execute the script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ python3 bulk_insert.py GOT_DEMO -n data/character.csv -n data/house.csv -n data/book.csv -n data/writer.csv -r data/wrote.csv -r data/belongs.csv -h 192.168.1.9 -p 6379\n\n\n\n2124 nodes created with label 'b'character''\n438 nodes created with label 'b'house''\n12 nodes created with label 'b'book''\n3 nodes created with label 'b'writer''\n14 relations created for type 'b'wrote''\n2208 relations created for type 'b'belongs''\nConstruction of graph 'GOT_DEMO' complete: 2577 nodes created, 2222 relations created in 0.169954 seconds\n\n\n")),(0,s.kt)("h2",{id:"step-16-run-the-cypher-query"},"Step 16. Run the cypher query"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'GRAPH.QUERY GOT_DEMO "MATCH (w:writer)-[wrote]->(b:book) return w,b"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(67603).Z,width:"1288",height:"844"})),(0,s.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"RedisGraph Project")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Slowlog Configuration using RedisInsight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Visualize Redis database keys using RedisInsight Browser Tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight"))),(0,s.kt)("h2",{id:""}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}c.isMDXComponent=!0},56324:function(e,t,i){t.Z=i.p+"assets/images/deployment-bbcdfc9c2f618977490875fa0f5f71bf.png"},34582:function(e,t,i){t.Z=i.p+"assets/images/image10-cb537995ea5d6e70fe9df801653afa0a.png"},74649:function(e,t,i){t.Z=i.p+"assets/images/image11-6f72ffdaca55d21bfddac84b0208d614.png"},35533:function(e,t,i){t.Z=i.p+"assets/images/image12-4f1da6836c81f84d8067ddb5476c23fb.png"},27034:function(e,t,i){t.Z=i.p+"assets/images/image13-34185b149fe10c4a64544d9e035bab29.png"},45114:function(e,t,i){t.Z=i.p+"assets/images/image14-438d336c9b7e5f6e6af50f8095b1ed58.png"},60998:function(e,t,i){t.Z=i.p+"assets/images/image15-90817153bafdcf49dbde6976de8a7b4b.png"},65869:function(e,t,i){t.Z=i.p+"assets/images/image16-8e4918edea321878451a27838413af9c.png"},67603:function(e,t,i){t.Z=i.p+"assets/images/image18-afc25856e123b89be0e4328ef7afefb8.png"},66254:function(e,t,i){t.Z=i.p+"assets/images/image2-9406fbdcc2540cf595dcbeb643b7fbc0.png"},25148:function(e,t,i){t.Z=i.p+"assets/images/image3-8817a729063371a8c5ceb28f44aadd59.png"},5603:function(e,t,i){t.Z=i.p+"assets/images/image4-15e2444ead8acf721a8cdb2df504fff1.png"},50431:function(e,t,i){t.Z=i.p+"assets/images/image5-a7e57251d836cddd6c3bffc52913c1dc.png"},95912:function(e,t,i){t.Z=i.p+"assets/images/image6-90c445e979bc0d634742c7d6e156b329.png"},85372:function(e,t,i){t.Z=i.p+"assets/images/image7-9ae241d8f23188ee367aa6b385ee89f4.png"},85024:function(e,t,i){t.Z=i.p+"assets/images/image8-8e3481df7cb9ed181c0f3f6472ada32e.png"},90230:function(e,t,i){t.Z=i.p+"assets/images/image9-2889ccb2378455113ff832bc3163e959.png"},8636:function(e,t,i){t.Z=i.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},94248:function(e,t,i){t.Z=i.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);