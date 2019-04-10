webpackJsonp([6,39,40,41,42,43,196,197],{100:function(e,t,o){var n=o(0)(o(752),o(753),null,null,null);e.exports=n.exports},101:function(e,t,o){var n=o(0)(o(754),o(755),null,null,null);e.exports=n.exports},102:function(e,t,o){var n=o(0)(o(756),o(757),null,null,null);e.exports=n.exports},103:function(e,t,o){var n=o(0)(o(758),o(759),null,null,null);e.exports=n.exports},251:function(e,t,o){var n=o(0)(o(974),o(980),null,null,null);e.exports=n.exports},750:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(80);t.default={mixins:[n.default]}},751:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-field",[o("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1),e._v(" "),o("b-field",{attrs:{label:"Select time"}},[o("b-clockpicker",{attrs:{rounded:"",placeholder:"Click to select...",icon:"clock","hour-format":e.format}})],1)],1)},staticRenderFns:[]}},752:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(80);t.default={mixins:[n.default]}},753:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-field",[o("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1),e._v(" "),o("b-field",{attrs:{label:"Select timepicker"}},[o("b-clockpicker",{attrs:{placeholder:"Type or select a date...",icon:"clock","hour-format":e.format,readonly:!1}})],1)],1)},staticRenderFns:[]}},754:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(80);t.default={mixins:[n.default],data:function(){var e=new Date;e.setHours(9),e.setMinutes(0);var t=new Date;return t.setHours(18),t.setMinutes(0),{minTime:e,maxTime:t}}}},755:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("b-field",[o("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1)],1),e._v(" "),o("div",{staticClass:"column"},[o("b-field",{attrs:{label:"Min Time"}},[o("b-clockpicker",{attrs:{"hour-format":e.format},model:{value:e.minTime,callback:function(t){e.minTime=t},expression:"minTime"}})],1)],1),e._v(" "),o("div",{staticClass:"column"},[o("b-field",{attrs:{label:"Max Time"}},[o("b-clockpicker",{attrs:{"hour-format":e.format},model:{value:e.maxTime,callback:function(t){e.maxTime=t},expression:"maxTime"}})],1)],1)]),e._v(" "),o("b-field",{attrs:{label:"Select time"}},[o("b-clockpicker",{attrs:{placeholder:"Click to select...","hour-format":e.format,"min-time":e.minTime,"max-time":e.maxTime}})],1)],1)},staticRenderFns:[]}},756:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(80);t.default={mixins:[n.default],data:function(){return{time:new Date}}}},757:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-field",[o("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1),e._v(" "),o("b-field",{attrs:{label:"Select time"}},[o("b-clockpicker",{attrs:{placeholder:"Click to select...","hour-format":e.format},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[o("button",{staticClass:"button is-primary",on:{click:function(t){e.time=new Date}}},[o("b-icon",{attrs:{icon:"clock"}}),e._v(" "),o("span",[e._v("Now")])],1),e._v(" "),o("button",{staticClass:"button is-danger",on:{click:function(t){e.time=null}}},[o("b-icon",{attrs:{icon:"close"}}),e._v(" "),o("span",[e._v("Clear")])],1)])],1)],1)},staticRenderFns:[]}},758:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(80);t.default={mixins:[n.default],data:function(){return{time:new Date,selectedColor:"primary",colors:["primary","info","success","warning","danger","white","black","light","dark"]}}}},759:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("b-field",[o("b-switch",{model:{value:e.isAmPm,callback:function(t){e.isAmPm=t},expression:"isAmPm"}},[e._v("AM/PM")])],1),e._v(" "),o("b-field",{attrs:{label:"Bulma color class"}}),e._v(" "),e._l(e.colors,function(t){return o("b-field",{key:t},[o("b-radio",{attrs:{"native-value":t},model:{value:e.selectedColor,callback:function(t){e.selectedColor=t},expression:"selectedColor"}},[e._v("is-"+e._s(t))])],1)})],2),e._v(" "),o("div",{staticClass:"column"},[o("b-clockpicker",{attrs:{inline:"",type:"is-"+e.selectedColor,"hour-format":e.format},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)])},staticRenderFns:[]}},80:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isAmPm:!1}},computed:{format:function(){return this.isAmPm?"12":"24"}}}},974:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(98),i=o(99),r=o.n(i),c=o(975),l=o.n(c),a=o(100),s=o.n(a),d=o(976),m=o.n(d),u=o(101),p=o.n(u),f=o(977),v=o.n(f),b=o(102),x=o.n(b),k=o(978),h=o.n(k),_=o(103),y=o.n(_),P=o(979),M=o.n(P);t.default={data:function(){return{api:n.default,ExSimple:r.a,ExSimpleCode:l.a,ExNonReadonly:s.a,ExNonReadonlyCode:m.a,ExRange:p.a,ExRangeCode:v.a,ExFooter:x.a,ExFooterCode:h.a,ExColors:y.a,ExColorsCode:M.a}}}},975:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-switch v-model="isAmPm">AM/PM</b-switch>\r\n        </b-field>\r\n        <b-field label="Select time">\r\n            <b-clockpicker\r\n                rounded\r\n                placeholder="Click to select..."\r\n                icon="clock"\r\n                :hour-format="format">\r\n            </b-clockpicker>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nimport PeriodSelectMixin from \'./PeriodSelectMixin\'\r\n\r\nexport default {\r\n    mixins: [ PeriodSelectMixin ]\r\n}\r\n<\/script>\r\n'},976:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-switch v-model="isAmPm">AM/PM</b-switch>\r\n        </b-field>\r\n        <b-field label="Select timepicker">\r\n            <b-clockpicker\r\n                placeholder="Type or select a date..."\r\n                icon="clock"\r\n                :hour-format="format"\r\n                :readonly="false">\r\n            </b-clockpicker>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nimport PeriodSelectMixin from \'./PeriodSelectMixin\'\r\n\r\nexport default {\r\n    mixins: [ PeriodSelectMixin ]\r\n}\r\n<\/script>\r\n'},977:function(e,t){e.exports='<template>\r\n    <div>\r\n        <div class="columns">\r\n            <div class="column">\r\n                <b-field>\r\n                    <b-switch v-model="isAmPm">AM/PM</b-switch>\r\n                </b-field>\r\n            </div>\r\n            <div class="column">\r\n                <b-field label="Min Time">\r\n                    <b-clockpicker v-model="minTime" :hour-format="format"></b-clockpicker>\r\n                </b-field>\r\n            </div>\r\n            <div class="column">\r\n                <b-field label="Max Time">\r\n                    <b-clockpicker v-model="maxTime" :hour-format="format"></b-clockpicker>\r\n                </b-field>\r\n            </div>\r\n        </div>\r\n        <b-field label="Select time">\r\n            <b-clockpicker\r\n                placeholder="Click to select..."\r\n                :hour-format="format"\r\n                :min-time="minTime"\r\n                :max-time="maxTime">\r\n            </b-clockpicker>\r\n        </b-field>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport PeriodSelectMixin from \'./PeriodSelectMixin\'\r\n\r\nexport default {\r\n    mixins: [ PeriodSelectMixin ],\r\n    data() {\r\n        const min = new Date()\r\n        min.setHours(9)\r\n        min.setMinutes(0)\r\n        const max = new Date()\r\n        max.setHours(18)\r\n        max.setMinutes(0)\r\n        return {\r\n            minTime: min,\r\n            maxTime: max,\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n'},978:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-switch v-model="isAmPm">AM/PM</b-switch>\r\n        </b-field>\r\n        <b-field label="Select time">\r\n            <b-clockpicker\r\n                v-model="time"\r\n                placeholder="Click to select..."\r\n                :hour-format="format">\r\n\r\n                <button class="button is-primary"\r\n                    @click="time = new Date()">\r\n                    <b-icon icon="clock"></b-icon>\r\n                    <span>Now</span>\r\n                </button>\r\n\r\n                <button class="button is-danger"\r\n                    @click="time = null">\r\n                    <b-icon icon="close"></b-icon>\r\n                    <span>Clear</span>\r\n                </button>\r\n            </b-clockpicker>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nimport PeriodSelectMixin from \'./PeriodSelectMixin\'\r\n\r\nexport default {\r\n    mixins: [ PeriodSelectMixin ],\r\n    data() {\r\n        return {\r\n            time: new Date()\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n'},979:function(e,t){e.exports="<template>\r\n    <section class=\"columns\">\r\n        <div class=\"column\">\r\n            <b-field>\r\n                <b-switch v-model=\"isAmPm\">AM/PM</b-switch>\r\n            </b-field>\r\n            <b-field label=\"Bulma color class\"></b-field>\r\n            <b-field v-for=\"color in colors\" :key=\"color\">\r\n                <b-radio v-model=\"selectedColor\" :native-value=\"color\">is-{{color}}</b-radio>\r\n            </b-field>\r\n        </div>\r\n        <div class=\"column\">\r\n            <b-clockpicker\r\n                v-model=\"time\"\r\n                inline\r\n                :type=\"'is-' + selectedColor\"\r\n                :hour-format=\"format\"></b-clockpicker>\r\n        </div>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nimport PeriodSelectMixin from './PeriodSelectMixin'\r\n\r\nexport default {\r\n    mixins: [ PeriodSelectMixin ],\r\n    data() {\r\n        return {\r\n            time: new Date(),\r\n            selectedColor: 'primary',\r\n            colors: [\r\n                'primary',\r\n                'info',\r\n                'success',\r\n                'warning',\r\n                'danger',\r\n                'white',\r\n                'black',\r\n                'light',\r\n                'dark'\r\n            ]\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n"},98:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"Date",values:"—",default:"—"},{name:"<code>type</code>",description:"Type (color) of the button <strong>when checked</strong>",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>hour-format</code>",description:"Hour format for input and display",type:"String",values:"<code>12</code> or <code>24</code>",default:"<code>12</code>"},{name:"<code>time-formatter</code>",description:"Function to format time (<code>Date</code> type) to a string for display in the input",type:"Function",values:"—",default:"<code>HH:mm</code> or <code>HH:mm AM/PM</code>"},{name:"<code>time-parser</code>",description:"Function to parse string to a time (<code>Date</code> type) for set a time from the input to the component",type:"Function",values:"—",default:"<code>HH:mm</code> or <code>HH:mm AM/PM</code>"},{name:"<code>min-time</code>",description:"Earliest time available for selection",type:"Date",values:"—",default:"—"},{name:"<code>max-time</code>",description:"Latest time available for selection",type:"Date",values:"—",default:"—"},{name:"<code>size</code>",description:"Vertical size of input, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>inline</code>",description:"Clockpicker is shown inline, input is removed",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>editable</code>",description:"Enable input/typing. <b>Note that you might have to set a custom time parser</b>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Disables the input field and/or picker",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name to be added",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>unselectable-times</code>",description:"Array of unselectable times (Date object)",type:"Array",values:"—",default:"-"},{name:"<code>mobile-native</code>",description:"Enable native timepicker on mobile",type:"Boolean",values:"<code>true</code>, <code>false</code>",default:"<code>true</code>"},{name:"<code>position</code>",description:"Optional, position of the timepicker relative to the input",type:"String",values:"<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>",default:"<code>Bottom Right</code>"},{name:"<code>auto-switch</code>",description:"Automatically switches between hour and minutes selection after click",type:"Boolean",values:"<code>true</code>, <code>false</code>",default:"<code>true</code>"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],slots:[{name:"default",description:"Footer",props:"—"}],methods:[{name:"<code>close</code>",description:"Close dropdown"}]}]},980:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),o("Example",{attrs:{component:e.ExNonReadonly,code:e.ExNonReadonlyCode,title:"Non read-only",vertical:""}},[o("p",[e._v("Use "),o("code",[e._v(':readonly="false"')]),e._v(" to let the user type a time.")])]),e._v(" "),o("Example",{attrs:{component:e.ExRange,code:e.ExRangeCode,title:"Range",vertical:""}},[o("p",[e._v("You can limit the time range with "),o("code",[e._v("min-time")]),e._v(" and "),o("code",[e._v("max-time")]),e._v(" props.")])]),e._v(" "),o("Example",{attrs:{component:e.ExFooter,code:e.ExFooterCode,title:"Footer",vertical:""}},[o("p",[e._v("Any slots are added to the footer of the clockpicker.")])]),e._v(" "),o("Example",{attrs:{component:e.ExColors,code:e.ExColorsCode,title:"Colors",vertical:""}},[o("p",[e._v("\n            Clockpicker supports all "),o("code",[e._v("is-<color>")]),e._v(" classes from Bulma, including custom colors added at build time.\n            This can be specified in the "),o("code",[e._v("class")]),e._v(" property or in the "),o("code",[e._v("type")]),e._v(" property. \n            Inline display is also availble by specifying the "),o("code",[e._v("inline")]),e._v(" prop.\n        ")])]),e._v(" "),o("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},99:function(e,t,o){var n=o(0)(o(750),o(751),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=6.4098358797858c8187f1.js.map