webpackJsonp([127],{115:function(e,t,l){var s=l(0)(l(877),l(878),null,null,null);e.exports=s.exports},877:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{time:new Date,isAmPm:!1,selectedColor:"primary",colors:["primary","info","success","warning","danger","white","black","light","dark"]}},computed:{format:function(){return this.isAmPm?"12":"24"}}}},878:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"columns"},[l("div",{staticClass:"column"},[l("b-field",[l("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1),e._v(" "),l("b-field",{attrs:{label:"Bulma color class"}}),e._v(" "),e._l(e.colors,function(t){return l("b-field",{key:t},[l("b-radio",{attrs:{"native-value":t},model:{value:e.selectedColor,callback:function(t){e.selectedColor=t},expression:"selectedColor"}},[e._v("is-"+e._s(t))])],1)})],2),e._v(" "),l("div",{staticClass:"column"},[l("b-clockpicker",{attrs:{inline:"",type:"is-"+e.selectedColor,"hour-format":e.format},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=127.892b06f1dd0a888bbb5a.js.map