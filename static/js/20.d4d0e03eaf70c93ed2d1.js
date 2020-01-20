webpackJsonp([20,159,160,161,238,239,296,297],{1e3:function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checkboxGroup:["Flint"]}}}},1001:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("section",[o("div",{staticClass:"block"},[o("b-checkbox",{attrs:{"native-value":"Silver"},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[e._v("\r\n                Silver\r\n            ")]),e._v(" "),o("b-checkbox",{attrs:{"native-value":"Flint"},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[e._v("\r\n                Flint\r\n            ")]),e._v(" "),o("b-checkbox",{attrs:{"native-value":"Vane"},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[e._v("\r\n                Vane\r\n            ")]),e._v(" "),o("b-checkbox",{attrs:{"native-value":"Billy",disabled:""},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[e._v("\r\n                Billy\r\n            ")])],1),e._v(" "),o("p",{staticClass:"content"},[o("b",[e._v("Selection:")]),e._v("\r\n            "+e._s(e.checkboxGroup)+"\r\n        ")])])},staticRenderFns:[]}},1002:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("section",[o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{size:"is-small"}},[e._v("Small")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",[e._v("Default")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{size:"is-medium"}},[e._v("Medium")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{size:"is-large"}},[e._v("Large")])],1)])},staticRenderFns:[]}},1003:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("section",[o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{value:!0}},[e._v("\r\n                Default\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{value:!0,type:"is-info"}},[e._v("\r\n                Info\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{value:!0,type:"is-success"}},[e._v("\r\n                Success\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{value:!0,type:"is-danger"}},[e._v("\r\n                Danger\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{value:!0,type:"is-warning"}},[e._v("\r\n                Warning\r\n            ")])],1)])},staticRenderFns:[]}},1004:function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checkboxGroup:[]}}}},1005:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("section",[o("b-field",[o("b-checkbox-button",{attrs:{"native-value":"Nope",type:"is-danger"},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[o("b-icon",{attrs:{icon:"close"}}),e._v(" "),o("span",[e._v("Nope")])],1),e._v(" "),o("b-checkbox-button",{attrs:{"native-value":"Yep",type:"is-success"},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[o("b-icon",{attrs:{icon:"check"}}),e._v(" "),o("span",[e._v("Yep")])],1),e._v(" "),o("b-checkbox-button",{attrs:{"native-value":"Default"},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[e._v("\r\n                Default\r\n            ")]),e._v(" "),o("b-checkbox-button",{attrs:{"native-value":"Disabled",disabled:""},model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[e._v("\r\n                Disabled\r\n            ")])],1),e._v(" "),o("p",{staticClass:"content"},[o("b",[e._v("Selection:")]),e._v("\r\n            "+e._s(e.checkboxGroup)+"\r\n        ")])],1)},staticRenderFns:[]}},125:function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=[{title:"Checkbox",props:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>false</code>"},{name:"<code>native-value</code>",description:"Same as native <code>value</code>",type:"Any",values:"—",default:"—"},{name:"<code>indeterminate</code>",description:"Same as native <code>indeterminate</code>",type:"Boolean",values:"—",default:"—"},{name:"<code>true-value</code>",description:"Overrides the returned value when it's checked",type:"Any",values:"—",default:"<code>true</code>"},{name:"<code>false-value</code>",description:"Overrides the returned value when it's not checked",type:"Any",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>required</code>",description:"Same as native <code>required</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"—"},{name:"<code>size</code>",description:"Size  of the control, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>type</code>",description:"Type (color) of the control, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"}],events:[{name:"<code>input</code>",description:"Triggers when the value of checkbox is changed",parameters:"<code>value: Boolean</code>"},{name:"<code>[any].native</code>",description:"Listen to any event using this syntax, e.g <code>click.native</code>",parameters:"<code>event: $event</code>"}]},{title:"Checkbox Button",props:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"—"},{name:"<code>native-value</code>",description:"Same as native <code>value</code>",type:"Any",values:"—",default:"—"},{name:"<code>type</code>",description:"Type (color) of the button <strong>when checked</strong>",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"—"},{name:"<code>size</code>",description:"Size of the button, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>expanded</code>",description:"Checkbox button will be expanded (full-width)",type:"Boolean",values:"—",default:"<code>false</code>"}]}]},126:function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=[{name:"<code>$checkbox-active-background-color</code>",default:"<code>$primary</code>"},{name:"<code>$checkbox-background-color</code>",default:"<code>transparent</code>"},{name:"<code>$checkbox-border-color</code>",default:"<code>$grey</code>"},{name:"<code>$checkbox-border-radius</code>",default:"<code>$radius</code>"},{name:"<code>$checkbox-border-width</code>",default:"<code>2px</code>"},{name:"<code>$checkbox-checkmark-color</code>",default:"<code>$primary-invert</code>"},{name:"<code>$checkbox-size</code>",default:"<code>1.25em</code>"}]},127:function(e,c,o){var n=o(0)(o(998),o(999),null,null,null);e.exports=n.exports},128:function(e,c,o){var n=o(0)(o(1e3),o(1001),null,null,null);e.exports=n.exports},129:function(e,c,o){var n=o(0)(null,o(1002),null,null,null);e.exports=n.exports},130:function(e,c,o){var n=o(0)(null,o(1003),null,null,null);e.exports=n.exports},131:function(e,c,o){var n=o(0)(o(1004),o(1005),null,null,null);e.exports=n.exports},1338:function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var n=o(125),t=o(126),r=o(127),a=o.n(r),i=o(1339),s=o.n(i),d=o(128),l=o.n(d),u=o(1340),b=o.n(u),v=o(129),p=o.n(v),x=o(1341),h=o.n(x),k=o(130),f=o.n(k),m=o(1342),_=o.n(m),y=o(131),C=o.n(y),G=o(1343),g=o.n(G);c.default={data:function(){return{api:n.default,variables:t.default,ExSimple:a.a,ExSimpleCode:s.a,ExArray:l.a,ExArrayCode:b.a,ExSizes:p.a,ExSizesCode:h.a,ExTypes:f.a,ExTypesCode:_.a,ExCheckboxButton:C.a,ExCheckboxButtonCode:g.a}}}},1339:function(e,c){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-checkbox>Basic</b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox v-model="checkbox">\r\n                {{ checkbox }}\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox v-model="checkboxCustom"\r\n                true-value="Yes"\r\n                false-value="No">\r\n                {{ checkboxCustom }}\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox :indeterminate="true">\r\n                Indeterminate\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox disabled>Disabled</b-checkbox>\r\n        </div>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                checkbox: false,\r\n                checkboxCustom: \'Yes\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1340:function(e,c){e.exports='<template>\r\n    <section>\r\n        <div class="block">\r\n            <b-checkbox v-model="checkboxGroup"\r\n                native-value="Silver">\r\n                Silver\r\n            </b-checkbox>\r\n            <b-checkbox v-model="checkboxGroup"\r\n                native-value="Flint">\r\n                Flint\r\n            </b-checkbox>\r\n            <b-checkbox v-model="checkboxGroup"\r\n                native-value="Vane">\r\n                Vane\r\n            </b-checkbox>\r\n            <b-checkbox v-model="checkboxGroup"\r\n                native-value="Billy" disabled>\r\n                Billy\r\n            </b-checkbox>\r\n        </div>\r\n        <p class="content">\r\n            <b>Selection:</b>\r\n            {{ checkboxGroup }}\r\n        </p>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                checkboxGroup: [\'Flint\']\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1341:function(e,c){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-checkbox size="is-small">Small</b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox>Default</b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox size="is-medium">Medium</b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox size="is-large">Large</b-checkbox>\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1342:function(e,c){e.exports='<template>\r\n    <section>\r\n        <div class="field">\r\n            <b-checkbox :value="true">\r\n                Default\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox :value="true"\r\n            type="is-info">\r\n                Info\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox :value="true"\r\n            type="is-success">\r\n                Success\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox :value="true"\r\n            type="is-danger">\r\n                Danger\r\n            </b-checkbox>\r\n        </div>\r\n        <div class="field">\r\n            <b-checkbox :value="true"\r\n            type="is-warning">\r\n                Warning\r\n            </b-checkbox>\r\n        </div>\r\n    </section>\r\n</template>\r\n'},1343:function(e,c){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-checkbox-button v-model="checkboxGroup"\r\n                native-value="Nope"\r\n                type="is-danger">\r\n                <b-icon icon="close"></b-icon>\r\n                <span>Nope</span>\r\n            </b-checkbox-button>\r\n\r\n            <b-checkbox-button v-model="checkboxGroup"\r\n                native-value="Yep"\r\n                type="is-success">\r\n                <b-icon icon="check"></b-icon>\r\n                <span>Yep</span>\r\n            </b-checkbox-button>\r\n\r\n            <b-checkbox-button v-model="checkboxGroup"\r\n                native-value="Default">\r\n                Default\r\n            </b-checkbox-button>\r\n\r\n            <b-checkbox-button v-model="checkboxGroup"\r\n                native-value="Disabled"\r\n                disabled>\r\n                Disabled\r\n            </b-checkbox-button>\r\n        </b-field>\r\n        <p class="content">\r\n            <b>Selection:</b>\r\n            {{ checkboxGroup }}\r\n        </p>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                checkboxGroup: []\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1344:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("div",[o("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),o("Example",{attrs:{component:e.ExArray,code:e.ExArrayCode,title:"Grouped (Array)",vertical:""}},[o("p",[e._v("Just add the same "),o("code",[e._v("v-model")]),e._v(" to multiple Checkboxes, and set a "),o("code",[e._v("native-value")]),e._v(".")])]),e._v(" "),o("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),o("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types",vertical:""}}),e._v(" "),o("Example",{attrs:{component:e.ExCheckboxButton,code:e.ExCheckboxButtonCode,title:"Checkbox Button"}},[o("p",[e._v("You have to wrap them on a "),o("router-link",{attrs:{to:"/documentation/field"}},[e._v("Field")]),e._v(".")],1)]),e._v(" "),o("ApiView",{attrs:{data:e.api}}),e._v(" "),o("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},362:function(e,c,o){var n=o(0)(o(1338),o(1344),null,null,null);e.exports=n.exports},998:function(e,c,o){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checkbox:!1,checkboxCustom:"Yes"}}}},999:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("section",[o("div",{staticClass:"field"},[o("b-checkbox",[e._v("Basic")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{model:{value:e.checkbox,callback:function(c){e.checkbox=c},expression:"checkbox"}},[e._v("\r\n                "+e._s(e.checkbox)+"\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{"true-value":"Yes","false-value":"No"},model:{value:e.checkboxCustom,callback:function(c){e.checkboxCustom=c},expression:"checkboxCustom"}},[e._v("\r\n                "+e._s(e.checkboxCustom)+"\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{indeterminate:!0}},[e._v("\r\n                Indeterminate\r\n            ")])],1),e._v(" "),o("div",{staticClass:"field"},[o("b-checkbox",{attrs:{disabled:""}},[e._v("Disabled")])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=20.d4d0e03eaf70c93ed2d1.js.map