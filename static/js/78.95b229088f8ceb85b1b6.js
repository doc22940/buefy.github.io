webpackJsonp([78],{200:function(e,i,s){var t=s(0)(s(954),s(955),null,null,null);e.exports=t.exports},954:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{activeStep:0,showSocial:!1,isAnimated:!0,hasNavigation:!0,isStepsClickable:!1,isProfileSuccess:!1}}}},955:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("section",[s("div",{staticClass:"block"},[s("button",{staticClass:"button",on:{click:function(i){e.activeStep=1}}},[e._v("Set Profile")])]),e._v(" "),s("div",{staticClass:"block"},[s("b-switch",{model:{value:e.showSocial,callback:function(i){e.showSocial=i},expression:"showSocial"}},[e._v(" Show Social step ")]),e._v(" "),s("b-switch",{model:{value:e.isAnimated,callback:function(i){e.isAnimated=i},expression:"isAnimated"}},[e._v(" Animated ")]),e._v(" "),s("b-switch",{model:{value:e.isStepsClickable,callback:function(i){e.isStepsClickable=i},expression:"isStepsClickable"}},[e._v(" Clickable Marker ")]),e._v(" "),s("b-switch",{model:{value:e.hasNavigation,callback:function(i){e.hasNavigation=i},expression:"hasNavigation"}},[e._v(" Navigation Buttons ")]),e._v(" "),s("b-switch",{model:{value:e.isProfileSuccess,callback:function(i){e.isProfileSuccess=i},expression:"isProfileSuccess"}},[e._v(" Set "),s("code",[e._v("is-success")]),e._v(" for profile ")])],1),e._v(" "),s("b-steps",{attrs:{animated:e.isAnimated,"has-navigation":e.hasNavigation},model:{value:e.activeStep,callback:function(i){e.activeStep=i},expression:"activeStep"}},[s("b-step-item",{attrs:{label:"Account",clickable:e.isStepsClickable}},[e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),s("b-step-item",{attrs:{label:"Profile",clickable:e.isStepsClickable,type:{"is-success":e.isProfileSuccess}}},[e._v("\n            Lorem ipsum dolor sit amet."),s("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),s("b-step-item",{attrs:{visible:e.showSocial,label:"Social",clickable:e.isStepsClickable}},[e._v("\n            Lorem ipsum dolor sit amet."),s("br"),e._v("\n            Lorem ipsum dolor sit amet."),s("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),s("b-step-item",{attrs:{label:"Finish",clickable:e.isStepsClickable,disabled:""}},[e._v("\n            Lorem ipsum dolor sit amet."),s("br"),e._v("\n            Lorem ipsum dolor sit amet."),s("br"),e._v("\n            Lorem ipsum dolor sit amet."),s("br"),e._v("\n            Lorem ipsum dolor sit amet.\n        ")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=78.95b229088f8ceb85b1b6.js.map