webpackJsonp([29,94,95,191,192,261,262],{1232:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isSwitched:!1,isSwitchedCustom:"Yes"}}}},1233:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"field"},[i("b-switch",[e._v("Default")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{model:{value:e.isSwitched,callback:function(t){e.isSwitched=t},expression:"isSwitched"}},[e._v("\r\n                "+e._s(e.isSwitched)+"\r\n            ")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{"true-value":"Yes","false-value":"No"},model:{value:e.isSwitchedCustom,callback:function(t){e.isSwitchedCustom=t},expression:"isSwitchedCustom"}},[e._v("\r\n                "+e._s(e.isSwitchedCustom)+"\r\n            ")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{disabled:""}},[e._v("Disabled")])],1)])},staticRenderFns:[]}},1234:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"field"},[i("b-switch",{attrs:{value:!0}},[e._v("\r\n                Default\r\n            ")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{value:!0,type:"is-info"}},[e._v("\r\n                Info\r\n            ")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{value:!0,type:"is-success"}},[e._v("\r\n                Success\r\n            ")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{value:!0,type:"is-danger"}},[e._v("\r\n                Danger\r\n            ")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{value:!0,type:"is-warning"}},[e._v("\r\n                Warning\r\n            ")])],1)])},staticRenderFns:[]}},1235:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"field"},[i("b-switch",{attrs:{size:"is-small"}},[e._v("Small")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",[e._v("Default")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{size:"is-medium"}},[e._v("Medium")])],1),e._v(" "),i("div",{staticClass:"field"},[i("b-switch",{attrs:{size:"is-large"}},[e._v("Large")])],1)])},staticRenderFns:[]}},1236:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{size:"",type:null,isRounded:!1,isOutlined:!1}}}},1237:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-field",{attrs:{grouped:""}},[i("b-switch",{model:{value:e.isRounded,callback:function(t){e.isRounded=t},expression:"isRounded"}},[e._v("Rounded")]),e._v(" "),i("b-switch",{model:{value:e.isOutlined,callback:function(t){e.isOutlined=t},expression:"isOutlined"}},[e._v("Outlined")])],1),e._v(" "),i("b-field",{attrs:{grouped:""}},[i("b-field",{attrs:{label:"Type"}},[i("b-select",{attrs:{placeholder:"Type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[i("option",{attrs:{value:"null"}},[e._v("Default")]),e._v(" "),i("option",{attrs:{value:"is-primary"}},[e._v("Primary")]),e._v(" "),i("option",{attrs:{value:"is-success"}},[e._v("Success")]),e._v(" "),i("option",{attrs:{value:"is-warning"}},[e._v("Warning")]),e._v(" "),i("option",{attrs:{value:"is-danger"}},[e._v("Danger")])])],1),e._v(" "),i("b-field",{attrs:{label:"Size"}},[i("b-select",{model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[i("option",{attrs:{value:""}},[e._v("Default")]),e._v(" "),i("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),i("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),i("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),i("b-switch",{attrs:{rounded:e.isRounded,outlined:e.isOutlined,size:e.size,type:e.type}},[e._v("Sample")])],1)},staticRenderFns:[]}},1651:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(281),s=i(282),r=i(283),l=i.n(r),a=i(1652),d=i.n(a),o=i(284),c=i.n(o),u=i(1653),v=i.n(u),p=i(285),f=i.n(p),m=i(1654),h=i.n(m),b=i(286),w=i.n(b),_=i(1655),y=i.n(_);t.default={data:function(){return{api:n.default,variables:s.default,ExSimple:l.a,ExTypes:c.a,ExSizes:f.a,ExStyles:w.a,ExSimpleCode:d.a,ExTypesCode:v.a,ExSizesCode:h.a,ExStylesCode:y.a}}}},1652:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-switch>Default</b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch v-model="isSwitched">\r\n                {{ isSwitched }}\r\n            </b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch v-model="isSwitchedCustom"\r\n                true-value="Yes"\r\n                false-value="No">\r\n                {{ isSwitchedCustom }}\r\n            </b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch disabled>Disabled</b-switch>\r\n        </div>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isSwitched: false,\r\n                isSwitchedCustom: \'Yes\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1653:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-switch :value="true">\r\n                Default\r\n            </b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch :value="true"\r\n            type="is-info">\r\n                Info\r\n            </b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch :value="true"\r\n            type="is-success">\r\n                Success\r\n            </b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch :value="true"\r\n            type="is-danger">\r\n                Danger\r\n            </b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch :value="true"\r\n            type="is-warning">\r\n                Warning\r\n            </b-switch>\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1654:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-switch size="is-small">Small</b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch>Default</b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch size="is-medium">Medium</b-switch>\r\n        </div>\r\n        <div class="field">\r\n            <b-switch size="is-large">Large</b-switch>\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1655:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field grouped>\r\n            <b-switch v-model="isRounded">Rounded</b-switch>\r\n            <b-switch v-model="isOutlined">Outlined</b-switch>\r\n        </b-field>\r\n        <b-field grouped>\r\n            <b-field label="Type">\r\n                <b-select v-model="type" placeholder="Type">\r\n                    <option value="null">Default</option>\r\n                    <option value="is-primary">Primary</option>\r\n                    <option value="is-success">Success</option>\r\n                    <option value="is-warning">Warning</option>\r\n                    <option value="is-danger">Danger</option>\r\n                </b-select>\r\n            </b-field>\r\n            <b-field label="Size">\r\n                <b-select v-model="size">\r\n                    <option value="">Default</option>\r\n                    <option value="is-small">is-small</option>\r\n                    <option value="is-medium">is-medium</option>\r\n                    <option value="is-large">is-large</option>\r\n                </b-select>\r\n            </b-field>\r\n        </b-field>\r\n        <b-switch\r\n            :rounded="isRounded"\r\n            :outlined="isOutlined"\r\n            :size="size"\r\n            :type="type">Sample</b-switch>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                size: \'\',\r\n                type: null,\r\n                isRounded: false,\r\n                isOutlined: false,\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1656:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),i("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types",vertical:""}}),e._v(" "),i("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),i("Example",{attrs:{component:e.ExStyles,code:e.ExStylesCode,title:"Styles",vertical:""}}),e._v(" "),i("ApiView",{attrs:{data:e.api}}),e._v(" "),i("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},281:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the switch, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>false</code>"},{name:"<code>native-value</code>",description:"Same as native <code>value</code>",type:"Any",values:"—",default:"—"},{name:"<code>true-value</code>",description:"Overrides the returned value when it's checked",type:"Any",values:"—",default:"<code>true</code>"},{name:"<code>false-value</code>",description:"Overrides the returned value when it's not checked",type:"Any",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"—"},{name:"<code>size</code>",description:"Size  of the control, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>rounded</code>",description:"Rounded style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>outlined</code>",description:"Outlined style",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>input</code>",description:"Triggers when the value of the switch is changed",parameters:"<code>value: Boolean</code>"},{name:"<code>[any].native</code>",description:"Listen to any event using this syntax, e.g <code>click.native</code>",parameters:"<code>event: $event</code>"}]}]},282:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"<code>$switch-width-number</code>",default:"<code>2.75</code>"},{name:"<code>$switch-width</code>",default:"<code>$switch-width-number * 1em</code>"},{name:"<code>$switch-padding</code>",default:"<code>0.2em</code>"},{name:"<code>$switch-active-background-color</code>",default:"<code>$primary</code>"}]},283:function(e,t,i){var n=i(0)(i(1232),i(1233),null,null,null);e.exports=n.exports},284:function(e,t,i){var n=i(0)(null,i(1234),null,null,null);e.exports=n.exports},285:function(e,t,i){var n=i(0)(null,i(1235),null,null,null);e.exports=n.exports},286:function(e,t,i){var n=i(0)(i(1236),i(1237),null,null,null);e.exports=n.exports},396:function(e,t,i){var n=i(0)(i(1651),i(1656),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=29.f8ef960c704b8313e37e.js.map