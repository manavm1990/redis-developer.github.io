(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{234:function(e,a,t){"use strict";var r=t(0),n=t(236);a.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},236:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext(void 0);a.a=n},237:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(228),c=t(253),o=t(231),s=t(224),i=(t(57),t(3)),m=t(7),u=function(e){var a=e.color,t=void 0===a?"#161F31":a,r=Object(m.a)(e,["color"]);return n.a.createElement("svg",Object(i.a)({width:"13",height:"13",xmlns:"http://www.w3.org/2000/svg"},r),n.a.createElement("path",{d:"M11.807 12.578a.744.744 0 00.547-.224.744.744 0 00.224-.547.698.698 0 00-.234-.537L7.383 6.29l4.96-4.981a.698.698 0 00.235-.538.744.744 0 00-.224-.546.744.744 0 00-.547-.225.698.698 0 00-.537.234L6.29 5.195 1.308.235A.698.698 0 00.77 0a.744.744 0 00-.546.225A.744.744 0 000 .77c0 .215.078.394.234.538l4.961 4.98-4.96 4.98a.698.698 0 00-.235.538c0 .214.075.397.225.547.15.15.332.224.546.224a.698.698 0 00.538-.234l4.98-4.98 4.98 4.98a.698.698 0 00.538.234z",fill:t,fillRule:"nonzero"}))};var d=function(){var e,a=Object(s.a)(),t=a.isAnnouncementBarClosed,r=a.closeAnnouncementBar,c=Object(o.useThemeConfig)().announcementBar;if(!c)return null;var i=c.content,m=(c.backgroundColor,c.textColor,c.isCloseable);return!i||m&&t?null:n.a.createElement("div",{className:"announcementBar",role:"banner"},n.a.createElement("div",{className:Object(l.a)("announcementBarContent",(e={},e.announcementBarCloseable=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?n.a.createElement("button",{type:"button",className:"announcementBarClose",onClick:r,"aria-label":"Close"},n.a.createElement(u,{color:"#FFFFFF"})):null)},h=t(254);var f=function(e){var a=!1;return Object(r.useEffect)((function(){var e,t=document.querySelector(".redisearch-logo"),r=document.querySelector("#redis-sitesearch");a=!0,t.addEventListener("mousedown",(function(e){e.preventDefault()})),r.addEventListener("mousedown",(function(e){})),new h.a("#redis-sitesearch",{debounceTime:2,zIndex:100,search:function(a){var t=a.trim(),r="https://search-service.redislabs.com/search?q="+t+"*&site=https://developer.redislabs.com";if(0===a.length)return[];try{xhr.abort()}catch(l){}e=t;var n=function(e){var a=localStorage.getItem(e);if(!a)return null;var t=JSON.parse(a);return(new Date).getTime()>t.expiry?(localStorage.removeItem(e),null):t.value}(r);return n||new Promise((function(e){fetch(r).catch((function(a){console.error("Error querying search API: ",a),e([])})).then((function(a){return void 0!==a&&a.ok?a.json():(console.error("Error querying search API: ",a),void e([]))})).then((function(a){if(void 0!==a&&a){var n,l,c,o;if(a.results.length)n=a.results;else n=[{title:"No results",section_title:"No results found for '"+t.replace(/[&<>"'\/]/g,(function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}[e]}))+"'",body:"",hierarchy:[""]}];l=r,c=3e4,o={value:n,expiry:(new Date).getTime()+c},localStorage.setItem(l,JSON.stringify(o)),e(n)}}))}))},renderResult:function(e,a){var t="";return""!==e.section_title&&(t='\n            <div className="search-section-title">\n              '+e.section_title+"\n            </div>\n          "),"\n          <li "+a+'>\n            <div class="search-left">\n              <div class="search-title">\n                '+e.title+'\n              </div>\n            </div>\n            <div class="search-right">\n              '+t+'\n              <div class="search-body">\n                '+e.body+"\n              </div>\n            </div>\n          </li>\n        "},getResultValue:function(e){return""},onSubmit:function(a){a&&(e=encodeURIComponent(e),window.open(a.url+"?s="+e,"_top"))},onUpdate:function(e,a){var t=document.querySelector(".redisearch-logo");e.length?t.innerHTML='<a class="powered-by-redisearch" href="https://oss.redislabs.com/redisearch/"></a>':t.innerHTML=""}})}),[a]),n.a.createElement("div",{id:"redis-sitesearch",className:"redis-sitesearch redis-sitesearch-inline"},n.a.createElement("input",{className:"redis-sitesearch-input"}),n.a.createElement("div",{className:"redis-sitesearch-result-list-wrapper"},n.a.createElement("ul",{className:"redis-sitesearch-result-list"}),n.a.createElement("div",{className:"redisearch-logo"})))},v=t(255),b=t(234),g=t(256),E=t(247),p=t(248),_=t(274),k=t(252),N=(t(249),t(58)),w=t.n(N),y=function(e){var a=e.color,t=void 0===a?"#161F31":a,r=Object(m.a)(e,["color"]);return n.a.createElement("svg",Object(i.a)({width:"24",height:"18",xmlns:"http://www.w3.org/2000/svg"},r),n.a.createElement("g",{stroke:t,strokeWidth:"1.65",fill:"none",fillRule:"evenodd",strokeDasharray:"4.4",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("path",{d:"M1 16.95h24.2M1 9.25h24.2M1 1.55h24.2"})))},O="right";var j=function(){var e,a,t=Object(o.useThemeConfig)(),c=t.navbar,s=c.items,m=c.hideOnScroll,u=c.style,d=t.colorMode.disableSwitch,h=Object(r.useState)(!1),N=h[0],j=h[1],C=Object(r.useState)(!1),F=C[0],x=(C[1],Object(b.a)()),T=x.isDarkTheme,L=x.setLightTheme,S=x.setDarkTheme,I=Object(g.a)(m),M=I.navbarRef,B=I.isNavbarVisible;Object(E.a)(N);var D=Object(r.useCallback)((function(){j(!0)}),[j]),H=Object(r.useCallback)((function(){j(!1)}),[j]),A=Object(r.useCallback)((function(e){return e.target.checked?S():L()}),[L,S]),R=Object(p.a)();Object(r.useEffect)((function(){R===p.b.desktop&&j(!1)}),[R]);var U=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:O)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:O)}))}}(s),q=U.leftItems,P=U.rightItems;return n.a.createElement("nav",{ref:M,className:Object(l.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":N},e[w.a.navbarHideable]=m,e[w.a.navbarHidden]=!B,e))},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=s&&0!==s.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},n.a.createElement(y,{color:"#FFFFFF"})),n.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title",(a={},a[w.a.hideLogoText]=F,a))}),q.map((function(e,a){return n.a.createElement(_.a,Object(i.a)({},e,{key:a}))}))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},n.a.createElement(f,null),P.map((function(e,a){return n.a.createElement(_.a,Object(i.a)({},e,{key:a}))})),!d&&n.a.createElement(v.a,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:A}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:H}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:H}),!d&&N&&n.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:A})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},s.map((function(e,a){return n.a.createElement(_.a,Object(i.a)({mobile:!0},e,{onClick:H,key:a}))})))))))},C=t(232),F=t(222),x=t(59),T=t.n(x),L=function(e){var a=e.color,t=void 0===a?"#465282":a,r=Object(m.a)(e,["color"]);return n.a.createElement("svg",Object(i.a)({width:"785",height:"158",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r),n.a.createElement("defs",null,n.a.createElement("path",{d:"M786.344 392.459c-41.822 22.164-258.313 110.84-305.056 135.477-46.742 24.637-72.163 23.812-108.246 6.57-36.082-17.24-267.334-111.664-309.156-131.377-41.822-19.713-42.642-33.657-1.64-49.271C103.25 338.265 332.86 247.94 381.243 229.875c48.383-18.065 65.604-18.065 106.605-2.473 41.003 15.614 256.674 100.996 297.676 115.785 41.002 14.791 42.642 27.912.82 49.273v-.001z",id:"a"}),n.a.createElement("mask",{id:"b",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"785",height:"331",fill:"#fff"},n.a.createElement("use",{xlinkHref:"#a"}))),n.a.createElement("use",{mask:"url(#b)",xlinkHref:"#a",transform:"translate(-32 -216)",stroke:t,strokeWidth:"4",fill:"none",fillRule:"evenodd",strokeDasharray:"3.637"}))};function S(e){var a=e.to,t=e.href,r=e.label,l=e.prependBaseUrlToHref,c=Object(m.a)(e,["to","href","label","prependBaseUrlToHref"]),o=Object(F.a)(a),s=Object(F.a)(t,{forcePrependBaseUrl:!0});return n.a.createElement(C.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?s:t}:{to:o},c),r)}var I=function(e){var a=e.url,t=e.alt;return n.a.createElement("img",{loading:"lazy",className:"footer__logo",alt:t,src:a})};var M=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,c=void 0===r?[]:r,s=a.logo,i=void 0===s?{}:s,m=Object(F.a)(i.src);return e?n.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},n.a.createElement(L,{className:"shape"}),n.a.createElement("img",{src:Object(F.a)("/img/code-2.png"),className:"code",alt:""}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},i&&i.src&&n.a.createElement("div",{className:"footer__logo-ctr"},n.a.createElement("span",{className:"footer__logo-tagline"},"Made with </> by"),i.href?n.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener",className:T.a.footerLogoLink},n.a.createElement(I,{alt:i.alt,url:m})):n.a.createElement(I,{alt:i.alt,url:m}))),n.a.createElement("div",{className:"col col--9"},c&&c.length>0&&n.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return n.a.createElement("div",{key:a,className:"col col--4 footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?n.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(S,e))}))):null)}))))),t?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)):null},B=t(273),D=t(22),H=t(21),A=t(257);function R(e){var a=Object(H.default)(),t=a.siteConfig,r=a.i18n.currentLocale,l=t.favicon,c=t.themeConfig,s=c.image,m=c.metadatas,u=t.url,d=e.title,h=e.description,f=e.image,v=e.keywords,b=e.permalink,g=e.searchMetadatas,E=Object(o.useTitleFormatter)(d),p=f||s,_=Object(F.a)(p,{absolute:!0}),k=Object(F.a)(l),N=r.split("-")[0];return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,null,n.a.createElement("html",{lang:N}),E&&n.a.createElement("title",null,E),E&&n.a.createElement("meta",{property:"og:title",content:E}),l&&n.a.createElement("link",{rel:"shortcut icon",href:k}),h&&n.a.createElement("meta",{name:"description",content:h}),h&&n.a.createElement("meta",{property:"og:description",content:h}),v&&v.length&&n.a.createElement("meta",{name:"keywords",content:v.join(",")}),p&&n.a.createElement("meta",{property:"og:image",content:_}),p&&n.a.createElement("meta",{name:"twitter:image",content:_}),p&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),b&&n.a.createElement("meta",{property:"og:url",content:u+b}),b&&n.a.createElement("link",{rel:"canonical",href:u+b}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{property:"og:image",content:Object(F.a)("/img/share.png")}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;600;700&display=swap",rel:"stylesheet"}),n.a.createElement("link",{href:"/redislabs/redisearch:latestcss/redis-sitesearch.css",rel:"stylesheet"}),n.a.createElement("link",{href:"/css/redis-sitesearch-overrides.css",rel:"stylesheet"})),n.a.createElement(A.a,Object(i.a)({tag:o.DEFAULT_SEARCH_TAG,locale:r},g)),n.a.createElement(D.a,null,m.map((function(e,a){return n.a.createElement("meta",Object(i.a)({key:"metadata_"+a},e))}))))}var U=t(258);t(60);a.a=function(e){var a=e.children,t=e.noFooter,r=e.wrapperClassName;return Object(U.a)(),n.a.createElement(B.a,null,n.a.createElement(R,e),n.a.createElement(c.a,null),n.a.createElement(d,null),n.a.createElement(j,null),n.a.createElement("div",{className:Object(l.a)("main-wrapper",r)},a),!t&&n.a.createElement(M,null))}},240:function(e,a,t){"use strict";var r=t(3),n=t(7),l=t(0),c=t.n(l);a.a=function(e){var a=e.color,t=Object(n.a)(e,["color"]);return c.a.createElement("svg",Object(r.a)({width:"47",height:"11",xmlns:"http://www.w3.org/2000/svg"},t),c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("circle",{fill:a||"#CF5815",cx:"5.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#5961FF",cx:"23.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#14708D",cx:"41.5",cy:"5.5",r:"5.5"})))}},275:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(237),c=t(222),o=t(259),s=t.n(o),i=t(240);a.default=function(){return n.a.createElement(l.a,{title:"Page Not Found"},n.a.createElement("main",{className:"rds-404"},n.a.createElement("img",{src:Object(c.a)("/img/code-3.png"),className:"code",alt:""}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("div",{class:"terminal"},n.a.createElement("div",{className:"terminal-header"},n.a.createElement(i.a,{color:"#FFFFFF"})),n.a.createElement("div",{className:"terminal-body"},"404")),n.a.createElement("h1",{className:"title"},n.a.createElement(s.a,{strings:[">_ Page not found"],typeSpeed:75})),n.a.createElement("a",{href:"/",className:"link"},"Back to homepage"))))))}}}]);