webpackJsonp([136],{1060:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{prompt:function(){var t=this;this.$buefy.dialog.prompt({message:"What's your name?",inputAttrs:{placeholder:"e.g. Walter",maxlength:10},trapFocus:!0,onConfirm:function(e){return t.$buefy.toast.open("Your name is: "+e)}})},promptNumber:function(){var t=this;this.$buefy.dialog.prompt({message:"What's your age?",inputAttrs:{type:"number",placeholder:"Type your age",value:"18",maxlength:2,min:18},trapFocus:!0,onConfirm:function(e){return t.$buefy.toast.open("Your age is: "+e)}})}}}},1061:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("button",{staticClass:"button is-medium is-dark",on:{click:t.prompt}},[t._v("\r\n            Launch prompt (default)\r\n        ")]),t._v(" "),n("button",{staticClass:"button is-medium is-dark",on:{click:t.promptNumber}},[t._v("\r\n            Launch prompt (number)\r\n        ")])])},staticRenderFns:[]}},167:function(t,e,n){var r=n(0)(n(1060),n(1061),null,null,null);t.exports=r.exports}});
//# sourceMappingURL=136.0eae380f94b864aa41b9.js.map