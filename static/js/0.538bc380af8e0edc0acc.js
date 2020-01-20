webpackJsonp([0],{1297:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(903),i=e.n(a),n=e(908),r=e.n(n);t.default={name:"App",components:{TheNavbar:i.a,TheFooter:r.a}}},1298:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("TheNavbar"),s._v(" "),e("section",{staticClass:"hero is-medium is-light"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large",type:"is-primary"}}),s._v(" "),e("h1",{staticClass:"title"},[s._v("\r\n                        "+s._s(s.$route.meta.title)+"\r\n                    ")]),s._v(" "),e("h2",{staticClass:"subtitle"},[s._v("\r\n                        "+s._s(s.$route.meta.subtitle)+"\r\n                    ")]),s._v(" "),e("b-button",{attrs:{tag:"router-link",to:"/",type:"is-primary"}},[s._v("\r\n                        Go to Homepage\r\n                    ")])],1)])]),s._v(" "),e("TheFooter")],1)},staticRenderFns:[]}},55:function(s,t,e){var a=e(0)(e(1297),e(1298),null,null,null);s.exports=a.exports},900:function(s,t){s.exports={name:"buefy",version:"0.8.10",homepage:"https://buefy.org",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",maintainers:["Walter Tommasi <tommsi20@gmail.com>"],license:"MIT",main:"dist/cjs/index.js",module:"dist/esm/index.js",unpkg:"dist/buefy.min.js",typings:"types/index.d.ts",sideEffects:["*.css","*.scss"],files:["dist","src","types/*.d.ts"],repository:{type:"git",url:"https://github.com/buefy/buefy.git"},bugs:{url:"https://github.com/buefy/buefy/issues"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",lint:"eslint --ext .js,.vue src docs","lint:fix":"eslint --ext .js,.vue src docs --fix","lint:staged":"lint-staged",unit:"jest --runInBand",test:"npm run lint && npm run unit","test:watch":"npm run unit -- --watchAll","build:js":"rollup -c && rollup -c --environment MINIFY","build:js:watch":"rollup -c --watch","build:scss":"node-sass --output-style expanded src/scss/buefy-build.scss | node ./build/banner.js > dist/buefy.css && cleancss -o dist/buefy.min.css dist/buefy.css","build:scss:watch":"node-sass src/scss/buefy-build.scss --w","build:lib":"npm run build:js && npm run build:scss","build:lib:watch":'concurrently "npm run build:js:watch" "npm run build:scss:watch " ',"build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs",cov:"./node_modules/codcov/bin/codcov"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"0.7.5"},peerDependencies:{vue:"^2.5.18"},devDependencies:{"@applitools/eyes-cypress":"3.7.5","@babel/core":"7.3.4","@babel/plugin-syntax-dynamic-import":"7.2.0","@babel/preset-env":"7.3.4","@fortawesome/fontawesome-free":"5.3.1","@mdi/font":"2.7.94","@vue/test-utils":"1.0.0-beta.25",autoprefixer:"7.1.1",axios:"0.18.1","babel-core":"6.25.0","babel-eslint":"7.1.1","babel-jest":"22.1.0","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.22.0","babel-preset-env":"1.3.2","babel-preset-stage-2":"6.22.0","babel-register":"6.22.0",chalk:"1.1.3","clean-css-cli":"4.3.0","cleave.js":"1.0.1",clipboard:"1.7.1",codecov:"3.0.0","connect-history-api-fallback":"1.3.0","copy-webpack-plugin":"4.3.1","cross-env":"4.0.0","cross-spawn":"5.0.1","css-loader":"0.28.0",cypress:"3.4.1",eslint:"4.18.2","eslint-config-buefy":"0.0.3","eventsource-polyfill":"0.9.6",express:"4.14.1","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.1","font-awesome":"4.7.0","friendly-errors-webpack-plugin":"1.6.1","highlight.js":"9.12.0","html-webpack-plugin":"2.30.1","http-proxy-middleware":"0.17.3",jest:"23.5.0","jest-serializer-vue":"0.3.0","lint-staged":"6.1.1","node-sass":"4.11.0",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0","optimize-js-plugin":"0.0.4",ora:"1.2.0","pre-commit":"1.2.2","prerender-spa-plugin":"3.4.0","raw-loader":"0.5.1",rimraf:"2.6.0",rollup:"1.17.0","rollup-copy-plugin":"0.1.0","rollup-plugin-babel":"4.3.2","rollup-plugin-commonjs":"9.2.1","rollup-plugin-node-resolve":"4.0.1","rollup-plugin-replace":"2.1.0","rollup-plugin-terser":"4.0.4","rollup-plugin-vue":"5.0.0","sass-loader":"6.0.6",scrollreveal:"3.3.6",semver:"5.3.0",shelljs:"0.8.3",sinon:"7.5.0",sortablejs:"1.7.0","uglifyjs-webpack-plugin":"1.2.5","url-loader":"0.5.8","vee-validate":"2.1.0-beta.9",vue:"2.5.18","vue-analytics":"4.1.3","vue-jest":"2.5.0","vue-loader":"12.1.0","vue-progressbar":"0.7.2","vue-router":"2.3.1","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.18",webpack:"3.10.0","webpack-bundle-analyzer":"2.9.2","webpack-dev-server":"2.11.1","webpack-hot-middleware":"2.21.0","webpack-merge":"4.1.2"},"lint-staged":{"*.{vue,js}":["lint --fix","git add"]},"pre-commit":"lint:staged",engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},901:function(s,t,e){s.exports=e.p+"static/img/buefy.1d65c18.png"},903:function(s,t,e){var a=e(0)(e(904),e(906),null,null,null);s.exports=a.exports},904:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(900),i=e.n(a),n=e(905),r=e.n(n);t.default={props:{light:Boolean},data:function(){return{isMenuActive:!1,version:i.a.version,bulmaVersion:r.a.version}},methods:{tweet:function(){var s=(window.screen.width-575)/2,t=(window.screen.height-400)/2,e="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa, @walter_tommasi",a="status=1,width=575,height=400,top="+t+",left="+s;window.open(e,"",a)},closeMenu:function(){this.isMenuActive=!1},toggleHtmlClip:function(){document.documentElement.classList.toggle("is-clipped-touch",this.isMenuActive)}},mounted:function(){this.$eventHub.$on("navigate",this.closeMenu)}}},905:function(s,t){s.exports={_args:[["bulma@0.7.5","C:\\Users\\Walter\\Github\\buefy"]],_from:"bulma@0.7.5",_id:"bulma@0.7.5",_inBundle:!1,_integrity:"sha512-cX98TIn0I6sKba/DhW0FBjtaDpxTelU166pf7ICXpCCuplHWyu6C9LYZmL5PEsnePIeJaiorsTEzzNk3Tsm1hw==",_location:"/bulma",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"bulma@0.7.5",name:"bulma",escapedName:"bulma",rawSpec:"0.7.5",saveSpec:null,fetchSpec:"0.7.5"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/bulma/-/bulma-0.7.5.tgz",_spec:"0.7.5",_where:"C:\\Users\\Walter\\Github\\buefy",author:{name:"Jeremy Thomas",email:"bbxdesign@gmail.com",url:"https://jgthms.com"},bugs:{url:"https://github.com/jgthms/bulma/issues"},description:"Modern CSS framework based on Flexbox",devDependencies:{autoprefixer:"^9.5.1","clean-css-cli":"^4.3.0","node-sass":"^4.12.0","postcss-cli":"^6.1.2",rimraf:"^2.6.3"},files:["css","sass","bulma.sass","LICENSE","README.md"],homepage:"https://bulma.io",keywords:["css","sass","flexbox","responsive","framework"],license:"MIT",main:"bulma.sass",name:"bulma",repository:{type:"git",url:"git+https://github.com/jgthms/bulma.git"},scripts:{build:"npm run build-clean && npm run build-sass && npm run build-autoprefix && npm run build-cleancss","build-autoprefix":"postcss --use autoprefixer --map false --output css/bulma.css css/bulma.css","build-clean":"rimraf css","build-cleancss":"cleancss -o css/bulma.min.css css/bulma.css","build-sass":"node-sass --output-style expanded --source-map true bulma.sass css/bulma.css",deploy:"npm run build",start:"npm run build-sass -- --watch"},style:"bulma/css/bulma.min.css",unpkg:"css/bulma.css",version:"0.7.5"}},906:function(s,t,e){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("nav",{staticClass:"navbar docs-navbar is-spaced has-shadow",class:{"is-primary is-transparent":s.light}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",title:"Buefy: lightweight UI components for Vue.js based on Bulma","active-class":""}},[s.light?a("img",{attrs:{src:e(907),alt:"Buefy"}}):a("img",{attrs:{src:e(901),alt:"Buefy"}})]),s._v(" "),a("a",{staticClass:"navbar-item",class:{"has-text-dark":!s.light},attrs:{href:"https://github.com/buefy/buefy",target:"_blank",title:"Github"}},[a("b-icon",{attrs:{icon:"github-circle"}})],1),s._v(" "),a("a",{staticClass:"navbar-item",class:{"has-text-discord":!s.light},attrs:{href:"https://discordapp.com/invite/ZkdFJMr",target:"_blank",title:"Discord"}},[a("b-icon",{attrs:{icon:"discord"}})],1),s._v(" "),a("span",{staticClass:"navbar-burger burger",class:{"is-active":s.isMenuActive},on:{click:function(t){s.isMenuActive=!s.isMenuActive}}},[a("span"),s._v(" "),a("span"),s._v(" "),a("span")])],1),s._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":s.isMenuActive}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[s._v("\r\n                        Home\r\n                    ")]),s._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation"}},[s._v("\r\n                        Documentation\r\n                    ")]),s._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/extensions"}},[s._v("\r\n                        Extensions\r\n                    ")]),s._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/expo"}},[s._v("\r\n                        Expo\r\n                    ")]),s._v(" "),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("div",{staticClass:"navbar-link"},[s._v("Info")]),s._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[a("strong",{staticClass:"navbar-item is-version"},[a("span",{staticClass:"has-text-primary"},[s._v("Buefy version")]),s._v(" "),a("span",{staticClass:"has-text-grey"},[s._v(s._s(s.version))])]),s._v(" "),a("strong",{staticClass:"navbar-item is-version"},[a("span",{staticClass:"has-text-bulma"},[s._v("Bulma version")]),s._v(" "),a("span",{staticClass:"has-text-grey"},[s._v(s._s(s.bulmaVersion))])]),s._v(" "),a("hr",{staticClass:"navbar-divider"}),s._v(" "),a("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/buefy/buefy/releases",target:"_blank"}},[s._v("\r\n                                Changelogs\r\n                            ")])])]),s._v(" "),a("div",{staticClass:"navbar-item"},[a("a",{staticClass:"button is-outlined",class:s.light?"is-light":"is-twitter",on:{click:s.tweet}},[a("b-icon",{attrs:{icon:"twitter"}}),s._v(" "),a("span",[s._v("Tweet")])],1)])],1)])])])},staticRenderFns:[]}},907:function(s,t,e){s.exports=e.p+"static/img/buefy-light.7df103a.png"},908:function(s,t,e){var a=e(0)(null,e(909),null,null,null);s.exports=a.exports},909:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[s._m(0),s._v(" "),s._m(1),s._v(" "),e("b-field",[e("p",{staticClass:"control"},[e("a",{staticClass:"button",attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[e("b-icon",{attrs:{icon:"github-circle"}}),s._v(" "),e("span",[s._v("GitHub")])],1)]),s._v(" "),e("p",{staticClass:"control"},[e("a",{staticClass:"button is-patreon",attrs:{href:"https://www.patreon.com/jtommy",target:"_blank"}},[e("b-icon",{attrs:{icon:"patreon"}}),s._v(" "),e("span",[s._v("Patreon")])],1)])])],1),s._v(" "),e("div",{staticClass:"column"},[e("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/",exact:""}},[s._v("\r\n                            Home\r\n                        ")]),s._v(" "),e("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/documentation"}},[s._v("\r\n                            Documentation\r\n                        ")]),s._v(" "),e("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/extensions"}},[s._v("\r\n                            Extensions\r\n                        ")]),s._v(" "),e("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/expo"}},[s._v("\r\n                            Expo\r\n                        ")])],1)])])])])},staticRenderFns:[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("\r\n                            Maintained by\r\n                            "),e("a",{attrs:{href:"https://twitter.com/walter_tommasi",target:"_blank"}},[s._v("Walter Tommasi")]),s._v(".\r\n                            Authored by\r\n                            "),e("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[s._v("Rafael Beraldo")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[e("small",[s._v("\r\n                                Buefy's source code is licensed under\r\n                                "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[s._v("MIT")]),s._v(".\r\n                            ")])])}]}}});
//# sourceMappingURL=0.538bc380af8e0edc0acc.js.map