webpackJsonp([91],{203:function(e,t,a){var i=a(0)(a(983),a(984),null,null,null);e.exports=i.exports},983:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{indeterminate:!1,type:null,size:"is-medium",showValue:!0,format:"raw",precision:2,keepTrailingZeroes:!1}}}},984:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"block"},[a("b-switch",{model:{value:e.indeterminate,callback:function(t){e.indeterminate=t},expression:"indeterminate"}},[e._v(" Indeterminate ")]),e._v(" "),a("b-field",{attrs:{label:"Type and Size"}},[a("b-field",{attrs:{grouped:""}},[a("b-select",{attrs:{placeholder:"Type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("option",{attrs:{value:"null"}},[e._v("Default")]),e._v(" "),a("option",{attrs:{value:"is-primary"}},[e._v("Primary")]),e._v(" "),a("option",{attrs:{value:"is-success"}},[e._v("Success")]),e._v(" "),a("option",{attrs:{value:"is-warning"}},[e._v("Warning")]),e._v(" "),a("option",{attrs:{value:"is-danger"}},[e._v("Danger")])]),e._v(" "),a("b-select",{attrs:{placeholder:"Size"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[a("option",{attrs:{value:"null"}},[e._v("Default")]),e._v(" "),a("option",{attrs:{value:"is-small"}},[e._v("Small")]),e._v(" "),a("option",{attrs:{value:"is-medium"}},[e._v("Medium")]),e._v(" "),a("option",{attrs:{value:"is-large"}},[e._v("Large")])])],1)],1),e._v(" "),a("b-switch",{model:{value:e.showValue,callback:function(t){e.showValue=t},expression:"showValue"}},[e._v(" Show Value ")]),e._v(" "),a("b-switch",{attrs:{disabled:!e.showValue},model:{value:e.keepTrailingZeroes,callback:function(t){e.keepTrailingZeroes=t},expression:"keepTrailingZeroes"}},[e._v(" Keep Trailing Zeroes ")]),e._v(" "),a("b-field",{attrs:{label:"Format and Precision"}},[a("b-field",{attrs:{grouped:""}},[a("b-select",{attrs:{disabled:!e.showValue},model:{value:e.format,callback:function(t){e.format=t},expression:"format"}},[a("option",{attrs:{value:"raw"}},[e._v("Raw")]),e._v(" "),a("option",{attrs:{value:"percent"}},[e._v("Percent")])]),e._v(" "),a("b-numberinput",{attrs:{disabled:!e.showValue,"controls-position":"compact"},model:{value:e.precision,callback:function(t){e.precision=t},expression:"precision"}})],1)],1)],1),e._v(" "),a("b-progress",{attrs:{type:e.type,size:e.size,value:e.indeterminate?void 0:80,"show-value":e.showValue,format:e.format,precision:e.precision,"keep-trailing-zeroes":e.keepTrailingZeroes}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=91.d79febbef5f037d4b2dc.js.map