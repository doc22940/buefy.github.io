webpackJsonp([135],{1100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{prompt:function(){var t=this;this.$buefy.dialog.prompt({message:"What's your name?",inputAttrs:{placeholder:"e.g. Walter",maxlength:10},trapFocus:!0,onConfirm:function(e){return t.$buefy.toast.open("Your name is: "+e)}})},promptNumber:function(){var t=this;this.$buefy.dialog.prompt({message:"What's your age?",inputAttrs:{type:"number",placeholder:"Type your age",value:"18",maxlength:2,min:18},trapFocus:!0,onConfirm:function(e){return t.$buefy.toast.open("Your age is: "+e)}})}}}},1101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("button",{staticClass:"button is-medium is-dark",on:{click:t.prompt}},[t._v("\n        Launch prompt (default)\n    ")]),t._v(" "),n("button",{staticClass:"button is-medium is-dark",on:{click:t.promptNumber}},[t._v("\n        Launch prompt (number)\n    ")])])},staticRenderFns:[]}},169:function(t,e,n){var o=n(0)(n(1100),n(1101),null,null,null);t.exports=o.exports}});
//# sourceMappingURL=135.b271af8e8903d07b2119.js.map