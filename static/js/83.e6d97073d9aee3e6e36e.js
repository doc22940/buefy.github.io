webpackJsonp([83],{1035:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{activeStep:0,showSocial:!1,isAnimated:!0,hasNavigation:!0,prevIcon:"chevron-left",nextIcon:"chevron-right",isStepsClickable:!1,isProfileSuccess:!1}}}},1036:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("div",{staticClass:"block"},[t("button",{staticClass:"button",on:{click:function(i){e.activeStep=1}}},[e._v("Set Profile")])]),e._v(" "),t("div",{staticClass:"block"},[t("b-switch",{model:{value:e.showSocial,callback:function(i){e.showSocial=i},expression:"showSocial"}},[e._v(" Show Social step ")]),e._v(" "),t("b-switch",{model:{value:e.isAnimated,callback:function(i){e.isAnimated=i},expression:"isAnimated"}},[e._v(" Animated ")]),e._v(" "),t("b-switch",{model:{value:e.isStepsClickable,callback:function(i){e.isStepsClickable=i},expression:"isStepsClickable"}},[e._v(" Clickable Marker ")]),e._v(" "),t("b-switch",{model:{value:e.hasNavigation,callback:function(i){e.hasNavigation=i},expression:"hasNavigation"}},[e._v(" Navigation Buttons ")]),e._v(" "),t("b-switch",{model:{value:e.isProfileSuccess,callback:function(i){e.isProfileSuccess=i},expression:"isProfileSuccess"}},[e._v(" Set "),t("code",[e._v("is-success")]),e._v(" for profile ")])],1),e._v(" "),e.hasNavigation?t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-select",{model:{value:e.prevIcon,callback:function(i){e.prevIcon=i},expression:"prevIcon"}},[t("option",{attrs:{value:"chevron-left"}},[e._v("Chevron prev icon ")]),e._v(" "),t("option",{attrs:{value:"arrow-left"}},[e._v("Arrow prev icon")])]),e._v(" "),t("b-select",{model:{value:e.nextIcon,callback:function(i){e.nextIcon=i},expression:"nextIcon"}},[t("option",{attrs:{value:"chevron-right"}},[e._v("Chevron next icon ")]),e._v(" "),t("option",{attrs:{value:"arrow-right"}},[e._v("Arrow next icon")])])],1):e._e(),e._v(" "),t("b-steps",{attrs:{animated:e.isAnimated,"has-navigation":e.hasNavigation,"icon-prev":e.prevIcon,"icon-next":e.nextIcon},model:{value:e.activeStep,callback:function(i){e.activeStep=i},expression:"activeStep"}},[t("b-step-item",{attrs:{label:"Account",clickable:e.isStepsClickable}},[e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),t("b-step-item",{attrs:{label:"Profile",clickable:e.isStepsClickable,type:{"is-success":e.isProfileSuccess}}},[e._v("\n            Lorem ipsum dolor sit amet."),t("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),t("b-step-item",{attrs:{visible:e.showSocial,label:"Social",clickable:e.isStepsClickable}},[e._v("\n            Lorem ipsum dolor sit amet."),t("br"),e._v("\n            Lorem ipsum dolor sit amet."),t("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),t("b-step-item",{attrs:{label:"Finish",clickable:e.isStepsClickable,disabled:""}},[e._v("\n            Lorem ipsum dolor sit amet."),t("br"),e._v("\n            Lorem ipsum dolor sit amet."),t("br"),e._v("\n            Lorem ipsum dolor sit amet."),t("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")])],1)],1)},staticRenderFns:[]}},229:function(e,i,t){var o=t(0)(t(1035),t(1036),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=83.e6d97073d9aee3e6e36e.js.map