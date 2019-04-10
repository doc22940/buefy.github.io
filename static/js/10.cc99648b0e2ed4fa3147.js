webpackJsonp([10,94,142,143,144,145,146,189],{1023:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(140),a=t(141),i=t.n(a),l=t(1024),o=t.n(l),s=t(142),d=t.n(s),c=t(1025),p=t.n(c),u=t(143),b=t.n(u),f=t(1026),m=t.n(f),v=t(144),h=t.n(v),x=t(1027),g=t.n(x),y=t(145),_=t.n(y),E=t(1028),w=t.n(E),S=t(146),C=t.n(S),k=t(1029),M=t.n(k);n.default={data:function(){return{api:r.default,ExSimple:i.a,ExTypesStates:d.a,ExIcons:b.a,ExValidation:h.a,ExPassword:_.a,ExSizes:C.a,ExSimpleCode:o.a,ExTypesStatesCode:p.a,ExIconsCode:m.a,ExValidationCode:g.a,ExPasswordCode:w.a,ExSizesCode:M.a}}}},1024:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field label="Name">\r\n            <b-input v-model="name"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Email"\r\n            type="is-danger"\r\n            message="This email is invalid">\r\n            <b-input type="email"\r\n                value="john@"\r\n                maxlength="30">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Username"\r\n            type="is-success"\r\n            message="This username is available">\r\n            <b-input value="johnsilver" maxlength="30"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Password">\r\n            <b-input type="password"\r\n                value="iwantmytreasure"\r\n                password-reveal>\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Message">\r\n            <b-input maxlength="200" type="textarea"></b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                name: \'John Silver\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1025:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input placeholder="No label"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Rounded">\r\n            <b-input placeholder="No label" rounded></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Success" type="is-success">\r\n            <b-input placeholder="Success"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Error"\r\n            type="is-danger"\r\n            message="You can have a message too">\r\n            <b-input placeholder="Error"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Info" type="is-info">\r\n            <b-input placeholder="Info"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Warning" type="is-warning">\r\n            <b-input placeholder="Warning"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Disabled">\r\n            <b-input placeholder="Disabled" disabled></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Loading">\r\n            <b-input placeholder="Loading" loading></b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1026:function(e,n){e.exports='<template>\r\n    <section>\r\n        <h3 class="subtitle">With Material Design Icons</h3>\r\n        <b-field>\r\n            <b-input placeholder="Search..."\r\n                type="search"\r\n                icon="magnify">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Email"\r\n                type="email"\r\n                icon="email">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Credit card"\r\n                icon="credit-card">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <h3 class="subtitle">With FontAwesome</h3>\r\n        <b-field>\r\n            <b-input placeholder="Search..."\r\n                type="search"\r\n                icon-pack="fas"\r\n                icon="search">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Email"\r\n                type="email"\r\n                icon-pack="fas"\r\n                icon="envelope">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Credit card"\r\n                icon-pack="far"\r\n                icon="credit-card">\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1027:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input placeholder="Email" type="email"></b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Number"\r\n                type="number"\r\n                min="10"\r\n                max="20">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="URL" type="url"></b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input type="textarea"\r\n                minlength="10"\r\n                maxlength="100"\r\n                placeholder="Maxlength automatically counts characters">\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1028:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input type="password"\r\n                placeholder="Regular password input">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input type="password"\r\n                placeholder="Password reveal input"\r\n                password-reveal>\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1029:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input placeholder="Small"\r\n                size="is-small"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Default"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Medium"\r\n                size="is-medium"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Large"\r\n                size="is-large"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1030:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExTypesStates,code:e.ExTypesStatesCode,title:"Types and states",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExIcons,code:e.ExIconsCode,title:"Icons",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExValidation,code:e.ExValidationCode,title:"Validation",vertical:""}},[t("p",[e._v("Automatic HTML5 validation on-blur.")]),e._v(" "),t("div",{staticClass:"tags has-addons"},[t("span",{staticClass:"tag is-success"},[e._v("New!")]),e._v(" "),t("span",{staticClass:"tag is-info"},[e._v("0.7.2")])]),e._v(" "),t("p",[e._v("You can use "),t("code",[e._v("use-html5-validation")]),e._v(" prop to disable the default HTML5 validation.")])]),e._v(" "),t("Example",{attrs:{component:e.ExPassword,code:e.ExPasswordCode,title:"Password",vertical:""}},[t("p",[e._v("You can use the "),t("code",[e._v("password-reveal")]),e._v(" prop to add a button that reveals password.")])]),e._v(" "),t("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},140:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"String, Number",values:"—",default:"—"},{name:"<code>type</code>",description:"Input type, like native",type:"String",values:"Any native input type, and <code>textarea</code>",default:"<code>text</code>"},{name:"<code>size</code>",description:"Vertical size of input, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>expanded</code>",description:"Makes input full width when inside a grouped or addon field",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>password-reveal</code>",description:"Add the reveal password functionality",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name to be added",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>maxlength</code>",description:"Same as native <code>maxlength</code>, plus character counter",type:"String, Number",values:"—",default:"—"},{name:"<code>has-counter</code>",description:"Show character counter when <code>maxlength</code> prop is passed",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>custom-class</code>",description:"CSS classes to be applied on input",type:"String",values:"—",default:"—"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],events:[{name:"<code>input</code>",description:"Triggers when value is changed",parameters:"<code>value: String|Number</code>"},{name:"<code>focus</code>",description:"Triggers when input has received focus",parameters:"<code>event: $event</code>"},{name:"<code>blur</code>",description:"Triggers when input has lost focus",parameters:"<code>event: $event</code>"},{name:"<code>[any].native</code>",description:"Listen to any native event, e.g. <code>click.native</code>",parameters:"<code>event: $event</code>"}],methods:[{name:"<code>checkHtml5Validity</code>",description:"Check validation of HTML5 (add the message and type/color), also updates the <code>isValid</code> property",return:"<code>isValid: Boolean</code>"},{name:"<code>focus</code>",description:"Set focus (internally uses the native <code>.select()</code> method)",return:"—"}]}]},141:function(e,n,t){var r=t(0)(t(806),t(807),null,null,null);e.exports=r.exports},142:function(e,n,t){var r=t(0)(null,t(808),null,null,null);e.exports=r.exports},143:function(e,n,t){var r=t(0)(null,t(809),null,null,null);e.exports=r.exports},144:function(e,n,t){var r=t(0)(null,t(810),null,null,null);e.exports=r.exports},145:function(e,n,t){var r=t(0)(null,t(811),null,null,null);e.exports=r.exports},146:function(e,n,t){var r=t(0)(null,t(812),null,null,null);e.exports=r.exports},258:function(e,n,t){var r=t(0)(t(1023),t(1030),null,null,null);e.exports=r.exports},806:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{name:"John Silver"}}}},807:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{label:"Name"}},[t("b-input",{model:{value:e.name,callback:function(n){e.name=n},expression:"name"}})],1),e._v(" "),t("b-field",{attrs:{label:"Email",type:"is-danger",message:"This email is invalid"}},[t("b-input",{attrs:{type:"email",value:"john@",maxlength:"30"}})],1),e._v(" "),t("b-field",{attrs:{label:"Username",type:"is-success",message:"This username is available"}},[t("b-input",{attrs:{value:"johnsilver",maxlength:"30"}})],1),e._v(" "),t("b-field",{attrs:{label:"Password"}},[t("b-input",{attrs:{type:"password",value:"iwantmytreasure","password-reveal":""}})],1),e._v(" "),t("b-field",{attrs:{label:"Message"}},[t("b-input",{attrs:{maxlength:"200",type:"textarea"}})],1)],1)},staticRenderFns:[]}},808:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{placeholder:"No label"}})],1),e._v(" "),t("b-field",{attrs:{label:"Rounded"}},[t("b-input",{attrs:{placeholder:"No label",rounded:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Success",type:"is-success"}},[t("b-input",{attrs:{placeholder:"Success"}})],1),e._v(" "),t("b-field",{attrs:{label:"Error",type:"is-danger",message:"You can have a message too"}},[t("b-input",{attrs:{placeholder:"Error"}})],1),e._v(" "),t("b-field",{attrs:{label:"Info",type:"is-info"}},[t("b-input",{attrs:{placeholder:"Info"}})],1),e._v(" "),t("b-field",{attrs:{label:"Warning",type:"is-warning"}},[t("b-input",{attrs:{placeholder:"Warning"}})],1),e._v(" "),t("b-field",{attrs:{label:"Disabled"}},[t("b-input",{attrs:{placeholder:"Disabled",disabled:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Loading"}},[t("b-input",{attrs:{placeholder:"Loading",loading:""}})],1)],1)},staticRenderFns:[]}},809:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h3",{staticClass:"subtitle"},[e._v("With Material Design Icons")]),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Email",type:"email",icon:"email"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Credit card",icon:"credit-card"}})],1),e._v(" "),t("h3",{staticClass:"subtitle"},[e._v("With FontAwesome")]),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Search...",type:"search","icon-pack":"fas",icon:"search"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Email",type:"email","icon-pack":"fas",icon:"envelope"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Credit card","icon-pack":"far",icon:"credit-card"}})],1)],1)},staticRenderFns:[]}},810:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{placeholder:"Email",type:"email"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Number",type:"number",min:"10",max:"20"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"URL",type:"url"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{type:"textarea",minlength:"10",maxlength:"100",placeholder:"Maxlength automatically counts characters"}})],1)],1)},staticRenderFns:[]}},811:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{type:"password",placeholder:"Regular password input"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{type:"password",placeholder:"Password reveal input","password-reveal":""}})],1)],1)},staticRenderFns:[]}},812:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{placeholder:"Small",size:"is-small",icon:"account"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Default",icon:"account"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Medium",size:"is-medium",icon:"account"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Large",size:"is-large",icon:"account"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.cc99648b0e2ed4fa3147.js.map