webpackJsonp([81],{1365:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tableDataSimple:[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016-10-15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016-12-15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016-04-26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016-04-10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016-12-06 14:38:38",gender:"Female"}],columnsTemplate:[{title:"ID",field:"id",visible:!0},{title:"First Name",field:"first_name",visible:!0},{title:"Last Name",field:"last_name",visible:!0},{title:"Date",field:"date",visible:!0},{title:"Gender",field:"gender",visible:!0}]}}}},1366:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",[l("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.columnsTemplate,function(t,i){return l("div",{key:i,staticClass:"control"},[l("b-checkbox",{model:{value:t.visible,callback:function(l){e.$set(t,"visible",l)},expression:"column.visible"}},[e._v("\n                "+e._s(t.title)+"\n            ")])],1)}),0),e._v(" "),l("b-table",{attrs:{data:e.tableDataSimple},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.columnsTemplate,function(i,n){return l("b-table-column",{key:n,attrs:{label:i.title,visible:i.visible}},[e._v("\n                "+e._s(t.row[i.field])+"\n            ")])})}}])})],1)},staticRenderFns:[]}},300:function(e,t,l){var i=l(0)(l(1365),l(1366),null,null,null);e.exports=i.exports}});
//# sourceMappingURL=81.652cc3c53a6546b0b2cf.js.map