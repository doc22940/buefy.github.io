webpackJsonp([26,92,93,188],{1031:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=i(147),o=i(148),a=i.n(o),l=i(1032),r=i.n(l),s=i(149),c=i.n(s),d=i(1033),u=i.n(d);n.default={data:function(){return{api:t.default,ExSimple:a.a,ExProgrammatically:c.a,ExSimpleCode:r.a,ExProgrammaticallyCode:u.a}}}},1032:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <button class="button is-primary is-medium" @click="openLoading">\r\n                Launch loading\r\n            </button>\r\n        </b-field>\r\n        <b-field>\r\n            <b-switch v-model="isFullPage">Display loader over full page</b-switch>\r\n        </b-field>\r\n        <b-notification :closable="false">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>\r\n        </b-notification>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isLoading: false,\r\n                isFullPage: true\r\n            }\r\n        },\r\n        methods: {\r\n            openLoading() {\r\n                this.isLoading = true\r\n                setTimeout(() => {\r\n                    this.isLoading = false\r\n                }, 10 * 1000)\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1033:function(e,n){e.exports='<template>\r\n    <div>\r\n        <b-field>\r\n            <button class="button is-primary is-medium" @click="open">\r\n                Launch loading\r\n            </button>\r\n        </b-field>\r\n        <b-field>\r\n            <b-switch v-model="isFullPage">Display loader over full page</b-switch>\r\n        </b-field>\r\n        <b-notification ref="element" :closable="false">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-notification>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isFullPage: true,\r\n            }\r\n        },\r\n        methods: {\r\n            open() {\r\n                const loadingComponent = this.$loading.open({\r\n                    container: this.isFullPage ? null : this.$refs.element.$el\r\n                })\r\n                setTimeout(() => loadingComponent.close(), 3 * 1000)\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1034:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}},[i("p",[e._v("The Loading will be closed after about 10 seconds, by pressing escape or by clicking outside.")]),e._v(" "),i("p",[e._v("\n            Use "),i("code",[e._v(':is-full-page="false"')]),e._v(" to limit loader to its container."),i("br"),e._v("\n            In this case, the container element should be positioned as "),i("code",[e._v("position: relative")]),e._v(".\n        ")])]),e._v(" "),i("Example",{attrs:{component:e.ExProgrammatically,code:e.ExProgrammaticallyCode,title:"Programmatically opening"}},[i("p",[e._v("When you want to close the Loading, call the "),i("code",[e._v("close()")]),e._v(" method from the component.")])]),e._v(" "),i("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},147:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>active</code>",description:"Whether modal is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"},{name:"<code>is-full-page</code>",description:"Loader will overlay the full page",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>canCancel</code>",description:"Can close Loading by pressing escape or clicking outside",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>onCancel</code>",description:"Callback function to call after user canceled (pressed escape / clicked outside)",type:"Function",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closed/canceled or called programmatically from the injected component",parameters:"—"}]}]},148:function(e,n,i){var t=i(0)(i(813),i(814),null,null,null);e.exports=t.exports},149:function(e,n,i){var t=i(0)(i(815),i(816),null,null,null);e.exports=t.exports},259:function(e,n,i){var t=i(0)(i(1031),i(1034),null,null,null);e.exports=t.exports},813:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isLoading:!1,isFullPage:!0}},methods:{openLoading:function(){var e=this;this.isLoading=!0,setTimeout(function(){e.isLoading=!1},1e4)}}}},814:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("section",[i("b-field",[i("button",{staticClass:"button is-primary is-medium",on:{click:e.openLoading}},[e._v("\n            Launch loading\n        ")])]),e._v(" "),i("b-field",[i("b-switch",{model:{value:e.isFullPage,callback:function(n){e.isFullPage=n},expression:"isFullPage"}},[e._v("Display loader over full page")])],1),e._v(" "),i("b-notification",{attrs:{closable:!1}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n        "),i("b-loading",{attrs:{"is-full-page":e.isFullPage,active:e.isLoading,"can-cancel":!0},on:{"update:active":function(n){e.isLoading=n}}})],1)],1)},staticRenderFns:[]}},815:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isFullPage:!0}},methods:{open:function(){var e=this.$loading.open({container:this.isFullPage?null:this.$refs.element.$el});setTimeout(function(){return e.close()},3e3)}}}},816:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("b-field",[i("button",{staticClass:"button is-primary is-medium",on:{click:e.open}},[e._v("\n            Launch loading\n        ")])]),e._v(" "),i("b-field",[i("b-switch",{model:{value:e.isFullPage,callback:function(n){e.isFullPage=n},expression:"isFullPage"}},[e._v("Display loader over full page")])],1),e._v(" "),i("b-notification",{ref:"element",attrs:{closable:!1}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=26.9b8a1af223b487427eca.js.map