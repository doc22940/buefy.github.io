webpackJsonp([77],{196:function(n,t,e){var o=e(0)(e(939),e(940),null,null,null);n.exports=o.exports},939:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{snackbar:function(){this.$snackbar.open("Default, positioned bottom-right with a green 'OK' button")},warning:function(){var n=this;this.$snackbar.open({message:"Yellow button and positioned on top, click to close",type:"is-warning",position:"is-top",actionText:"Retry",indefinite:!0,onAction:function(){n.$toast.open({message:"Action pressed",queue:!1})}})},danger:function(){var n=this;this.$snackbar.open({duration:5e3,message:"Snackbar with red action, positioned on bottom-left and a callback.<br>Note: <em>Message can include html</em>.",type:"is-danger",position:"is-bottom-left",actionText:"Undo",queue:!1,onAction:function(){n.$toast.open({message:"Action pressed",queue:!1})}})}}}},940:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("button",{staticClass:"button is-medium",on:{click:n.snackbar}},[n._v("\n        Launch snackbar (default)\n    ")]),n._v(" "),e("button",{staticClass:"button is-medium is-warning",on:{click:n.warning}},[n._v("\n        Launch snackbar (custom)\n    ")]),n._v(" "),e("button",{staticClass:"button is-medium is-danger",on:{click:n.danger}},[n._v("\n        Launch snackbar (custom)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=77.5d993e3e8d3a410e5d8f.js.map