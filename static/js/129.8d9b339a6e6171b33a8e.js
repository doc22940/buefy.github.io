webpackJsonp([129],{141:function(e,t,o){var n=o(0)(o(974),o(975),null,null,null);e.exports=n.exports},974:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{showWeekNumber:!1,formatAmPm:!1,enableSeconds:!1}},computed:{format:function(){return this.formatAmPm?"12":"24"}}}},975:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-field",{attrs:{grouped:"","group-multiline":""}},[o("div",{staticClass:"control"},[o("b-switch",{model:{value:e.showWeekNumber,callback:function(t){e.showWeekNumber=t},expression:"showWeekNumber"}},[e._v("Show week number")])],1),e._v(" "),o("div",{staticClass:"control"},[o("b-switch",{model:{value:e.formatAmPm,callback:function(t){e.formatAmPm=t},expression:"formatAmPm"}},[e._v("AM/PM")])],1),e._v(" "),o("div",{staticClass:"control"},[o("b-switch",{model:{value:e.enableSeconds,callback:function(t){e.enableSeconds=t},expression:"enableSeconds"}},[e._v("Enable seconds")])],1)]),e._v(" "),o("b-field",{attrs:{label:"Select datetime"}},[o("b-datetimepicker",{attrs:{rounded:"",placeholder:"Click to select...",icon:"calendar-today",datepicker:{showWeekNumber:e.showWeekNumber},timepicker:{enableSeconds:e.enableSeconds,hourFormat:e.format}}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=129.8d9b339a6e6171b33a8e.js.map