webpackJsonp([50],{250:function(e,t,s){var i=s(0)(s(988),s(989),null,null,null);e.exports=i.exports},988:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{dropFiles:[]}},methods:{deleteDropFile:function(e){this.dropFiles.splice(e,1)}}}},989:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-field",[s("b-upload",{attrs:{multiple:"","drag-drop":""},model:{value:e.dropFiles,callback:function(t){e.dropFiles=t},expression:"dropFiles"}},[s("section",{staticClass:"section"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),e._v(" "),s("p",[e._v("Drop your files here or click to upload")])])])])],1),e._v(" "),s("div",{staticClass:"tags"},e._l(e.dropFiles,function(t,i){return s("span",{key:i,staticClass:"tag is-primary"},[e._v("\n            "+e._s(t.name)+"\n            "),s("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(t){e.deleteDropFile(i)}}})])}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=50.569d0f589e6af4eac775.js.map