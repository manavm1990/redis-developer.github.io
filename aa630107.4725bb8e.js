(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1003:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloudrun_logo-009a0744da9f57c52be59d03b8d394bc.png"},1004:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rediscloud_endpoint-25adc08378debf5364d222e2479abf15.png"},1005:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/authenticate_gcloud-7914dc38a38dc2d4a8de9b6f225e85a9.png"},1006:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gcloud1-98be15f4c89a53e924e11b80872f2847.png"},1007:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gcloud2-d91119d595935dcd8fe5ddac2d4a61c1.png"},1008:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gcloud3-49c200f4f84b6e971d04b90cb6d3a7cb.png"},1009:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gcloud4-c4e5617b11e47a85a55d5306efa86c68.png"},1010:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gcloud5-647fcf020ae76a6dc89df5dbdfbf77f0.png"},1011:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gcloud6-1d63ad969754b9a1dddcae1ad76378f0.png"},1012:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ratelimit-f4547fd925bc984b20fc697840ff367b.png"},258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(339)),i={id:"index-cloudrun",title:"Getting Started with Google Cloud Run and Redis",sidebar_label:"Getting Started with Google Cloud Run and Redis",slug:"/create/cloudrun",authors:["ajeet"]},l={unversionedId:"create/cloudrun/index-cloudrun",id:"create/cloudrun/index-cloudrun",isDocsHomePage:!1,title:"Getting Started with Google Cloud Run and Redis",description:"alttext",source:"@site/docs/create/cloudrun/index-cloudrun.mdx",slug:"/create/cloudrun",permalink:"/create/cloudrun",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/cloudrun/index-cloudrun.mdx",version:"current",lastUpdatedAt:1646284717,sidebar_label:"Getting Started with Google Cloud Run and Redis",sidebar:"docs",previous:{title:"Getting Started with Vercel and Redis",permalink:"/create/vercel"},next:{title:"Getting Started with Azure Functions and Redis",permalink:"/create/azurefunctions"}},c=[{value:"Compelling features of Google Cloud Run",id:"compelling-features-of-google-cloud-run",children:[]},{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Step 1. Set up a free Redis Enterprise Cloud account",id:"step-1-set-up-a-free-redis-enterprise-cloud-account",children:[]},{value:"Step 2. Install Google Cloud CLI",id:"step-2-install-google-cloud-cli",children:[]},{value:"Step 3. Authenticate your GCP account",id:"step-3-authenticate-your-gcp-account",children:[]},{value:"Step 4. Enable Google Services",id:"step-4-enable-google-services",children:[]},{value:"Step 5 . Deploy to Google Cloud Run from source",id:"step-5--deploy-to-google-cloud-run-from-source",children:[]},{value:"Step 6. Verify if the service is listed under Cloud Run dashboard",id:"step-6-verify-if-the-service-is-listed-under-cloud-run-dashboard",children:[]},{value:"Step 7. Set up environment variables",id:"step-7-set-up-environment-variables",children:[]},{value:"Step 8. Access your app",id:"step-8-access-your-app",children:[]},{value:"Additional references:",id:"additional-references",children:[]}],s={toc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:n(1003).default,title:"image_tooltip"})),Object(r.b)("p",null,"If you\u2019re looking for a solution that lets you go from container to URL within seconds, check out Google Cloud Run. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/run"}),"Cloud Run")," is Google\u2019s fully managed compute platform for running stateless, HTTP-driven containers. By using a single command (\u201c",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/gcloud/reference/run/deploy"}),"gcloud run deploy\u201d"),") you can convert a container image to a fully managed web application and run it in a production environment with auto-scalability, high availability, and security."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/run/docs"}),"Google Cloud Run")," allows you to deploy and scale serverless HTTP containers without worrying about provisioning servers, scaling servers up and down to meet demands, or overpaying by consuming more resources than necessary. It makes container deployment much easier. It is good for developing software in cloud applications, hence delivering web apps, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/run/docs/reference/rest"}),"APIs"),", background jobs, etc."),Object(r.b)("p",null,"Cloud Run is ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/knative"}),"powered and built on Knative"),". Knative is an open source community project which adds components for deploying, running, and managing serverless, cloud-native applications to Kubernetes. It allows you to easily run your containers either in your ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/kubernetes-engine/"}),"https://cloud.google.com/kubernetes-engine")," (GKE) cluster with Cloud Run on GKE or fully managed with Cloud Run. Cloud Run helps developers focus on writing high-value code, regardless of where their organizations are on the path to the cloud. "),Object(r.b)("h3",{id:"compelling-features-of-google-cloud-run"},"Compelling features of Google Cloud Run"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cloud Run provides you with the option to write your code in your preferred programming languages such as ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/run/helloworld/"}),"NodeJS"),", ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GoogleCloudPlatform/python-docs-samples/blob/master/run/"}),"Python"),", ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GoogleCloudPlatform/golang-samples/tree/master/run/"}),"Go"),", and ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/run/"}),"Java"),"."),Object(r.b)("li",{parentName:"ul"},"Cloud Run provides you a better ROI as you get charged only for the resources used."),Object(r.b)("li",{parentName:"ul"},"Cloud Run offers a",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/run/docs/configuring/request-timeout"})," longer request timeout duration of up to 60 minutes"),"."),Object(r.b)("li",{parentName:"ul"},"Cloud Run is configured to ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/run/docs/configuring/concurrency"}),"send multiple concurrent requests on each container instance. "),"This is helpful to improve latency and reduce costs if you\u2019re expecting large volumes."),Object(r.b)("li",{parentName:"ul"},"Cloud Run lets you ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/blog/products/serverless/build-event-driven-applications-in-cloud-run"}),"create microservice-based applications that are scalable and extensible"),".")),Object(r.b)("p",null,"In this tutorial, you will learn how to deploy a simple Redis rate limiting application to Google Cloud Run in just 5 minutes."),Object(r.b)("h3",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Step 1. Set up a free Redis Enterprise Cloud account"),Object(r.b)("li",{parentName:"ul"},"Step 2. Install Google Cloud CLI"),Object(r.b)("li",{parentName:"ul"},"Step 3. Authenticate your GCP account"),Object(r.b)("li",{parentName:"ul"},"Step 4. Enable Google Services"),Object(r.b)("li",{parentName:"ul"},"Step 5. Deploy to Google Cloud Run from source"),Object(r.b)("li",{parentName:"ul"},"Step 6. Verify if service is listed"),Object(r.b)("li",{parentName:"ul"},"Step 7. Set up environment variables"),Object(r.b)("li",{parentName:"ul"},"Step 8. Access your app")),Object(r.b)("h3",{id:"step-1-set-up-a-free-redis-enterprise-cloud-account"},"Step 1. Set up a free Redis Enterprise Cloud account"),Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.redis.com/create/rediscloud/"}),"developer.redis.com/create/rediscloud/")," and create ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.com/try-free/"}),"a free Redis Enterprise Cloud account"),". Once you complete the signup tutorial, you will be provided with the database endpoint URL, port and password. Save these for future reference."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"TIP")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For a limited time, use ",Object(r.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(r.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(r.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Registering for Redis Cloud",src:n(1004).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-2-install-google-cloud-cli"},"Step 2. Install Google Cloud CLI"),Object(r.b)("p",null,"Run the following command to install Google Cloud CLI Core Libraries and dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"brew install --cask google-cloud-sdk\n\n")),Object(r.b)("h3",{id:"step-3-authenticate-your-gcp-account"},"Step 3. Authenticate your GCP account"),Object(r.b)("p",null,"To deploy your app you must first download, install, and initialize the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/docs"}),"gcloud CLI"),". "),Object(r.b)("p",null,"Download and install gcloud SDK via ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/docs"}),"https://cloud.google.com/sdk/docs")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"gcloud auth login\n")),Object(r.b)("p",null,"Allow Google Cloud SDK access to your Google Account:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Authenticating with Google Cloud",src:n(1005).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-4-enable-google-services"},"Step 4. Enable Google Services"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'gcloud services enable \\\n  artifactregistry.googleapis.com \\\n  cloudbuild.googleapis.com \\\n  run.googleapis.com\nOperation "operations/acat.p2-406459833831-88327c08-1fe9-4d9a-a6b9-db8c8b007863" finished successfully.\n\n\n')),Object(r.b)("h3",{id:"step-5--deploy-to-google-cloud-run-from-source"},"Step 5 . Deploy to Google Cloud Run from source"),Object(r.b)("p",null,"Deploying from source automatically builds a container image from source code and deploys it."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"gcloud run deploy\nDeploying from source. To deploy a container use [--image]. See https://cloud.google.com/run/docs/deploying-source-code for more details.\nSource code location (/Users/ajeetraina/projects/googlecloud/basic-rate-limiting-demo-python/google-cloud-run):\nNext time, use `gcloud run deploy --source .` to deploy the current directory.\n\nService name (google-cloud-run):\nPlease specify a region:\n [1] asia-east1\n [2] asia-east2\n [3] asia-northeast1\n [4] asia-northeast2\n [5] asia-northeast3\n [6] asia-south1\n [7] asia-south2\n [8] asia-southeast1\n [9] asia-southeast2\n [10] australia-southeast1\n [11] australia-southeast2\n [12] europe-central2\n [13] europe-north1\n [14] europe-west1\n [15] europe-west2\n [16] europe-west3\n [17] europe-west4\n [18] europe-west6\n [19] northamerica-northeast1\n [20] northamerica-northeast2\n [21] southamerica-east1\n [22] southamerica-west1\n [23] us-central1\n [24] us-east1\n [25] us-east4\n [26] us-west1\n [27] us-west2\n [28] us-west3\n [29] us-west4\n [30] cancel\nPlease enter your numeric choice:  1\n\nTo make this the default region, run `gcloud config set run/region asia-east1`.\n\nDeploying from source requires an Artifact Registry Docker repository to store built containers. A repository named\n[cloud-run-source-deploy] in region [asia-east1] will be created.\n\nDo you want to continue (Y/n)?  Y\n\nThis command is equivalent to running `gcloud builds submit --tag [IMAGE] /Users/ajeetraina/projects/googlecloud/basic-rate-limiting-demo-python/google-cloud-run` and `gcloud run deploy google-cloud-run --image [IMAGE]`\n\nAllow unauthenticated invocations to [google-cloud-run] (y/N)?  y\n\nBuilding using Dockerfile and deploying container to Cloud Run service [google-cloud-run] in project [redislabs-marketing-project] region [asia-east1]\n\u283c Building and deploying new service... Uploading sources.\n  \u2713 Creating Container Repository...\n  \u2713 Uploading sources...\n  . Building Container...\n  . Creating Revision...\n  . Routing traffic...\n  . Setting IAM Policy\u2026\n\nPlease enter your numeric choice:  1\n\nTo make this the default region, run `gcloud config set run/region asia-east1`.\n\nAllow unauthenticated invocations to [django-redis-rate-limiting-example] (y/N)?  y\n\nDeploying container to Cloud Run service [django-redis-rate-limiting-example] in project [redislabs-marketing-project] region [asia-east1]\n\u2713 Deploying new service... Done.\n  \u2713 Creating Revision... Revision deployment finished. Waiting for health check to begin.\n  \u2713 Routing traffic...\n  \u2713 Setting IAM Policy...\nDone.\nService [django-redis-rate-limiting-example] revision [django-redis-rate-limiting-example-00001-mog] has been deployed and is serving 100 percent of traffic.\nService URL: https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app\n\n\n")),Object(r.b)("h3",{id:"step-6-verify-if-the-service-is-listed-under-cloud-run-dashboard"},"Step 6. Verify if the service is listed under Cloud Run dashboard"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Verifying if the service is listed",src:n(1006).default,title:"image_tooltip"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"Verifying if the service is listed",src:n(1007).default,title:"image_tooltip"})),Object(r.b)("h4",{id:"verifying-the-service-via-terminal-ui"},"Verifying the service via terminal UI"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"$ gcloud run services describe django-redis-rate-limiting-example\n\n\u2714 Service django-redis-rate-limiting-example in region asia-east1\n\nURL:     https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app\nIngress: all\nTraffic:\n  100% LATEST (currently django-redis-rate-limiting-example-00001-mog)\n\nLast updated on 2022-02-19T02:50:03.100357Z by ajeet.raina@redis.com:\n  Revision django-redis-rate-limiting-example-00001-mog\n  Image:           gcr.io/redislabs-marketing-project/django-redis-rate-limiting-example@sha256:95bf8d5705c4ab52d2c9ba07d7dcf0c651431d8d5d38ad8806487aaa8a8a870d at 95bf8d57...\n  Port:            8080\n  Memory:          512Mi\n  CPU:             1000m\n  Service account: 406459833831-compute@developer.gserviceaccount.com\n  Concurrency:     80\n  Max Instances:   100\n  Timeout:         300s\n\n")),Object(r.b)("h3",{id:"step-7-set-up-environment-variables"},"Step 7. Set up environment variables"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Adding Redis URL to point to Redis Enterprise Cloud")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Setting up environment variables",src:n(1008).default,title:"image_tooltip"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enable HTTPS")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Enabling HTTPS",src:n(1009).default,title:"image_tooltip"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ensuring the VPC connector shows as \u201cnone\u201d")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Configuring the VPC connector",src:n(1010).default,title:"image_tooltip"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Allowing all traffic")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Allowing all traffic",src:n(1011).default,title:"image_tooltip"})),Object(r.b)("h3",{id:"step-8-access-your-app"},"Step 8. Access your app"),Object(r.b)("p",null,"Wait for the build and deploy to complete. When finished, a message with unique URL will be displayed.\nPlease note that the URL shown in your case will be different from the one shown below:"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app/"}),"https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app/")," and access your app."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Running the application",src:n(1012).default,title:"image_tooltip"})),Object(r.b)("p",null,"This app allows you to choose the desired number of requests in each 10 second period. The app blocks connections from a client after surpassing a certain amount of requests (default: 10) in the time window (default: 10 sec). That will let the user know how many requests they have remaining before they run over the limit. On the tenth run, the server should return an HTTP status code of 429 (\u201cToo Many Requests\u201d)."),Object(r.b)("h3",{id:"additional-references"},"Additional references:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/run"}),"Google Cloud Run")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/run#section-13"}),"Features of Google Run")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.redis.com/create/gcp"}),"Create Redis Database using Google Cloud"))))}u.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,g=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(g,l(l({ref:t},s),{},{components:n})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);