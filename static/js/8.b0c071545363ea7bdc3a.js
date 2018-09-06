webpackJsonp([8,57,110,111,112,113,114,162],{1038:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(191),s=a(192),r=a.n(s),i=a(1039),o=a.n(i),l=a(193),c=a.n(l),d=a(1040),p=a.n(d),b=a(194),g=a.n(b),v=a(1041),u=a.n(v),f=a(195),_=a.n(f),m=a(1042),y=a.n(m),h=a(196),x=a.n(h),C=a(1043),T=a.n(C),E=a(197),A=a.n(E),k=a(1044),F=a.n(k);e.default={data:function(){return{api:n.default,ExSimple:r.a,ExClosable:c.a,ExTaglist:g.a,ExTaglistAttached:_.a,ExFieldCombine:x.a,ExSizes:A.a,ExSimpleCode:o.a,ExClosableCode:p.a,ExTaglistCode:u.a,ExTaglistAttachedCode:y.a,ExFieldCombineCode:T.a,ExSizesCode:F.a}}}},1039:function(t,e){t.exports="<template>\r\n    <section>\r\n        <b-tag>Tag label</b-tag>\r\n        <b-tag rounded>Rounded tag label</b-tag>\r\n    </section>\r\n</template>\r\n"},1040:function(t,e){t.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-tag v-if="isTag1Active"\r\n                type="is-primary"\r\n                closable\r\n                @close="isTag1Active = false">\r\n                Colored closable tag label\r\n            </b-tag>\r\n        </div>\r\n\r\n        <div class="field">\r\n            <b-tag v-if="isTag2Active"\r\n                attached\r\n                closable\r\n                @close="isTag2Active = false">\r\n                Attached closable tag label\r\n            </b-tag>\r\n        </div>\r\n\r\n        <div class="field">\r\n            <b-tag v-if="isTag3Active"\r\n                type="is-danger"\r\n                attached\r\n                closable\r\n                @close="isTag3Active = false">\r\n                Colored attached closable tag label\r\n            </b-tag>\r\n        </div>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isTag1Active: true,\r\n                isTag2Active: true,\r\n                isTag3Active: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1041:function(t,e){t.exports='<template>\r\n    <b-taglist>\r\n        <b-tag type="is-info">First</b-tag>\r\n        <b-tag type="is-info">Second</b-tag>\r\n        <b-tag type="is-info">Third</b-tag>\r\n        <b-tag type="is-info">Fourth</b-tag>\r\n        <b-tag type="is-info">Fifth</b-tag>\r\n    </b-taglist>\r\n</template>\r\n'},1042:function(t,e){t.exports='<template>\r\n    <b-taglist attached>\r\n        <b-tag type="is-dark">npm</b-tag>\r\n        <b-tag type="is-info">0.5.1</b-tag>\r\n    </b-taglist>\r\n</template>\r\n'},1043:function(t,e){t.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <div class="control">\r\n                <b-taglist attached>\r\n                    <b-tag type="is-dark">npm</b-tag>\r\n                    <b-tag type="is-info">0.5.1</b-tag>\r\n                </b-taglist>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-taglist attached>\r\n                    <b-tag type="is-dark">downloads</b-tag>\r\n                    <b-tag type="is-success">15k</b-tag>\r\n                </b-taglist>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-taglist attached>\r\n                    <b-tag type="is-dark">chat</b-tag>\r\n                    <b-tag type="is-primary">on discord</b-tag>\r\n                </b-taglist>\r\n            </div>\r\n        </b-field>\r\n        <br>\r\n\r\n        <b-field grouped group-multiline>\r\n            <div class="control">\r\n                <b-tag type="is-primary" attached closable>Technology</b-tag>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-tag type="is-primary" attached closable>Vuejs</b-tag>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-tag type="is-primary" attached closable>CSS</b-tag>\r\n            </div>\r\n\r\n            <div class="control">\r\n                <b-tag type="is-primary" attached closable>Flexbox</b-tag>\r\n            </div>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1044:function(t,e){t.exports='<template>\r\n    <section>\r\n        <b-tag type="is-dark">Default</b-tag>\r\n        <b-tag type="is-primary" size="is-medium">Medium</b-tag>\r\n        <b-tag type="is-info" size="is-large">Large</b-tag>\r\n    </section>\r\n</template>\r\n'},1045:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Example",{attrs:{component:t.ExSimple,code:t.ExSimpleCode,vertical:""}}),t._v(" "),t._m(0),t._v(" "),a("Example",{attrs:{component:t.ExClosable,code:t.ExClosableCode,title:"Closable",vertical:""}}),t._v(" "),a("Example",{attrs:{component:t.ExTaglist,code:t.ExTaglistCode,title:"Tag list",vertical:""}}),t._v(" "),a("Example",{attrs:{component:t.ExTaglistAttached,code:t.ExTaglistAttachedCode,vertical:""}},[a("p",[t._v("Use the "),a("code",[t._v("attached")]),t._v(" prop to attach tags together.")])]),t._v(" "),a("Example",{attrs:{component:t.ExFieldCombine,code:t.ExFieldCombineCode,vertical:""}},[a("p",[t._v("Combine with field to group attached tags.")])]),t._v(" "),a("Example",{attrs:{component:t.ExSizes,code:t.ExSizesCode,title:"Sizes",vertical:""}},[a("p",[t._v("Two additional sizes.")])]),t._v(" "),a("ApiView",{attrs:{data:t.api}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"content"},[t._v("Closable tags have a button that can be focused, it emits a "),a("code",[t._v("close")]),t._v(" event when clicked or when "),a("b",[t._v("delete")]),t._v(" key is pressed.")])}]}},191:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{title:"Tag",props:[{name:"<code>type</code>",description:"Type (color) of the icon, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>size</code>",description:"Size of the tab, optional",type:"String",values:"<code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>rounded</code>",description:"Tag border rounded",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>closable</code>",description:"Add close/delete button to the tag",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>attached</code>",description:"Close/delete button style equal to attached tags",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>ellipsis</code>",description:"Adds ellipsis to not overflow the text",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>tabstop</code>",description:"If should stop when using tab key",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>disabled</code>",description:"Disable delete button",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>close</code>",description:"Triggers when close/delete button is clicked or <b>delete</b> key is pressed",parameters:"—"}]},{title:"Taglist",props:[{name:"<code>attached</code>",description:"Tabs inside are attached together",type:"Boolean",values:"—",default:"<code>false</code>"}]}]},192:function(t,e,a){var n=a(0)(null,a(849),null,null,null);t.exports=n.exports},193:function(t,e,a){var n=a(0)(a(850),a(851),null,null,null);t.exports=n.exports},194:function(t,e,a){var n=a(0)(null,a(852),null,null,null);t.exports=n.exports},195:function(t,e,a){var n=a(0)(null,a(853),null,null,null);t.exports=n.exports},196:function(t,e,a){var n=a(0)(null,a(854),null,null,null);t.exports=n.exports},197:function(t,e,a){var n=a(0)(null,a(855),null,null,null);t.exports=n.exports},253:function(t,e,a){var n=a(0)(a(1038),a(1045),null,null,null);t.exports=n.exports},849:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-tag",[t._v("Tag label")]),t._v(" "),a("b-tag",{attrs:{rounded:""}},[t._v("Rounded tag label")])],1)},staticRenderFns:[]}},850:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isTag1Active:!0,isTag2Active:!0,isTag3Active:!0}}}},851:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"field"},[t.isTag1Active?a("b-tag",{attrs:{type:"is-primary",closable:""},on:{close:function(e){t.isTag1Active=!1}}},[t._v("\n            Colored closable tag label\n        ")]):t._e()],1),t._v(" "),a("div",{staticClass:"field"},[t.isTag2Active?a("b-tag",{attrs:{attached:"",closable:""},on:{close:function(e){t.isTag2Active=!1}}},[t._v("\n            Attached closable tag label\n        ")]):t._e()],1),t._v(" "),a("div",{staticClass:"field"},[t.isTag3Active?a("b-tag",{attrs:{type:"is-danger",attached:"",closable:""},on:{close:function(e){t.isTag3Active=!1}}},[t._v("\n            Colored attached closable tag label\n        ")]):t._e()],1)])},staticRenderFns:[]}},852:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-taglist",[a("b-tag",{attrs:{type:"is-info"}},[t._v("First")]),t._v(" "),a("b-tag",{attrs:{type:"is-info"}},[t._v("Second")]),t._v(" "),a("b-tag",{attrs:{type:"is-info"}},[t._v("Third")]),t._v(" "),a("b-tag",{attrs:{type:"is-info"}},[t._v("Fourth")]),t._v(" "),a("b-tag",{attrs:{type:"is-info"}},[t._v("Fifth")])],1)},staticRenderFns:[]}},853:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[t._v("npm")]),t._v(" "),a("b-tag",{attrs:{type:"is-info"}},[t._v("0.5.1")])],1)},staticRenderFns:[]}},854:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("div",{staticClass:"control"},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[t._v("npm")]),t._v(" "),a("b-tag",{attrs:{type:"is-info"}},[t._v("0.5.1")])],1)],1),t._v(" "),a("div",{staticClass:"control"},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[t._v("downloads")]),t._v(" "),a("b-tag",{attrs:{type:"is-success"}},[t._v("15k")])],1)],1),t._v(" "),a("div",{staticClass:"control"},[a("b-taglist",{attrs:{attached:""}},[a("b-tag",{attrs:{type:"is-dark"}},[t._v("chat")]),t._v(" "),a("b-tag",{attrs:{type:"is-primary"}},[t._v("on discord")])],1)],1)]),t._v(" "),a("br"),t._v(" "),a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"",closable:""}},[t._v("Technology")])],1),t._v(" "),a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"",closable:""}},[t._v("Vuejs")])],1),t._v(" "),a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"",closable:""}},[t._v("CSS")])],1),t._v(" "),a("div",{staticClass:"control"},[a("b-tag",{attrs:{type:"is-primary",attached:"",closable:""}},[t._v("Flexbox")])],1)])],1)},staticRenderFns:[]}},855:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-tag",{attrs:{type:"is-dark"}},[t._v("Default")]),t._v(" "),a("b-tag",{attrs:{type:"is-primary",size:"is-medium"}},[t._v("Medium")]),t._v(" "),a("b-tag",{attrs:{type:"is-info",size:"is-large"}},[t._v("Large")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.b0c071545363ea7bdc3a.js.map