webpackJsonp([169],{117:function(e,o,r){var t=r(0)(r(978),r(979),null,null,null);e.exports=t.exports},978:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{arrow:!0,arrowBoth:!1,arrowHover:!1,iconPack:"mdi",iconPrev:"arrow-left",iconNext:"arrow-right",iconSize:"",carousels:[{title:"Slide 1",color:"info"},{title:"Slide 2",color:"success"},{title:"Slide 3",color:"warning"},{title:"Slide 4",color:"danger"}]}}}},979:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("section",[r("div",{staticStyle:{padding:"1.5rem"}},[r("b-field",{attrs:{grouped:"","group-multiline":"",position:"is-centered"}},[r("b-switch",{model:{value:e.arrow,callback:function(o){e.arrow=o},expression:"arrow"}},[r("strong",[e._v("Arrow")])]),e._v(" "),r("b-switch",{attrs:{disabled:!e.arrow},model:{value:e.arrowBoth,callback:function(o){e.arrowBoth=o},expression:"arrowBoth"}},[e._v("Both")]),e._v(" "),r("b-switch",{attrs:{disabled:!e.arrow},model:{value:e.arrowHover,callback:function(o){e.arrowHover=o},expression:"arrowHover"}},[e._v("Hover")])],1),r("br"),e._v(" "),r("b-field",{attrs:{grouped:"","group-multiline":"",position:"is-centered"}},[r("b-field",{attrs:{label:"Icon Pack"}},[r("b-input",{attrs:{placeholder:"e.g. mdi, fa or other"},model:{value:e.iconPack,callback:function(o){e.iconPack=o},expression:"iconPack"}})],1),e._v(" "),r("b-field",{attrs:{label:"Icon Size"}},[r("b-select",{model:{value:e.iconSize,callback:function(o){e.iconSize=o},expression:"iconSize"}},[r("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),r("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),r("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),r("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1),e._v(" "),r("b-field",{attrs:{label:"Icon Prev"}},[r("b-input",{model:{value:e.iconPrev,callback:function(o){e.iconPrev=o},expression:"iconPrev"}})],1),e._v(" "),r("b-field",{attrs:{label:"Icon Next"}},[r("b-input",{model:{value:e.iconNext,callback:function(o){e.iconNext=o},expression:"iconNext"}})],1)],1)],1),e._v(" "),r("b-carousel",{attrs:{arrow:e.arrow,"arrow-both":e.arrowBoth,"arrow-hover":e.arrowHover,"icon-pack":e.iconPack,"icon-prev":e.iconPrev,"icon-next":e.iconNext,"icon-size":e.iconSize}},e._l(e.carousels,function(o,t){return r("b-carousel-item",{key:t},[r("section",{class:"hero is-medium is-"+o.color},[r("div",{staticClass:"hero-body has-text-centered"},[r("h1",{staticClass:"title"},[e._v(e._s(o.title))])])])])}),1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=169.c2bf2267393ad09dcf0d.js.map