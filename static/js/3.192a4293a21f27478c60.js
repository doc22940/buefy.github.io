webpackJsonp([3],{1448:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1449),i=n.n(s),a=n(994),r=n.n(a),o=n(924),l=n.n(o),c=n(929),u=n.n(c),p=n(921),d=n.n(p),m=n(955),g=n.n(m),f=n(1450),b=n.n(f);e.default={name:"App",components:{CarbonAds:r.a,TheNavbar:l.a,TheFooter:u.a},data:function(){return{version:d.a.version,expo:g.a.filter(function(t){return t.featured}),sponsors:b.a}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,n="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=My website made with Buefy!&hashtags=madewithbuefy",s="status=1,width=575,height=400,top="+e+",left="+t;window.open(n,"",s)},getExpoImg:function(t){return n(956)("./"+t)},getSponsorImg:function(t){return n(1451)("./"+t)}},mounted:function(){var t=i()({duration:400,delay:200});t.reveal(".home-hero",{delay:0,origin:"top"},200),t.reveal(".features",200)}}},1449:function(t,e,n){var s;!function(){"use strict";function i(t){return void 0===this||Object.getPrototypeOf(this)!==i.prototype?new i(t):(M=this,M.version="3.3.6",M.tools=new T,M.isSupported()?(M.tools.extend(M.defaults,t||{}),M.defaults.container=a(M.defaults),M.store={elements:{},containers:[]},M.sequences={},M.history=[],M.uid=0,M.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),M)}function a(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(M.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return M.defaults.container}function r(t,e){return"string"==typeof t?Array.prototype.slice.call(e.querySelectorAll(t)):M.tools.isNode(t)?[t]:M.tools.isNodeList(t)?Array.prototype.slice.call(t):[]}function o(){return++M.uid}function l(t,e,n){e.container&&(e.container=n),t.config?t.config=M.tools.extendClone(t.config,e):t.config=M.tools.extendClone(M.defaults,e),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X"}function c(t){var e=window.getComputedStyle(t.domEl);t.styles||(t.styles={transition:{},transform:{},computed:{}},t.styles.inline=t.domEl.getAttribute("style")||"",t.styles.inline+="; visibility: visible; ",t.styles.computed.opacity=e.opacity,e.transition&&"all 0s ease 0s"!==e.transition?t.styles.computed.transition=e.transition+", ":t.styles.computed.transition=""),t.styles.transition.instant=u(t,0),t.styles.transition.delayed=u(t,t.config.delay),t.styles.transform.initial=" -webkit-transform:",t.styles.transform.target=" -webkit-transform:",p(t),t.styles.transform.initial+="transform:",t.styles.transform.target+="transform:",p(t)}function u(t,e){var n=t.config;return"-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; transition: "+t.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; "}function p(t){var e,n=t.config,s=t.styles.transform;e="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(s.initial+=" translate"+n.axis+"("+e+")",s.target+=" translate"+n.axis+"(0)"),n.scale&&(s.initial+=" scale("+n.scale+")",s.target+=" scale(1)"),n.rotate.x&&(s.initial+=" rotateX("+n.rotate.x+"deg)",s.target+=" rotateX(0)"),n.rotate.y&&(s.initial+=" rotateY("+n.rotate.y+"deg)",s.target+=" rotateY(0)"),n.rotate.z&&(s.initial+=" rotateZ("+n.rotate.z+"deg)",s.target+=" rotateZ(0)"),s.initial+="; opacity: "+n.opacity+";",s.target+="; opacity: "+t.styles.computed.opacity+";"}function d(t){var e=t.config.container;e&&-1===M.store.containers.indexOf(e)&&M.store.containers.push(t.config.container),M.store.elements[t.id]=t}function m(t,e,n){var s={target:t,config:e,interval:n};M.history.push(s)}function g(){if(M.isSupported()){v();for(var t=0;t<M.store.containers.length;t++)M.store.containers[t].addEventListener("scroll",f),M.store.containers[t].addEventListener("resize",f);M.initialized||(window.addEventListener("scroll",f),window.addEventListener("resize",f),M.initialized=!0)}return M}function f(){R(v)}function b(){var t,e,n,s;M.tools.forOwn(M.sequences,function(i){s=M.sequences[i],t=!1;for(var a=0;a<s.elemIds.length;a++)n=s.elemIds[a],e=M.store.elements[n],E(e)&&!t&&(t=!0);s.active=t})}function v(){var t,e;b(),M.tools.forOwn(M.store.elements,function(n){e=M.store.elements[n],t=_(e),w(e)?(e.config.beforeReveal(e.domEl),t?e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.delayed):e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.instant),y("reveal",e,t),e.revealing=!0,e.seen=!0,e.sequence&&h(e,t)):x(e)&&(e.config.beforeReset(e.domEl),e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.initial+e.styles.transition.instant),y("reset",e),e.revealing=!1)})}function h(t,e){var n=0,s=0,i=M.sequences[t.sequence.id];i.blocked=!0,e&&"onload"===t.config.useDelay&&(s=t.config.delay),t.sequence.timer&&(n=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){i.blocked=!1,t.sequence.timer=null,f()},Math.abs(i.interval)+s-n)}function y(t,e,n){var s=0,i=0,a="after";switch(t){case"reveal":i=e.config.duration,n&&(i+=e.config.delay),a+="Reveal";break;case"reset":i=e.config.duration,a+="Reset"}e.timer&&(s=Math.abs(e.timer.started-new Date),window.clearTimeout(e.timer.clock)),e.timer={started:new Date},e.timer.clock=window.setTimeout(function(){e.config[a](e.domEl),e.timer=null},i-s)}function w(t){if(t.sequence){var e=M.sequences[t.sequence.id];return e.active&&!e.blocked&&!t.revealing&&!t.disabled}return E(t)&&!t.revealing&&!t.disabled}function _(t){var e=t.config.useDelay;return"always"===e||"onload"===e&&!M.initialized||"once"===e&&!t.seen}function x(t){if(t.sequence){return!M.sequences[t.sequence.id].active&&t.config.reset&&t.revealing&&!t.disabled}return!E(t)&&t.config.reset&&t.revealing&&!t.disabled}function C(t){return{width:t.clientWidth,height:t.clientHeight}}function k(t){if(t&&t!==window.document.documentElement){var e=j(t);return{x:t.scrollLeft+e.left,y:t.scrollTop+e.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function j(t){var e=0,n=0,s=t.offsetHeight,i=t.offsetWidth;do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent}while(t);return{top:e,left:n,height:s,width:i}}function E(t){var e=j(t.domEl),n=C(t.config.container),s=k(t.config.container),i=t.config.viewFactor,a=e.height,r=e.width,o=e.top,l=e.left,c=o+a,u=l+r;return function(){var e=o+a*i,p=l+r*i,d=c-a*i,m=u-r*i,g=s.y+t.config.viewOffset.top,f=s.x+t.config.viewOffset.left,b=s.y-t.config.viewOffset.bottom+n.height,v=s.x-t.config.viewOffset.right+n.width;return e<b&&d>g&&p<v&&m>f}()||function(){return"fixed"===window.getComputedStyle(t.domEl).position}()}function T(){}var M,R;i.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(t){},beforeReset:function(t){},afterReveal:function(t){},afterReset:function(t){}},i.prototype.isSupported=function(){var t=document.documentElement.style;return"WebkitTransition"in t&&"WebkitTransform"in t||"transition"in t&&"transform"in t},i.prototype.reveal=function(t,e,n,s){var i,u,p,f,b,v;if(void 0!==e&&"number"==typeof e?(n=e,e={}):void 0!==e&&null!==e||(e={}),i=a(e),u=r(t,i),!u.length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),M;n&&"number"==typeof n&&(v=o(),b=M.sequences[v]={id:v,interval:n,elemIds:[],active:!1});for(var h=0;h<u.length;h++)f=u[h].getAttribute("data-sr-id"),f?p=M.store.elements[f]:(p={id:o(),domEl:u[h],seen:!1,revealing:!1},p.domEl.setAttribute("data-sr-id",p.id)),b&&(p.sequence={id:b.id,index:b.elemIds.length},b.elemIds.push(p.id)),l(p,e,i),c(p),d(p),M.tools.isMobile()&&!p.config.mobile||!M.isSupported()?(p.domEl.setAttribute("style",p.styles.inline),p.disabled=!0):p.revealing||p.domEl.setAttribute("style",p.styles.inline+p.styles.transform.initial);return!s&&M.isSupported()&&(m(t,e,n),M.initTimeout&&window.clearTimeout(M.initTimeout),M.initTimeout=window.setTimeout(g,0)),M},i.prototype.sync=function(){if(M.history.length&&M.isSupported()){for(var t=0;t<M.history.length;t++){var e=M.history[t];M.reveal(e.target,e.config,e.interval,!0)}g()}else console.log("ScrollReveal: sync failed, no reveals found.");return M},T.prototype.isObject=function(t){return null!==t&&"object"==typeof t&&t.constructor===Object},T.prototype.isNode=function(t){return"object"==typeof window.Node?t instanceof window.Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},T.prototype.isNodeList=function(t){var e=Object.prototype.toString.call(t),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?t instanceof window.NodeList:t&&"object"==typeof t&&n.test(e)&&"number"==typeof t.length&&(0===t.length||this.isNode(t[0]))},T.prototype.forOwn=function(t,e){if(!this.isObject(t))throw new TypeError('Expected "object", but received "'+typeof t+'".');for(var n in t)t.hasOwnProperty(n)&&e(n)},T.prototype.extend=function(t,e){return this.forOwn(e,function(n){this.isObject(e[n])?(t[n]&&this.isObject(t[n])||(t[n]={}),this.extend(t[n],e[n])):t[n]=e[n]}.bind(this)),t},T.prototype.extendClone=function(t,e){return this.extend(this.extend({},t),e)},T.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},R=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},void 0!==(s=function(){return i}.call(e,n,e,t))&&(t.exports=s)}()},1450:function(t,e){t.exports=[]},1451:function(t,e,n){function s(t){return n(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./twago.png":1452};s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id=1451},1452:function(t,e,n){t.exports=n.p+"static/img/twago.4e7380a.png"},1453:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("TheNavbar",{attrs:{light:""}}),t._v(" "),n("div",{staticClass:"hero is-fullheight is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-medium home-hero",attrs:{to:"/documentation/start"}},[t._v("\r\n                            Get started\r\n                        ")]),t._v(" "),n("a",{staticClass:"button is-medium is-primary home-hero",attrs:{href:"https://github.com/buefy/buefy/releases",target:"_blank"}},[t._v("\r\n                            Changelog\r\n                        ")])],1),t._v(" "),n("small",{staticClass:"home-hero"},[t._v("v"+t._s(t.version))]),t._v(" "),n("carbon-ads",{attrs:{id:"carbon-home"}})],1)])]),t._v(" "),n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{icon:"github-circle",size:"is-large"}}),t._v(" "),t._m(4),t._v(" "),t._m(5)],1),t._v(" "),n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{icon:"cellphone-link",size:"is-large"}}),t._v(" "),t._m(6),t._v(" "),t._m(7)],1),t._v(" "),n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{icon:"alert-decagram",size:"is-large"}}),t._v(" "),t._m(8),t._v(" "),t._m(9)],1),t._v(" "),n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{pack:"far",icon:"paper-plane",size:"is-large"}}),t._v(" "),t._m(10),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("No other internal dependency")])],1)])])])]),t._v(" "),n("section",{staticClass:"hero is-light"},[n("div",{staticClass:"hero-body"},[t.sponsors&&t.sponsors.length?n("div",{staticClass:"container"},[n("p",{staticClass:"content is-size-5 has-text-left"},[t._v("\r\n                        Sponsors\r\n                    ")]),t._v(" "),n("div",{staticClass:"columns"},t._l(t.sponsors,function(e){return n("div",{key:e.title,staticClass:"column has-text-centered is-one-quarter"},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"image-has-shadow",attrs:{src:t.getSponsorImg(e.img),alt:e.title}})]),t._v(" "),n("p",[n("a",{staticClass:"has-text-weight-semibold",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\r\n                                    "+t._s(e.title)+"\r\n                                ")]),t._v(" "),n("br")])])}))]):t._e(),t._v(" "),n("div",{staticClass:"container expo"},[n("p",{staticClass:"content is-size-5 has-text-centered"},[t._v("\r\n                        Websites and apps\r\n                        "),n("a",{on:{click:t.tweet}},[n("strong",{staticClass:"has-text-link"},[t._v("#MadeWithBuefy")])]),t._v("\r\n                        from the "),n("router-link",{attrs:{to:"/expo"}},[n("strong",{staticClass:"has-text-link"},[t._v("Expo page")])])],1),t._v(" "),n("div",{staticClass:"columns"},t._l(t.expo,function(e){return n("div",{key:e.title,staticClass:"column has-text-centered is-one-quarter"},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"image-has-shadow",attrs:{src:t.getExpoImg(e.img),alt:e.title}})]),t._v(" "),n("p",[n("a",{staticClass:"has-text-weight-semibold",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\r\n                                    "+t._s(e.title)+"\r\n                                ")]),t._v(" "),n("br")])])}))])])]),t._v(" "),n("TheFooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo-rounded home-hero"},[s("img",{attrs:{src:n(922),alt:"Buefy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"subtitle home-hero"},[n("strong",[t._v("Lightweight")]),t._v(" UI components for "),n("strong",[n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")])]),t._v("\r\n                        based on "),n("strong",[n("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Bulma")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"npm home-hero"},[n("code",[n("span",{staticClass:"is-unselectable"},[t._v("$ ")]),t._v("npm install buefy")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"github-button home-hero"},[n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=buefy&repo=buefy&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}}),t._v(" "),n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=buefy&repo=buefy&type=fork&count=false&size=large",frameborder:"0",scrolling:"0",width:"80px",height:"30px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Free")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subtitle"},[t._v("Open source on "),n("strong",[n("a",{attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[t._v("GitHub")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Responsive")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subtitle"},[n("b",[t._v("Every")]),t._v(" component is responsive")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Modern")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subtitle"},[t._v("\r\n                                Built with "),n("strong",[n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")])]),t._v("\r\n                                and "),n("strong",[n("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Bulma")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Lightweight")])])}]}},366:function(t,e,n){var s=n(0)(n(1448),n(1453),null,null,null);t.exports=s.exports},921:function(t,e){t.exports={name:"buefy",version:"0.8.12",homepage:"https://buefy.org",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",maintainers:["Walter Tommasi <tommsi20@gmail.com>"],license:"MIT",main:"dist/cjs/index.js",module:"dist/esm/index.js",unpkg:"dist/buefy.min.js",typings:"types/index.d.ts",sideEffects:["*.css","*.scss"],files:["dist","src","types/*.d.ts"],repository:{type:"git",url:"https://github.com/buefy/buefy.git"},bugs:{url:"https://github.com/buefy/buefy/issues"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",lint:"eslint --ext .js,.vue src docs","lint:fix":"eslint --ext .js,.vue src docs --fix","lint:staged":"lint-staged",unit:"jest --runInBand",test:"npm run lint && npm run unit","test:watch":"npm run unit -- --watchAll","build:js":"rollup -c && rollup -c --environment MINIFY","build:js:watch":"rollup -c --watch","build:scss":"node-sass --output-style expanded src/scss/buefy-build.scss | node ./build/banner.js > dist/buefy.css && cleancss -o dist/buefy.min.css dist/buefy.css","build:scss:watch":"node-sass src/scss/buefy-build.scss --w","build:lib":"npm run build:js && npm run build:scss","build:lib:watch":'concurrently "npm run build:js:watch" "npm run build:scss:watch " ',"build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs",cov:"./node_modules/codcov/bin/codcov"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"0.7.5"},peerDependencies:{vue:"^2.5.18"},devDependencies:{"@applitools/eyes-cypress":"3.7.5","@babel/core":"7.3.4","@babel/plugin-syntax-dynamic-import":"7.2.0","@babel/preset-env":"7.3.4","@fortawesome/fontawesome-free":"5.3.1","@mdi/font":"4.8.95","@vue/test-utils":"1.0.0-beta.29",autoprefixer:"7.1.1",axios:"0.18.1","babel-core":"6.25.0","babel-eslint":"7.1.1","babel-jest":"22.1.0","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.22.0","babel-preset-env":"1.3.2","babel-preset-stage-2":"6.22.0","babel-register":"6.22.0",chalk:"1.1.3","clean-css-cli":"4.3.0","cleave.js":"1.0.1",clipboard:"1.7.1",codecov:"3.0.0","connect-history-api-fallback":"1.3.0","copy-webpack-plugin":"4.3.1","cross-env":"4.0.0","cross-spawn":"5.0.1","css-loader":"0.28.0",cypress:"3.4.1",eslint:"4.18.2","eslint-config-buefy":"0.0.3","eventsource-polyfill":"0.9.6",express:"4.14.1","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.1","font-awesome":"4.7.0","friendly-errors-webpack-plugin":"1.6.1","highlight.js":"9.12.0","html-webpack-plugin":"2.30.1","http-proxy-middleware":"0.17.3",jest:"23.5.0","jest-serializer-vue":"0.3.0","lint-staged":"6.1.1","node-sass":"4.11.0",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0","optimize-js-plugin":"0.0.4",ora:"1.2.0","pre-commit":"1.2.2","prerender-spa-plugin":"3.4.0","raw-loader":"0.5.1",rimraf:"2.6.0",rollup:"1.17.0","rollup-copy-plugin":"0.1.0","rollup-plugin-babel":"4.3.2","rollup-plugin-commonjs":"9.2.1","rollup-plugin-node-resolve":"4.0.1","rollup-plugin-replace":"2.1.0","rollup-plugin-terser":"4.0.4","rollup-plugin-vue":"5.0.0","sass-loader":"6.0.6",scrollreveal:"3.3.6",semver:"5.3.0",shelljs:"0.8.3",sinon:"7.5.0",sortablejs:"1.7.0","uglifyjs-webpack-plugin":"1.2.5","url-loader":"0.5.8","vee-validate":"2.1.0-beta.9",vue:"2.5.18","vue-analytics":"4.1.3","vue-jest":"2.5.0","vue-loader":"12.1.0","vue-progressbar":"0.7.2","vue-router":"2.3.1","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.18",webpack:"3.10.0","webpack-bundle-analyzer":"2.9.2","webpack-dev-server":"2.11.1","webpack-hot-middleware":"2.21.0","webpack-merge":"4.1.2"},"lint-staged":{"*.{vue,js}":["lint --fix","git add"]},"pre-commit":"lint:staged",engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},922:function(t,e,n){t.exports=n.p+"static/img/buefy.1d65c18.png"},924:function(t,e,n){var s=n(0)(n(925),n(927),null,null,null);t.exports=s.exports},925:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(921),i=n.n(s),a=n(926),r=n.n(a);e.default={props:{light:Boolean},data:function(){return{isMenuActive:!1,version:i.a.version,bulmaVersion:r.a.version}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,n="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa, @walter_tommasi",s="status=1,width=575,height=400,top="+e+",left="+t;window.open(n,"",s)},closeMenu:function(){this.isMenuActive=!1},toggleHtmlClip:function(){document.documentElement.classList.toggle("is-clipped-touch",this.isMenuActive)}},mounted:function(){this.$eventHub.$on("navigate",this.closeMenu)}}},926:function(t,e){t.exports={_from:"bulma@0.7.5",_id:"bulma@0.7.5",_inBundle:!1,_integrity:"sha512-cX98TIn0I6sKba/DhW0FBjtaDpxTelU166pf7ICXpCCuplHWyu6C9LYZmL5PEsnePIeJaiorsTEzzNk3Tsm1hw==",_location:"/bulma",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"bulma@0.7.5",name:"bulma",escapedName:"bulma",rawSpec:"0.7.5",saveSpec:null,fetchSpec:"0.7.5"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/bulma/-/bulma-0.7.5.tgz",_shasum:"35066c37f82c088b68f94450be758fc00a967208",_spec:"bulma@0.7.5",_where:"C:\\Users\\Walter\\Github\\buefy",author:{name:"Jeremy Thomas",email:"bbxdesign@gmail.com",url:"https://jgthms.com"},bugs:{url:"https://github.com/jgthms/bulma/issues"},bundleDependencies:!1,deprecated:!1,description:"Modern CSS framework based on Flexbox",devDependencies:{autoprefixer:"^9.5.1","clean-css-cli":"^4.3.0","node-sass":"^4.12.0","postcss-cli":"^6.1.2",rimraf:"^2.6.3"},files:["css","sass","bulma.sass","LICENSE","README.md"],homepage:"https://bulma.io",keywords:["css","sass","flexbox","responsive","framework"],license:"MIT",main:"bulma.sass",name:"bulma",repository:{type:"git",url:"git+https://github.com/jgthms/bulma.git"},scripts:{build:"npm run build-clean && npm run build-sass && npm run build-autoprefix && npm run build-cleancss","build-autoprefix":"postcss --use autoprefixer --map false --output css/bulma.css css/bulma.css","build-clean":"rimraf css","build-cleancss":"cleancss -o css/bulma.min.css css/bulma.css","build-sass":"node-sass --output-style expanded --source-map true bulma.sass css/bulma.css",deploy:"npm run build",start:"npm run build-sass -- --watch"},style:"bulma/css/bulma.min.css",unpkg:"css/bulma.css",version:"0.7.5"}},927:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar docs-navbar is-spaced has-shadow",class:{"is-primary is-transparent":t.light}},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/",title:"Buefy: lightweight UI components for Vue.js based on Bulma","active-class":""}},[t.light?s("img",{attrs:{src:n(928),alt:"Buefy"}}):s("img",{attrs:{src:n(922),alt:"Buefy"}})]),t._v(" "),s("a",{staticClass:"navbar-item",class:{"has-text-dark":!t.light},attrs:{href:"https://github.com/buefy/buefy",target:"_blank",title:"Github"}},[s("b-icon",{attrs:{icon:"github-circle"}})],1),t._v(" "),s("a",{staticClass:"navbar-item",class:{"has-text-discord":!t.light},attrs:{href:"https://discordapp.com/invite/ZkdFJMr",target:"_blank",title:"Discord"}},[s("b-icon",{attrs:{icon:"discord"}})],1),t._v(" "),s("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])],1),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isMenuActive}},[s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[t._v("\r\n                        Home\r\n                    ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation"}},[t._v("\r\n                        Documentation\r\n                    ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/extensions"}},[t._v("\r\n                        Extensions\r\n                    ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/expo"}},[t._v("\r\n                        Expo\r\n                    ")]),t._v(" "),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("div",{staticClass:"navbar-link"},[t._v("Info")]),t._v(" "),s("div",{staticClass:"navbar-dropdown is-boxed"},[s("strong",{staticClass:"navbar-item is-version"},[s("span",{staticClass:"has-text-primary"},[t._v("Buefy version")]),t._v(" "),s("span",{staticClass:"has-text-grey"},[t._v(t._s(t.version))])]),t._v(" "),s("strong",{staticClass:"navbar-item is-version"},[s("span",{staticClass:"has-text-bulma"},[t._v("Bulma version")]),t._v(" "),s("span",{staticClass:"has-text-grey"},[t._v(t._s(t.bulmaVersion))])]),t._v(" "),s("hr",{staticClass:"navbar-divider"}),t._v(" "),s("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/buefy/buefy/releases",target:"_blank"}},[t._v("\r\n                                Changelogs\r\n                            ")])])]),t._v(" "),s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-outlined",class:t.light?"is-light":"is-twitter",on:{click:t.tweet}},[s("b-icon",{attrs:{icon:"twitter"}}),t._v(" "),s("span",[t._v("Tweet")])],1)])],1)])])])},staticRenderFns:[]}},928:function(t,e,n){t.exports=n.p+"static/img/buefy-light.7df103a.png"},929:function(t,e,n){var s=n(0)(null,n(930),null,null,null);t.exports=s.exports},930:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button",attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[n("b-icon",{attrs:{icon:"github-circle"}}),t._v(" "),n("span",[t._v("GitHub")])],1)]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-patreon",attrs:{href:"https://www.patreon.com/jtommy",target:"_blank"}},[n("b-icon",{attrs:{icon:"patreon"}}),t._v(" "),n("span",[t._v("Patreon")])],1)])])],1),t._v(" "),n("div",{staticClass:"column"},[n("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/",exact:""}},[t._v("\r\n                            Home\r\n                        ")]),t._v(" "),n("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/documentation"}},[t._v("\r\n                            Documentation\r\n                        ")]),t._v(" "),n("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/extensions"}},[t._v("\r\n                            Extensions\r\n                        ")]),t._v(" "),n("router-link",{staticClass:"navbar-item has-text-weight-semibold",attrs:{to:"/expo"}},[t._v("\r\n                            Expo\r\n                        ")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\r\n                            Maintained by\r\n                            "),n("a",{attrs:{href:"https://twitter.com/walter_tommasi",target:"_blank"}},[t._v("Walter Tommasi")]),t._v(".\r\n                            Authored by\r\n                            "),n("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("small",[t._v("\r\n                                Buefy's source code is licensed under\r\n                                "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\r\n                            ")])])}]}},955:function(t,e){t.exports=[{title:"Édutechno",date:"2020-02-07",img:"edutechno.png",url:"https://portail.edutechno.ca/"},{title:"Wotel",date:"2020-02-06",img:"wotel.png",url:"https://wotel.dev/"},{title:"Yakety",date:"2020-01-29",img:"yakety.png",url:"https://yakety.co.uk/"},{title:"Swap",date:"2020-01-29",img:"swap.png",url:"https://market.swap.gg/"},{title:"Sponsus",date:"2019-11-29",img:"sponsus.png",url:"https://sponsus.org/"},{title:"Dogs Welcome",date:"2019-11-05",img:"dogswelcome.png",url:"https://dogswelcome.in/"},{title:"Rate My Meeting",date:"2019-11-05",img:"ratemymeeting.png",url:"https://ratemymeeting.co/"},{title:"Rekord Cloud",date:"2019-11-05",img:"rekordcloud.png",url:"https://rekord.cloud/"},{title:"Yan Dev",date:"2019-10-25",img:"yandev.png",url:"https://yandev.de/"},{title:"EL Catre",date:"2019-10-22",img:"elcatre.jpg",url:"https://elcatre.com/"},{title:"Frenl",date:"2019-10-20",img:"frenl.png",url:"https://www.frenl.com"},{title:"Kulap",date:"2019-09-04",img:"kulap.png",url:"https://www.kulap.io",featured:!0},{title:"Gravium Wallet",date:"2019-09-03",img:"gravium.png",url:"https://gravium.io/wallet-2-0"},{title:"JustBoil.me",date:"2019-08-20",img:"justboilme.png",url:"https://justboil.me"},{title:"Course Cosmos",date:"2019-08-11",img:"coursecosmos.png",url:"https://coursecosmos.com"},{title:"FileGator",date:"2019-06-18",img:"filegator.png",url:"https://filegator.io"},{title:"Traject Ubudu",date:"2019-06-18",img:"traject-ubudu.png",url:"https://traject.ubudu.com"},{title:"Travelstop",date:"2019-06-13",img:"travelstop.png",url:"https://travelstop.com",featured:!0},{title:"Git Stars",date:"2019-06-01",img:"git-stars.png",url:"https://git-stars.netlify.com"},{title:"Marvel Match",date:"2019-05-24",img:"marvelmatch.png",url:"https://marvelmatch.com"},{title:"FOE Tools",date:"2019-05-24",img:"foe-tools.png",url:"https://foe-tools.github.io"},{title:"Brand Finance",date:"2019-05-24",img:"brandirectory.png",url:"https://brandirectory.com"},{title:"Repo Remover",date:"2019-05-24",img:"reporemover.png",url:"https://reporemover.xyz"},{title:"Nest&Cut",date:"2019-05-22",img:"nestandcut.png",url:"https://nestandcut.com"},{title:"Okuna",date:"2019-04-24",img:"openbook.png",url:"https://www.okuna.io",featured:!0},{title:"Immunization Academy",date:"2019-04-24",img:"immunization-academy.png",url:"https://www.immunizationacademy.com"},{title:"Switchblade",date:"2019-04-24",img:"switchblade.png",url:"https://switchblade.xyz"},{title:"Moonlight",date:"2019-04-24",img:"moonlight.png",url:"https://www.moonlightwork.com",featured:!0},{title:"Im Done",date:"2019-04-24",img:"imdone.png",url:"https://imdone.io"},{title:"Tainacan",date:"2019-04-24",img:"tainacan.png",url:"http://tainacan.org/"},{title:"Counter Network",date:"2019-04-24",img:"counter-network.png",url:"https://counter.network"},{title:"Gods Unchained",date:"2019-04-24",img:"godsunchained.png",url:"https://godsunchained.info"},{title:"Reaction Role",date:"2019-04-24",img:"reaction-role.png",url:"https://reaction-role.com"},{title:"Buchfink",date:"2019-04-24",img:"buchfink.png",url:"https://buchfink.ch"},{title:"Salamander Garten",date:"2019-04-24",img:"salamander-garten.png",url:"https://voranalyse.salamander-garten.ch"},{title:"Pumpipumpe Map",date:"2019-04-24",img:"pumpipumpe-map.png",url:"https://map.pumpipumpe.ch"}]},956:function(t,e,n){function s(t){return n(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./brandirectory.png":957,"./buchfink.png":958,"./counter-network.png":959,"./coursecosmos.png":960,"./dogswelcome.png":961,"./edutechno.png":962,"./elcatre.jpg":963,"./filegator.png":964,"./foe-tools.png":965,"./frenl.png":966,"./git-stars.png":967,"./godsunchained.png":968,"./gravium.png":969,"./imdone.png":970,"./immunization-academy.png":971,"./justboilme.png":972,"./kulap.png":973,"./marvelmatch.png":974,"./moonlight.png":975,"./nestandcut.png":976,"./openbook.png":977,"./picano.png":978,"./pumpipumpe-map.png":979,"./ratemymeeting.png":980,"./reaction-role.png":981,"./rekordcloud.png":982,"./reporemover.png":983,"./salamander-garten.png":984,"./sponsus.png":985,"./swap.png":986,"./switchblade.png":987,"./tainacan.png":988,"./traject-ubudu.png":989,"./travelstop.png":990,"./wotel.png":991,"./yakety.png":992,"./yandev.png":993};s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id=956},957:function(t,e,n){t.exports=n.p+"static/img/brandirectory.d48a052.png"},958:function(t,e,n){t.exports=n.p+"static/img/buchfink.dabdb37.png"},959:function(t,e,n){t.exports=n.p+"static/img/counter-network.67e5a51.png"},960:function(t,e,n){t.exports=n.p+"static/img/coursecosmos.bbfa297.png"},961:function(t,e,n){t.exports=n.p+"static/img/dogswelcome.e2ff986.png"},962:function(t,e,n){t.exports=n.p+"static/img/edutechno.a6c4b31.png"},963:function(t,e,n){t.exports=n.p+"static/img/elcatre.a39506f.jpg"},964:function(t,e,n){t.exports=n.p+"static/img/filegator.ac65a2e.png"},965:function(t,e,n){t.exports=n.p+"static/img/foe-tools.295a881.png"},966:function(t,e,n){t.exports=n.p+"static/img/frenl.5e90d04.png"},967:function(t,e,n){t.exports=n.p+"static/img/git-stars.9149dd4.png"},968:function(t,e,n){t.exports=n.p+"static/img/godsunchained.a85cc28.png"},969:function(t,e,n){t.exports=n.p+"static/img/gravium.532dfcb.png"},970:function(t,e,n){t.exports=n.p+"static/img/imdone.8db3885.png"},971:function(t,e,n){t.exports=n.p+"static/img/immunization-academy.6095c98.png"},972:function(t,e,n){t.exports=n.p+"static/img/justboilme.81faca5.png"},973:function(t,e,n){t.exports=n.p+"static/img/kulap.06ce091.png"},974:function(t,e,n){t.exports=n.p+"static/img/marvelmatch.cc34f75.png"},975:function(t,e,n){t.exports=n.p+"static/img/moonlight.52440e8.png"},976:function(t,e,n){t.exports=n.p+"static/img/nestandcut.1ff4f8a.png"},977:function(t,e,n){t.exports=n.p+"static/img/openbook.eb2bf8b.png"},978:function(t,e,n){t.exports=n.p+"static/img/picano.9ee55c3.png"},979:function(t,e,n){t.exports=n.p+"static/img/pumpipumpe-map.b207af4.png"},980:function(t,e,n){t.exports=n.p+"static/img/ratemymeeting.345bb37.png"},981:function(t,e,n){t.exports=n.p+"static/img/reaction-role.bb2e85e.png"},982:function(t,e,n){t.exports=n.p+"static/img/rekordcloud.4c72ae4.png"},983:function(t,e,n){t.exports=n.p+"static/img/reporemover.783c4e4.png"},984:function(t,e,n){t.exports=n.p+"static/img/salamander-garten.e1b1af4.png"},985:function(t,e,n){t.exports=n.p+"static/img/sponsus.b212fc7.png"},986:function(t,e,n){t.exports=n.p+"static/img/swap.c8f13d3.png"},987:function(t,e,n){t.exports=n.p+"static/img/switchblade.794330f.png"},988:function(t,e,n){t.exports=n.p+"static/img/tainacan.5a127c4.png"},989:function(t,e,n){t.exports=n.p+"static/img/traject-ubudu.826bfa4.png"},990:function(t,e,n){t.exports=n.p+"static/img/travelstop.7e086d2.png"},991:function(t,e,n){t.exports=n.p+"static/img/wotel.ed9394e.png"},992:function(t,e,n){t.exports=n.p+"static/img/yakety.723f354.png"},993:function(t,e,n){t.exports=n.p+"static/img/yandev.cfc3d8d.png"},994:function(t,e,n){var s=n(0)(n(995),n(996),null,null,null);t.exports=s.exports},995:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(27),i=n.n(s);e.default={watch:{$route:function(t,e){t.path!==e.path&&"object"===("undefined"==typeof _carbonads?"undefined":i()(_carbonads))&&_carbonads.refresh()}},mounted:function(){if(void 0===window.__PRERENDER_INJECTED){if(this.$refs.carbonads.children.length)return;var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","//cdn.carbonads.com/carbon.js?serve=CE7DE23W&placement=buefyorg"),t.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(t)}}}},996:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"carbonads",staticClass:"carbon-container"})},staticRenderFns:[]}}});
//# sourceMappingURL=3.192a4293a21f27478c60.js.map