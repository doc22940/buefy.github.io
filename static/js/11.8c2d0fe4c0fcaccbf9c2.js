webpackJsonp([11,54,55,56,57,129,198],{1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formatAmPm:!1,enableSeconds:!1}},computed:{format:function(){return this.formatAmPm?"12":"24"}}}},1010:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("div",{staticClass:"control"},[n("b-switch",{model:{value:e.formatAmPm,callback:function(t){e.formatAmPm=t},expression:"formatAmPm"}},[e._v("AM/PM")])],1),e._v(" "),n("div",{staticClass:"control"},[n("b-switch",{model:{value:e.enableSeconds,callback:function(t){e.enableSeconds=t},expression:"enableSeconds"}},[e._v("Enable seconds")])],1)]),e._v(" "),n("b-field",{attrs:{label:"Select time"}},[n("b-timepicker",{attrs:{rounded:"",placeholder:"Click to select...",icon:"clock","enable-seconds":e.enableSeconds,"hour-format":e.format}})],1)],1)},staticRenderFns:[]}},1011:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:"Select timepicker"}},[n("b-timepicker",{attrs:{placeholder:"Type or select a date...",icon:"clock",editable:""}})],1)},staticRenderFns:[]}},1012:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){var e=new Date;e.setHours(9),e.setMinutes(0);var t=new Date;return t.setHours(18),t.setMinutes(0),{minTime:e,maxTime:t}}}},1013:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:"Select time"}},[n("b-timepicker",{attrs:{placeholder:"Click to select...","min-time":e.minTime,"max-time":e.maxTime}})],1)},staticRenderFns:[]}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{time:new Date}}}},1015:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:"Select time"}},[n("b-timepicker",{attrs:{placeholder:"Click to select..."},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[n("button",{staticClass:"button is-primary",on:{click:function(t){e.time=new Date}}},[n("b-icon",{attrs:{icon:"clock"}}),e._v(" "),n("span",[e._v("Now")])],1),e._v(" "),n("button",{staticClass:"button is-danger",on:{click:function(t){e.time=null}}},[n("b-icon",{attrs:{icon:"close"}}),e._v(" "),n("span",[e._v("Clear")])],1)])],1)},staticRenderFns:[]}},1016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{time:new Date}}}},1017:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("b-timepicker",{attrs:{inline:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})},staticRenderFns:[]}},1240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(245),r=n(246),i=n.n(r),c=n(1241),a=n.n(c),l=n(247),d=n.n(l),s=n(1242),m=n.n(s),u=n(248),p=n.n(u),f=n(1243),b=n.n(f),v=n(249),x=n.n(v),_=n(1244),h=n.n(_),k=n(250),y=n.n(k),E=n(1245),g=n.n(E);t.default={data:function(){return{api:o.default,ExSimple:i.a,ExEditable:d.a,ExRange:p.a,ExFooter:x.a,ExInline:y.a,ExSimpleCode:a.a,ExEditableCode:m.a,ExRangeCode:b.a,ExFooterCode:h.a,ExInlineCode:g.a}}}},1241:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <div class="control">\r\n                <b-switch v-model="formatAmPm">AM/PM</b-switch>\r\n            </div>\r\n            <div class="control">\r\n                <b-switch v-model="enableSeconds">Enable seconds</b-switch>\r\n            </div>\r\n        </b-field>\r\n        <b-field label="Select time">\r\n            <b-timepicker\r\n                rounded\r\n                placeholder="Click to select..."\r\n                icon="clock"\r\n                :enable-seconds="enableSeconds"\r\n                :hour-format="format">\r\n            </b-timepicker>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    data() {\r\n        return {\r\n            formatAmPm: false,\r\n            enableSeconds: false\r\n        }\r\n    },\r\n    computed: {\r\n        format() {\r\n            return this.formatAmPm ? \'12\' : \'24\'\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n'},1242:function(e,t){e.exports='<template>\r\n    <b-field label="Select timepicker">\r\n        <b-timepicker\r\n            placeholder="Type or select a date..."\r\n            icon="clock"\r\n            editable>\r\n        </b-timepicker>\r\n    </b-field>\r\n</template>\r\n'},1243:function(e,t){e.exports='<template>\r\n    <b-field label="Select time">\r\n        <b-timepicker\r\n            placeholder="Click to select..."\r\n            :min-time="minTime"\r\n            :max-time="maxTime">\r\n        </b-timepicker>\r\n    </b-field>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            const min = new Date()\r\n            min.setHours(9)\r\n            min.setMinutes(0)\r\n            const max = new Date()\r\n            max.setHours(18)\r\n            max.setMinutes(0)\r\n            return {\r\n                minTime: min,\r\n                maxTime: max\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1244:function(e,t){e.exports='<template>\r\n    <b-field label="Select time">\r\n        <b-timepicker v-model="time"\r\n            placeholder="Click to select...">\r\n\r\n            <button class="button is-primary"\r\n                @click="time = new Date()">\r\n                <b-icon icon="clock"></b-icon>\r\n                <span>Now</span>\r\n            </button>\r\n\r\n            <button class="button is-danger"\r\n                @click="time = null">\r\n                <b-icon icon="close"></b-icon>\r\n                <span>Clear</span>\r\n            </button>\r\n        </b-timepicker>\r\n    </b-field>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                time: new Date()\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1245:function(e,t){e.exports='<template>\r\n    <b-timepicker v-model="time" inline></b-timepicker>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                time: new Date()\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1246:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExEditable,code:e.ExEditableCode,title:"Editable (non readonly)",vertical:""}},[n("p",[e._v("Use "),n("code",[e._v("editable")]),e._v(" prop to let the user type a time.")])]),e._v(" "),n("Example",{attrs:{component:e.ExRange,code:e.ExRangeCode,title:"Range",vertical:""}},[n("p",[e._v("You can limit the date range with "),n("code",[e._v("min-time")]),e._v(" and "),n("code",[e._v("max-time")]),e._v(" props.")])]),e._v(" "),n("Example",{attrs:{component:e.ExFooter,code:e.ExFooterCode,title:"Footer",vertical:""}},[n("p",[e._v("Any slots are added to the footer of the timepicker.")])]),e._v(" "),n("Example",{attrs:{component:e.ExInline,code:e.ExInlineCode,title:"Inline",vertical:""}},[n("p",[e._v("Timepicker can also be shown inline with the "),n("code",[e._v("inline")]),e._v(" prop, input is removed, set a "),n("code",[e._v("v-model")]),e._v(" to get the date.")])]),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"Date",values:"—",default:"—"},{name:"<code>hour-format</code>",description:"Hour format for input and display",type:"String",values:"<code>12</code> or <code>24</code>",default:"<code>24</code>"},{name:"<code>increment-minutes</code>",description:"Step minutes for select component",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>time-formatter</code>",description:"Function to format time (<code>Date</code> type) to a string for display in the input",type:"Function",values:"—",default:"<code>HH:mm</code> or <code>HH:mm AM/PM</code>"},{name:"<code>time-parser</code>",description:"Function to parse string to a time (<code>Date</code> type) for set a time from the input to the component",type:"Function",values:"—",default:"<code>HH:mm</code> or <code>HH:mm AM/PM</code>"},{name:"<code>min-time</code>",description:"Earliest time available for selection",type:"Date",values:"—",default:"—"},{name:"<code>max-time</code>",description:"Latest time available for selection",type:"Date",values:"—",default:"—"},{name:"<code>size</code>",description:"Vertical size of input and picker, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>inline</code>",description:"Timepicker is shown inline, input is removed",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>editable</code>",description:"Enable input/typing. <b>Note that you might have to set a custom time parser</b>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name to be added",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>unselectable-times</code>",description:"Array of unselectable times (Date object)",type:"Array",values:"—",default:"-"},{name:"<code>mobile-native</code>",description:"Enable native timepicker on mobile",type:"Boolean",values:"",default:"<code>true</code>"},{name:"<code>position</code>",description:"Optional, position of the timepicker relative to the input",type:"String",values:"<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>",default:"Bottom right"},{name:"<code>open-on-focus</code>",description:"Open timepicker on input focus",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>enable-seconds</code>",description:"Show seconds picker",type:"Boolean",values:"-",default:"<code>false</code>"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],slots:[{name:"default",description:"Footer",props:"—"}],methods:[{name:"<code>close</code>",description:"Close dropdown"}]}]},246:function(e,t,n){var o=n(0)(n(1009),n(1010),null,null,null);e.exports=o.exports},247:function(e,t,n){var o=n(0)(null,n(1011),null,null,null);e.exports=o.exports},248:function(e,t,n){var o=n(0)(n(1012),n(1013),null,null,null);e.exports=o.exports},249:function(e,t,n){var o=n(0)(n(1014),n(1015),null,null,null);e.exports=o.exports},250:function(e,t,n){var o=n(0)(n(1016),n(1017),null,null,null);e.exports=o.exports},297:function(e,t,n){var o=n(0)(n(1240),n(1246),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=11.8c2d0fe4c0fcaccbf9c2.js.map