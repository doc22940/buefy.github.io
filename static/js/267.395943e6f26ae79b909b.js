webpackJsonp([267],{1443:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1444),n=s.n(a),i=s(872),o=s.n(i),r=s(877),l=s.n(r),c=s(1447),u=s.n(c),d=s(1450),p=s.n(d),m=s(1453),b=s.n(m);e.default={components:{TheHeader:n.a,TheNavbar:o.a,TheFooter:l.a,TheSidebar:u.a,ImproveThis:p.a},data:function(){return{menu:[],meta:{}}},methods:{setMeta:function(t){this.meta=t,this.menu=b.a[this.meta.menu]},scrollTo:function(t){location.href=t}},mounted:function(){var t=this;this.$eventHub.$on("navigate",this.setMeta),this.setMeta(this.$router.currentRoute.meta),this.$route.hash&&this.$nextTick(function(){return t.scrollTo(t.$route.hash)})}}},1444:function(t,e,s){var a=s(0)(s(1445),s(1446),null,null,null);t.exports=a.exports},1445:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(315),n=s.n(a);e.default={props:{breadcrumb:Array,title:String,subtitle:String},data:function(){return{routes:n.a}}}},1446:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"docs-header"},[s("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[s("ul",[t._l(t.breadcrumb,function(e,a){return[t.routes[e]?s("li",{key:e,class:{"is-active":a===t.breadcrumb.length-1}},[s("router-link",{attrs:{to:t.routes[e].path}},[t._v("\n                        "+t._s(t.routes[e].breadTitle||t.routes[e].title)+"\n                    ")])],1):t._e()]})],2)]),t._v(" "),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),s("h2",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.subtitle)}})])},staticRenderFns:[]}},1447:function(t,e,s){var a=s(0)(s(1448),s(1449),null,null,null);t.exports=a.exports},1448:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(315),n=s.n(a);e.default={props:{data:Array},methods:{normalizedData:function(t){return t.map(function(t){return"string"==typeof t?n.a[t]:t})},backToTop:function(){window.scroll({top:0,behavior:"smooth"})}}}},1449:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"sidebar"},[s("div",{staticClass:"sidebar-menu"},[t._l(t.data,function(e,a){return[s("p",{key:e.category,staticClass:"sidebar-label"},[t._v("\n                "+t._s(e.category)+"\n            ")]),t._v(" "),s("ul",{key:a},t._l(t.normalizedData(e.pages),function(e){return s("li",{key:e.title},[e.title?s("router-link",{attrs:{to:e.path}},[s("span",{staticClass:"sidebar-menu-text"},[t._v(t._s(e.title))]),t._v(" "),e.isNew?s("b-tag",{attrs:{type:"is-success"}},[t._v("New!")]):t._e(),t._v(" "),e.isUpdated?s("b-tag",{attrs:{type:"is-info"}},[t._v("Updated")]):t._e()],1):[s("p",[t._v(t._s(e.category))]),t._v(" "),s("ul",t._l(t.normalizedData(e.pages),function(e){return s("li",{key:e.title},[s("router-link",{attrs:{to:e.path}},[s("span",{staticClass:"sidebar-menu-text"},[t._v(t._s(e.title))]),t._v(" "),e.isNew?s("b-tag",{attrs:{type:"is-success"}},[t._v("New!")]):t._e(),t._v(" "),e.isUpdated?s("b-tag",{attrs:{type:"is-info"}},[t._v("\n                                        Updated\n                                    ")]):t._e()],1)],1)}))]],2)}))]})],2),t._v(" "),s("a",{staticClass:"sidebar-btt",attrs:{role:"button"},on:{click:t.backToTop}},[s("b-icon",{attrs:{icon:"arrow-expand-up",size:"is-small"}}),t._v(" "),s("span",[t._v("Back to top")])],1)])},staticRenderFns:[]}},1450:function(t,e,s){var a=s(0)(s(1451),s(1452),null,null,null);t.exports=a.exports},1451:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{githubPath:String}}},1452:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero docs-improve-this"},[s("div",{staticClass:"hero-body"},[t._m(0),t._v(" "),s("p",[s("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://github.com/buefy/buefy/blob/dev/docs/"+t.githubPath,target:"_blank"}},[t._v("\n                Improve this page on GitHub\n            ")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"has-text-grey"},[t._v("\n            This page is "),s("strong",{staticClass:"has-text-grey-dark"},[t._v("open source")]),t._v(".\n            Noticed a typo or something's unclear?\n        ")])}]}},1453:function(t,e){t.exports={documentation:[{category:"Installation",pages:["documentation/start","documentation/customization","documentation/constructor-options"]},{category:"Layout",pages:["documentation/layout"]},{category:"UI components",pages:["documentation/button","documentation/collapse","documentation/dialog","documentation/dropdown",{category:"Form controls",pages:["documentation/autocomplete","documentation/checkbox","documentation/clockpicker","documentation/datepicker","documentation/field","documentation/input","documentation/numberinput","documentation/radio","documentation/rate","documentation/select","documentation/slider","documentation/switch","documentation/taginput","documentation/timepicker","documentation/upload"]},"documentation/icon","documentation/loading","documentation/menu","documentation/message","documentation/modal","documentation/navbar","documentation/notification","documentation/pagination","documentation/progress","documentation/snackbar","documentation/steps","documentation/table","documentation/tabs","documentation/tag","documentation/toast","documentation/tooltip"]}],extensions:[{category:"Input format",pages:["extensions/cleavejs"]},{category:"Validation",pages:["extensions/veevalidate"]},{category:"Drag & drop",pages:["extensions/sortablejs"]}]}},1454:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("TheNavbar"),t._v(" "),s("section",{staticClass:"documentation"},[t.meta.hideSidebar?t._e():s("div",{staticClass:"sidebar-bg"}),t._v(" "),s("div",{staticClass:"container is-fullhd docs-template-horizontal"},[t.meta.hideSidebar?t._e():s("TheSidebar",{attrs:{data:t.menu}}),t._v(" "),s("div",{staticClass:"docs-main"},[s("div",{staticClass:"docs-main-container"},[s("TheHeader",t._b({},"TheHeader",t.meta,!1)),t._v(" "),s("router-view"),t._v(" "),t.meta.githubPath?[s("ImproveThis",t._b({},"ImproveThis",t.meta,!1))]:t._e()],2)])],1)]),t._v(" "),s("TheFooter")],1)},staticRenderFns:[]}},834:function(t,e,s){var a=s(0)(s(1443),s(1454),null,null,null);t.exports=a.exports},839:function(t,e){t.exports={name:"buefy",version:"0.8.5",homepage:"https://buefy.org",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",maintainers:["Walter Tommasi <tommsi20@gmail.com>"],license:"MIT",main:"dist/cjs/index.js",module:"dist/esm/index.js",unpkg:"dist/buefy.min.js",typings:"types/index.d.ts",sideEffects:["*.css","*.scss"],files:["dist","src","types/*.d.ts"],repository:{type:"git",url:"https://github.com/buefy/buefy.git"},bugs:{url:"https://github.com/buefy/buefy/issues"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",lint:"eslint --ext .js,.vue src docs","lint:fix":"eslint --ext .js,.vue src docs --fix","lint:staged":"lint-staged",unit:"jest --runInBand",test:"npm run lint && npm run unit","test:watch":"npm run unit -- --watchAll","build:js":"rollup -c && rollup -c --environment MINIFY","build:js:watch":"rollup -c --watch","build:scss":"node-sass --output-style expanded src/scss/buefy-build.scss | node ./build/banner.js > dist/buefy.css && cleancss -o dist/buefy.min.css dist/buefy.css","build:scss:watch":"node-sass src/scss/buefy-build.scss --w","build:lib":"npm run build:js && npm run build:scss","build:lib:watch":'concurrently "npm run build:js:watch" "npm run build:scss:watch " ',"build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs",cov:"./node_modules/codcov/bin/codcov"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"0.7.5"},peerDependencies:{vue:"^2.5.13"},devDependencies:{"@babel/core":"^7.3.4","@babel/plugin-syntax-dynamic-import":"^7.2.0","@babel/preset-env":"^7.3.4","@fortawesome/fontawesome-free":"5.3.1","@mdi/font":"2.7.94","@vue/test-utils":"^1.0.0-beta.25",autoprefixer:"7.1.1",axios:"0.18.1","babel-core":"6.25.0","babel-eslint":"7.1.1","babel-jest":"22.1.0","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.22.0","babel-preset-env":"1.3.2","babel-preset-stage-2":"6.22.0","babel-register":"6.22.0",chalk:"1.1.3","clean-css-cli":"4.3.0","cleave.js":"1.0.1",clipboard:"1.7.1",codecov:"3.0.0","connect-history-api-fallback":"1.3.0","copy-webpack-plugin":"4.3.1","cross-env":"4.0.0","cross-spawn":"5.0.1","css-loader":"0.28.0",eslint:"4.18.2","eslint-config-buefy":"0.0.3","eventsource-polyfill":"0.9.6",express:"4.14.1","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.1","font-awesome":"4.7.0","friendly-errors-webpack-plugin":"1.6.1","highlight.js":"9.12.0","html-webpack-plugin":"2.30.1","http-proxy-middleware":"0.17.3",jest:"23.5.0","jest-serializer-vue":"0.3.0","lint-staged":"6.1.1","node-sass":"4.11.0",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0","optimize-js-plugin":"0.0.4",ora:"1.2.0","pre-commit":"1.2.2","prerender-spa-plugin":"3.4.0","raw-loader":"0.5.1",rimraf:"2.6.0",rollup:"1.17.0","rollup-copy-plugin":"0.1.0","rollup-plugin-babel":"4.3.2","rollup-plugin-commonjs":"9.2.1","rollup-plugin-node-resolve":"4.0.1","rollup-plugin-replace":"2.1.0","rollup-plugin-terser":"4.0.4","rollup-plugin-vue":"5.0.0","sass-loader":"6.0.6",scrollreveal:"3.3.6",semver:"5.3.0",shelljs:"0.8.3",sortablejs:"1.7.0","uglifyjs-webpack-plugin":"1.2.5","url-loader":"0.5.8","vee-validate":"2.1.0-beta.9",vue:"2.5.13","vue-analytics":"4.1.3","vue-jest":"2.5.0","vue-loader":"12.1.0","vue-progressbar":"0.7.2","vue-router":"2.3.1","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.13",webpack:"3.10.0","webpack-bundle-analyzer":"2.9.2","webpack-dev-server":"2.11.1","webpack-hot-middleware":"2.21.0","webpack-merge":"4.1.2"},"lint-staged":{"*.{vue,js}":["lint --fix","git add"]},"pre-commit":"lint:staged",engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},840:function(t,e,s){t.exports=s.p+"static/img/buefy.1d65c18.png"},872:function(t,e,s){var a=s(0)(s(873),s(875),null,null,null);t.exports=a.exports},873:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(839),n=s.n(a),i=s(874),o=s.n(i);e.default={props:{light:Boolean},data:function(){return{isMenuActive:!1,version:n.a.version,bulmaVersion:o.a.version}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,s="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa, @walter_tommasi",a="status=1,width=575,height=400,top="+e+",left="+t;window.open(s,"",a)},closeMenu:function(){this.isMenuActive=!1},toggleHtmlClip:function(){document.documentElement.classList.toggle("is-clipped-touch",this.isMenuActive)}},mounted:function(){this.$eventHub.$on("navigate",this.closeMenu)}}},874:function(t,e){t.exports={_args:[["bulma@0.7.5","C:\\Users\\Walter\\Github\\buefy"]],_from:"bulma@0.7.5",_id:"bulma@0.7.5",_inBundle:!1,_integrity:"sha512-cX98TIn0I6sKba/DhW0FBjtaDpxTelU166pf7ICXpCCuplHWyu6C9LYZmL5PEsnePIeJaiorsTEzzNk3Tsm1hw==",_location:"/bulma",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"bulma@0.7.5",name:"bulma",escapedName:"bulma",rawSpec:"0.7.5",saveSpec:null,fetchSpec:"0.7.5"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/bulma/-/bulma-0.7.5.tgz",_spec:"0.7.5",_where:"C:\\Users\\Walter\\Github\\buefy",author:{name:"Jeremy Thomas",email:"bbxdesign@gmail.com",url:"https://jgthms.com"},bugs:{url:"https://github.com/jgthms/bulma/issues"},description:"Modern CSS framework based on Flexbox",devDependencies:{autoprefixer:"^9.5.1","clean-css-cli":"^4.3.0","node-sass":"^4.12.0","postcss-cli":"^6.1.2",rimraf:"^2.6.3"},files:["css","sass","bulma.sass","LICENSE","README.md"],homepage:"https://bulma.io",keywords:["css","sass","flexbox","responsive","framework"],license:"MIT",main:"bulma.sass",name:"bulma",repository:{type:"git",url:"git+https://github.com/jgthms/bulma.git"},scripts:{build:"npm run build-clean && npm run build-sass && npm run build-autoprefix && npm run build-cleancss","build-autoprefix":"postcss --use autoprefixer --map false --output css/bulma.css css/bulma.css","build-clean":"rimraf css","build-cleancss":"cleancss -o css/bulma.min.css css/bulma.css","build-sass":"node-sass --output-style expanded --source-map true bulma.sass css/bulma.css",deploy:"npm run build",start:"npm run build-sass -- --watch"},style:"bulma/css/bulma.min.css",unpkg:"css/bulma.css",version:"0.7.5"}},875:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar docs-navbar is-spaced has-shadow",class:{"is-primary is-transparent":t.light}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",title:"Buefy: lightweight UI components for Vue.js based on Bulma","active-class":""}},[t.light?a("img",{attrs:{src:s(876),alt:"Buefy"}}):a("img",{attrs:{src:s(840),alt:"Buefy"}})]),t._v(" "),a("a",{staticClass:"navbar-item",class:{"has-text-dark":!t.light},attrs:{href:"https://github.com/buefy/buefy",target:"_blank",title:"Github"}},[a("b-icon",{attrs:{icon:"github-circle"}})],1),t._v(" "),a("a",{staticClass:"navbar-item",class:{"has-text-discord":!t.light},attrs:{href:"https://discordapp.com/invite/ZkdFJMr",target:"_blank",title:"Discord"}},[a("b-icon",{attrs:{icon:"discord"}})],1),t._v(" "),a("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])],1),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isMenuActive}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[t._v("\n                    Home\n                ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation"}},[t._v("\n                    Documentation\n                ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/extensions"}},[t._v("\n                    Extensions\n                ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/expo"}},[t._v("\n                    Expo\n                ")]),t._v(" "),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("div",{staticClass:"navbar-link"},[t._v("Info")]),t._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[a("strong",{staticClass:"navbar-item is-version"},[a("span",{staticClass:"has-text-primary"},[t._v("Buefy version")]),t._v(" "),a("span",{staticClass:"has-text-grey"},[t._v(t._s(t.version))])]),t._v(" "),a("strong",{staticClass:"navbar-item is-version"},[a("span",{staticClass:"has-text-bulma"},[t._v("Bulma version")]),t._v(" "),a("span",{staticClass:"has-text-grey"},[t._v(t._s(t.bulmaVersion))])]),t._v(" "),a("hr",{staticClass:"navbar-divider"}),t._v(" "),a("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/buefy/buefy/releases",target:"_blank"}},[t._v("\n                            Changelogs\n                        ")])])]),t._v(" "),a("div",{staticClass:"navbar-item"},[a("a",{staticClass:"button is-outlined",class:t.light?"is-light":"is-twitter",on:{click:t.tweet}},[a("b-icon",{attrs:{icon:"twitter"}}),t._v(" "),a("span",[t._v("Tweet")])],1)])],1)])])])},staticRenderFns:[]}},876:function(t,e,s){t.exports=s.p+"static/img/buefy-light.7df103a.png"},877:function(t,e,s){var a=s(0)(null,s(878),null,null,null);t.exports=a.exports},878:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("b-field",[s("p",{staticClass:"control"},[s("a",{staticClass:"button",attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[s("b-icon",{attrs:{icon:"github-circle"}}),t._v(" "),s("span",[t._v("GitHub")])],1)]),t._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-patreon",attrs:{href:"https://www.patreon.com/jtommy",target:"_blank"}},[s("b-icon",{attrs:{icon:"patreon"}}),t._v(" "),s("span",[t._v("Patreon")])],1)])])],1),t._v(" "),s("div",{staticClass:"column"},[s("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/",exact:""}},[t._v("\n                        Home\n                    ")]),t._v(" "),s("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/documentation"}},[t._v("\n                        Documentation\n                    ")]),t._v(" "),s("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/extensions"}},[t._v("\n                        Extensions\n                    ")]),t._v(" "),s("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/expo"}},[t._v("\n                        Expo\n                    ")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n                        Maintained by\n                        "),s("a",{attrs:{href:"https://twitter.com/walter_tommasi",target:"_blank"}},[t._v("Walter Tommasi")]),t._v(".\n                        Authored by\n                        "),s("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t._v("\n                            Buefy's source code is licensed under\n                            "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\n                        ")])])}]}}});
//# sourceMappingURL=267.395943e6f26ae79b909b.js.map