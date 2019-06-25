webpackJsonp([49],{1271:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sass:'\n            // Import Bulma\'s core\n            @import "~bulma/sass/utilities/_all";\n\n            // Set your colors\n            $primary: #8c67ef;\n            $primary-invert: findColorInvert($primary);\n            $twitter: #4099FF;\n            $twitter-invert: findColorInvert($twitter);\n\n            // Setup $colors to use as bulma classes (e.g. \'is-twitter\')\n            $colors: (\n                "white": ($white, $black),\n                "black": ($black, $white),\n                "light": ($light, $light-invert),\n                "dark": ($dark, $dark-invert),\n                "primary": ($primary, $primary-invert),\n                "info": ($info, $info-invert),\n                "success": ($success, $success-invert),\n                "warning": ($warning, $warning-invert),\n                "danger": ($danger, $danger-invert),\n                "twitter": ($twitter, $twitter-invert)\n            );\n\n            // Links\n            $link: $primary;\n            $link-invert: $primary-invert;\n            $link-focus-border: $primary;\n\n            // Import Bulma and Buefy styles\n            @import "~bulma";\n            @import "~buefy/src/scss/buefy";\n            ',importing:"\n            import Vue from 'vue'\n            import Buefy from 'buefy'\n\n            Vue.use(Buefy)"}}}},1272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"media"},[t._m(0),t._v(" "),s("div",{staticClass:"media-content"},[s("h3",{staticClass:"subtitle"},[t._v("Install Buefy via npm")]),t._v(" "),s("CodeView",{attrs:{code:"npm install buefy",lang:"bash",expanded:""}}),t._v(" "),t._m(1)],1)]),t._v(" "),s("div",{staticClass:"media"},[t._m(2),t._v(" "),s("div",{staticClass:"media-content"},[s("h3",{staticClass:"subtitle"},[t._v("Set your variables with Sass")]),t._v(" "),s("b-message",{attrs:{type:"is-info"}},[s("div",{staticClass:"content"},[s("p",[s("b",[t._v("Tip:")]),t._v(" You can see "),s("a",{attrs:{href:"http://bulma.io/documentation/overview/variables/",target:"_blank"}},[t._v("all of Bulma's variables")]),t._v(".")]),t._v(" "),s("p",[t._v("There's also two other variables created by Buefy:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("$speed-slow: 150ms !default")])]),t._v(" "),s("li",[s("code",[t._v("$speed-slower: 250ms !default")])])])])]),t._v(" "),s("b-message",{attrs:{type:"is-warning"}},[t._v("\n                You might also have to install "),s("code",[t._v("node-sass")]),t._v(" and "),s("code",[t._v("sass-loader")]),t._v(" depending on your environment.\n            ")]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"example is-paddingless"},[s("CodeView",{attrs:{code:t._f("pre")(t.sass),lang:"sass",expanded:""}})],1)],1)]),t._v(" "),s("div",{staticClass:"media"},[t._m(4),t._v(" "),s("div",{staticClass:"media-content"},[s("h3",{staticClass:"subtitle"},[t._v("Import and use Buefy")]),t._v(" "),s("b-message",{attrs:{type:"is-warning"}},[t._v("\n                Please note that "),s("code",{staticClass:"javascript"},[t._v("import 'buefy/dist/buefy.css'")]),t._v(" from the "),s("router-link",{attrs:{to:"/documentation/start"}},[t._v("start section")]),t._v(" has been omitted.\n            ")],1),t._v(" "),s("CodeView",{attrs:{code:t._f("pre")(t.importing),lang:"javascript",expanded:""}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("1")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"content"},[t._v("Or clone the repository: "),s("a",{attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[t._v("https://github.com/buefy/buefy")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("2")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"block"},[t._v("\n                It can be done in your "),s("b",[t._v("App.vue")]),t._v(" within the "),s("code",[t._v('<style lang="scss">')]),t._v(" tag, or in a separate "),s("b",[t._v(".scss")]),t._v(" file.\n            ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("h3",{staticClass:"subtitle"},[t._v("3")])])}]}},305:function(t,e,s){var a=s(0)(s(1271),s(1272),null,null,null);t.exports=a.exports}});
//# sourceMappingURL=49.b17e2c1b1f8af66003f3.js.map