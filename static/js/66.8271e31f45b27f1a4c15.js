webpackJsonp([66],{1409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formatAmPm:!1,enableSeconds:!1}},computed:{format:function(){return this.formatAmPm?"12":"24"}}}},1410:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("div",{staticClass:"control"},[n("b-switch",{model:{value:e.formatAmPm,callback:function(t){e.formatAmPm=t},expression:"formatAmPm"}},[e._v("AM/PM")])],1),e._v(" "),n("div",{staticClass:"control"},[n("b-switch",{model:{value:e.enableSeconds,callback:function(t){e.enableSeconds=t},expression:"enableSeconds"}},[e._v("Enable seconds")])],1)]),e._v(" "),n("b-field",{attrs:{label:"Select time"}},[n("b-timepicker",{attrs:{rounded:"",placeholder:"Click to select...",icon:"clock","enable-seconds":e.enableSeconds,"hour-format":e.format}})],1)],1)},staticRenderFns:[]}},333:function(e,t,n){var o=n(0)(n(1409),n(1410),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=66.8271e31f45b27f1a4c15.js.map