webpackJsonp([137],{1058:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{confirm:function(){var e=this;this.$buefy.dialog.confirm({message:"Continue on this task?",onConfirm:function(){return e.$buefy.toast.open("User confirmed")}})},confirmCustom:function(){var e=this;this.$buefy.dialog.confirm({title:"Privacy Politics",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Fusce id fermentum quam. Proin sagittis,\n                        nibh id hendrerit imperdiet, elit sapien laoreet elit,\n                        ac scelerisque diam velit in nisl. Nunc maximus ex non\n                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,\n                        augue purus placerat justo,\n                        sit amet porttitor dui metus in nisl.\n                        Nulla non leo placerat, porta metus eu, laoreet risus.\n                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,\n                        sit amet sodales quam dui nec odio.\n                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.\n                        Pellentesque volutpat lacus at ante posuere,\n                        non pulvinar ante porta. Proin viverra eu massa nec porta.\n                        Aliquam rhoncus velit quis sem hendrerit,\n                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,\n                        eleifend venenatis ligula.\n                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.\n                        In hac habitasse platea dictumst.\n                        Pellentesque habitant morbi tristique senectus\n                        et netus et malesuada fames ac turpis egestas.",cancelText:"Disagree",confirmText:"Agree",type:"is-success",onConfirm:function(){return e.$buefy.toast.open("User agreed")}})},confirmCustomDelete:function(){var e=this;this.$buefy.dialog.confirm({title:"Deleting account",message:"Are you sure you want to <b>delete</b> your account? This action cannot be undone.",confirmText:"Delete Account",type:"is-danger",hasIcon:!0,onConfirm:function(){return e.$buefy.toast.open("Account deleted!")}})}}}},1059:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-info",on:{click:e.confirm}},[e._v("\r\n            Launch confirm (default)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-info",on:{click:e.confirmCustom}},[e._v("\r\n            Launch confirm (custom)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:e.confirmCustomDelete}},[e._v("\r\n            Launch confirm (custom)\r\n        ")])])},staticRenderFns:[]}},166:function(e,t,n){var i=n(0)(n(1058),n(1059),null,null,null);e.exports=i.exports}});
//# sourceMappingURL=137.248eeeee466b21f37795.js.map