webpackJsonp([126],{1102:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isFullPage:!0}},methods:{open:function(){var e=this.$buefy.loading.open({container:this.isFullPage?null:this.$refs.element.$el});setTimeout(function(){return e.close()},3e3)}}}},1103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-field",[i("button",{staticClass:"button is-primary is-medium",on:{click:e.open}},[e._v("\r\n                Launch loading\r\n            ")])]),e._v(" "),i("b-field",[i("b-switch",{model:{value:e.isFullPage,callback:function(t){e.isFullPage=t},expression:"isFullPage"}},[e._v("Display loader over full page")])],1),e._v(" "),i("b-notification",{ref:"element",attrs:{closable:!1}},[e._v("\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        ")])],1)},staticRenderFns:[]}},204:function(e,t,i){var n=i(0)(i(1102),i(1103),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=126.996c3d5fd5c9382c29b9.js.map