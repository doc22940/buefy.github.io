webpackJsonp([10],{465:function(t,e,n){var i=n(0)(n(534),n(821),null,null,null);t.exports=i.exports},495:function(t,e,n){t.exports=n.p+"static/img/buefy.1d65c18.png"},497:function(t,e){t.exports={name:"buefy",version:"0.5.4",homepage:"https://buefy.github.io",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",license:"MIT",main:"lib/index.js",files:["lib","src"],repository:{type:"git",url:"https://github.com/rafaelpimpa/buefy.git"},bugs:{url:"https://github.com/rafaelpimpa/buefy/issues"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",unit:"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs","build:lib:clean":"rimraf lib","build:lib:js":"vue build src/index.js --prod --lib Buefy --dist lib","build:lib:sass":"node-sass --output-style expanded --source-map true --include-path node_modules src/scss/buefy-build.scss lib/buefy.css","build:lib:autoprefix":"postcss --use autoprefixer --output lib/buefy.css lib/buefy.css","build:lib:cssnano":"postcss --use cssnano --no-map --output lib/buefy.min.css lib/buefy.css","build:lib":"npm run build:lib:clean && npm run build:lib:js && npm run build:lib:sass && npm run build:lib:autoprefix && npm run build:lib:cssnano","build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"^0.5.3",vue:"^2.4.2"},devDependencies:{autoprefixer:"^7.1.1",axios:"^0.16.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^6.2.10","babel-plugin-istanbul":"^4.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chai:"^3.5.0",chalk:"^1.1.3",chromedriver:"^2.27.2",clipboard:"^1.7.1","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","cross-env":"^4.0.0","cross-spawn":"^5.0.1","css-loader":"^0.28.0",cssnano:"^3.10.0",eslint:"^3.19.0","eslint-config-vue":"^2.0.2","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.0","eslint-plugin-vue":"^2.1.0","eventsource-polyfill":"^0.9.6",express:"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","highlight.js":"^9.12.0","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","inject-loader":"^3.0.0",karma:"^1.4.1","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.2","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.3.1","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"^2.0.2",lolex:"^1.5.2",mocha:"^3.2.0",nightwatch:"^0.9.12","node-sass":"^4.5.3",opn:"^4.0.2","optimize-css-assets-webpack-plugin":"^1.3.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.14","postcss-cli":"^4.0.0","raw-loader":"^0.5.1",rimraf:"^2.6.0","sass-loader":"^6.0.6",scrollreveal:"^3.3.6","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",sinon:"^2.1.0","sinon-chai":"^2.8.0","sw-precache-webpack-plugin":"^0.9.1","url-loader":"^0.5.8","vue-analytics":"^4.1.3","vue-loader":"^12.1.0","vue-progressbar":"^0.7.2","vue-router":"^2.3.1","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.4.2",webpack:"^2.6.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},498:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(497),a=n.n(i);e.default={props:{light:Boolean},data:function(){return{isMenuActive:!1,version:a.a.version,bulmaVersion:a.a.dependencies.bulma.substr(1)}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,n="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa",i="status=1,width=575,height=400,top="+e+",left="+t;window.open(n,"",i)}}}},499:function(t,e,n){t.exports=n.p+"static/img/buefy-light.7df103a.png"},500:function(t,e,n){var i=n(0)(null,n(502),null,null,null);t.exports=i.exports},501:function(t,e,n){var i=n(0)(n(498),n(503),null,null,null);t.exports=i.exports},502:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",[t._v("Made with "),n("b-icon",{attrs:{icon:"favorite",type:"is-danger"}}),t._v(" by "),n("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")]),t._v(".")],1),t._v(" "),t._m(0),t._v(" "),n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[n("b-icon",{attrs:{pack:"fa",icon:"github"}}),t._v(" "),n("span",[t._v("GitHub")])],1)]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[n("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),n("span",[t._v("Twitter")])],1)])])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("small",[t._v("\n                    The source code is licensed under "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\n                    "),n("br"),t._v("\n                    The website content is licensed under "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC ANS 4.0")]),t._v(".\n                ")])])}]}},503:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar is-transparent"},[i("div",{staticClass:"container"},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:"",title:"Buefy: lightweight UI components for Vue.js based on Bulma"}},[t.light?i("img",{attrs:{src:n(499),alt:"Buefy"}}):i("img",{attrs:{src:n(495),alt:"Buefy"}})]),t._v(" "),i("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank",title:"Github"}},[i("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),t._v(" "),i("a",{staticClass:"navbar-item",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank",title:"Twitter"}},[i("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1),t._v(" "),i("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[i("span"),t._v(" "),i("span"),t._v(" "),i("span")])],1),t._v(" "),i("div",{staticClass:"navbar-menu",class:{"is-active":t.isMenuActive}},[i("div",{staticClass:"navbar-end"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),i("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[i("router-link",{staticClass:"navbar-link",attrs:{to:"/documentation"}},[t._v("Documentation")]),t._v(" "),i("div",{staticClass:"navbar-dropdown is-boxed"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation/start"}},[t._v("Installation")]),t._v(" "),i("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation/layout"}},[t._v("General")]),t._v(" "),i("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation/dialog"}},[t._v("Notices")]),t._v(" "),i("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation/field"}},[t._v("Form")]),t._v(" "),i("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation/table"}},[t._v("Data")]),t._v(" "),i("hr",{staticClass:"navbar-divider"}),t._v(" "),i("strong",{staticClass:"navbar-item version"},[i("span",{staticClass:"has-text-primary"},[t._v("Buefy version")]),t._v(" "),i("span",{staticClass:"has-text-grey"},[t._v(t._s(t.version))])]),t._v(" "),i("strong",{staticClass:"navbar-item version"},[i("span",{staticClass:"has-text-bulma"},[t._v("Bulma version")]),t._v(" "),i("span",{staticClass:"has-text-grey"},[t._v(t._s(t.bulmaVersion))])]),t._v(" "),i("hr",{staticClass:"navbar-divider"}),t._v(" "),i("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/rafaelpimpa/buefy/releases",target:"_blank"}},[t._v("\n                            Changelogs\n                        ")])],1)],1),t._v(" "),i("div",{staticClass:"navbar-item"},[i("a",{staticClass:"button is-outlined",class:t.light?"is-light":"is-twitter",on:{click:t.tweet}},[i("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),i("span",[t._v("Tweet")])],1)])],1)])])])},staticRenderFns:[]}},534:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(612),a=n.n(i),r=n(501),o=n.n(r),s=n(500),l=n.n(s),c=n(83),u=n.n(c),f=n(82),p=n.n(f),d=n(84),h=n.n(d),b=n(81),v=n.n(b),m=n(80),y=n.n(m);e.default={components:{AppHeader:o.a,AppFooter:l.a},data:function(){return{clipboard:null,currentTab:u.a,tabs:[{title:"Installation",component:u.a},{title:"General",component:p.a},{title:"Notices",component:h.a},{title:"Form",component:v.a},{title:"Data",component:y.a}]}},methods:{setupClipboardControls:function(){var t=this;this.clipboard&&this.clipboard.destroy(),this.clipboard=new a.a(".copy-code",{target:function(t){return t.nextElementSibling.children[0]}}),this.clipboard.on("success",function(e){t.$toast.open("Copied to clipboard!")}),this.clipboard.on("error",function(e){t.$toast.open({message:"Error while copying to clipboard :(",type:"is-danger"})})}},beforeRouteUpdate:function(t,e,n){this.$refs.header.isMenuActive=!1,this.currentTab=t.meta.category,this.setupClipboardControls(),n()},beforeRouteEnter:function(t,e,n){n(function(e){e.currentTab=t.meta.category})},created:function(){this.setupClipboardControls()},beforeDestroy:function(){this.clipboard&&this.clipboard.destroy()}}},611:function(t,e,n){var i,a,r;!function(o,s){a=[t,n(725)],i=s,void 0!==(r="function"==typeof i?i.apply(e,a):i)&&(t.exports=r)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(t){return t&&t.__esModule?t:{default:t}}(e),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":a(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=o})},612:function(t,e,n){var i,a,r;!function(o,s){a=[t,n(611),n(726),n(622)],i=s,void 0!==(r="function"==typeof i?i.apply(e,a):i)&&(t.exports=r)}(0,function(t,e,n,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var c=a(e),u=a(n),f=a(i),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return s(e,t),d(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return l("action",t)}},{key:"defaultTarget",value:function(t){var e=l("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return l("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);t.exports=h})},616:function(t,e){function n(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}t.exports=n},617:function(t,e,n){function i(t,e,n,i,r){var o=a.apply(this,arguments);return t.addEventListener(n,o,r),{destroy:function(){t.removeEventListener(n,o,r)}}}function a(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}var r=n(616);t.exports=i},621:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},622:function(t,e,n){function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return a(t,e,n);if(s.nodeList(t))return r(t,e,n);if(s.string(t))return o(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function o(t,e,n){return l(document.body,t,e,n)}var s=n(621),l=n(617);t.exports=i},725:function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),a=document.createRange();a.selectNodeContents(t),i.removeAllRanges(),i.addRange(a),e=i.toString()}return e}t.exports=n},726:function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function i(){a.off(t,i),e.apply(n,arguments)}var a=this;return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,a=n.length;for(i;i<a;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],a=[];if(i&&e)for(var r=0,o=i.length;r<o;r++)i[r].fn!==e&&i[r].fn._!==e&&a.push(i[r]);return a.length?n[t]=a:delete n[t],this}},t.exports=n},821:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"documentation"},[n("app-header",{ref:"header"}),t._v(" "),n("div",{staticClass:"hero is-primary"},[t._m(0),t._v(" "),n("div",{staticClass:"hero-foot"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"tabs is-boxed"},[n("ul",t._l(t.tabs,function(e){return n("li",{key:e.title,class:{"is-active":t.currentTab===e.component}},[n("a",{on:{click:function(n){t.currentTab=e.component}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])])}))])])])]),t._v(" "),n("nav",{staticClass:"navbar has-shadow"},[n("div",{staticClass:"container"},[n(t.currentTab,{tag:"component"})],1)]),t._v(" "),n("section",{staticClass:"section"},[n("router-view")],1),t._v(" "),n("app-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Documentation")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("Learn everything you need to start using Buefy ;)")])])])}]}}});
//# sourceMappingURL=10.d38321bfad9eef8eb15b.js.map