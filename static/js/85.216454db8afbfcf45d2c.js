webpackJsonp([85],{1074:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeStep:0,showSocial:!1,isAnimated:!0,hasNavigation:!0,prevIcon:"chevron-left",nextIcon:"chevron-right",isStepsClickable:!1,isProfileSuccess:!1}}}},1075:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"block"},[i("button",{staticClass:"button",on:{click:function(t){e.activeStep=1}}},[e._v("Set Profile")])]),e._v(" "),i("div",{staticClass:"block"},[i("b-switch",{model:{value:e.showSocial,callback:function(t){e.showSocial=t},expression:"showSocial"}},[e._v(" Show Social step ")]),e._v(" "),i("b-switch",{model:{value:e.isAnimated,callback:function(t){e.isAnimated=t},expression:"isAnimated"}},[e._v(" Animated ")]),e._v(" "),i("b-switch",{model:{value:e.isStepsClickable,callback:function(t){e.isStepsClickable=t},expression:"isStepsClickable"}},[e._v(" Clickable Marker ")]),e._v(" "),i("b-switch",{model:{value:e.hasNavigation,callback:function(t){e.hasNavigation=t},expression:"hasNavigation"}},[e._v(" Navigation Buttons ")]),e._v(" "),i("b-switch",{model:{value:e.isProfileSuccess,callback:function(t){e.isProfileSuccess=t},expression:"isProfileSuccess"}},[e._v(" Set "),i("code",[e._v("is-success")]),e._v(" for profile ")])],1),e._v(" "),e.hasNavigation?i("b-field",{attrs:{grouped:"","group-multiline":""}},[i("b-select",{model:{value:e.prevIcon,callback:function(t){e.prevIcon=t},expression:"prevIcon"}},[i("option",{attrs:{value:"chevron-left"}},[e._v("Chevron prev icon ")]),e._v(" "),i("option",{attrs:{value:"arrow-left"}},[e._v("Arrow prev icon")])]),e._v(" "),i("b-select",{model:{value:e.nextIcon,callback:function(t){e.nextIcon=t},expression:"nextIcon"}},[i("option",{attrs:{value:"chevron-right"}},[e._v("Chevron next icon ")]),e._v(" "),i("option",{attrs:{value:"arrow-right"}},[e._v("Arrow next icon")])])],1):e._e(),e._v(" "),i("b-steps",{attrs:{animated:e.isAnimated,"has-navigation":e.hasNavigation,"icon-prev":e.prevIcon,"icon-next":e.nextIcon},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}},[i("b-step-item",{attrs:{label:"Account",clickable:e.isStepsClickable}},[i("h1",{staticClass:"title has-text-centered"},[e._v("Account")]),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-step-item",{attrs:{label:"Profile",clickable:e.isStepsClickable,type:{"is-success":e.isProfileSuccess}}},[i("h1",{staticClass:"title has-text-centered"},[e._v("Profile")]),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-step-item",{attrs:{visible:e.showSocial,label:"Social",clickable:e.isStepsClickable}},[i("h1",{staticClass:"title has-text-centered"},[e._v("Social")]),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-step-item",{attrs:{label:"Finish",clickable:e.isStepsClickable,disabled:""}},[i("h1",{staticClass:"title has-text-centered"},[e._v("Finish")]),e._v("\n            Lorem ipsum dolor sit amet.\n        ")])],1)],1)},staticRenderFns:[]}},244:function(e,t,i){var s=i(0)(i(1074),i(1075),null,null,null);e.exports=s.exports}});
//# sourceMappingURL=85.216454db8afbfcf45d2c.js.map