webpackJsonp([103],{1069:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{total:200,current:10,perPage:10,rangeBefore:3,rangeAfter:1,order:"",size:"",isSimple:!1,isRounded:!1,prevIcon:"chevron-left",nextIcon:"chevron-right"}}}},1070:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("b-field",{attrs:{grouped:"","group-multiline":""}},[r("b-field",{attrs:{label:"Total"}},[r("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1),e._v(" "),r("b-field",{attrs:{label:"Items per page"}},[r("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),r("b-field",{attrs:{grouped:"","group-multiline":""}},[r("b-field",{attrs:{label:"Show buttons before current"}},[r("b-input",{attrs:{type:"number",min:"0"},model:{value:e.rangeBefore,callback:function(t){e.rangeBefore=t},expression:"rangeBefore"}})],1),e._v(" "),r("b-field",{attrs:{label:"Show buttons after current"}},[r("b-input",{attrs:{type:"number",min:"0"},model:{value:e.rangeAfter,callback:function(t){e.rangeAfter=t},expression:"rangeAfter"}})],1)],1),e._v(" "),r("b-field",{attrs:{grouped:"","group-multiline":""}},[r("b-field",{attrs:{label:"Order"}},[r("b-select",{model:{value:e.order,callback:function(t){e.order=t},expression:"order"}},[r("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),r("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),r("option",{attrs:{value:"is-right"}},[e._v("is-right")])])],1),e._v(" "),r("b-field",{attrs:{label:"Size"}},[r("b-select",{model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[r("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),r("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),r("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),r("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),r("b-field",{attrs:{grouped:"","group-multiline":""}},[r("b-field",{attrs:{label:"Previous icon"}},[r("b-select",{model:{value:e.prevIcon,callback:function(t){e.prevIcon=t},expression:"prevIcon"}},[r("option",{attrs:{value:"chevron-left"}},[e._v("Chevron")]),e._v(" "),r("option",{attrs:{value:"arrow-left"}},[e._v("Arrow")])])],1),e._v(" "),r("b-field",{attrs:{label:"Next icon"}},[r("b-select",{model:{value:e.nextIcon,callback:function(t){e.nextIcon=t},expression:"nextIcon"}},[r("option",{attrs:{value:"chevron-right"}},[e._v("Chevron")]),e._v(" "),r("option",{attrs:{value:"arrow-right"}},[e._v("Arrow")])])],1)],1),e._v(" "),r("div",{staticClass:"block"},[r("b-switch",{model:{value:e.isSimple,callback:function(t){e.isSimple=t},expression:"isSimple"}},[e._v("Simple")]),e._v(" "),r("b-switch",{model:{value:e.isRounded,callback:function(t){e.isRounded=t},expression:"isRounded"}},[e._v("Rounded")])],1),e._v(" "),r("hr"),e._v(" "),r("b-pagination",{attrs:{total:e.total,current:e.current,"range-before":e.rangeBefore,"range-after":e.rangeAfter,order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage,"icon-prev":e.prevIcon,"icon-next":e.nextIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(t){e.current=t}}})],1)},staticRenderFns:[]}},217:function(e,t,r){var a=r(0)(r(1069),r(1070),null,null,null);e.exports=a.exports}});
//# sourceMappingURL=103.12d085ec37ca4e6e3fc8.js.map