webpackJsonp([9,104,105,178,179,180,181,236],{1240:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t(173),n=t(174),r=t.n(n),a=t(1241),o=t.n(a),l=t(175),c=t.n(l),d=t(1242),m=t.n(d),u=t(176),p=t.n(u),g=t(1243),b=t.n(g),f=t(177),h=t.n(f),v=t(1244),_=t.n(v),y=t(178),x=t.n(y),F=t(1245),P=t.n(F),L=t(179),q=t.n(L),C=t(1246),E=t.n(C);i.default={data:function(){return{api:s.default,ExSimple:r.a,ExTypes:c.a,ExIcons:p.a,ExHeaderless:h.a,ExSizes:x.a,ExAutoClose:q.a,ExSimpleCode:o.a,ExTypesCode:m.a,ExIconsCode:b.a,ExHeaderlessCode:_.a,ExSizesCode:P.a,ExAutoCloseCode:E.a}}}},1241:function(e,i){e.exports='<template>\r\n    <section>\r\n        <button class="button block" @click="isActive = !isActive">Toggle</button>\r\n        <b-message title="Default" :active.sync="isActive" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isActive: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1242:function(e,i){e.exports='<template>\r\n    <section>\r\n        <b-message title="Default" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Danger" type="is-danger" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Success" type="is-success" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Info" type="is-info" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Warning" type="is-warning" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n    </section>\r\n</template>\r\n'},1243:function(e,i){e.exports='<template>\r\n    <section>\r\n        <b-message title="Danger with icon" type="is-danger" has-icon aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Success with icon" type="is-success" has-icon aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Info with icon" type="is-info" has-icon aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Warning with icon" type="is-warning" has-icon aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n    </section>\r\n</template>\r\n'},1244:function(e,i){e.exports='<template>\r\n    <section>\r\n        <b-message>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-danger">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-danger" has-icon>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-success">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-success" has-icon>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-info">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-info" has-icon>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-warning">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message type="is-warning" has-icon>\r\n            Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n    </section>\r\n</template>\r\n'},1245:function(e,i){e.exports='<template>\r\n    <section>\r\n        <b-message title="Small" size="is-small">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Default">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Medium" size="is-medium">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n\r\n        <b-message title="Large" size="is-large">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n    </section>\r\n</template>\r\n'},1246:function(e,i){e.exports='<template>\r\n    <section>\r\n        <button class="button block" @click="isActive = true" :disabled="isActive">Show</button>\r\n        <b-message auto-close title="Error!" type="is-danger" has-icon :active.sync="isActive" aria-close-label="Close message">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\r\n        </b-message>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isActive: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1247:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExIcons,code:e.ExIconsCode,title:"Icons",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExHeaderless,code:e.ExHeaderlessCode,title:"Headerless",vertical:""}},[t("p",[e._v("Message without title becomes headerless, they are always non-closable.")])]),e._v(" "),t("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExAutoClose,code:e.ExAutoCloseCode,title:"Auto Close",vertical:""}},[t("p",[e._v("Message will be automatically closed after "),t("code",[e._v("duration")]),e._v(".")])]),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},173:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the message, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>active</code>",description:"Whether notification is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>closable</code>",description:"Adds an 'X' button that closes the notification — works if has a <code>title</code>",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>auto-close</code>",description:"Hide notification after <code>duration</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>duration</code>",description:"Visibility duration in miliseconds",type:"Number",values:"—",default:"<code>5000</code>"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>has-icon</code>",description:"Adds an icon on the left side depending on the <code>type</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>size</code>",description:"Size of the control, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>icon-size</code>",description:"Size of the icon, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"<code>is-large</code> or <code>size</code> prop"},{name:"<code>title</code>",description:"Message title",type:"String",values:"—",default:"—"},{name:"<code>aria-close-label</code>",description:"Label for the close button, to be read by accessibility screenreaders.",type:"String",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closes the message",parameters:"—"}]}]},174:function(e,i,t){var s=t(0)(t(968),t(969),null,null,null);e.exports=s.exports},175:function(e,i,t){var s=t(0)(null,t(970),null,null,null);e.exports=s.exports},176:function(e,i,t){var s=t(0)(null,t(971),null,null,null);e.exports=s.exports},177:function(e,i,t){var s=t(0)(null,t(972),null,null,null);e.exports=s.exports},178:function(e,i,t){var s=t(0)(null,t(973),null,null,null);e.exports=s.exports},179:function(e,i,t){var s=t(0)(t(974),t(975),null,null,null);e.exports=s.exports},317:function(e,i,t){var s=t(0)(t(1240),t(1247),null,null,null);e.exports=s.exports},968:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{isActive:!0}}}},969:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("button",{staticClass:"button block",on:{click:function(i){e.isActive=!e.isActive}}},[e._v("Toggle")]),e._v(" "),t("b-message",{attrs:{title:"Default",active:e.isActive,"aria-close-label":"Close message"},on:{"update:active":function(i){e.isActive=i}}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}},970:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("b-message",{attrs:{title:"Default","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Danger",type:"is-danger","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Success",type:"is-success","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Info",type:"is-info","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Warning",type:"is-warning","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}},971:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("b-message",{attrs:{title:"Danger with icon",type:"is-danger","has-icon":"","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Success with icon",type:"is-success","has-icon":"","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Info with icon",type:"is-info","has-icon":"","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Warning with icon",type:"is-warning","has-icon":"","aria-close-label":"Close message"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}},972:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("b-message",[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-danger"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-danger","has-icon":""}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-success"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-success","has-icon":""}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-info"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-info","has-icon":""}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-warning"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{type:"is-warning","has-icon":""}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}},973:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("b-message",{attrs:{title:"Small",size:"is-small"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Default"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Medium",size:"is-medium"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")]),e._v(" "),t("b-message",{attrs:{title:"Large",size:"is-large"}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}},974:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{isActive:!1}}}},975:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("button",{staticClass:"button block",attrs:{disabled:e.isActive},on:{click:function(i){e.isActive=!0}}},[e._v("Show")]),e._v(" "),t("b-message",{attrs:{"auto-close":"",title:"Error!",type:"is-danger","has-icon":"",active:e.isActive,"aria-close-label":"Close message"},on:{"update:active":function(i){e.isActive=i}}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n    ")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.f77060c5a22dc8e30583.js.map