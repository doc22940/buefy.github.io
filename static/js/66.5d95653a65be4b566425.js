webpackJsonp([66],{1276:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{toast:function(){this.$buefy.toast.open("Something happened")},success:function(){this.$buefy.toast.open({message:"Something happened correctly!",type:"is-success"})},danger:function(){this.$buefy.toast.open({duration:5e3,message:"Something's not good, also I'm on bottom",position:"is-bottom",type:"is-danger"})}}}},1277:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",[n("button",{staticClass:"button is-medium",on:{click:t.toast}},[t._v("\r\n            Launch toast (default)\r\n        ")]),t._v(" "),n("button",{staticClass:"button is-medium is-success",on:{click:t.success}},[t._v("\r\n            Launch toast (custom)\r\n        ")]),t._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:t.danger}},[t._v("\r\n            Launch toast (custom)\r\n        ")])])},staticRenderFns:[]}},338:function(t,s,n){var e=n(0)(n(1276),n(1277),null,null,null);t.exports=e.exports}});
//# sourceMappingURL=66.5d95653a65be4b566425.js.map