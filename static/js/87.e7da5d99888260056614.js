webpackJsonp([87],{1216:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableDataSimple:[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016/10/15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016/12/15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016/04/26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016/04/10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016/12/06 14:38:38",gender:"Female"}],isCustom:!1}}}},1217:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("div",{staticClass:"control"},[a("b-switch",{model:{value:t.isCustom,callback:function(e){t.isCustom=e},expression:"isCustom"}},[t._v("Custom")])],1)]),t._v(" "),a("b-table",{attrs:{data:t.tableDataSimple},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-table-column",{attrs:{label:"ID",width:"40",numeric:""}},[t._v("\r\n                    "+t._s(e.row.id)+"\r\n                ")]),t._v(" "),a("b-table-column",{attrs:{label:"First Name"}},[t._v("\r\n                    "+t._s(e.row.first_name)+"\r\n                ")]),t._v(" "),a("b-table-column",{attrs:{label:"Last Name"}},[t._v("\r\n                    "+t._s(e.row.last_name)+"\r\n                ")]),t._v(" "),a("b-table-column",{attrs:{label:"Date",centered:""}},[t._v("\r\n                    "+t._s(new Date(e.row.date).toLocaleDateString())+"\r\n                ")]),t._v(" "),a("b-table-column",{attrs:{label:"Gender"}},[t._v("\r\n                    "+t._s(e.row.gender)+"\r\n                ")])]}}])},[t.isCustom?a("template",{slot:"footer"},[a("th",{staticClass:"is-hidden-mobile",staticStyle:{width:"40px"}},[a("div",{staticClass:"th-wrap is-numeric"},[t._v(" ID ")])]),t._v(" "),a("th",{staticClass:"is-hidden-mobile"},[a("div",{staticClass:"th-wrap"},[t._v(" First Name ")])]),t._v(" "),a("th",{staticClass:"is-hidden-mobile"},[a("div",{staticClass:"th-wrap"},[t._v(" Last Name ")])]),t._v(" "),a("th",{staticClass:"is-hidden-mobile"},[a("div",{staticClass:"th-wrap is-centered"},[t._v(" Date ")])]),t._v(" "),a("th",{staticClass:"is-hidden-mobile"},[a("div",{staticClass:"th-wrap"},[t._v(" Gender ")])])]):a("template",{slot:"footer"},[a("div",{staticClass:"has-text-right"},[t._v("\r\n                    Footer\r\n                ")])])],2)],1)},staticRenderFns:[]}},297:function(t,e,a){var s=a(0)(a(1216),a(1217),null,null,null);t.exports=s.exports}});
//# sourceMappingURL=87.e7da5d99888260056614.js.map