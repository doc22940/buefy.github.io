webpackJsonp([126],{798:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Orange","Apple","Banana","Pear","Lemon","Strawberry","Kiwi"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}},methods:{showAddFruit:function(){var e=this;this.$dialog.prompt({message:"Fruit",inputAttrs:{placeholder:"e.g. Watermelon",maxlength:20,value:this.name},confirmText:"Add",onConfirm:function(t){e.data.push(t),e.$refs.autocomplete.setSelected(t)}})}}}},799:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("p",{staticClass:"content"},[a("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),a("b-field",{attrs:{label:"Find or add a Fruit"}},[a("b-autocomplete",{ref:"autocomplete",attrs:{data:e.filteredDataArray,placeholder:"e.g. Orange"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[a("template",{slot:"header"},[a("a",{on:{click:e.showAddFruit}},[a("span",[e._v(" Add new... ")])])]),e._v(" "),a("template",{slot:"empty"},[e._v("No results for "+e._s(e.name))])],2)],1)],1)},staticRenderFns:[]}},84:function(e,t,a){var n=a(0)(a(798),a(799),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=126.539f45d6fbcc98ba7ac6.js.map