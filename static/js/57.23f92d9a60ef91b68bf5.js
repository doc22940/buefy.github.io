webpackJsonp([57],{1095:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{toast:function(){this.$buefy.toast.open("Something happened")},success:function(){this.$buefy.toast.open({message:"Something happened correctly!",type:"is-success"})},danger:function(){this.$buefy.toast.open({duration:5e3,message:"Something's not good, also I'm on bottom",position:"is-bottom",type:"is-danger"})}}}},1096:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",[n("button",{staticClass:"button is-medium",on:{click:t.toast}},[t._v("\n        Launch toast (default)\n    ")]),t._v(" "),n("button",{staticClass:"button is-medium is-success",on:{click:t.success}},[t._v("\n        Launch toast (custom)\n    ")]),t._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:t.danger}},[t._v("\n        Launch toast (custom)\n    ")])])},staticRenderFns:[]}},280:function(t,s,n){var e=n(0)(n(1095),n(1096),null,null,null);t.exports=e.exports}});
//# sourceMappingURL=57.23f92d9a60ef91b68bf5.js.map