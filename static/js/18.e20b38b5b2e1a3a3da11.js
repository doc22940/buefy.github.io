webpackJsonp([18,76,181,182,183,184,185,258],{1389:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-tag",[e._v("Tag label")]),e._v(" "),a("b-tag",{attrs:{rounded:""}},[e._v("Rounded tag label")])],1)},staticRenderFns:[]}},1390:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isTag1Active:!0,isTag2Active:!0,isTag3Active:!0}}}},1391:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"field"},[e.isTag1Active?a("b-tag",{attrs:{type:"is-primary",closable:"","aria-close-label":"Close tag"},on:{close:function(t){e.isTag1Active=!1}}},[e._v("\r\n                Colored closable tag label\r\n            ")]):e._e()],1),e._v(" "),a("div",{staticClass:"field"},[e.isTag2Active?a("b-tag",{attrs:{attached:"",closable:"","aria-close-label":"Close tag"},on:{close:function(t){e.isTag2Active=!1}}},[e._v("\r\n                Attached closable tag label\r\n            ")]):e._e()],1),e._v(" "),a("div",{staticClass:"field"},[e.isTag3Active?a("b-tag",{attrs:{type:"is-danger",attached:"",closable:"","aria-close-label":"Close tag"},on:{close:function(t){e.isTag3Active=!1}}},[e._v("\r\n                Colored attached closable tag label\r\n            ")]):e._e()],1)])},staticRenderFns:[]}},1392:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-taglist",[a("b-tag",{attrs:{type:"is-info"}},[e._v("First")]),e._v(" "),a("b-tag",{attrs:{type:"is-info"}},[e._v("Second")]),e._v(" "),a("b-tag",{attrs:{type:"is-info"}},[e._v("Third")]),e._v(" "),a("b-tag",{attrs:{type:"is-info"}},[e._v("Fourth")]),e._v(" "),a("b-tag",{attrs:{type:"is-info"}},[e._v("Fifth")])],1)},staticRenderFns:[]}},1393:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[e._v("npm")]),e._v(" "),a("b-tag",{attrs:{type:"is-info"}},[e._v("0.5.1")])],1)},staticRenderFns:[]}},1394:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("div",{staticClass:"control"},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[e._v("npm")]),e._v(" "),a("b-tag",{attrs:{type:"is-info"}},[e._v("0.5.1")])],1)],1),e._v(" "),a("div",{staticClass:"control"},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[e._v("downloads")]),e._v(" "),a("b-tag",{attrs:{type:"is-success"}},[e._v("15k")])],1)],1),e._v(" "),a("div",{staticClass:"control"},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[e._v("chat")]),e._v(" "),a("b-tag",{attrs:{type:"is-primary"}},[e._v("on discord")])],1)],1)]),e._v(" "),a("br"),e._v(" "),a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""}},[e._v("\r\n                    Technology\r\n                ")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""}},[e._v("\r\n                    Vuejs\r\n                ")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""}},[e._v("\r\n                    CSS\r\n                ")])],1),e._v(" "),a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""}},[e._v("\r\n                    Flexbox\r\n                ")])],1)])],1)},staticRenderFns:[]}},1395:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-tag",{attrs:{type:"is-dark"}},[e._v("Default")]),e._v(" "),a("b-tag",{attrs:{type:"is-primary",size:"is-medium"}},[e._v("Medium")]),e._v(" "),a("b-tag",{attrs:{type:"is-info",size:"is-large"}},[e._v("Large")])],1)},staticRenderFns:[]}},1687:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(315),r=a(316),s=a.n(r),l=a(1688),i=a.n(l),o=a(317),c=a.n(o),d=a(1689),b=a.n(d),p=a(318),g=a.n(p),u=a(1690),v=a.n(u),f=a(319),_=a.n(f),m=a(1691),y=a.n(m),h=a(320),x=a.n(h),C=a(1692),T=a.n(C),E=a(321),A=a.n(E),k=a(1693),S=a.n(k);t.default={data:function(){return{api:n.default,ExSimple:s.a,ExClosable:c.a,ExTaglist:g.a,ExTaglistAttached:_.a,ExFieldCombine:x.a,ExSizes:A.a,ExSimpleCode:i.a,ExClosableCode:b.a,ExTaglistCode:v.a,ExTaglistAttachedCode:y.a,ExFieldCombineCode:T.a,ExSizesCode:S.a}}}},1688:function(e,t){e.exports="<template>\r\n    <section>\r\n        <b-tag>Tag label</b-tag>\r\n        <b-tag rounded>Rounded tag label</b-tag>\r\n    </section>\r\n</template>\r\n"},1689:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-tag v-if="isTag1Active"\r\n                type="is-primary"\r\n                closable\r\n                aria-close-label="Close tag"\r\n                @close="isTag1Active = false">\r\n                Colored closable tag label\r\n            </b-tag>\r\n        </div>\r\n\r\n        <div class="field">\r\n            <b-tag v-if="isTag2Active"\r\n                attached\r\n                closable\r\n                aria-close-label="Close tag"\r\n                @close="isTag2Active = false">\r\n                Attached closable tag label\r\n            </b-tag>\r\n        </div>\r\n\r\n        <div class="field">\r\n            <b-tag v-if="isTag3Active"\r\n                type="is-danger"\r\n                attached\r\n                closable\r\n                aria-close-label="Close tag"\r\n                @close="isTag3Active = false">\r\n                Colored attached closable tag label\r\n            </b-tag>\r\n        </div>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isTag1Active: true,\r\n                isTag2Active: true,\r\n                isTag3Active: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1690:function(e,t){e.exports='<template>\r\n    <b-taglist>\r\n        <b-tag type="is-info">First</b-tag>\r\n        <b-tag type="is-info">Second</b-tag>\r\n        <b-tag type="is-info">Third</b-tag>\r\n        <b-tag type="is-info">Fourth</b-tag>\r\n        <b-tag type="is-info">Fifth</b-tag>\r\n    </b-taglist>\r\n</template>\r\n'},1691:function(e,t){e.exports='<template>\r\n    <b-taglist attached>\r\n        <b-tag type="is-dark">npm</b-tag>\r\n        <b-tag type="is-info">0.5.1</b-tag>\r\n    </b-taglist>\r\n</template>\r\n'},1692:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <div class="control">\r\n                <b-taglist attached>\r\n                    <b-tag type="is-dark">npm</b-tag>\r\n                    <b-tag type="is-info">0.5.1</b-tag>\r\n                </b-taglist>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-taglist attached>\r\n                    <b-tag type="is-dark">downloads</b-tag>\r\n                    <b-tag type="is-success">15k</b-tag>\r\n                </b-taglist>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-taglist attached>\r\n                    <b-tag type="is-dark">chat</b-tag>\r\n                    <b-tag type="is-primary">on discord</b-tag>\r\n                </b-taglist>\r\n            </div>\r\n        </b-field>\r\n        <br>\r\n\r\n        <b-field grouped group-multiline>\r\n            <div class="control">\r\n                <b-tag type="is-primary"\r\n                    attached\r\n                    aria-close-label="Close tag"\r\n                    closable>\r\n                    Technology\r\n                </b-tag>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-tag type="is-primary"\r\n                    attached\r\n                    aria-close-label="Close tag"\r\n                    closable>\r\n                    Vuejs\r\n                </b-tag>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-tag type="is-primary"\r\n                    attached\r\n                    aria-close-label="Close tag"\r\n                    closable>\r\n                    CSS\r\n                </b-tag>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-tag type="is-primary"\r\n                    attached\r\n                    aria-close-label="Close tag"\r\n                    closable>\r\n                    Flexbox\r\n                </b-tag>\r\n            </div>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1693:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-tag type="is-dark">Default</b-tag>\r\n        <b-tag type="is-primary" size="is-medium">Medium</b-tag>\r\n        <b-tag type="is-info" size="is-large">Large</b-tag>\r\n    </section>\r\n</template>\r\n'},1694:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),e._m(0),e._v(" "),a("Example",{attrs:{component:e.ExClosable,code:e.ExClosableCode,title:"Closable",vertical:""}}),e._v(" "),a("Example",{attrs:{component:e.ExTaglist,code:e.ExTaglistCode,title:"Tag list",vertical:""}}),e._v(" "),a("Example",{attrs:{component:e.ExTaglistAttached,code:e.ExTaglistAttachedCode,vertical:""}},[a("p",[e._v("Use the "),a("code",[e._v("attached")]),e._v(" prop to attach tags together.")])]),e._v(" "),a("Example",{attrs:{component:e.ExFieldCombine,code:e.ExFieldCombineCode,vertical:""}},[a("p",[e._v("Combine with field to group attached tags.")])]),e._v(" "),a("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}},[a("p",[e._v("Two additional sizes.")])]),e._v(" "),a("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"content"},[e._v("Closable tags have a button that can be focused, it emits a "),a("code",[e._v("close")]),e._v(" event when clicked or when "),a("b",[e._v("delete")]),e._v(" key is pressed.")])}]}},315:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"Tag",props:[{name:"<code>type</code>",description:"Type (color) of the icon, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>size</code>",description:"Size of the tab, optional",type:"String",values:"<code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>rounded</code>",description:"Tag border rounded",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>closable</code>",description:"Add close/delete button to the tag",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>attached</code>",description:"Close/delete button style equal to attached tags",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>ellipsis</code>",description:"Adds ellipsis to not overflow the text",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>tabstop</code>",description:"If should stop when using tab key",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>disabled</code>",description:"Disable delete button",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>aria-close-label</code>",description:"Accessibility label for the close button",type:"String",values:"—",default:"-"}],events:[{name:"<code>close</code>",description:"Triggers when close/delete button is clicked or <b>delete</b> key is pressed",parameters:"—"}]},{title:"Taglist",props:[{name:"<code>attached</code>",description:"Tabs inside are attached together",type:"Boolean",values:"—",default:"<code>false</code>"}]}]},316:function(e,t,a){var n=a(0)(null,a(1389),null,null,null);e.exports=n.exports},317:function(e,t,a){var n=a(0)(a(1390),a(1391),null,null,null);e.exports=n.exports},318:function(e,t,a){var n=a(0)(null,a(1392),null,null,null);e.exports=n.exports},319:function(e,t,a){var n=a(0)(null,a(1393),null,null,null);e.exports=n.exports},320:function(e,t,a){var n=a(0)(null,a(1394),null,null,null);e.exports=n.exports},321:function(e,t,a){var n=a(0)(null,a(1395),null,null,null);e.exports=n.exports},399:function(e,t,a){var n=a(0)(a(1687),a(1694),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=18.e20b38b5b2e1a3a3da11.js.map