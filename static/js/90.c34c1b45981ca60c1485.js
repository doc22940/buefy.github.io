webpackJsonp([90],{1362:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{data:[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016-10-15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016-12-15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016-04-26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016-04-10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016-12-06 14:38:38",gender:"Female"}]}}}},1363:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-table",{attrs:{data:e.data},scopedSlots:e._u([{key:"default",fn:function(a){return[t("b-table-column",{attrs:{field:"id",label:"ID",width:"40",numeric:""},scopedSlots:e._u([{key:"header",fn:function(a){var n=a.column;return[t("b-tooltip",{attrs:{label:n.label,dashed:""}},[e._v("\r\n                        "+e._s(n.label)+"\r\n                    ")])]}}])},[e._v(" \r\n                "+e._s(a.row.id)+"\r\n            ")]),e._v(" "),t("b-table-column",{attrs:{field:"user.first_name",label:"First Name"},scopedSlots:e._u([{key:"header",fn:function(a){var n=a.column;return[t("b-tooltip",{attrs:{label:n.label,dashed:""}},[e._v("\r\n                        "+e._s(n.label)+"\r\n                    ")])]}}])},[e._v("\r\n                "+e._s(a.row.first_name)+"\r\n            ")]),e._v(" "),t("b-table-column",{attrs:{field:"user.last_name",label:"Last Name"},scopedSlots:e._u([{key:"header",fn:function(a){var n=a.column;return[t("b-tooltip",{attrs:{label:n.label,dashed:""}},[e._v("\r\n                        "+e._s(n.label)+"\r\n                    ")])]}}])},[e._v("\r\n                "+e._s(a.row.last_name)+"\r\n            ")]),e._v(" "),t("b-table-column",{attrs:{field:"date",label:"Date",centered:""}},[t("span",{staticClass:"tag is-success"},[e._v("\r\n                    "+e._s(new Date(a.row.date).toLocaleDateString())+"\r\n                ")])]),e._v(" "),t("b-table-column",{attrs:{label:"Gender"}},[t("span",[t("b-icon",{attrs:{pack:"fas",icon:"Male"===a.row.gender?"mars":"venus"}}),e._v("\r\n                    "+e._s(a.row.gender)+"\r\n                ")],1)])]}}])})},staticRenderFns:[]}},298:function(e,a,t){var n=t(0)(t(1362),t(1363),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=90.c34c1b45981ca60c1485.js.map