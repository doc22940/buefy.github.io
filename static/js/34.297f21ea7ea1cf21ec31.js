webpackJsonp([34,81,198],{1122:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(178),n=r(179),a=r.n(n),o=r(1123),l=r.n(o);t.default={data:function(){return{api:i.default,ExSimple:a.a,ExSimpleCode:l.a}}}},1123:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Total">\r\n                <b-input type="number" v-model="total"></b-input>\r\n            </b-field>\r\n            <b-field label="Items per page">\r\n                <b-input type="number" v-model="perPage"></b-input>\r\n            </b-field>\r\n            <b-field label="Order">\r\n                <b-select v-model="order">\r\n                    <option value="">default</option>\r\n                    <option value="is-centered">is-centered</option>\r\n                    <option value="is-right">is-right</option>\r\n                </b-select>\r\n            </b-field>\r\n            <b-field label="Size">\r\n                <b-select v-model="size">\r\n                    <option value="">default</option>\r\n                    <option value="is-small">is-small</option>\r\n                    <option value="is-medium">is-medium</option>\r\n                    <option value="is-large">is-large</option>\r\n                </b-select>\r\n            </b-field>\r\n        </b-field>\r\n        <div class="block">\r\n            <b-switch v-model="isSimple">Simple</b-switch>\r\n            <b-switch v-model="isRounded">Rounded</b-switch>\r\n        </div>\r\n\r\n        <hr>\r\n        <b-pagination\r\n            :total="total"\r\n            :current.sync="current"\r\n            :order="order"\r\n            :size="size"\r\n            :simple="isSimple"\r\n            :rounded="isRounded"\r\n            :per-page="perPage"\r\n            aria-next-label="Next page"\r\n            aria-previous-label="Previous page"\r\n            aria-page-label="Page"\r\n            aria-current-label="Current page">\r\n        </b-pagination>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                total: 200,\r\n                current: 1,\r\n                perPage: 20,\r\n                order: \'\',\r\n                size: \'\',\r\n                isSimple: false,\r\n                isRounded: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1124:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),r("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},178:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>total</code>",description:"Total count of items",type:"Number",values:"—",default:"—"},{name:"<code>per-page</code>",description:"Items count for each page",type:"Number",values:"—",default:"<code>20</code>"},{name:"<code>current</code>",description:"Current page number, use the <code>.sync</code> modifier to make it two-way binding",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>order</code>",description:"Buttons order, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"},{name:"<code>size</code>",description:"Pagination size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>simple</code>",description:"Simpler style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>aria-next-label</code>",description:"Accessibility label for the next page link.",type:"String",values:"—",default:"—"},{name:"<code>aria-previous-label</code>",description:"Accessibility label for the previous page link.",type:"String",values:"—",default:"—"},{name:"<code>aria-page-label</code>",description:"Accessibility label for the page link. If passed, this text will be prepended to the number of the page.",type:"String",values:"—",default:"—"},{name:"<code>aria-current-label</code>",description:"Accessibility label for the current page link. If passed, this text will be prepended to the current page.",type:"String",values:"—",default:"—"}],events:[{name:"<code>change</code>",description:"Triggers when the current page is changed",parameters:"<code>value: Number</code>"}]}]},179:function(e,t,r){var i=r(0)(r(889),r(890),null,null,null);e.exports=i.exports},277:function(e,t,r){var i=r(0)(r(1122),r(1124),null,null,null);e.exports=i.exports},889:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{total:200,current:1,perPage:20,order:"",size:"",isSimple:!1,isRounded:!1}}}},890:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("b-field",{attrs:{grouped:"","group-multiline":""}},[r("b-field",{attrs:{label:"Total"}},[r("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1),e._v(" "),r("b-field",{attrs:{label:"Items per page"}},[r("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),e._v(" "),r("b-field",{attrs:{label:"Order"}},[r("b-select",{model:{value:e.order,callback:function(t){e.order=t},expression:"order"}},[r("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),r("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),r("option",{attrs:{value:"is-right"}},[e._v("is-right")])])],1),e._v(" "),r("b-field",{attrs:{label:"Size"}},[r("b-select",{model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[r("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),r("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),r("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),r("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),r("div",{staticClass:"block"},[r("b-switch",{model:{value:e.isSimple,callback:function(t){e.isSimple=t},expression:"isSimple"}},[e._v("Simple")]),e._v(" "),r("b-switch",{model:{value:e.isRounded,callback:function(t){e.isRounded=t},expression:"isRounded"}},[e._v("Rounded")])],1),e._v(" "),r("hr"),e._v(" "),r("b-pagination",{attrs:{total:e.total,current:e.current,order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(t){e.current=t}}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=34.297f21ea7ea1cf21ec31.js.map