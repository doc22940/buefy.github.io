webpackJsonp([55],{1023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formatAmPm:!1,enableSeconds:!1}},computed:{format:function(){return this.formatAmPm?"12":"24"}}}},1024:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("div",{staticClass:"control"},[n("b-switch",{model:{value:e.formatAmPm,callback:function(t){e.formatAmPm=t},expression:"formatAmPm"}},[e._v("AM/PM")])],1),e._v(" "),n("div",{staticClass:"control"},[n("b-switch",{model:{value:e.enableSeconds,callback:function(t){e.enableSeconds=t},expression:"enableSeconds"}},[e._v("Enable seconds")])],1)]),e._v(" "),n("b-field",{attrs:{label:"Select time"}},[n("b-timepicker",{attrs:{rounded:"",placeholder:"Click to select...",icon:"clock","enable-seconds":e.enableSeconds,"hour-format":e.format}})],1)],1)},staticRenderFns:[]}},248:function(e,t,n){var o=n(0)(n(1023),n(1024),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=55.fca4a966207b042d5f96.js.map