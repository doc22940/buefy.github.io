webpackJsonp([82],{159:function(i,e,n){var t=n(0)(n(702),n(845),null,null,null);i.exports=t.exports},702:function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isLoading:!1,isFullPage:!0}},methods:{openLoading:function(){var i=this;this.isLoading=!0,setTimeout(function(){i.isLoading=!1},1e4)}}}},845:function(i,e){i.exports={render:function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("section",[n("b-field",[n("button",{staticClass:"button is-primary is-medium",on:{click:i.openLoading}},[i._v("\n            Launch loading\n        ")])]),i._v(" "),n("b-field",[n("b-switch",{model:{value:i.isFullPage,callback:function(e){i.isFullPage=e},expression:"isFullPage"}},[i._v("Display loader over full page")])],1),i._v(" "),n("b-notification",{attrs:{closable:!1}},[i._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n        "),n("b-loading",{attrs:{"is-full-page":i.isFullPage,active:i.isLoading,"can-cancel":!0},on:{"update:active":function(e){i.isLoading=e}}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=82.14444c4909a417bb2eea.js.map