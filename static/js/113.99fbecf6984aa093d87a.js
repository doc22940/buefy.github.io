webpackJsonp([113],{103:function(t,e,n){var i=n(0)(n(803),n(804),null,null,null);t.exports=i.exports},803:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{time:new Date,isAmPm:!1}},computed:{format:function(){return this.isAmPm?"12":"24"}}}},804:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-field",[n("b-switch",{model:{value:t.isAmPm,callback:function(e){t.isAmPm=e},expression:"isAmPm"}},[t._v("AM/PM")])],1),t._v(" "),n("b-field",{attrs:{label:"Select time"}},[n("b-clockpicker",{attrs:{placeholder:"Click to select...","hour-format":t.format},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[n("button",{staticClass:"button is-primary",on:{click:function(e){t.time=new Date}}},[n("b-icon",{attrs:{icon:"clock"}}),t._v(" "),n("span",[t._v("Now")])],1),t._v(" "),n("button",{staticClass:"button is-danger",on:{click:function(e){t.time=null}}},[n("b-icon",{attrs:{icon:"close"}}),t._v(" "),n("span",[t._v("Clear")])],1)])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=113.99fbecf6984aa093d87a.js.map