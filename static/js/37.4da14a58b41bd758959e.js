webpackJsonp([37,92,229],{1252:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(197),a=t(198),i=t.n(a),o=t(1253),l=t.n(o);r.default={data:function(){return{api:n.default,ExSimple:i.a,ExSimpleCode:l.a}}}},1253:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Total">\r\n                <b-input type="number" v-model="total"></b-input>\r\n            </b-field>\r\n            <b-field label="Items per page">\r\n                <b-input type="number" v-model="perPage"></b-input>\r\n            </b-field>\r\n        </b-field>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Show buttons before current">\r\n                <b-input type="number" v-model="rangeBefore" min="0"></b-input>\r\n            </b-field>\r\n            <b-field label="Show buttons after current">\r\n                <b-input type="number" v-model="rangeAfter" min="0"></b-input>\r\n            </b-field>\r\n        </b-field>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Order">\r\n                <b-select v-model="order">\r\n                    <option value="">default</option>\r\n                    <option value="is-centered">is-centered</option>\r\n                    <option value="is-right">is-right</option>\r\n                </b-select>\r\n            </b-field>\r\n            <b-field label="Size">\r\n                <b-select v-model="size">\r\n                    <option value="">default</option>\r\n                    <option value="is-small">is-small</option>\r\n                    <option value="is-medium">is-medium</option>\r\n                    <option value="is-large">is-large</option>\r\n                </b-select>\r\n            </b-field>\r\n        </b-field>\r\n        <div class="block">\r\n            <b-switch v-model="isSimple">Simple</b-switch>\r\n            <b-switch v-model="isRounded">Rounded</b-switch>\r\n        </div>\r\n\r\n        <hr>\r\n        <b-pagination\r\n            :total="total"\r\n            :current.sync="current"\r\n            :range-before="rangeBefore"\r\n            :range-after="rangeAfter"\r\n            :order="order"\r\n            :size="size"\r\n            :simple="isSimple"\r\n            :rounded="isRounded"\r\n            :per-page="perPage"\r\n            aria-next-label="Next page"\r\n            aria-previous-label="Previous page"\r\n            aria-page-label="Page"\r\n            aria-current-label="Current page">\r\n        </b-pagination>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                total: 200,\r\n                current: 10,\r\n                perPage: 10,\r\n                rangeBefore: 3,\r\n                rangeAfter: 1,\r\n                order: \'\',\r\n                size: \'\',\r\n                isSimple: false,\r\n                isRounded: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1254:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},197:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{props:[{name:"<code>total</code>",description:"Total count of items",type:"Number",values:"—",default:"—"},{name:"<code>per-page</code>",description:"Items count for each page",type:"Number",values:"—",default:"<code>20</code>"},{name:"<code>range-before</code>",description:"Number of pagination items to show before current page",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>range-after</code>",description:"Items to paginatation items to show after current page",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>current</code>",description:"Current page number, use the <code>.sync</code> modifier to make it two-way binding",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>order</code>",description:"Buttons order, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"},{name:"<code>size</code>",description:"Pagination size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>simple</code>",description:"Simpler style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>rounded</code>",description:"Rounded button styles",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>aria-next-label</code>",description:"Accessibility label for the next page link.",type:"String",values:"—",default:"—"},{name:"<code>aria-previous-label</code>",description:"Accessibility label for the previous page link.",type:"String",values:"—",default:"—"},{name:"<code>aria-page-label</code>",description:"Accessibility label for the page link. If passed, this text will be prepended to the number of the page.",type:"String",values:"—",default:"—"},{name:"<code>aria-current-label</code>",description:"Accessibility label for the current page link. If passed, this text will be prepended to the current page.",type:"String",values:"—",default:"—"}],events:[{name:"<code>change</code>",description:"Triggers when the current page is changed",parameters:"<code>value: Number</code>"}]}]},198:function(e,r,t){var n=t(0)(t(983),t(984),null,null,null);e.exports=n.exports},317:function(e,r,t){var n=t(0)(t(1252),t(1254),null,null,null);e.exports=n.exports},983:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{total:200,current:10,perPage:10,rangeBefore:3,rangeAfter:1,order:"",size:"",isSimple:!1,isRounded:!1}}}},984:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Total"}},[t("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(r){e.total=r},expression:"total"}})],1),e._v(" "),t("b-field",{attrs:{label:"Items per page"}},[t("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(r){e.perPage=r},expression:"perPage"}})],1)],1),e._v(" "),t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Show buttons before current"}},[t("b-input",{attrs:{type:"number",min:"0"},model:{value:e.rangeBefore,callback:function(r){e.rangeBefore=r},expression:"rangeBefore"}})],1),e._v(" "),t("b-field",{attrs:{label:"Show buttons after current"}},[t("b-input",{attrs:{type:"number",min:"0"},model:{value:e.rangeAfter,callback:function(r){e.rangeAfter=r},expression:"rangeAfter"}})],1)],1),e._v(" "),t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Order"}},[t("b-select",{model:{value:e.order,callback:function(r){e.order=r},expression:"order"}},[t("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),t("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),t("option",{attrs:{value:"is-right"}},[e._v("is-right")])])],1),e._v(" "),t("b-field",{attrs:{label:"Size"}},[t("b-select",{model:{value:e.size,callback:function(r){e.size=r},expression:"size"}},[t("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),t("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),t("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),t("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),t("div",{staticClass:"block"},[t("b-switch",{model:{value:e.isSimple,callback:function(r){e.isSimple=r},expression:"isSimple"}},[e._v("Simple")]),e._v(" "),t("b-switch",{model:{value:e.isRounded,callback:function(r){e.isRounded=r},expression:"isRounded"}},[e._v("Rounded")])],1),e._v(" "),t("hr"),e._v(" "),t("b-pagination",{attrs:{total:e.total,current:e.current,"range-before":e.rangeBefore,"range-after":e.rangeAfter,order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(r){e.current=r}}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=37.4da14a58b41bd758959e.js.map