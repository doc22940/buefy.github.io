webpackJsonp([168],{122:function(e,t,a){var i=a(0)(a(992),a(993),null,null,null);e.exports=i.exports},992:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{arrow:!0,arrowHover:!0,drag:!0,gray:!1,opacity:!1,values:1,perList:1,repeat:!1,items:[{title:"Slide 1",image:"https://picsum.photos/id/0/1230/500"},{title:"Slide 2",image:"https://picsum.photos/id/1/1230/500"},{title:"Slide 3",image:"https://picsum.photos/id/2/1230/500"},{title:"Slide 4",image:"https://picsum.photos/id/3/1230/500"},{title:"Slide 5",image:"https://picsum.photos/id/4/1230/500"},{title:"Slide 6",image:"https://picsum.photos/id/5/1230/500"},{title:"Slide 7",image:"https://picsum.photos/id/6/1230/500"},{title:"Slide 8",image:"https://picsum.photos/id/7/1230/500"}]}}}},993:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticStyle:{padding:"1.5rem"}},[a("b-field",{attrs:{grouped:"","group-multiline":"",position:"is-centered"}},[a("b-switch",{model:{value:e.arrow,callback:function(t){e.arrow=t},expression:"arrow"}},[e._v("Arrow")]),e._v(" "),a("b-switch",{attrs:{disabled:!e.arrow},model:{value:e.arrowHover,callback:function(t){e.arrowHover=t},expression:"arrowHover"}},[e._v("Arrow on hover")]),e._v(" "),a("b-switch",{model:{value:e.drag,callback:function(t){e.drag=t},expression:"drag"}},[e._v("Drag event")]),e._v(" "),a("b-switch",{attrs:{disabled:e.opacity},model:{value:e.gray,callback:function(t){e.gray=t},expression:"gray"}},[e._v("Grayscale")]),e._v(" "),a("b-switch",{attrs:{disabled:e.gray},model:{value:e.opacity,callback:function(t){e.opacity=t},expression:"opacity"}},[e._v("Opacity")]),e._v(" "),a("b-switch",{model:{value:e.repeat,callback:function(t){e.repeat=t},expression:"repeat"}},[e._v("Repeat")])],1),a("br"),e._v(" "),a("b-field",{attrs:{grouped:"","group-multiline":"",position:"is-centered"}},[a("b-field",{attrs:{label:"Value"}},[a("b-numberinput",{attrs:{min:"0",max:e.items.length-1,"controls-position":"compact"},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}})],1),e._v(" "),a("b-field",{attrs:{label:"Items to List"}},[a("b-numberinput",{attrs:{min:"0",max:e.items.length-1,"controls-position":"compact"},model:{value:e.perList,callback:function(t){e.perList=t},expression:"perList"}})],1)],1)],1),e._v(" "),a("b-carousel-list",{attrs:{data:e.items,arrow:e.arrow,"arrow-hover":e.arrowHover,"items-to-list":e.perList,repeat:e.repeat,"has-drag":e.drag,"has-grayscale":e.gray,"has-opacity":e.opacity},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=168.9e1e21036040bfa7629b.js.map