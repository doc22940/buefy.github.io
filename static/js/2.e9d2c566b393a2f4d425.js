webpackJsonp([2],{401:function(t,e,a){var n=a(0)(a(439),a(476),null,null);t.exports=n.exports},426:function(t,e,a){t.exports=a.p+"static/img/buefy.027baee.png"},428:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{home:Boolean},data:function(){return{isMenuActive:!1}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,a="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa",n="status=1,width=575,height=400,top="+e+",left="+t;window.open(a,"",n)}}}},429:function(t,e,a){t.exports=a.p+"static/img/buefy-light.5467348.png"},430:function(t,e,a){var n=a(0)(null,a(432),null,null);t.exports=n.exports},431:function(t,e,a){var n=a(0)(a(428),a(433),null,null);t.exports=n.exports},432:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("p",[t._v("Made with "),a("b-icon",{attrs:{icon:"favorite",type:"is-danger"}}),t._v(" by "),a("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")]),t._v(".")],1),t._v(" "),t._m(0),t._v(" "),a("b-field",[a("p",{staticClass:"control"},[a("a",{staticClass:"button",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[a("b-icon",{attrs:{pack:"fa",icon:"github"}}),t._v(" "),a("span",[t._v("GitHub")])],1)]),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[a("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),a("span",[t._v("Twitter")])],1)])])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t._v("\n                    The source code is licensed under "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\n                    "),a("br"),t._v("\n                    The website content is licensed under "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC ANS 4.0")]),t._v(".\n                ")])])}]}},433:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"nav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"nav-left"},[n("router-link",{staticClass:"nav-item is-brand",attrs:{to:"/",exact:""}},[t.home?n("img",{attrs:{src:a(429),alt:"Buefy"}}):n("img",{attrs:{src:a(426),alt:"Buefy"}})])],1),t._v(" "),n("div",{staticClass:"nav-center"},[n("a",{staticClass:"nav-item",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[n("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),t._v(" "),n("a",{staticClass:"nav-item",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[n("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),t._v(" "),n("span",{staticClass:"nav-toggle",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("div",{staticClass:"nav-right nav-menu",class:{"is-active":t.isMenuActive}},[n("router-link",{staticClass:"nav-item",attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),n("router-link",{staticClass:"nav-item",attrs:{to:"/documentation"}},[t._v("Documentation")]),t._v(" "),n("div",{staticClass:"nav-item"},[n("a",{staticClass:"button is-outlined",class:t.home?"is-light":"is-twitter",on:{click:t.tweet}},[n("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),n("span",[t._v("Tweet")])],1)])],1)])])},staticRenderFns:[]}},439:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(431),s=a.n(n),i=a(430),o=a.n(i),r=a(71),c=a.n(r),l=a(70),u=a.n(l),v=a(72),p=a.n(v),f=a(69),_=a.n(f),m=a(68),h=a.n(m);e.default={components:{AppHeader:s.a,AppFooter:o.a},data:function(){return{currentTab:c.a,tabs:[{title:"Installation",component:c.a},{title:"General",component:u.a},{title:"Notices",component:p.a},{title:"Form",component:_.a},{title:"Data",component:h.a}]}},beforeRouteEnter:function(t,e,a){a(function(e){e.currentTab=t.meta.category})}}},476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("app-header"),t._v(" "),a("div",{staticClass:"hero is-primary"},[t._m(0),t._v(" "),a("div",{staticClass:"hero-foot"},[a("nav",{staticClass:"tabs is-boxed"},[a("div",{staticClass:"container"},[a("ul",t._l(t.tabs,function(e){return a("li",{key:e.title,class:{"is-active":t.currentTab===e.component}},[a("a",{on:{click:function(a){t.currentTab=e.component}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])])}))])])])]),t._v(" "),a("nav",{staticClass:"nav has-shadow"},[a("div",{staticClass:"container"},[a(t.currentTab,{tag:"component"})],1)]),t._v(" "),a("section",{staticClass:"section"},[a("router-view")],1),t._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("Documentation")]),t._v(" "),a("h2",{staticClass:"subtitle"},[t._v("Learn everything you need to start using Buefy ;)")])])])}]}}});
//# sourceMappingURL=2.e9d2c566b393a2f4d425.js.map