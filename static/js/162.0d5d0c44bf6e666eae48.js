webpackJsonp([162],{1038:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{gallery:!1,al:{hasGrayscale:!0,itemsToShow:2,breakpoints:{768:{hasGrayscale:!1,itemsToShow:4},960:{hasGrayscale:!0,itemsToShow:6}}},items:[{title:"Slide 1",image:"https://picsum.photos/id/0/1230/500"},{title:"Slide 2",image:"https://picsum.photos/id/1/1230/500"},{title:"Slide 3",image:"https://picsum.photos/id/2/1230/500"},{title:"Slide 4",image:"https://picsum.photos/id/3/1230/500"},{title:"Slide 5",image:"https://picsum.photos/id/4/1230/500"},{title:"Slide 6",image:"https://picsum.photos/id/5/1230/500"},{title:"Slide 7",image:"https://picsum.photos/id/6/1230/500"},{title:"Slide 8",image:"https://picsum.photos/id/7/1230/500"}]}},methods:{switchGallery:function(t){return this.gallery=t,t?document.documentElement.classList.add("is-clipped"):document.documentElement.classList.remove("is-clipped")}}}},1039:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-carousel",{attrs:{autoplay:!1,"with-carousel-list":"",indicator:!1,overlay:t.gallery},scopedSlots:t._u([{key:"list",fn:function(e){return[i("b-carousel-list",{attrs:{data:t.items,config:t.al,refresh:t.gallery,"as-indicator":""},on:{switch:function(t){e.switch(t,!1)}},model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"props.active"}})]}}])},[t._l(t.items,function(e,s){return i("b-carousel-item",{key:s},[i("figure",{staticClass:"image",on:{click:function(e){t.switchGallery(!0)}}},[i("img",{attrs:{src:e.image}})])])}),t._v(" "),t.gallery?i("span",{staticClass:"modal-close is-large",on:{click:function(e){t.switchGallery(!1)}}}):t._e(),t._v(" "),i("template",{slot:"overlay"},[i("div",{staticClass:"has-text-centered has-text-white"},[t._v("\r\n                Hello i'am overlay!\r\n            ")])])],2)},staticRenderFns:[]}},126:function(t,e,i){var s=i(0)(i(1038),i(1039),null,null,null);t.exports=s.exports}});
//# sourceMappingURL=162.0d5d0c44bf6e666eae48.js.map