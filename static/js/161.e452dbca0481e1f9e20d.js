webpackJsonp([161],{923:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Angular","Angular 2","Aurelia","Backbone","Ember","jQuery","Meteor","Node.js","Polymer","React","RxJS","Vue.js"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}}}},924:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find a JS framework"}},[n("b-autocomplete",{attrs:{rounded:"",data:e.filteredDataArray,placeholder:"e.g. jQuery",icon:"magnify"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("template",{slot:"empty"},[e._v("No results found")])],2)],1)],1)},r=[];e.exports={render:n,staticRenderFns:r}},99:function(e,t,n){var r=n(0),a=n(923),l=n(924),o=r(a,l,!1,null,null,null);e.exports=o.exports}});
//# sourceMappingURL=161.e452dbca0481e1f9e20d.js.map