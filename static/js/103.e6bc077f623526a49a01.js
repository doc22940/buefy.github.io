webpackJsonp([103],{1024:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{simple:function(){this.$buefy.notification.open("Something happened")},success:function(){this.$buefy.notification.open({message:"Something happened correctly!",type:"is-success"})},danger:function(){this.$buefy.notification.open({duration:5e3,message:"Something's not good, also I'm on bottom",position:"is-bottom-right",type:"is-danger",hasIcon:!0})}}}},1025:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("button",{staticClass:"button is-medium",on:{click:t.simple}},[t._v("\n        Launch notification (default)\n    ")]),t._v(" "),e("button",{staticClass:"button is-medium is-success",on:{click:t.success}},[t._v("\n        Launch notification (custom)\n    ")]),t._v(" "),e("button",{staticClass:"button is-medium is-danger",on:{click:t.danger}},[t._v("\n        Launch notification (custom)\n    ")])])},staticRenderFns:[]}},197:function(t,n,e){var i=e(0)(e(1024),e(1025),null,null,null);t.exports=i.exports}});
//# sourceMappingURL=103.e6bc077f623526a49a01.js.map