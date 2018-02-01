webpackJsonp([172],{1036:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("DefaultTemplate",t._b({},"DefaultTemplate",t.props,!1))},staticRenderFns:[]}},659:function(t,e,s){var a=s(0)(s(902),s(1036),null,null,null);t.exports=a.exports},661:function(t,e,s){"use strict";e.a={documentation:[{category:"Installation",pages:[{name:"Start",path:"/documentation/start"},{name:"Customization",path:"/documentation/customization"},{name:"Constructor options",path:"/documentation/constructor-options"}]},{category:"Layout",pages:[{name:"Layout & elements",path:"/documentation/layout"}]},{category:"UI components",pages:[{name:"Collapse",path:"/documentation/collapse"},{name:"Dialog",path:"/documentation/dialog"},{name:"Dropdown",path:"/documentation/dropdown"},{category:"Form controls",pages:[{name:"Autocomplete",path:"/documentation/autocomplete",isUpdated:!0},{name:"Checkbox",path:"/documentation/checkbox"},{name:"Datepicker",path:"/documentation/datepicker",isUpdated:!0},{name:"Field",path:"/documentation/field"},{name:"Input",path:"/documentation/input",isUpdated:!0},{name:"Radio",path:"/documentation/radio"},{name:"Select",path:"/documentation/select",isUpdated:!0},{name:"Switch",path:"/documentation/switch"},{name:"Taginput",path:"/documentation/taginput",isUpdated:!0},{name:"Timepicker",path:"/documentation/timepicker",isUpdated:!0},{name:"Upload",path:"/documentation/upload"}]},{name:"Icon",path:"/documentation/icon",isUpdated:!0},{name:"Loading",path:"/documentation/loading"},{name:"Message",path:"/documentation/message"},{name:"Modal",path:"/documentation/modal"},{name:"Notification",path:"/documentation/notification"},{name:"Pagination",path:"/documentation/pagination",isUpdated:!0},{name:"Snackbar",path:"/documentation/snackbar"},{name:"Table",path:"/documentation/table",isUpdated:!0},{name:"Tabs",path:"/documentation/tabs",isUpdated:!0},{name:"Tag",path:"/documentation/tag"},{name:"Toast",path:"/documentation/toast"},{name:"Tooltip",path:"/documentation/tooltip"}]}],extensions:[{category:"Extensions",pages:[{name:"Cleavejs (input format)",path:"/extensions/cleavejs"},{name:"Sortable (table sort)",path:"/extensions/sortablejs",isNew:!0}]}]}},662:function(t,e,s){t.exports=s.p+"static/img/buefy.1d65c18.png"},663:function(t,e){t.exports={name:"buefy",version:"0.6.3",homepage:"https://buefy.github.io",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",license:"MIT",main:"lib/index.js",files:["lib","src"],repository:{type:"git",url:"https://github.com/rafaelpimpa/buefy.git"},bugs:{url:"https://github.com/rafaelpimpa/buefy/issues"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",unit:"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit/specs docs test/e2e/specs","lint:fix":"eslint --ext .js,.vue src test/unit/specs test/e2e/specs docs --fix","build:lib:clean":"rimraf lib","build:lib:js":"vue build src/index.js --prod --lib Buefy --dist lib","build:lib:sass":"node-sass --output-style expanded --source-map true --include-path node_modules src/scss/buefy-build.scss lib/buefy.css","build:lib:autoprefix":"postcss --use autoprefixer --output lib/buefy.css lib/buefy.css","build:lib:cssnano":"postcss --use cssnano --no-map --output lib/buefy.min.css lib/buefy.css","build:lib":"npm run build:lib:clean && npm run build:lib:js && npm run build:lib:sass && npm run build:lib:autoprefix && npm run build:lib:cssnano","build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"^0.6.2"},peerDependencies:{vue:"^2.5.13"},devDependencies:{"@fortawesome/fontawesome-free-webfonts":"^1.0.3",autoprefixer:"^7.1.1",axios:"^0.16.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^6.2.10","babel-plugin-istanbul":"^4.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chai:"^3.5.0",chalk:"^1.1.3",chromedriver:"^2.27.2","cleave.js":"^1.0.1",clipboard:"^1.7.1","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","cross-env":"^4.0.0","cross-spawn":"^5.0.1","css-loader":"^0.28.0",cssnano:"^3.10.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.0","eslint-plugin-import":"^2.8.0","eslint-plugin-node":"^5.2.1","eslint-plugin-promise":"^3.6.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.2.0","eventsource-polyfill":"^0.9.6",express:"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","font-awesome":"^4.7.0","friendly-errors-webpack-plugin":"^1.1.3","highlight.js":"^9.12.0","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","inject-loader":"^3.0.0",karma:"^1.4.1","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.2","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.3.1","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"^2.0.2",lolex:"^1.5.2",mdi:"^2.0.46",mocha:"^3.2.0",nightwatch:"^0.9.12","node-sass":"^4.5.3",opn:"^4.0.2","optimize-css-assets-webpack-plugin":"^1.3.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.14","postcss-cli":"^4.0.0","raw-loader":"^0.5.1",rimraf:"^2.6.0","sass-loader":"^6.0.6",scrollreveal:"^3.3.6","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",sinon:"^2.1.0","sinon-chai":"^2.8.0",sortablejs:"^1.7.0","sw-precache-webpack-plugin":"^0.9.1","url-loader":"^0.5.8","vue-analytics":"^4.1.3","vue-cli":"2.8.2","vue-loader":"^12.1.0","vue-progressbar":"^0.7.2","vue-router":"^2.3.1","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.13",webpack:"^2.6.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},664:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(663),n=s.n(a),i=s(665),o=s.n(i),r=s(661);e.default={props:{light:Boolean},data:function(){return{menu:r.a,isMenuActive:!1,version:n.a.version,bulmaVersion:o.a.version}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,s="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa",a="status=1,width=575,height=400,top="+e+",left="+t;window.open(s,"",a)},closeMenu:function(){this.isMenuActive=!1},toggleHtmlClip:function(){document.documentElement.classList.toggle("is-clipped-touch",this.isMenuActive)}},created:function(){this.$eventHub.$on("close-menu",this.closeMenu)},beforeDestroy:function(){this.$eventHub.$off("close-menu")}}},665:function(t,e){t.exports={_from:"bulma@^0.6.1",_id:"bulma@0.6.2",_inBundle:!1,_integrity:"sha1-9LHRHVrMUaeWROsKKwsQZJ09cfU=",_location:"/bulma",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"bulma@^0.6.1",name:"bulma",escapedName:"bulma",rawSpec:"^0.6.1",saveSpec:null,fetchSpec:"^0.6.1"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/bulma/-/bulma-0.6.2.tgz",_shasum:"f4b1d11d5acc51a79644eb0a2b0b10649d3d71f5",_spec:"bulma@^0.6.1",_where:"C:\\projetos\\buefy",author:{name:"Jeremy Thomas",email:"bbxdesign@gmail.com",url:"https://jgthms.com"},bugs:{url:"https://github.com/jgthms/bulma/issues"},bundleDependencies:!1,deprecated:!1,description:"Modern CSS framework based on Flexbox",devDependencies:{autoprefixer:"^7.1.1","node-sass":"^4.5.3","postcss-cli":"^4.1.0",rimraf:"^2.6.1"},files:["css","sass","bulma.sass","LICENSE","README.md"],homepage:"https://bulma.io",keywords:["css","sass","flexbox","responsive","framework"],license:"MIT",main:"bulma.sass",name:"bulma",repository:{type:"git",url:"git+https://github.com/jgthms/bulma.git"},scripts:{build:"npm run build-clean && npm run build-sass && npm run build-autoprefix","build-autoprefix":"postcss --use autoprefixer --map false --output css/bulma.css css/bulma.css","build-clean":"rimraf css","build-sass":"node-sass --output-style expanded --source-map true bulma.sass css/bulma.css",deploy:"npm run build && npm run docs",docs:"npm run docs-sass && npm run docs-autoprefix","docs-autoprefix":"postcss --use autoprefixer --map false --output docs/css/bulma-docs.css docs/css/bulma-docs.css","docs-sass":"node-sass --output-style expanded docs/bulma-docs.sass docs/css/bulma-docs.css",start:"npm run build-sass -- --watch","start-docs":"npm run docs-sass -- --watch","start-test":"npm run test-sass -- --watch","test-sass":"node-sass --output-style expanded docs/bulma-test.sass docs/css/bulma-test.css","test-scss":"node-sass --output-style expanded docs/bulma-test.scss docs/css/bulma-test.css"},style:"bulma/css/bulma.css",version:"0.6.2"}},669:function(t,e,s){t.exports=s.p+"static/img/buefy-light.7df103a.png"},670:function(t,e,s){var a=s(0)(null,s(672),null,null,null);t.exports=a.exports},671:function(t,e,s){var a=s(0)(s(664),s(673),null,null,null);t.exports=a.exports},672:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("p",[t._v("\n                Made with "),s("b-icon",{attrs:{icon:"heart",type:"is-danger"}}),t._v(" by\n                "),s("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")]),t._v(".\n            ")],1),t._v(" "),t._m(0),t._v(" "),s("b-field",[s("p",{staticClass:"control"},[s("a",{staticClass:"button",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[s("b-icon",{attrs:{icon:"github-circle"}}),t._v(" "),s("span",[t._v("GitHub")])],1)]),t._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[s("b-icon",{attrs:{icon:"twitter"}}),t._v(" "),s("span",[t._v("Twitter")])],1)])])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t._v("\n                    The source code is licensed under\n                    "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\n\n                    "),s("br"),t._v("\n                    The website content is licensed under\n                    "),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC ANS 4.0")]),t._v(".\n                ")])])}]}},673:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar header has-shadow",class:{"is-primary is-transparent":t.light}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",title:"Buefy: lightweight UI components for Vue.js based on Bulma","active-class":""}},[t.light?a("img",{attrs:{src:s(669),alt:"Buefy"}}):a("img",{attrs:{src:s(662),alt:"Buefy"}})]),t._v(" "),a("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank",title:"Github"}},[a("b-icon",{attrs:{icon:"github-circle"}})],1),t._v(" "),a("a",{staticClass:"navbar-item",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank",title:"Twitter"}},[a("b-icon",{attrs:{icon:"twitter"}})],1),t._v(" "),a("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])],1),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isMenuActive}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[t._v("\n                    Home\n                ")]),t._v(" "),a("hr",{staticClass:"navbar-divider",staticStyle:{display:"block"}}),t._v(" "),a("router-link",{staticClass:"navbar-item is-hidden-touch",attrs:{to:"/documentation"}},[t._v("\n                    Documentation\n                ")]),t._v(" "),a("div",{staticClass:"navbar-item has-dropdown is-hoverable is-hidden-desktop"},[a("div",{staticClass:"navbar-item"},[t._v("Documentation")]),t._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[t._l(t.menu.documentation,function(e){return[a("div",{key:e.category,staticClass:"navbar-item is-subitem"},[t._v("\n                                "+t._s(e.category)+"\n                            ")]),t._v(" "),t._l(e.pages,function(e){return[e.name?a("router-link",{key:e.name,staticClass:"navbar-item",attrs:{to:e.path}},[a("span",{staticClass:"navbar-item-text"},[t._v(t._s(e.name))]),t._v(" "),e.isNew?a("b-tag",{attrs:{type:"is-success"}},[t._v("New!")]):t._e(),t._v(" "),e.isUpdated?a("b-tag",{attrs:{type:"is-info"}},[t._v("Updated")]):t._e()],1):[a("div",{key:e.name,staticClass:"navbar-item"},[t._v("\n                                        "+t._s(e.category)+"\n                                    ")]),t._v(" "),t._l(e.pages,function(e){return a("router-link",{key:e.name,staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:e.path}},[a("span",{staticClass:"navbar-item-text"},[t._v(t._s(e.name))]),t._v(" "),e.isNew?a("b-tag",{attrs:{type:"is-success"}},[t._v("\n                                            New!\n                                        ")]):t._e(),t._v(" "),e.isUpdated?a("b-tag",{attrs:{type:"is-info"}},[t._v("\n                                            Updated\n                                        ")]):t._e()],1)})]]})]})],2)]),t._v(" "),a("hr",{staticClass:"navbar-divider",staticStyle:{display:"block"}}),t._v(" "),a("router-link",{staticClass:"navbar-item is-hidden-touch",attrs:{to:"/extensions"}},[t._v("\n                    Extensions\n                ")]),t._v(" "),a("div",{staticClass:"navbar-item has-dropdown is-hoverable is-hidden-desktop"},[a("div",{staticClass:"navbar-item"},[t._v("Extensions")]),t._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[t._l(t.menu.extensions,function(e){return t._l(e.pages,function(e){return a("router-link",{key:e.name,staticClass:"navbar-item",attrs:{to:e.path}},[a("span",{staticClass:"navbar-item-text"},[t._v(t._s(e.name))]),t._v(" "),e.isNew?a("b-tag",{attrs:{type:"is-success"}},[t._v("New!")]):t._e()],1)})})],2)]),t._v(" "),a("hr",{staticClass:"navbar-divider",staticStyle:{display:"block"}}),t._v(" "),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("div",{staticClass:"navbar-link"},[t._v("Info")]),t._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[a("strong",{staticClass:"navbar-item version"},[a("span",{staticClass:"has-text-primary"},[t._v("Buefy version")]),t._v(" "),a("span",{staticClass:"has-text-grey"},[t._v(t._s(t.version))])]),t._v(" "),a("strong",{staticClass:"navbar-item version"},[a("span",{staticClass:"has-text-bulma"},[t._v("Bulma version")]),t._v(" "),a("span",{staticClass:"has-text-grey"},[t._v(t._s(t.bulmaVersion))])]),t._v(" "),a("hr",{staticClass:"navbar-divider"}),t._v(" "),a("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/rafaelpimpa/buefy/releases",target:"_blank"}},[t._v("\n                            Changelogs\n                        ")])])]),t._v(" "),a("div",{staticClass:"navbar-item"},[a("a",{staticClass:"button is-outlined",class:t.light?"is-light":"is-twitter",on:{click:t.tweet}},[a("b-icon",{attrs:{icon:"twitter"}}),t._v(" "),a("span",[t._v("Tweet")])],1)])],1)])])])},staticRenderFns:[]}},674:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(671),n=s.n(a),i=s(670),o=s.n(i),r=s(755),l=s.n(r),c=s(661);e.default={components:{TheHeader:n.a,TheFooter:o.a,TheSidebar:l.a},props:{title:String,subtitle:String,namespace:String},computed:{menu:function(){return c.a[this.namespace]}}}},675:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:Array},data:function(){return{isExpanded:!0}},methods:{toggle:function(){this.isExpanded=!this.isExpanded}}}},754:function(t,e,s){var a=s(0)(s(674),s(841),null,null,null);t.exports=a.exports},755:function(t,e,s){var a=s(0)(s(675),s(793),null,null,null);t.exports=a.exports},793:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"sidebar menu is-hidden-touch"},[t._l(t.data,function(e,a){return[s("p",{key:e.category,staticClass:"menu-label has-text-weight-bold"},[t._v("\n            "+t._s(e.category)+"\n        ")]),t._v(" "),s("ul",{key:a,staticClass:"menu-list",staticStyle:{"margin-bottom":"2.5rem"}},t._l(e.pages,function(e){return s("li",{key:e.name},[e.name?s("router-link",{attrs:{to:e.path}},[s("span",{staticClass:"menu-text"},[t._v(t._s(e.name))]),t._v(" "),e.isNew?s("b-tag",{attrs:{type:"is-success"}},[t._v("New!")]):t._e(),t._v(" "),e.isUpdated?s("b-tag",{attrs:{type:"is-info"}},[t._v("Updated")]):t._e()],1):[s("a",{attrs:{role:"button"},on:{click:t.toggle}},[s("b-icon",{staticClass:"chevron-icon",attrs:{icon:"chevron-right",size:"is-small","custom-class":t.isExpanded?"mdi-rotate-90":""}}),t._v(" "),s("span",{staticClass:"menu-text"},[t._v(t._s(e.category))])],1),t._v(" "),s("ul",{class:{"is-active":t.isExpanded}},t._l(e.pages,function(e){return s("li",{key:e.name},[s("router-link",{attrs:{to:e.path}},[s("span",{staticClass:"menu-text"},[t._v(t._s(e.name))]),t._v(" "),e.isNew?s("b-tag",{attrs:{type:"is-success"}},[t._v("New!")]):t._e(),t._v(" "),e.isUpdated?s("b-tag",{attrs:{type:"is-info"}},[t._v("Updated")]):t._e()],1)],1)}))]],2)}))]})],2)},staticRenderFns:[]}},841:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{class:t.namespace},[s("TheHeader",{ref:"header"}),t._v(" "),s("div",{staticClass:"hero is-primary"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])])])]),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"container is-fullhd template-horizontal"},[s("TheSidebar",{attrs:{data:t.menu}}),t._v(" "),s("router-view")],1)]),t._v(" "),s("TheFooter")],1)},staticRenderFns:[]}},902:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(754),n=s.n(a);e.default={components:{DefaultTemplate:n.a},data:function(){return{props:{title:"Extensions",subtitle:"See how you can improve Buefy with other packages!",namespace:"extensions"}}}}}});
//# sourceMappingURL=172.0639afeb5eea6f1905fd.js.map