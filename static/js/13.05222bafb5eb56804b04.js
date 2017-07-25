webpackJsonp([13],{464:function(t,e,s){var a=s(0)(s(510),s(532),null,null,null);t.exports=a.exports},510:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{importing:"\n            import Vue from 'vue'\n            import Buefy from 'buefy'\n            import 'buefy/lib/buefy.css'\n\n            Vue.use(Buefy)\n\n            // OR\n\n            Vue.component(Buefy.Checkbox.name, Buefy.Checkbox)\n            Vue.component(Buefy.Table.name, Buefy.Table)\n            Vue.component(Buefy.Switch.name, Buefy.Switch)",importingSSR:"\n            import Vue from 'vue'\n            import Buefy from 'buefy'\n            import 'buefy/lib/buefy.css'\n\n            Vue.use(Buefy) ",importingCDNHtml:'\n            \x3c!-- Buefy CSS --\x3e\n            <link rel="stylesheet" href="https://unpkg.com/buefy/lib/buefy.css">\n\n            \x3c!-- Buefy JavaScript --\x3e\n            <script src="https://unpkg.com/buefy"><\/script>',importingCDNJs:"\n            // Global variable\n            Vue.use(Buefy.default)",materialIcons:'<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">'}}}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-spaced"},[t._v("Start")]),t._v(" "),t._m(0),t._v(" "),s("hr"),t._v(" "),s("h3",{staticClass:"title"},[t._v("Install")]),t._v(" "),s("b-message",{attrs:{type:"is-warning"}},[t._v("\n        You need "),s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue.js")]),t._v(" "),s("b",[t._v("version 2.3+")]),t._v(".\n    ")]),t._v(" "),s("div",{staticClass:"media"},[t._m(1),t._v(" "),s("div",{staticClass:"media-content"},[t._m(2),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t._m(3)])])]),t._v(" "),t._m(4),t._v(" "),s("hr"),t._v(" "),s("h3",{staticClass:"title"},[t._v("Usage")]),t._v(" "),s("div",{staticClass:"media"},[t._m(5),t._v(" "),s("div",{staticClass:"media-content"},[s("h3",{staticClass:"subtitle"},[t._v("NPM / Webpack:")]),t._v(" "),s("b-message",{attrs:{type:"is-info"}},[t._v("\n                If you want to use your own theme / variables go to\n                "),s("router-link",{attrs:{to:"/documentation/customization"}},[t._v("customization section")]),t._v(".\n            ")],1),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[s("code",{staticClass:"javascript"},[t._v(t._s(t._f("pre")(t.importing)))])]),t._v(" "),s("b-message",{attrs:{type:"is-info"}},[t._v("\n                If you're using Nuxt.js for Server Side Rendering (SSR), then follow these steps:\n            ")]),t._v(" "),s("div",{staticClass:"content"},[s("ol",[t._m(6),t._v(" "),s("li",[t._v("\n                        Paste and save it:\n                        "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block is-paddingless"},[s("code",{staticClass:"javascript"},[t._v(t._s(t._f("pre")(t.importingSSR)))])])]),t._v(" "),t._m(7)])])],1)]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"media"},[t._m(8),t._v(" "),s("div",{staticClass:"media-content"},[s("h3",{staticClass:"subtitle"},[t._v("CDN / Standalone:")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[s("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.importingCDNHtml)))])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[s("code",{staticClass:"javascript"},[t._v(t._s(t._f("pre")(t.importingCDNJs)))])])])]),t._v(" "),s("hr"),t._v(" "),s("h3",{staticClass:"title"},[t._v("Include Material Design Icons")]),t._v(" "),s("b-message",{attrs:{type:"is-info"}},[t._v("\n        By default Buefy uses "),s("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Design Icons")]),t._v(",\n        if you want to swap to "),s("a",{attrs:{href:"http://fontawesome.io/",target:"_blank"}},[t._v("FontAwesome")]),t._v(", go to\n        "),s("router-link",{attrs:{to:"/documentation/constructor-options"}},[t._v("constructor options")]),t._v(".\n    ")],1),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[s("code",{staticClass:"html"},[t._v(t._s(t.materialIcons))])]),t._v(" "),s("hr"),t._v(" "),s("h3",{staticClass:"title"},[t._v("JSFiddle examples")]),t._v(" "),s("iframe",{attrs:{width:"100%",height:"400",src:"//jsfiddle.net/rafaelpimpa/0afsyg9v/embedded/",allowfullscreen:"allowfullscreen",frameborder:"0"}}),t._v(" "),s("hr"),t._v(" "),s("iframe",{attrs:{width:"100%",height:"400",src:"//jsfiddle.net/rafaelpimpa/du2oxe1r/embedded/",allowfullscreen:"allowfullscreen",frameborder:"0"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"subtitle"},[s("b",[t._v("Two ways")]),t._v(" to install and use Buefy")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("1")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"subtitle"},[t._v("Use "),s("b",[t._v("NPM")]),t._v(" "),s("em",[t._v("(recommended)")]),t._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("code",{staticClass:"bash"},[s("span",{staticClass:"is-unselectable"},[t._v("$ ")]),t._v("npm install buefy")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("2")])]),t._v(" "),s("div",{staticClass:"media-content"},[s("h3",{staticClass:"subtitle"},[t._v("Use unpkg "),s("b",[t._v("CDN")]),t._v(" (or download):")]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v("JavaScript: "),s("a",{attrs:{href:"https://unpkg.com/buefy",target:"_blank"}},[t._v("https://unpkg.com/buefy")])]),t._v(" "),s("p",[t._v("CSS: "),s("a",{attrs:{href:"https://unpkg.com/buefy/lib/buefy.css",target:"_blank"}},[t._v("https://unpkg.com/buefy/lib/buefy.css")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("1")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("Make a file in Nuxt's "),s("code",[t._v("plugins")]),t._v(" folder called "),s("code",[t._v("buefy.js")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("In the "),s("code",[t._v("nuxt.config.js")]),t._v(" file, add "),s("code",[t._v("plugins: ['~plugins/buefy']")]),t._v(" to the "),s("code",[t._v("module.exports")]),t._v(" object.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("2")])])}]}}});
//# sourceMappingURL=13.05222bafb5eb56804b04.js.map