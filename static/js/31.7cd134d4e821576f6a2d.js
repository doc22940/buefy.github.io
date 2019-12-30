webpackJsonp([31,123,124,125,280,281],{1096:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isLoading:!1,isFullPage:!0}},methods:{openLoading:function(){var e=this;this.isLoading=!0,setTimeout(function(){e.isLoading=!1},1e4)}}}},1097:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("section",[i("b-field",[i("button",{staticClass:"button is-primary is-medium",on:{click:e.openLoading}},[e._v("\r\n                Launch loading\r\n            ")])]),e._v(" "),i("b-field",[i("b-switch",{model:{value:e.isFullPage,callback:function(n){e.isFullPage=n},expression:"isFullPage"}},[e._v("Display loader over full page")])],1),e._v(" "),i("b-notification",{attrs:{closable:!1}},[e._v("\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n            "),i("b-loading",{attrs:{"is-full-page":e.isFullPage,active:e.isLoading,"can-cancel":!0},on:{"update:active":function(n){e.isLoading=n}}})],1)],1)},staticRenderFns:[]}},1098:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isFullPage:!0}},methods:{open:function(){var e=this.$buefy.loading.open({container:this.isFullPage?null:this.$refs.element.$el});setTimeout(function(){return e.close()},3e3)}}}},1099:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("b-field",[i("button",{staticClass:"button is-primary is-medium",on:{click:e.open}},[e._v("\r\n                Launch loading\r\n            ")])]),e._v(" "),i("b-field",[i("b-switch",{model:{value:e.isFullPage,callback:function(n){e.isFullPage=n},expression:"isFullPage"}},[e._v("Display loader over full page")])],1),e._v(" "),i("b-notification",{ref:"element",attrs:{closable:!1}},[e._v("\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        ")])],1)},staticRenderFns:[]}},1100:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isLoading:!1,isFullPage:!0}},methods:{openLoading:function(){var e=this;this.isLoading=!0,setTimeout(function(){e.isLoading=!1},1e4)}}}},1101:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("section",[i("b-field",[i("button",{staticClass:"button is-primary is-medium",on:{click:e.openLoading}},[e._v("\r\n                Launch loading\r\n            ")])]),e._v(" "),i("b-field",[i("b-switch",{model:{value:e.isFullPage,callback:function(n){e.isFullPage=n},expression:"isFullPage"}},[e._v("Display loader over full page")])],1),e._v(" "),i("b-notification",{attrs:{closable:!1}},[e._v("\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n            "),i("b-loading",{attrs:{"is-full-page":e.isFullPage,active:e.isLoading,"can-cancel":!0},on:{"update:active":function(n){e.isLoading=n}}},[i("b-icon",{attrs:{pack:"fas",icon:"sync-alt",size:"is-large","custom-class":"fa-spin"}})],1)],1)],1)},staticRenderFns:[]}},1411:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=i(200),a=i(201),o=i(202),r=i.n(o),l=i(1412),s=i.n(l),c=i(203),d=i.n(c),u=i(1413),p=i.n(u),m=i(204),f=i.n(m),g=i(1414),b=i.n(g);n.default={data:function(){return{api:t.default,variables:a.default,ExSimple:r.a,ExProgrammatically:d.a,ExTemplated:f.a,ExSimpleCode:s.a,ExProgrammaticallyCode:p.a,ExTemplatedCode:b.a}}}},1412:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <button class="button is-primary is-medium" @click="openLoading">\r\n                Launch loading\r\n            </button>\r\n        </b-field>\r\n        <b-field>\r\n            <b-switch v-model="isFullPage">Display loader over full page</b-switch>\r\n        </b-field>\r\n        <b-notification :closable="false">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>\r\n        </b-notification>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isLoading: false,\r\n                isFullPage: true\r\n            }\r\n        },\r\n        methods: {\r\n            openLoading() {\r\n                this.isLoading = true\r\n                setTimeout(() => {\r\n                    this.isLoading = false\r\n                }, 10 * 1000)\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1413:function(e,n){e.exports='<template>\r\n    <div>\r\n        <b-field>\r\n            <button class="button is-primary is-medium" @click="open">\r\n                Launch loading\r\n            </button>\r\n        </b-field>\r\n        <b-field>\r\n            <b-switch v-model="isFullPage">Display loader over full page</b-switch>\r\n        </b-field>\r\n        <b-notification ref="element" :closable="false">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-notification>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isFullPage: true,\r\n            }\r\n        },\r\n        methods: {\r\n            open() {\r\n                const loadingComponent = this.$buefy.loading.open({\r\n                    container: this.isFullPage ? null : this.$refs.element.$el\r\n                })\r\n                setTimeout(() => loadingComponent.close(), 3 * 1000)\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1414:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <button class="button is-primary is-medium" @click="openLoading">\r\n                Launch loading\r\n            </button>\r\n        </b-field>\r\n        <b-field>\r\n            <b-switch v-model="isFullPage">Display loader over full page</b-switch>\r\n        </b-field>\r\n        <b-notification :closable="false">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true">\r\n                <b-icon\r\n                    pack="fas"\r\n                    icon="sync-alt"\r\n                    size="is-large"\r\n                    custom-class="fa-spin">\r\n                </b-icon>\r\n            </b-loading>\r\n        </b-notification>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isLoading: false,\r\n                isFullPage: true\r\n            }\r\n        },\r\n        methods: {\r\n            openLoading() {\r\n                this.isLoading = true\r\n                setTimeout(() => {\r\n                    this.isLoading = false\r\n                }, 10 * 1000)\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1415:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}},[i("p",[e._v("The Loading will be closed after about 10 seconds, by pressing escape or by clicking outside.")]),e._v(" "),i("p",[e._v("\r\n                Use "),i("code",[e._v(':is-full-page="false"')]),e._v(" to limit loader to its container."),i("br"),e._v("\r\n                In this case, the container element should be positioned as "),i("code",[e._v("position: relative")]),e._v(".\r\n            ")])]),e._v(" "),i("Example",{attrs:{component:e.ExProgrammatically,code:e.ExProgrammaticallyCode,title:"Programmatically opening"}},[i("p",[e._v("When you want to close the Loading, call the "),i("code",[e._v("close()")]),e._v(" method from the component.")])]),e._v(" "),i("Example",{attrs:{component:e.ExTemplated,code:e.ExTemplatedCode,title:"Templated"}},[i("div",{staticClass:"tags has-addons"},[i("span",{staticClass:"tag is-success"},[e._v("New!")]),e._v(" "),i("span",{staticClass:"tag is-info"},[e._v("0.7.5")])]),e._v(" "),i("p",[e._v("Slot is available for loading content.")])]),e._v(" "),i("ApiView",{attrs:{data:e.api}}),e._v(" "),i("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},200:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>active</code>",description:"Whether modal is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"},{name:"<code>is-full-page</code>",description:"Loader will overlay the full page",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>can-cancel</code>",description:"Can close Loading by pressing escape or clicking outside",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>on-cancel</code>",description:"Callback function to call after user canceled (pressed escape / clicked outside)",type:"Function",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closed/canceled or called programmatically from the injected component",parameters:"—"}]}]},201:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{name:"<code>$loading-background</code>",description:"The loading background color",default:"<code>rgba(255,255,255,0.5)</code>"},{name:"<code>$loading-background-legacy</code>",description:"The loading background color for non-rgba compatible browsers",default:"<code>#7f7f7f</code>"},{name:"<code>$loading-icon-size</code>",description:"The loading icon size",default:"<code>3em</code>"},{name:"<code>$loading-full-page-icon-size</code>",description:"The loading icon size when loader is displayed over full page",default:"<code>5em</code>"}]},202:function(e,n,i){var t=i(0)(i(1096),i(1097),null,null,null);e.exports=t.exports},203:function(e,n,i){var t=i(0)(i(1098),i(1099),null,null,null);e.exports=t.exports},204:function(e,n,i){var t=i(0)(i(1100),i(1101),null,null,null);e.exports=t.exports},370:function(e,n,i){var t=i(0)(i(1411),i(1415),null,null,null);e.exports=t.exports}});
//# sourceMappingURL=31.7cd134d4e821576f6a2d.js.map