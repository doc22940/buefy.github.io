webpackJsonp([84],{1033:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{snackbar:function(){this.$buefy.snackbar.open("Default, positioned bottom-right with a green 'OK' button")},warning:function(){var n=this;this.$buefy.snackbar.open({message:"Yellow button and positioned on top, click to close",type:"is-warning",position:"is-top",actionText:"Retry",indefinite:!0,onAction:function(){n.$buefy.toast.open({message:"Action pressed",queue:!1})}})},danger:function(){var n=this;this.$buefy.snackbar.open({duration:5e3,message:"Snackbar with red action, positioned on bottom-left and a callback.<br>Note: <em>Message can include html</em>.",type:"is-danger",position:"is-bottom-left",actionText:"Undo",queue:!1,onAction:function(){n.$buefy.toast.open({message:"Action pressed",queue:!1})}})}}}},1034:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("button",{staticClass:"button is-medium",on:{click:n.snackbar}},[n._v("\n        Launch snackbar (default)\n    ")]),n._v(" "),e("button",{staticClass:"button is-medium is-warning",on:{click:n.warning}},[n._v("\n        Launch snackbar (custom)\n    ")]),n._v(" "),e("button",{staticClass:"button is-medium is-danger",on:{click:n.danger}},[n._v("\n        Launch snackbar (custom)\n    ")])])},staticRenderFns:[]}},227:function(n,t,e){var o=e(0)(e(1033),e(1034),null,null,null);n.exports=o.exports}});
//# sourceMappingURL=84.1b31d62fd7c1052ebb06.js.map