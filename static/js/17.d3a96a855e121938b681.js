webpackJsonp([17,138,208,209,210,211,212,259],{100:function(t,n,e){var o=e(0)(e(888),e(889),null,null,null);t.exports=o.exports},101:function(t,n,e){var o=e(0)(null,e(890),null,null,null);t.exports=o.exports},102:function(t,n,e){var o=e(0)(null,e(891),null,null,null);t.exports=o.exports},103:function(t,n,e){var o=e(0)(null,e(892),null,null,null);t.exports=o.exports},104:function(t,n,e){var o=e(0)(null,e(893),null,null,null);t.exports=o.exports},105:function(t,n,e){var o=e(0)(null,e(894),null,null,null);t.exports=o.exports},1177:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(99),r=e(100),i=e.n(r),s=e(1178),a=e.n(s),u=e(101),c=e.n(u),d=e(1179),l=e.n(d),b=e(102),p=e.n(b),v=e(1180),f=e.n(v),m=e(103),_=e.n(m),y=e(1181),g=e.n(y),x=e(104),h=e.n(x),E=e(1182),k=e.n(E),C=e(105),S=e.n(C),z=e(1183),R=e.n(z);n.default={data:function(){return{api:o.default,ExSimple:i.a,ExTypesStates:c.a,ExIcons:p.a,ExSizes:_.a,ExTags:h.a,ExRouter:S.a,ExSimpleCode:a.a,ExTypesStatesCode:l.a,ExIconsCode:f.a,ExSizesCode:g.a,ExTagsCode:k.a,ExRouterCode:R.a}}}},1178:function(t,n){t.exports="<template>\r\n    <section>\r\n        <b-button @click=\"clickMe\">Click Me</b-button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            clickMe() {\r\n                this.$buefy.notification.open('Clicked!!')\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1179:function(t,n){t.exports='<template>\r\n    <section>\r\n        \r\n        <div class="buttons">\r\n            <b-button type="is-primary">Primary</b-button>\r\n\r\n            <b-button type="is-success">Success</b-button>\r\n\r\n            <b-button type="is-danger">Danger</b-button>\r\n \r\n            <b-button type="is-warning">Warning</b-button>\r\n        \r\n            <b-button type="is-info">Info</b-button>\r\n        \r\n            <b-button type="is-link">Link</b-button>\r\n\r\n            <b-button type="is-light">Light</b-button>\r\n\r\n            <b-button type="is-dark">Dark</b-button>\r\n\r\n            <b-button type="is-text">Text</b-button>\r\n        </div>\r\n\r\n        <div class="buttons">\r\n            <b-button disabled>Disabled</b-button>\r\n        \r\n            <b-button loading>Loading</b-button>\r\n        \r\n            <b-button rounded>Rounded</b-button>\r\n        </div>\r\n\r\n        <div class="buttons">\r\n            <b-button type="is-primary" outlined>Outlined</b-button>\r\n            <b-button type="is-success" outlined>Outlined</b-button>\r\n            <b-button type="is-danger" outlined>Outlined</b-button>\r\n            <b-button type="is-warning" outlined>Outlined</b-button>\r\n        </div>\r\n\r\n        <div class="notification is-primary">\r\n            <b-button type="is-primary"\r\n                inverted>\r\n                Inverted\r\n            </b-button>\r\n\r\n            <b-button type="is-primary"\r\n                inverted\r\n                outlined>\r\n                Invert Outlined\r\n            </b-button>\r\n        </div>\r\n\r\n    </section>\r\n</template>\r\n'},1180:function(t,n){t.exports='<template>\r\n    <section>\r\n        <div class="buttons">\r\n            <b-button size="is-small"\r\n                icon-left="github-circle">\r\n                Add\r\n            </b-button>\r\n\r\n            <b-button icon-left="github-circle">\r\n                Add\r\n            </b-button>\r\n\r\n            <b-button size="is-medium"\r\n                icon-left="github-circle">\r\n                Add\r\n            </b-button>\r\n\r\n            <b-button size="is-large"\r\n                icon-left="github-circle">\r\n                Add\r\n            </b-button>\r\n        </div>\r\n\r\n        <div class="buttons">\r\n            <b-button type="is-danger"\r\n                icon-left="delete">\r\n                Delete\r\n            </b-button>\r\n\r\n            <b-button type="is-danger"\r\n                icon-right="delete">\r\n                Delete\r\n            </b-button>\r\n\r\n            <b-button type="is-danger"\r\n                icon-right="delete" />\r\n        </div>\r\n\r\n    </section>\r\n</template>\r\n'},1181:function(t,n){t.exports='<template>\r\n    <section>\r\n        <div class="buttons">\r\n            <b-button size="is-small">Small</b-button>\r\n            <b-button>Default</b-button>\r\n            <b-button size="is-medium">Medium</b-button>\r\n            <b-button size="is-large">Large</b-button>\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1182:function(t,n){t.exports='<template>\r\n    <section>\r\n        <div class="buttons">\r\n            <b-button>Button</b-button>\r\n\r\n            <b-button tag="a"\r\n                href="https://buefy.org"\r\n                target="_blank">\r\n                Anchor\r\n            </b-button>\r\n\r\n            <b-button tag="input"\r\n                native-type="submit"\r\n                value="Submit input" />\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1183:function(t,n){t.exports='<template>\r\n    <section>\r\n        <div class="buttons">\r\n            <b-button tag="router-link"\r\n                to="/documentation"\r\n                type="is-link">\r\n                Docs\r\n            </b-button>\r\n            <b-button tag="router-link"\r\n                to="/expo"\r\n                type="is-info">\r\n                Expo\r\n            </b-button>\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1184:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Example",{attrs:{component:t.ExSimple,code:t.ExSimpleCode,vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExTypesStates,code:t.ExTypesStatesCode,title:"Types and states",vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExSizes,code:t.ExSizesCode,title:"Sizes",vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExIcons,code:t.ExIconsCode,title:"Icons",vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExTags,code:t.ExTagsCode,title:"Tags",vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExRouter,code:t.ExRouterCode,title:"Router",vertical:""}},[e("div",{staticClass:"tags has-addons"},[e("span",{staticClass:"tag is-success"},[t._v("New!")]),t._v(" "),e("span",{staticClass:"tag is-info"},[t._v("0.7.6")])])]),t._v(" "),e("ApiView",{attrs:{data:t.api}})],1)},staticRenderFns:[]}},317:function(t,n,e){var o=e(0)(e(1177),e(1184),null,null,null);t.exports=o.exports},888:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{clickMe:function(){this.$buefy.notification.open("Clicked!!")}}}},889:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("b-button",{on:{click:t.clickMe}},[t._v("Click Me")])],1)},staticRenderFns:[]}},890:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"buttons"},[e("b-button",{attrs:{type:"is-primary"}},[t._v("Primary")]),t._v(" "),e("b-button",{attrs:{type:"is-success"}},[t._v("Success")]),t._v(" "),e("b-button",{attrs:{type:"is-danger"}},[t._v("Danger")]),t._v(" "),e("b-button",{attrs:{type:"is-warning"}},[t._v("Warning")]),t._v(" "),e("b-button",{attrs:{type:"is-info"}},[t._v("Info")]),t._v(" "),e("b-button",{attrs:{type:"is-link"}},[t._v("Link")]),t._v(" "),e("b-button",{attrs:{type:"is-light"}},[t._v("Light")]),t._v(" "),e("b-button",{attrs:{type:"is-dark"}},[t._v("Dark")]),t._v(" "),e("b-button",{attrs:{type:"is-text"}},[t._v("Text")])],1),t._v(" "),e("div",{staticClass:"buttons"},[e("b-button",{attrs:{disabled:""}},[t._v("Disabled")]),t._v(" "),e("b-button",{attrs:{loading:""}},[t._v("Loading")]),t._v(" "),e("b-button",{attrs:{rounded:""}},[t._v("Rounded")])],1),t._v(" "),e("div",{staticClass:"buttons"},[e("b-button",{attrs:{type:"is-primary",outlined:""}},[t._v("Outlined")]),t._v(" "),e("b-button",{attrs:{type:"is-success",outlined:""}},[t._v("Outlined")]),t._v(" "),e("b-button",{attrs:{type:"is-danger",outlined:""}},[t._v("Outlined")]),t._v(" "),e("b-button",{attrs:{type:"is-warning",outlined:""}},[t._v("Outlined")])],1),t._v(" "),e("div",{staticClass:"notification is-primary"},[e("b-button",{attrs:{type:"is-primary",inverted:""}},[t._v("\n            Inverted\n        ")]),t._v(" "),e("b-button",{attrs:{type:"is-primary",inverted:"",outlined:""}},[t._v("\n            Invert Outlined\n        ")])],1)])},staticRenderFns:[]}},891:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"buttons"},[e("b-button",{attrs:{size:"is-small","icon-left":"github-circle"}},[t._v("\n            Add\n        ")]),t._v(" "),e("b-button",{attrs:{"icon-left":"github-circle"}},[t._v("\n            Add\n        ")]),t._v(" "),e("b-button",{attrs:{size:"is-medium","icon-left":"github-circle"}},[t._v("\n            Add\n        ")]),t._v(" "),e("b-button",{attrs:{size:"is-large","icon-left":"github-circle"}},[t._v("\n            Add\n        ")])],1),t._v(" "),e("div",{staticClass:"buttons"},[e("b-button",{attrs:{type:"is-danger","icon-left":"delete"}},[t._v("\n            Delete\n        ")]),t._v(" "),e("b-button",{attrs:{type:"is-danger","icon-right":"delete"}},[t._v("\n            Delete\n        ")]),t._v(" "),e("b-button",{attrs:{type:"is-danger","icon-right":"delete"}})],1)])},staticRenderFns:[]}},892:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"buttons"},[e("b-button",{attrs:{size:"is-small"}},[t._v("Small")]),t._v(" "),e("b-button",[t._v("Default")]),t._v(" "),e("b-button",{attrs:{size:"is-medium"}},[t._v("Medium")]),t._v(" "),e("b-button",{attrs:{size:"is-large"}},[t._v("Large")])],1)])},staticRenderFns:[]}},893:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"buttons"},[e("b-button",[t._v("Button")]),t._v(" "),e("b-button",{attrs:{tag:"a",href:"https://buefy.org",target:"_blank"}},[t._v("\n            Anchor\n        ")]),t._v(" "),e("b-button",{attrs:{tag:"input","native-type":"submit",value:"Submit input"}})],1)])},staticRenderFns:[]}},894:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"buttons"},[e("b-button",{attrs:{tag:"router-link",to:"/documentation",type:"is-link"}},[t._v("\n            Docs\n        ")]),t._v(" "),e("b-button",{attrs:{tag:"router-link",to:"/expo",type:"is-info"}},[t._v("\n            Expo\n        ")])],1)])},staticRenderFns:[]}},99:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the control, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>size</code>",description:"Vertical size of button, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>loading</code>",description:"Add the loading state to the button",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>rounded</code>",description:"Rounded style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>outlined</code>",description:"Outlined style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon-left</code>",description:"Icon name to show on the left",type:"String",values:"—",default:"—"},{name:"<code>icon-right</code>",description:"Icon name to show on the right",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>native-type</code>",description:"Button type, like native",type:"String",values:"Any native button type",default:"<code>button</code>"},{name:"<code>tag</code>",description:"Button tag name",type:"String",values:"<code>button</code>, <code>a</code>, <code>input</code>, <code>router-link</code>, <code>nuxt-link</code> or other nuxt alias",default:"<code>button</code>"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],events:[{name:"<code>click</code>",description:"Triggers on click",parameters:"<code>event: $event</code>"}]}]}});
//# sourceMappingURL=17.d3a96a855e121938b681.js.map