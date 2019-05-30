webpackJsonp([47],{1237:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{importingBundle:"\n            import Vue from 'vue'\n            import Buefy from 'buefy'\n            import 'buefy/dist/buefy.css'\n\n            Vue.use(Buefy)\n            ",importingComponentsAsVuePlugins:"\n            import Vue from 'vue'\n            import Table from 'buefy/dist/components/table'\n            import Input from 'buefy/dist/components/input'\n            import 'buefy/dist/buefy.css'\n\n            Vue.use(Table)\n            Vue.use(Input)\n            ",importingComponents:"\n            import Vue from 'vue'\n            import { Table } from 'buefy/dist/components/table'\n            import { Input } from 'buefy/dist/components/input'\n            import 'buefy/dist/buefy.css'\n\n            Vue.component('b-table', Table)\n            Vue.component('b-input', Input)\n            ",importingSSR:"\n            import Vue from 'vue'\n            import Buefy from 'buefy'\n            import 'buefy/dist/buefy.css'\n\n            Vue.use(Buefy) ",installNuxtBuefy:"\n            // with npm\n            npm install nuxt-buefy\n\n            // with yarn\n            yarn add nuxt-buefy\n            ",importingNuxtBuefy:"\n            {\n                modules: [\n                    // Simple usage\n                    'nuxt-buefy',\n\n                    // Or you can customize\n                    ['nuxt-buefy', { css: false, materialDesignIcons: false }],\n                ]\n            }",importingCDNHtml:'\n            <!DOCTYPE html>\n            <html>\n            <head>\n                <meta charset="utf-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1">\n                <link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css">\n            </head>\n\n            <body>\n                <div id="app">\n                    \x3c!-- Buefy components goes here --\x3e\n                </div>\n\n                <script src="https://unpkg.com/vue"><\/script>\n                \x3c!-- Full bundle --\x3e\n                <script src="https://unpkg.com/buefy/dist/buefy.min.js"><\/script>\n\n                \x3c!-- Individual components --\x3e\n                <script src="https://unpkg.com/buefy/dist/components/table"><\/script>\n                <script src="https://unpkg.com/buefy/dist/components/input"><\/script>\n\n                <script>\n                    new Vue({\n                        el: \'#app\'\n                    })\n                <\/script>\n            </body>\n            </html>',materialIcons:'<link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">',fontAwesome5:'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'}}}},1238:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"title"},[t._v("Icons")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("Several components uses icons, you might want to add a pack")]),t._v(" "),n("CodeView",{attrs:{title:"Material Design Icons CDN",code:t.materialIcons,expanded:""}}),t._v(" "),n("CodeView",{attrs:{title:"Font Awesome 5 CDN",code:t.fontAwesome5,expanded:""}}),t._v(" "),n("div",{staticClass:"content"},[n("blockquote",[n("p",[t._v("Refer to its documentation for latest release / CDN.")]),t._v(" "),n("p",[t._v("Please note that Buefy doesn't include icon packs. You have to import it as you prefer (NPM, CDN, etc.).")]),t._v(" "),n("p",[t._v("\n                If you opted for Font Awesome, you should update your\n                "),n("router-link",{attrs:{to:"/documentation/constructor-options"}},[t._v("constructor options")]),t._v(".\n            ")],1)])]),t._v(" "),n("hr"),t._v(" "),n("b-message",{attrs:{type:"is-warning",size:"is-medium"}},[t._v("\n        For any installation and usage method, you need\n        "),n("strong",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue.js")]),t._v(" version 2.5+")]),t._v(".\n    ")]),t._v(" "),n("div",{staticClass:"media"},[t._m(0),t._v(" "),n("div",{staticClass:"media-content"},[t._m(1),t._v(" "),n("p",{staticClass:"subtitle is-spaced"},[t._v("After creating a project with vue-cli or custom-made (usually Webpack)")]),t._v(" "),n("p",{staticClass:"title is-4"},[t._v("Installation")]),t._v(" "),n("CodeView",{attrs:{code:"npm install buefy",lang:"bash",expanded:""}}),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"title is-4"},[t._v("Usage")]),t._v(" "),n("b-message",{attrs:{type:"is-success"}},[n("div",{staticClass:"content"},[t._v("\n                    Even though this is gonna import "),n("strong",[t._v("ALL")]),t._v(" components to your application,\n                    Buefy full bundle is optimized and still pretty small:\n                    "),n("ul",[n("li",[n("strong",[t._v("script")]),t._v(" is "),n("strong",[t._v("32KB")]),t._v(" min+gzip")]),t._v(" "),n("li",[n("strong",[t._v("style")]),t._v(" is "),n("strong",[t._v("28KB")]),t._v(" min+gzip (with bulma included)")])])])]),t._v(" "),n("CodeView",{attrs:{title:"Full bundle (recommended)",code:t._f("pre")(t.importingBundle),lang:"javascript",expanded:""}}),t._v(" "),n("b-message",{attrs:{type:"is-danger"}},[n("div",{staticClass:"content"},[n("p",[t._v("\n                        If you only need a couple of Buefy's components, might be a good idea to include individuals.\n                    ")]),t._v(" "),n("p",[t._v("\n                        Bear in mind that every individual component has everything they need to work by themselves —\n                        including "),n("strong",[t._v("too many")]),t._v(" components individually will "),n("strong",[t._v("INCREASE")]),t._v("\n                        your project's build size, adding the full bundle is recomended in that case.\n                    ")]),t._v(" "),n("p",[t._v("\n                        In general, "),n("strong",[t._v("don't go over 3 components")]),t._v(" here.\n                        If you want more than that, add the full bundle.\n                    ")])])]),t._v(" "),n("b-message",{attrs:{type:"is-info"}},[t._v("\n                To include individual styles, see "),n("router-link",{attrs:{to:"/documentation/customization"}},[t._v("Customization")]),t._v(" section.\n            ")],1),t._v(" "),n("CodeView",{attrs:{title:"Individual components as Vue plugins",code:t._f("pre")(t.importingComponentsAsVuePlugins),lang:"javascript",expanded:""}}),t._v(" "),n("CodeView",{attrs:{title:"Individual components",code:t._f("pre")(t.importingComponents),lang:"javascript",expanded:""}})],1)]),t._v(" "),n("div",{staticClass:"media"},[t._m(2),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title"},[t._v("Standalone")]),t._v(" "),n("p",{staticClass:"subtitle is-spaced"},[t._v("Using CDN or downloading files to serve local")]),t._v(" "),n("p",{staticClass:"title is-4"},[t._v("Installation")]),t._v(" "),t._m(3),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"title is-4"},[t._v("Usage example")]),t._v(" "),n("CodeView",{attrs:{code:t._f("pre")(t.importingCDNHtml),expanded:""}})],1)]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"media"},[t._m(4),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title"},[t._v("Nuxt.js")]),t._v(" "),n("p",{staticClass:"subtitle is-spaced"},[t._v("Using a Nuxt.js module to keep things easier")]),t._v(" "),n("p",{staticClass:"title is-4"},[t._v("Installation")]),t._v(" "),n("CodeView",{attrs:{code:"npm install nuxt-buefy",lang:"bash",expanded:""}}),t._v(" "),n("p",{staticClass:"title is-4"},[t._v("Usage")]),t._v(" "),t._m(5),t._v(" "),n("CodeView",{attrs:{code:t._f("pre")(t.importingNuxtBuefy),lang:"javascript",expanded:""}})],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-left"},[n("p",{staticClass:"title"},[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title"},[t._v("NPM or Yarn "),n("em",[t._v("(recommended)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-left"},[n("p",{staticClass:"title"},[t._v("2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("Just download or use these as CDN:")]),t._v(" "),n("ul",[n("li",[t._v("Script: "),n("a",{attrs:{href:"https://unpkg.com/buefy/dist/buefy.min.js",target:"_blank"}},[t._v("https://unpkg.com/buefy/dist/buefy.min.js")])]),t._v(" "),n("li",[t._v("Style: "),n("a",{attrs:{href:"https://unpkg.com/buefy/dist/buefy.min.css",target:"_blank"}},[t._v("https://unpkg.com/buefy/dist/buefy.min.css")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-left"},[n("p",{staticClass:"title"},[t._v("3")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"content"},[t._v("\n                Add "),n("a",{attrs:{href:"https://github.com/buefy/nuxt-buefy"}},[t._v("nuxt-buefy")]),t._v(" to modules section of "),n("code",[t._v("nuxt.config.js")]),t._v(":\n            ")])}]}},297:function(t,e,n){var s=n(0)(n(1237),n(1238),null,null,null);t.exports=s.exports}});
//# sourceMappingURL=47.26d31961a3e4d7469ea6.js.map