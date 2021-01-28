webpackJsonp([26,109,200,201,202,203,273,274],{1187:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",[s("b-progress"),e._v(" "),s("b-progress",{attrs:{value:20}}),e._v(" "),s("b-progress",{attrs:{value:40,"show-value":""}}),e._v(" "),s("b-progress",{attrs:{value:80,"show-value":"",format:"percent"}})],1)},staticRenderFns:[]}},1188:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",[s("b-progress",{attrs:{value:20}}),e._v(" "),s("b-progress",{attrs:{type:"is-danger",value:40}}),e._v(" "),s("b-progress",{attrs:{type:"is-success",value:60}}),e._v(" "),s("b-progress",{attrs:{type:"is-info",value:80}}),e._v(" "),s("b-progress",{attrs:{type:"is-warning",value:100}})],1)},staticRenderFns:[]}},1189:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",[s("b-progress",{attrs:{size:"is-small"}}),e._v(" "),s("b-progress"),e._v(" "),s("b-progress",{attrs:{size:"is-medium"}}),e._v(" "),s("b-progress",{attrs:{size:"is-large"}})],1)},staticRenderFns:[]}},1190:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{indeterminate:!1,type:null,size:"is-medium",showValue:!0,format:"raw",precision:2,keepTrailingZeroes:!1}}}},1191:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",[s("div",{staticClass:"block"},[s("b-switch",{model:{value:e.indeterminate,callback:function(r){e.indeterminate=r},expression:"indeterminate"}},[e._v(" Indeterminate ")]),e._v(" "),s("b-field",{attrs:{label:"Type and Size"}},[s("b-field",{attrs:{grouped:""}},[s("b-select",{attrs:{placeholder:"Type"},model:{value:e.type,callback:function(r){e.type=r},expression:"type"}},[s("option",{attrs:{value:"null"}},[e._v("Default")]),e._v(" "),s("option",{attrs:{value:"is-primary"}},[e._v("Primary")]),e._v(" "),s("option",{attrs:{value:"is-success"}},[e._v("Success")]),e._v(" "),s("option",{attrs:{value:"is-warning"}},[e._v("Warning")]),e._v(" "),s("option",{attrs:{value:"is-danger"}},[e._v("Danger")])]),e._v(" "),s("b-select",{attrs:{placeholder:"Size"},model:{value:e.size,callback:function(r){e.size=r},expression:"size"}},[s("option",{attrs:{value:"null"}},[e._v("Default")]),e._v(" "),s("option",{attrs:{value:"is-small"}},[e._v("Small")]),e._v(" "),s("option",{attrs:{value:"is-medium"}},[e._v("Medium")]),e._v(" "),s("option",{attrs:{value:"is-large"}},[e._v("Large")])])],1)],1),e._v(" "),s("b-switch",{model:{value:e.showValue,callback:function(r){e.showValue=r},expression:"showValue"}},[e._v(" Show Value ")]),e._v(" "),s("b-switch",{attrs:{disabled:!e.showValue},model:{value:e.keepTrailingZeroes,callback:function(r){e.keepTrailingZeroes=r},expression:"keepTrailingZeroes"}},[e._v(" Keep Trailing Zeroes ")]),e._v(" "),s("b-field",{attrs:{label:"Format and Precision"}},[s("b-field",[s("b-select",{attrs:{disabled:!e.showValue},model:{value:e.format,callback:function(r){e.format=r},expression:"format"}},[s("option",{attrs:{value:"raw"}},[e._v("Raw")]),e._v(" "),s("option",{attrs:{value:"percent"}},[e._v("Percent")])]),e._v(" "),s("b-numberinput",{attrs:{disabled:!e.showValue,"controls-position":"compact"},model:{value:e.precision,callback:function(r){e.precision=r},expression:"precision"}})],1)],1)],1),e._v(" "),s("b-progress",{attrs:{type:e.type,size:e.size,value:e.indeterminate?void 0:80,"show-value":e.showValue,format:e.format,precision:e.precision,"keep-trailing-zeroes":e.keepTrailingZeroes}})],1)},staticRenderFns:[]}},1192:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",[s("b-progress",{attrs:{value:75,size:"is-medium","show-value":""}},[e._v("\n        Custom display with "),s("span",{staticStyle:{color:"red"}},[e._v("HTML")])]),e._v(" "),s("b-progress",{attrs:{value:75,size:"is-medium","show-value":""}},[e._v("\n        75 / 100\n    ")]),e._v(" "),s("b-progress",{attrs:{value:75,size:"is-medium","show-value":""}},[e._v("\n        3 out of 4\n    ")])],1)},staticRenderFns:[]}},1606:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=s(240),t=s(241),n=s(242),i=s.n(n),a=s(1607),l=s.n(a),c=s(243),p=s.n(c),u=s(1608),d=s.n(u),v=s(244),m=s.n(v),b=s(1609),f=s.n(b),g=s(245),h=s.n(g),_=s(1610),w=s.n(_),y=s(246),x=s.n(y),z=s(1611),E=s.n(z);r.default={data:function(){return{api:o.default,variables:t.default,ExSimple:i.a,ExTypes:p.a,ExSizes:m.a,ExValues:h.a,ExSlot:x.a,ExSimpleCode:l.a,ExTypesCode:d.a,ExSizesCode:f.a,ExValuesCode:w.a,ExSlotCode:E.a}}}},1607:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-progress></b-progress>\r\n\r\n        <b-progress :value="20"></b-progress>\r\n\r\n        <b-progress :value="40" show-value></b-progress>\r\n\r\n        <b-progress :value="80" show-value format="percent"></b-progress>\r\n    </section>\r\n</template>\r\n'},1608:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-progress :value="20"></b-progress>\r\n\r\n        <b-progress type="is-danger" :value="40"></b-progress>\r\n\r\n        <b-progress type="is-success" :value="60"></b-progress>\r\n\r\n        <b-progress type="is-info" :value="80"></b-progress>\r\n\r\n        <b-progress type="is-warning" :value="100"></b-progress>\r\n    </section>\r\n</template>\r\n'},1609:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-progress size="is-small"></b-progress>\r\n\r\n        <b-progress></b-progress>\r\n\r\n        <b-progress size="is-medium"></b-progress>\r\n\r\n        <b-progress size="is-large"></b-progress>\r\n    </section>\r\n</template>\r\n'},1610:function(e,r){e.exports='<template>\r\n    <section>\r\n        <div class="block">\r\n            <b-switch v-model="indeterminate"> Indeterminate </b-switch>\r\n            <b-field label="Type and Size">\r\n                <b-field grouped>\r\n                    <b-select v-model="type" placeholder="Type">\r\n                        <option value="null">Default</option>\r\n                        <option value="is-primary">Primary</option>\r\n                        <option value="is-success">Success</option>\r\n                        <option value="is-warning">Warning</option>\r\n                        <option value="is-danger">Danger</option>\r\n                    </b-select>\r\n                    <b-select v-model="size" placeholder="Size">\r\n                        <option value="null">Default</option>\r\n                        <option value="is-small">Small</option>\r\n                        <option value="is-medium">Medium</option>\r\n                        <option value="is-large">Large</option>\r\n                    </b-select>\r\n                </b-field>\r\n            </b-field>\r\n            <b-switch v-model="showValue"> Show Value </b-switch>\r\n            <b-switch v-model="keepTrailingZeroes" :disabled="!showValue"> Keep Trailing Zeroes </b-switch>\r\n            <b-field label="Format and Precision">\r\n                <b-field>\r\n                    <b-select v-model="format" :disabled="!showValue">\r\n                        <option value="raw">Raw</option>\r\n                        <option value="percent">Percent</option>\r\n                    </b-select>\r\n                    <b-numberinput v-model="precision" :disabled="!showValue" controls-position="compact" />\r\n                </b-field>\r\n            </b-field>\r\n        </div>\r\n\r\n        <b-progress\r\n            :type="type"\r\n            :size="size"\r\n            :value="indeterminate ? undefined : 80"\r\n            :show-value="showValue"\r\n            :format="format"\r\n            :precision="precision"\r\n            :keep-trailing-zeroes="keepTrailingZeroes"></b-progress>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                indeterminate: false,\r\n                type: null,\r\n                size: \'is-medium\',\r\n                showValue: true,\r\n                format: \'raw\',\r\n                precision: 2,\r\n                keepTrailingZeroes: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1611:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-progress :value="75" size="is-medium" show-value>\r\n            Custom display with <span style="color: red">HTML</span>\r\n        </b-progress>\r\n        <b-progress :value="75" size="is-medium" show-value>\r\n            75 / 100\r\n        </b-progress>\r\n        <b-progress :value="75" size="is-medium" show-value>\r\n            3 out of 4\r\n        </b-progress>\r\n    </section>\r\n</template>\r\n'},1612:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),s("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types",vertical:""}}),e._v(" "),s("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),s("Example",{attrs:{component:e.ExValues,code:e.ExValuesCode,title:"Values",vertical:""}}),e._v(" "),s("Example",{attrs:{component:e.ExSlot,code:e.ExSlotCode,title:"Slot",vertical:""}},[s("p",[e._v("There is also a default slot if you want to display anything you want inside the progress bar")])]),e._v(" "),s("ApiView",{attrs:{data:e.api}}),e._v(" "),s("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},240:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the progress bar, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-darkgrey</code>"},{name:"<code>size</code>",description:"Size of the progress bar, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>value</code>",description:"The progress value, progress will be indeterminate if undefined.",type:"Number",values:"—",default:"—"},{name:"<code>max</code>",description:"The maximum value for the progress bar.",type:"Number",values:"—",default:"<code>100</code>"},{name:"<code>show-value</code>",description:"If the value should be displayed inside the progress bar.",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>format</code>",description:"Which format should be used to display the value (if <code>show-value</code> is <code>true</code>).\n                              The value will be displayed as-is if using <code>raw</code>. The percent using <code>value</code>\n                              and <code>max</code> will be calculated and displayed if using <code>percent</code>",type:"String",values:"<code>raw</code>, <code>percent</code>",default:"<code>raw</code>"},{name:"<code>precision</code>",description:"How many decimals should be displayed.",type:"Number",values:"—",default:"<code>2</code>"},{name:"<code>keep-trailing-zeroes</code>",description:"Truncate or not the trailing zeroes",type:"Boolean",values:"—",default:"<code>true</code>"}],slots:[{name:"<code>default</code>",description:"This will be displayed inside the progress bar instead of the calculated value",props:"—"}]}]},241:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{name:"<code>$progress-text-color</code>",default:"<code>$white</code>"}]},242:function(e,r,s){var o=s(0)(null,s(1187),null,null,null);e.exports=o.exports},243:function(e,r,s){var o=s(0)(null,s(1188),null,null,null);e.exports=o.exports},244:function(e,r,s){var o=s(0)(null,s(1189),null,null,null);e.exports=o.exports},245:function(e,r,s){var o=s(0)(s(1190),s(1191),null,null,null);e.exports=o.exports},246:function(e,r,s){var o=s(0)(null,s(1192),null,null,null);e.exports=o.exports},388:function(e,r,s){var o=s(0)(s(1606),s(1612),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=26.9b2879dbcd7890346899.js.map