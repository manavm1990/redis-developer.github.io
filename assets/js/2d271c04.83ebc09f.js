"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3762],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=g(n),c=o,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var g=2;g<a;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"intro",title:"Aggregations Intro",sidebar_label:"Aggregations Intro",slug:"/develop/dotnet/redis-om-dotnet/aggregations",authors:["steve"]},l=void 0,g={unversionedId:"develop/dotnet/redis-om-dotnet/aggregations/intro/intro",id:"develop/dotnet/redis-om-dotnet/aggregations/intro/intro",title:"Aggregations Intro",description:"Aggregations are a method of grouping documents together and run processing on them on the server to transform them into data that you need in your application, without having to perform the computation client-side.",source:"@site/docs/develop/dotnet/redis-om-dotnet/aggregations/intro/intro.md",sourceDirName:"develop/dotnet/redis-om-dotnet/aggregations/intro",slug:"/develop/dotnet/redis-om-dotnet/aggregations",permalink:"/develop/dotnet/redis-om-dotnet/aggregations",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/aggregations/intro/intro.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"intro",title:"Aggregations Intro",sidebar_label:"Aggregations Intro",slug:"/develop/dotnet/redis-om-dotnet/aggregations",authors:["steve"]},sidebar:"docs",previous:{title:"Geo Filters",permalink:"/develop/dotnet/redis-om-dotnet/searching/geo-filters"},next:{title:"Apply Functions",permalink:"/develop/dotnet/redis-om-dotnet/aggregations/apply-functions"}},p={},d=[{value:"Anatomy of a Pipeline",id:"anatomy-of-a-pipeline",level:2},{value:"Setting up for Aggregations",id:"setting-up-for-aggregations",level:2},{value:"The AggregationResult",id:"the-aggregationresult",level:2},{value:"Simple Aggregations",id:"simple-aggregations",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Aggregations/"},"Aggregations")," are a method of grouping documents together and run processing on them on the server to transform them into data that you need in your application, without having to perform the computation client-side."),(0,a.kt)("h2",{id:"anatomy-of-a-pipeline"},"Anatomy of a Pipeline"),(0,a.kt)("p",null,"Aggregations in Redis are build around an aggregation pipeline, you will start off with a ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet<T>")," of objects that you have indexed in Redis. From there you can"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Query to filter down the results you want"),(0,a.kt)("li",{parentName:"ul"},"Apply functions to them to combine functions to them"),(0,a.kt)("li",{parentName:"ul"},"Group like features together"),(0,a.kt)("li",{parentName:"ul"},"Run reductions on groups"),(0,a.kt)("li",{parentName:"ul"},"Sort records"),(0,a.kt)("li",{parentName:"ul"},"Further filter down records")),(0,a.kt)("h2",{id:"setting-up-for-aggregations"},"Setting up for Aggregations"),(0,a.kt)("p",null,"Redis OM .NET provides an ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet<T>")," class that will let you perform aggregations on employees, let's start off with a trivial aggregation. Let's start off by defining a model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[Document]\npublic class Employee\n{\n    [Indexed]\n    public string Name { get; set; }\n\n    [Indexed]\n    public GeoLoc? HomeLoc { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public int Age { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public double Sales { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public double SalesAdjustment { get; set; }\n\n    [Searchable(Aggregatable = true)]\n    public string Department { get; set; }\n}\n")),(0,a.kt)("p",null,"We'll then create the index for that model, pull out a ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet<T>")," from our provider, and initialize the index, and seed some data into our database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://localhost:6379");\nawait provider.Connection.CreateIndexAsync(typeof(Restaurant));\nvar employees = provider.RedisCollection<Employee>();\nvar employeeAggregations = provider.AggregationSet<Employee>();\nvar e1 = new Employee {Name = "Bob", Age = 35, Sales = 100000, SalesAdjustment = 1.5,  Department = "EMEA Sales"};\nvar e2 = new Employee {Name = "Alice", Age = 52, Sales = 300000, SalesAdjustment = 1.02, Department = "Partner Sales"};\nvar e3 = new Employee {Name = "Marcus", Age = 42, Sales = 250000, SalesAdjustment = 1.1, Department = "NA Sales"};\nvar e4 = new Employee {Name = "Susan", Age = 27, Sales = 200000, SalesAdjustment = .95, Department = "EMEA Sales"};\nvar e5 = new Employee {Name = "John", Age = 38, Sales = 275000, SalesAdjustment = .9, Department = "APAC Sales"};\nvar e6 = new Employee {Name = "Theresa", Age = 30, Department = "EMEA Ops"};\nemployees.Insert(e1);\nemployees.Insert(e2);\nemployees.Insert(e3);\nemployees.Insert(e4);\nemployees.Insert(e5);\nemployees.Insert(e6);\n')),(0,a.kt)("h2",{id:"the-aggregationresult"},"The AggregationResult"),(0,a.kt)("p",null,"The Aggregations pipeline is all built around the ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet<T>")," this Set is generic, so you can provide the model that you want to build your aggregations around (an Indexed type), but you will notice that the return type from queries to the ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet")," is the generic type passed into it. Rather it is an ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregationResult<T>")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," is the generic type you passed into it. This is a really important concept, when results are returned from aggregations, they are not hydrated into an object like they are with queries. That's because Aggregations aren't meant to pull out your model data from the database, rather they are meant to pull out aggregated results. The AggregationResult has a ",(0,a.kt)("inlineCode",{parentName:"p"},"RecordShell")," field, which is ALWAYS null outside of the pipeline. It can be used to build expressions for querying objects in Redis, but when the AggregationResult lands, it will not contain a hydrated record, rather it will contain a dictionary of Aggregations built by the Aggregation pipeline. This means that you can access the results of your aggregations by indexing into the AggregationResult."),(0,a.kt)("h2",{id:"simple-aggregations"},"Simple Aggregations"),(0,a.kt)("p",null,"Let's try running an aggregation where we find the Sum of the sales for all our employees in EMEA. So the Aggregations Pipeline will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"RecordShell")," object, which is a reference to the generic type of the aggregation set, for something as simple as a group-less SUM, you will simply get back a numeric type from the aggregation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var sumOfSalesEmea = employeeAggregations.Where(x => x.RecordShell.Department == "EMEA")\n    .Sum(x => x.RecordShell.Sales);\nConsole.WriteLine($"EMEA sold:{sumOfSalesEmea}");\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Where")," expression tells the aggregation pipeline which records to consider, and subsequently the ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM")," expression indicates which field to sum. Aggregations are a rich feature and this only scratches the surface of it, these pipelines are remarkably flexible and provide you the ability to do all sorts of neat operations on your Data in Redis."))}c.isMDXComponent=!0}}]);