webpackJsonp([171],{100:function(e,t,n){var r=n(0)(n(953),n(954),null,null,null);e.exports=r.exports},953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Angular","Angular 2","Aurelia","Backbone","Ember","jQuery","Meteor","Node.js","Polymer","React","RxJS","Vue.js"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}}}},954:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find a JS framework"}},[n("b-autocomplete",{attrs:{rounded:"",data:e.filteredDataArray,placeholder:"e.g. jQuery",icon:"magnify"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("template",{slot:"empty"},[e._v("No results found")])],2)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=171.4dff90bb7fe4166aeb6d.js.map