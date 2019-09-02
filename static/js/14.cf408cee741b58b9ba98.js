webpackJsonp([14,96,170,171,172,173,174,232],{1264:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(193),i=t(194),l=t.n(i),a=t(1265),o=t.n(a),u=t(195),d=t.n(u),s=t(1266),b=t.n(s),c=t(196),p=t.n(c),m=t(1267),f=t.n(m),v=t(197),x=t.n(v),y=t(1268),g=t.n(y),_=t(198),h=t.n(_),E=t(1269),S=t.n(E),C=t(199),R=t.n(C),z=t(1270),w=t.n(z);n.default={data:function(){return{api:r.default,ExSimple:l.a,ExTypes:d.a,ExStep:x.a,ExCustomize:R.a,ExRange:p.a,ExSizes:h.a,ExSimpleCode:o.a,ExTypesCode:b.a,ExStepCode:g.a,ExCustomizeCode:w.a,ExRangeCode:f.a,ExSizesCode:S.a}}}},1265:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-numberinput v-model="number"></b-numberinput>\r\n        </b-field>\r\n \r\n        <b-field label="Input readonly">\r\n            <b-numberinput :editable="false"></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Disabled">\r\n            <b-numberinput disabled></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Rounded">\r\n            <b-numberinput rounded></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Loading">\r\n            <b-numberinput loading></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Quantity"\r\n            type="is-danger"\r\n            message="Quantity is invalid">\r\n            <b-numberinput></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Rate"\r\n            type="is-success"\r\n            message="Rate is valid">\r\n            <b-numberinput></b-numberinput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                number: 10\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1266:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field label="Primary">\r\n            <b-numberinput placeholder="No label"></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Success">\r\n            <b-numberinput type="is-success"></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Error">\r\n            <b-numberinput type="is-danger"></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Info">\r\n            <b-numberinput type="is-info"></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Warning">\r\n            <b-numberinput type="is-warning"></b-numberinput>\r\n        </b-field> \r\n\r\n        <b-field label="Light">\r\n            <b-numberinput type="is-light"></b-numberinput>\r\n        </b-field> \r\n\r\n        <b-field label="Dark">\r\n            <b-numberinput type="is-dark"></b-numberinput>\r\n        </b-field> \r\n    </section>\r\n</template>\r\n'},1267:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field label="Vote">\r\n            <b-numberinput min="0" max="10">\r\n            </b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Age">\r\n            <b-numberinput min="18">\r\n            </b-numberinput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1268:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-numberinput step="5">\r\n            </b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Decimal">\r\n            <b-numberinput step="0.01">\r\n            </b-numberinput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1269:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field label="Small">\r\n            <b-numberinput size="is-small">\r\n            </b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Default">\r\n            <b-numberinput placeholder="Default">\r\n            </b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Medium">\r\n            <b-numberinput size="is-medium">\r\n            </b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Large">\r\n            <b-numberinput size="is-large">\r\n            </b-numberinput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1270:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-numberinput></b-numberinput>\r\n        </b-field>\r\n        <b-field label="Rounded controls">\r\n            <b-numberinput controls-rounded></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Compact">\r\n            <b-numberinput controls-position="compact"></b-numberinput>\r\n        </b-field>\r\n\r\n        <b-field label="Compact and rounded controls">\r\n            <b-numberinput controls-position="compact"\r\n                controls-rounded>\r\n            </b-numberinput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1271:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExRange,code:e.ExRangeCode,title:"Min - Max",vertical:""}},[t("p",[e._v("You can use the "),t("code",[e._v("min")]),e._v(" and/or "),t("code",[e._v("max")]),e._v(" props to limit the range.")])]),e._v(" "),t("Example",{attrs:{component:e.ExStep,code:e.ExStepCode,title:"Steps",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExCustomize,code:e.ExCustomizeCode,title:"Customization",vertical:""}}),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},193:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"String, Number",values:"—",default:"—"},{name:"<code>type</code>",description:"Type (color) of the control, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>size</code>",description:"Vertical size of input, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>expanded</code>",description:"Makes input full width when inside a grouped or addon field",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>editable</code>",description:"Editable input",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>min</code>",description:"Minimum allowed value",type:"Number, String",values:"—",default:"—"},{name:"<code>max</code>",description:"Maximum allowed value",type:"Number, String",values:"—",default:"—"},{name:"<code>step</code>",description:"Incremental number step",type:"Number, String",values:"—",default:"—"},{name:"<code>controls-rounded</code>",description:"Show rounded controls",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>controls-position</code>",description:"Position of controls",type:"String",values:"<code>compact<compact>",default:"—"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],events:[{name:"<code>input</code>",description:"Triggers when value is changed",parameters:"<code>value: String|Number</code>"},{name:"<code>focus</code>",description:"Triggers when input has received focus",parameters:"<code>event: $event</code>"},{name:"<code>blur</code>",description:"Triggers when input has lost focus",parameters:"<code>event: $event</code>"},{name:"<code>[any].native</code>",description:"Listen to any native event, e.g. <code>click.native</code>",parameters:"<code>event: $event</code>"}],methods:[{name:"<code>checkHtml5Validity</code>",description:"Check validation of HTML5 (add the message and type/color), also updates the <code>isValid</code> property",return:"<code>isValid: Boolean</code>"},{name:"<code>focus</code>",description:"Set focus (internally uses the native <code>.select()</code> method)",return:"—"}]}]},194:function(e,n,t){var r=t(0)(t(993),t(994),null,null,null);e.exports=r.exports},195:function(e,n,t){var r=t(0)(null,t(995),null,null,null);e.exports=r.exports},196:function(e,n,t){var r=t(0)(null,t(996),null,null,null);e.exports=r.exports},197:function(e,n,t){var r=t(0)(null,t(997),null,null,null);e.exports=r.exports},198:function(e,n,t){var r=t(0)(null,t(998),null,null,null);e.exports=r.exports},199:function(e,n,t){var r=t(0)(null,t(999),null,null,null);e.exports=r.exports},321:function(e,n,t){var r=t(0)(t(1264),t(1271),null,null,null);e.exports=r.exports},993:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{number:10}}}},994:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-numberinput",{model:{value:e.number,callback:function(n){e.number=n},expression:"number"}})],1),e._v(" "),t("b-field",{attrs:{label:"Input readonly"}},[t("b-numberinput",{attrs:{editable:!1}})],1),e._v(" "),t("b-field",{attrs:{label:"Disabled"}},[t("b-numberinput",{attrs:{disabled:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Rounded"}},[t("b-numberinput",{attrs:{rounded:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Loading"}},[t("b-numberinput",{attrs:{loading:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Quantity",type:"is-danger",message:"Quantity is invalid"}},[t("b-numberinput")],1),e._v(" "),t("b-field",{attrs:{label:"Rate",type:"is-success",message:"Rate is valid"}},[t("b-numberinput")],1)],1)},staticRenderFns:[]}},995:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{label:"Primary"}},[t("b-numberinput",{attrs:{placeholder:"No label"}})],1),e._v(" "),t("b-field",{attrs:{label:"Success"}},[t("b-numberinput",{attrs:{type:"is-success"}})],1),e._v(" "),t("b-field",{attrs:{label:"Error"}},[t("b-numberinput",{attrs:{type:"is-danger"}})],1),e._v(" "),t("b-field",{attrs:{label:"Info"}},[t("b-numberinput",{attrs:{type:"is-info"}})],1),e._v(" "),t("b-field",{attrs:{label:"Warning"}},[t("b-numberinput",{attrs:{type:"is-warning"}})],1),e._v(" "),t("b-field",{attrs:{label:"Light"}},[t("b-numberinput",{attrs:{type:"is-light"}})],1),e._v(" "),t("b-field",{attrs:{label:"Dark"}},[t("b-numberinput",{attrs:{type:"is-dark"}})],1)],1)},staticRenderFns:[]}},996:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{label:"Vote"}},[t("b-numberinput",{attrs:{min:"0",max:"10"}})],1),e._v(" "),t("b-field",{attrs:{label:"Age"}},[t("b-numberinput",{attrs:{min:"18"}})],1)],1)},staticRenderFns:[]}},997:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-numberinput",{attrs:{step:"5"}})],1),e._v(" "),t("b-field",{attrs:{label:"Decimal"}},[t("b-numberinput",{attrs:{step:"0.01"}})],1)],1)},staticRenderFns:[]}},998:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{label:"Small"}},[t("b-numberinput",{attrs:{size:"is-small"}})],1),e._v(" "),t("b-field",{attrs:{label:"Default"}},[t("b-numberinput",{attrs:{placeholder:"Default"}})],1),e._v(" "),t("b-field",{attrs:{label:"Medium"}},[t("b-numberinput",{attrs:{size:"is-medium"}})],1),e._v(" "),t("b-field",{attrs:{label:"Large"}},[t("b-numberinput",{attrs:{size:"is-large"}})],1)],1)},staticRenderFns:[]}},999:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-numberinput")],1),e._v(" "),t("b-field",{attrs:{label:"Rounded controls"}},[t("b-numberinput",{attrs:{"controls-rounded":""}})],1),e._v(" "),t("b-field",{attrs:{label:"Compact"}},[t("b-numberinput",{attrs:{"controls-position":"compact"}})],1),e._v(" "),t("b-field",{attrs:{label:"Compact and rounded controls"}},[t("b-numberinput",{attrs:{"controls-position":"compact","controls-rounded":""}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=14.cf408cee741b58b9ba98.js.map