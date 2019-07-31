webpackJsonp([22,76,145,146,147,204],{1186:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(197),o=i(198),c=i.n(o),n=i(1187),a=i.n(n),l=i(199),r=i.n(l),p=i(1188),d=i.n(p),u=i(200),b=i.n(u),m=i(1189),v=i.n(m),f=i(201),S=i.n(f),h=i(1190),k=i.n(h);t.default={data:function(){return{api:s.default,ExSimple:c.a,ExIcons:r.a,ExSizes:b.a,ExTypes:S.a,ExSimpleCode:a.a,ExIconsCode:d.a,ExSizesCode:v.a,ExTypesCode:k.a}}}},1187:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="block">\r\n            <button class="button" @click="activeStep = 1">Set Profile</button>\r\n        </div>\r\n        <div class="block">\r\n            <b-switch v-model="showSocial"> Show Social step </b-switch>\r\n            <b-switch v-model="isAnimated"> Animated </b-switch>\r\n            <b-switch v-model="isStepsClickable"> Clickable Marker </b-switch>\r\n            <b-switch v-model="hasNavigation"> Navigation Buttons </b-switch>\r\n            <b-switch v-model="isProfileSuccess"> Set <code>is-success</code> for profile </b-switch>\r\n        </div>\r\n        <b-steps v-model="activeStep" :animated="isAnimated" :has-navigation="hasNavigation">\r\n            <b-step-item label="Account" :clickable="isStepsClickable">\r\n                Lorem ipsum dolor sit amet.\r\n            </b-step-item>\r\n\r\n            <b-step-item label="Profile" :clickable="isStepsClickable" :type="{\'is-success\': isProfileSuccess}">\r\n                Lorem ipsum dolor sit amet.<br>\r\n                Lorem ipsum dolor sit amet.\r\n            </b-step-item>\r\n\r\n            <b-step-item :visible="showSocial" label="Social" :clickable="isStepsClickable">\r\n                Lorem ipsum dolor sit amet.<br>\r\n                Lorem ipsum dolor sit amet.<br>\r\n                Lorem ipsum dolor sit amet.\r\n            </b-step-item>\r\n\r\n            <b-step-item label="Finish" :clickable="isStepsClickable" disabled>\r\n                Lorem ipsum dolor sit amet.<br>\r\n                Lorem ipsum dolor sit amet.<br>\r\n                Lorem ipsum dolor sit amet.<br>\r\n                Lorem ipsum dolor sit amet.\r\n            </b-step-item>\r\n        </b-steps>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                activeStep: 0,\r\n                showSocial: false,\r\n                isAnimated: true,\r\n                hasNavigation: true,\r\n                isStepsClickable: false,\r\n                isProfileSuccess: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1188:function(e,t){e.exports='<template>\r\n    <b-steps>\r\n        <b-step-item label="Account" icon="account-key"></b-step-item>\r\n        <b-step-item label="Profile" icon="account"></b-step-item>\r\n        <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n    </b-steps>\r\n</template>\r\n'},1189:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-steps size="is-small">\r\n            <b-step-item label="Account" icon="account-key"></b-step-item>\r\n            <b-step-item label="Profile" icon="account"></b-step-item>\r\n            <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n        </b-steps>\r\n\r\n        <b-steps size="is-medium">\r\n            <b-step-item label="Account" icon="account-key"></b-step-item>\r\n            <b-step-item label="Profile" icon="account"></b-step-item>\r\n            <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n        </b-steps>\r\n\r\n        <b-steps size="is-large">\r\n            <b-step-item label="Account" icon="account-key"></b-step-item>\r\n            <b-step-item label="Profile" icon="account"></b-step-item>\r\n            <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n        </b-steps>\r\n    </section>\r\n</template>\r\n'},1190:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-steps type="is-black">\r\n            <b-step-item label="Account" icon="account-key"></b-step-item>\r\n            <b-step-item label="Profile" icon="account"></b-step-item>\r\n            <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n        </b-steps>\r\n\r\n        <b-steps type="is-info">\r\n            <b-step-item label="Account" icon="account-key"></b-step-item>\r\n            <b-step-item label="Profile" icon="account"></b-step-item>\r\n            <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n        </b-steps>\r\n\r\n        <b-steps type="is-success">\r\n            <b-step-item label="Account" icon="account-key"></b-step-item>\r\n            <b-step-item label="Profile" icon="account"></b-step-item>\r\n            <b-step-item label="Social" icon="account-plus"></b-step-item>\r\n        </b-steps>\r\n    </section>\r\n</template>\r\n'},1191:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),i("Example",{attrs:{component:e.ExIcons,code:e.ExIconsCode,title:"Icons"}}),e._v(" "),i("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes"}}),e._v(" "),i("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types"}}),e._v(" "),i("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},197:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"Steps",props:[{name:"<code>v-model</code>",description:"Binding value, step index",type:"Number",values:"—",default:"<code>0</code>"},{name:"<code>animated</code>",description:"Steps have slide animation",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>type</code>",description:"Default Type/Style for the steps, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>size</code>",description:"Size of the step, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>destroy-on-hide</code>",description:"Destroy stepitem on hide",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon-pack</code>",description:"Icon pack to use for the navigation",type:"String",values:"—",default:"<code>mdi</code>"},{name:"<code>has-navigation</code>",description:"Next and previous buttons below the component.\n                    You can use this property if you want to use your own custom navigation items.",type:"String",values:"—",default:"<code>true</code>"},{name:"<code>aria-page-label</code>",description:"Accessibility label for the page link. If passed, this text will be prepended to the number of the page.",type:"String",values:"—",default:"—"},{name:"<code>aria-current-label</code>",description:"Accessibility label for the current page link. If passed, this text will be prepended to the current page.",type:"String",values:"—",default:"—"}],events:[{name:"<code>input</code>",description:"Triggers when step is clicked",parameters:"<code>index: Number</code>"},{name:"<code>change</code>",description:"Triggers when active step is changed",parameters:"<code>index: Number</code>"}]},{title:"Step Item",props:[{name:"<code>label</code>",description:"Step label",type:"String",values:"—",default:"—"},{name:"<code>type</code>",description:"Default Type/Style for the step, optional\n                    This will override parent type. Could be used to set a completed step to\n                    <code>is-success</code> for example",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>icon</code>",description:"Icon name",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"—",default:"<code>mdi</code>"},{name:"<code>completed</code>",description:"Step is considered completed",type:"Boolean",values:"—",default:"false"},{name:"<code>clickable</code>",description:"Item can be used directly to navigate.\n                    If undefined, completed steps are clickable while the others are not.",type:"Boolean",values:"—",default:"—"},{name:"<code>visible</code>",description:"Item is visible",type:"Boolean",values:"-",default:"true"}],slots:[{name:"default",description:"Step item body",props:"—"}]}]},198:function(e,t,i){var s=i(0)(i(941),i(942),null,null,null);e.exports=s.exports},199:function(e,t,i){var s=i(0)(null,i(943),null,null,null);e.exports=s.exports},200:function(e,t,i){var s=i(0)(null,i(944),null,null,null);e.exports=s.exports},201:function(e,t,i){var s=i(0)(null,i(945),null,null,null);e.exports=s.exports},291:function(e,t,i){var s=i(0)(i(1186),i(1191),null,null,null);e.exports=s.exports},941:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeStep:0,showSocial:!1,isAnimated:!0,hasNavigation:!0,isStepsClickable:!1,isProfileSuccess:!1}}}},942:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"block"},[i("button",{staticClass:"button",on:{click:function(t){e.activeStep=1}}},[e._v("Set Profile")])]),e._v(" "),i("div",{staticClass:"block"},[i("b-switch",{model:{value:e.showSocial,callback:function(t){e.showSocial=t},expression:"showSocial"}},[e._v(" Show Social step ")]),e._v(" "),i("b-switch",{model:{value:e.isAnimated,callback:function(t){e.isAnimated=t},expression:"isAnimated"}},[e._v(" Animated ")]),e._v(" "),i("b-switch",{model:{value:e.isStepsClickable,callback:function(t){e.isStepsClickable=t},expression:"isStepsClickable"}},[e._v(" Clickable Marker ")]),e._v(" "),i("b-switch",{model:{value:e.hasNavigation,callback:function(t){e.hasNavigation=t},expression:"hasNavigation"}},[e._v(" Navigation Buttons ")]),e._v(" "),i("b-switch",{model:{value:e.isProfileSuccess,callback:function(t){e.isProfileSuccess=t},expression:"isProfileSuccess"}},[e._v(" Set "),i("code",[e._v("is-success")]),e._v(" for profile ")])],1),e._v(" "),i("b-steps",{attrs:{animated:e.isAnimated,"has-navigation":e.hasNavigation},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}},[i("b-step-item",{attrs:{label:"Account",clickable:e.isStepsClickable}},[e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-step-item",{attrs:{label:"Profile",clickable:e.isStepsClickable,type:{"is-success":e.isProfileSuccess}}},[e._v("\n            Lorem ipsum dolor sit amet."),i("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-step-item",{attrs:{visible:e.showSocial,label:"Social",clickable:e.isStepsClickable}},[e._v("\n            Lorem ipsum dolor sit amet."),i("br"),e._v("\n            Lorem ipsum dolor sit amet."),i("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-step-item",{attrs:{label:"Finish",clickable:e.isStepsClickable,disabled:""}},[e._v("\n            Lorem ipsum dolor sit amet."),i("br"),e._v("\n            Lorem ipsum dolor sit amet."),i("br"),e._v("\n            Lorem ipsum dolor sit amet."),i("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")])],1)],1)},staticRenderFns:[]}},943:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-steps",[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1)},staticRenderFns:[]}},944:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-steps",{attrs:{size:"is-small"}},[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1),e._v(" "),i("b-steps",{attrs:{size:"is-medium"}},[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1),e._v(" "),i("b-steps",{attrs:{size:"is-large"}},[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1)],1)},staticRenderFns:[]}},945:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-steps",{attrs:{type:"is-black"}},[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1),e._v(" "),i("b-steps",{attrs:{type:"is-info"}},[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1),e._v(" "),i("b-steps",{attrs:{type:"is-success"}},[i("b-step-item",{attrs:{label:"Account",icon:"account-key"}}),e._v(" "),i("b-step-item",{attrs:{label:"Profile",icon:"account"}}),e._v(" "),i("b-step-item",{attrs:{label:"Social",icon:"account-plus"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=22.1f4581b08cd16a7cf736.js.map