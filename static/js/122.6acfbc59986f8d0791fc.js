webpackJsonp([122],{128:function(e,t,n){var a=n(0)(n(897),n(898),null,null,null);e.exports=a.exports},897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(new Date).getMonth();t.default={computed:{indicators:function(){return this.bars?"bars":"dots"}},data:function(){return{date:new Date(2017,a,1),events:[new Date(2017,a,2),new Date(2017,a,6),{date:new Date(2017,a,6),type:"is-info"},{date:new Date(2017,a,8),type:"is-danger"},{date:new Date(2017,a,10),type:"is-success"},{date:new Date(2017,a,10),type:"is-link"},new Date(2017,a,12),{date:new Date(2017,a,12),type:"is-warning"},{date:new Date(2017,a,16),type:"is-danger"},new Date(2017,a,20),{date:new Date(2017,a,29),type:"is-success"},{date:new Date(2017,a,29),type:"is-warning"},{date:new Date(2017,a,29),type:"is-info"}],bars:!1}}}},898:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("b-field",[n("b-switch",{model:{value:e.bars,callback:function(t){e.bars=t},expression:"bars"}},[e._v("Bars")])],1),e._v(" "),n("b-datepicker",{attrs:{inline:"",events:e.events,indicators:e.indicators},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=122.6acfbc59986f8d0791fc.js.map