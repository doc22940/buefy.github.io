webpackJsonp([91],{1243:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){var e=[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016-10-15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016-12-15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016-04-26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016-04-10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016-12-06 14:38:38",gender:"Female"}];return{data:e,checkboxPosition:"left",checkedRows:[e[1],e[3]],columns:[{field:"id",label:"ID",width:"40",numeric:!0},{field:"first_name",label:"First Name"},{field:"last_name",label:"Last Name"},{field:"date",label:"Date",centered:!0},{field:"gender",label:"Gender"}]}}}},1244:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("button",{staticClass:"button field is-danger",attrs:{disabled:!e.checkedRows.length},on:{click:function(t){e.checkedRows=[]}}},[a("b-icon",{attrs:{icon:"close"}}),e._v(" "),a("span",[e._v("Clear checked")])],1),e._v(" "),a("b-select",{model:{value:e.checkboxPosition,callback:function(t){e.checkboxPosition=t},expression:"checkboxPosition"}},[a("option",{attrs:{value:"left"}},[e._v("Checkbox at left")]),e._v(" "),a("option",{attrs:{value:"right"}},[e._v("Checkbox at right")])])],1),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Table"}},[a("b-table",{attrs:{data:e.data,columns:e.columns,"checked-rows":e.checkedRows,"is-row-checkable":function(e){return 3!==e.id&&4!==e.id},checkable:"","checkbox-position":e.checkboxPosition},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}}},[a("template",{slot:"bottom-left"},[a("b",[e._v("Total checked")]),e._v(": "+e._s(e.checkedRows.length)+"\n                ")])],2)],1),e._v(" "),a("b-tab-item",{attrs:{label:"Checked rows"}},[a("pre",[e._v(e._s(e.checkedRows))])])],1)],1)},staticRenderFns:[]}},291:function(e,t,a){var n=a(0)(a(1243),a(1244),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=91.58b76eb7d0e502142f0d.js.map