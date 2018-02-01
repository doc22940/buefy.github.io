webpackJsonp([30,73,158],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>total</code>",description:"Total count of items",type:"Number",values:"—",default:"—"},{name:"<code>per-page</code>",description:"Items count for each page",type:"Number",values:"—",default:"<code>20</code>"},{name:"<code>current</code>",description:"Current page number, use the <code>.sync</code> modifier to make it two-way binding",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>order</code>",description:"Buttons order, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"},{name:"<code>size</code>",description:"Pagination size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>simple</code>",description:"Simpler style",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>change</code>",description:"Triggers when the current page is changed",parameters:"<code>value: Number</code>"}]}]},1014:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-container"},[n("h1",{staticClass:"title is-spaced"},[e._v("Pagination")]),e._v(" "),n("h2",{staticClass:"subtitle"},[e._v("A responsive and flexible pagination")]),e._v(" "),n("hr"),e._v(" "),n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},167:function(e,t,n){var r=n(0)(n(700),n(781),null,null,null);e.exports=r.exports},240:function(e,t,n){var r=n(0)(n(882),n(1014),null,null,null);e.exports=r.exports},700:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{total:200,current:1,perPage:20,order:"",size:"",isSimple:!1,isRounded:!1}}}},781:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("b-field",{attrs:{label:"Total"}},[n("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1),e._v(" "),n("b-field",{attrs:{label:"Items per page"}},[n("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),e._v(" "),n("b-field",{attrs:{label:"Order"}},[n("b-select",{model:{value:e.order,callback:function(t){e.order=t},expression:"order"}},[n("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),n("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),n("option",{attrs:{value:"is-right"}},[e._v("is-right")])])],1),e._v(" "),n("b-field",{attrs:{label:"Size"}},[n("b-select",{model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[n("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),n("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),n("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),n("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),n("div",{staticClass:"block"},[n("b-switch",{model:{value:e.isSimple,callback:function(t){e.isSimple=t},expression:"isSimple"}},[e._v("Simple")]),e._v(" "),n("b-switch",{model:{value:e.isRounded,callback:function(t){e.isRounded=t},expression:"isRounded"}},[e._v("Rounded")])],1),e._v(" "),n("hr"),e._v(" "),n("b-pagination",{attrs:{total:e.total,current:e.current,order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage},on:{"update:current":function(t){e.current=t}}})],1)},staticRenderFns:[]}},882:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(100),i=n(167),o=n.n(i),l=n(955),a=n.n(l);t.default={data:function(){return{api:r.default,ExSimple:o.a,ExSimpleCode:a.a}}}},955:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Total">\r\n                <b-input type="number" v-model="total"></b-input>\r\n            </b-field>\r\n            <b-field label="Items per page">\r\n                <b-input type="number" v-model="perPage"></b-input>\r\n            </b-field>\r\n            <b-field label="Order">\r\n                <b-select v-model="order">\r\n                    <option value="">default</option>\r\n                    <option value="is-centered">is-centered</option>\r\n                    <option value="is-right">is-right</option>\r\n                </b-select>\r\n            </b-field>\r\n            <b-field label="Size">\r\n                <b-select v-model="size">\r\n                    <option value="">default</option>\r\n                    <option value="is-small">is-small</option>\r\n                    <option value="is-medium">is-medium</option>\r\n                    <option value="is-large">is-large</option>\r\n                </b-select>\r\n            </b-field>\r\n        </b-field>\r\n        <div class="block">\r\n            <b-switch v-model="isSimple">Simple</b-switch>\r\n            <b-switch v-model="isRounded">Rounded</b-switch>\r\n        </div>\r\n\r\n        <hr>\r\n        <b-pagination\r\n            :total="total"\r\n            :current.sync="current"\r\n            :order="order"\r\n            :size="size"\r\n            :simple="isSimple"\r\n            :rounded="isRounded"\r\n            :per-page="perPage">\r\n        </b-pagination>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                total: 200,\r\n                current: 1,\r\n                perPage: 20,\r\n                order: \'\',\r\n                size: \'\',\r\n                isSimple: false,\r\n                isRounded: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'}});
//# sourceMappingURL=30.6589fd1f43f82ea530b4.js.map