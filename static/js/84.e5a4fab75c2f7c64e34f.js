webpackJsonp([84],{1241:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){var e=[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016-10-15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016-12-15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016-04-26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016-04-10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016-12-06 14:38:38",gender:"Female"}];return{data:e,selected:e[1],columns:[{field:"id",label:"ID",width:"40",numeric:!0},{field:"first_name",label:"First Name"},{field:"last_name",label:"Last Name"},{field:"date",label:"Date",centered:!0},{field:"gender",label:"Gender"}]}}}},1242:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("button",{staticClass:"button field is-danger",attrs:{disabled:!e.selected},on:{click:function(t){e.selected=null}}},[a("b-icon",{attrs:{icon:"close"}}),e._v(" "),a("span",[e._v("Clear selected")])],1),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Table"}},[a("b-table",{attrs:{data:e.data,columns:e.columns,selected:e.selected,focusable:""},on:{"update:selected":function(t){e.selected=t}}})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Selected"}},[a("pre",[e._v(e._s(e.selected))])])],1)],1)},staticRenderFns:[]}},290:function(e,t,a){var l=a(0)(a(1241),a(1242),null,null,null);e.exports=l.exports}});
//# sourceMappingURL=84.e5a4fab75c2f7c64e34f.js.map