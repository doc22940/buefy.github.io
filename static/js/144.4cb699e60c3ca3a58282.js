webpackJsonp([144],{119:function(e,t,i){var a=i(0)(i(940),i(941),null,null,null);e.exports=a.exports},940:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){var e=new Date;e.setHours(9),e.setMinutes(0);var t=new Date;return t.setHours(18),t.setMinutes(0),{minTime:e,maxTime:t,isAmPm:!1}},computed:{format:function(){return this.isAmPm?"12":"24"}}}},941:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("b-field",[i("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1)],1),e._v(" "),i("div",{staticClass:"column"},[i("b-field",{attrs:{label:"Min Time"}},[i("b-clockpicker",{attrs:{"hour-format":e.format},model:{value:e.minTime,callback:function(t){e.minTime=t},expression:"minTime"}})],1)],1),e._v(" "),i("div",{staticClass:"column"},[i("b-field",{attrs:{label:"Max Time"}},[i("b-clockpicker",{attrs:{"hour-format":e.format},model:{value:e.maxTime,callback:function(t){e.maxTime=t},expression:"maxTime"}})],1)],1)]),e._v(" "),i("b-field",{attrs:{label:"Select time"}},[i("b-clockpicker",{attrs:{placeholder:"Click to select...","hour-format":e.format,"min-time":e.minTime,"max-time":e.maxTime}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=144.4cb699e60c3ca3a58282.js.map