webpackJsonp([73],{1028:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{data:[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016/10/15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016/12/15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016/04/26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016/04/10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016/12/06 14:38:38",gender:"Female"}],isEmpty:!1,isBordered:!1,isStriped:!1,isNarrowed:!1,isHoverable:!1,isFocusable:!1,isLoading:!1,hasMobileCards:!0}}}},1029:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",[a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isBordered,callback:function(s){e.isBordered=s},expression:"isBordered"}},[e._v("Bordered")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isStriped,callback:function(s){e.isStriped=s},expression:"isStriped"}},[e._v("Striped")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isNarrowed,callback:function(s){e.isNarrowed=s},expression:"isNarrowed"}},[e._v("Narrowed")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isHoverable,callback:function(s){e.isHoverable=s},expression:"isHoverable"}},[e._v("Hoverable")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isFocusable,callback:function(s){e.isFocusable=s},expression:"isFocusable"}},[e._v("Focusable")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isLoading,callback:function(s){e.isLoading=s},expression:"isLoading"}},[e._v("Loading state")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.isEmpty,callback:function(s){e.isEmpty=s},expression:"isEmpty"}},[e._v("Empty")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-switch",{model:{value:e.hasMobileCards,callback:function(s){e.hasMobileCards=s},expression:"hasMobileCards"}},[e._v("Mobile cards "),a("small",[e._v("(collapsed rows)")])])],1)]),e._v(" "),a("b-table",{attrs:{data:e.isEmpty?[]:e.data,bordered:e.isBordered,striped:e.isStriped,narrowed:e.isNarrowed,hoverable:e.isHoverable,loading:e.isLoading,focusable:e.isFocusable,"mobile-cards":e.hasMobileCards},scopedSlots:e._u([{key:"default",fn:function(s){return[a("b-table-column",{attrs:{field:"id",label:"ID",width:"40",numeric:""}},[e._v("\n                "+e._s(s.row.id)+"\n            ")]),e._v(" "),a("b-table-column",{attrs:{field:"first_name",label:"First Name"}},[e._v("\n                "+e._s(s.row.first_name)+"\n            ")]),e._v(" "),a("b-table-column",{attrs:{field:"last_name",label:"Last Name"}},[e._v("\n                "+e._s(s.row.last_name)+"\n            ")]),e._v(" "),a("b-table-column",{attrs:{field:"date",label:"Date",centered:""}},[a("span",{staticClass:"tag is-success"},[e._v("\n                    "+e._s(new Date(s.row.date).toLocaleDateString())+"\n                ")])]),e._v(" "),a("b-table-column",{attrs:{label:"Gender"}},[a("span",[a("b-icon",{attrs:{pack:"fas",icon:"Male"===s.row.gender?"mars":"venus"}}),e._v("\n                    "+e._s(s.row.gender)+"\n                ")],1)])]}}])},[a("template",{slot:"empty"},[a("section",{staticClass:"section"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e._v(" "),a("p",[e._v("Nothing here.")])])])])],2)],1)},staticRenderFns:[]}},236:function(e,s,a){var t=a(0)(a(1028),a(1029),null,null,null);e.exports=t.exports}});
//# sourceMappingURL=73.de4e8c87357919d9429e.js.map