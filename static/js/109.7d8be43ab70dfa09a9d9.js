webpackJsonp([109],{121:function(t,e,n){var o=n(0)(n(856),n(857),null,null,null);t.exports=o.exports},856:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{alert:function(){this.$dialog.alert("Everything looks fine!")},alertCustom:function(){this.$dialog.alert({title:"Title Alert",message:"I have a title, a custom button and <b>HTML</b>!",confirmText:"Cool!"})},alertCustomError:function(){this.$dialog.alert({title:"Error",message:"Something's not good but I have a custom <b>icon</b> and <b>type</b>",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa"})}}}},857:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("button",{staticClass:"button is-medium is-primary",on:{click:t.alert}},[t._v("\n        Launch alert (default)\n    ")]),t._v(" "),n("button",{staticClass:"button is-medium is-primary",on:{click:t.alertCustom}},[t._v("\n        Launch alert (custom)\n    ")]),t._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:t.alertCustomError}},[t._v("\n        Launch alert (custom)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=109.7d8be43ab70dfa09a9d9.js.map