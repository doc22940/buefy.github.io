webpackJsonp([135],{842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Orange","Apple","Banana","Pear","Lemon","Strawberry","Kiwi"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}},methods:{showAddFruit:function(){var e=this;this.$buefy.dialog.prompt({message:"Fruit",inputAttrs:{placeholder:"e.g. Watermelon",maxlength:20,value:this.name},confirmText:"Add",onConfirm:function(t){e.data.push(t),e.$refs.autocomplete.setSelected(t)}})}}}},843:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find or add a Fruit"}},[n("b-autocomplete",{ref:"autocomplete",attrs:{data:e.filteredDataArray,placeholder:"e.g. Orange"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("template",{slot:"footer"},[n("a",{on:{click:e.showAddFruit}},[n("span",[e._v(" Add new... ")])])]),e._v(" "),n("template",{slot:"empty"},[e._v("No results for "+e._s(e.name))])],2)],1)],1)},staticRenderFns:[]}},94:function(e,t,n){var a=n(0)(n(842),n(843),null,null,null);e.exports=a.exports}});
//# sourceMappingURL=135.63600a9f845f2c1cdf6e.js.map