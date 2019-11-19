webpackJsonp([38,64,241,242],{1227:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{toast:function(){this.$buefy.toast.open("Something happened")},success:function(){this.$buefy.toast.open({message:"Something happened correctly!",type:"is-success"})},danger:function(){this.$buefy.toast.open({duration:5e3,message:"Something's not good, also I'm on bottom",position:"is-bottom",type:"is-danger"})}}}},1228:function(e,t){var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("button",{staticClass:"button is-medium",on:{click:e.toast}},[e._v("\n        Launch toast (default)\n    ")]),e._v(" "),o("button",{staticClass:"button is-medium is-success",on:{click:e.success}},[e._v("\n        Launch toast (custom)\n    ")]),e._v(" "),o("button",{staticClass:"button is-medium is-danger",on:{click:e.danger}},[e._v("\n        Launch toast (custom)\n    ")])])},n=[];e.exports={render:o,staticRenderFns:n}},1508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(324),s=o(325),i=o(326),a=o.n(i),c=o(1509),r=o.n(c);t.default={data:function(){return{api:n.default,variables:s.default,ExSimple:a.a,ExSimpleCode:r.a,outsideVueInstance:"\n            import { ToastProgrammatic as Toast } from 'buefy'\n            Toast.open('Toasty!')"}}}},1509:function(e,t){e.exports="<template>\r\n    <section>\r\n        <button class=\"button is-medium\" @click=\"toast\">\r\n            Launch toast (default)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-success\" @click=\"success\">\r\n            Launch toast (custom)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-danger\" @click=\"danger\">\r\n            Launch toast (custom)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            toast() {\r\n                this.$buefy.toast.open('Something happened')\r\n            },\r\n            success() {\r\n                this.$buefy.toast.open({\r\n                    message: 'Something happened correctly!',\r\n                    type: 'is-success'\r\n                })\r\n            },\r\n            danger() {\r\n                this.$buefy.toast.open({\r\n                    duration: 5000,\r\n                    message: `Something's not good, also I'm on bottom`,\r\n                    position: 'is-bottom',\r\n                    type: 'is-danger'\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1510:function(e,t){var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"content"},[o("p",[e._v("They have a slightly transparency and are queued to not confuse the user.")]),e._v(" "),o("p",[o("small",[o("b",[e._v("Note:")]),e._v(" They queue with "),o("router-link",{attrs:{to:"/documentation/snackbar"}},[e._v("Snackbars")]),e._v(" as well.")],1)])]),e._v(" "),o("Example",{attrs:{title:"From inside Vue instance",component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),o("Example",{attrs:{title:"From outside Vue instance"}},[o("p",[e._v("You can use it on Vuex or VueRouter using this syntax:")]),e._v(" "),o("CodeView",{attrs:{lang:"javascript",code:e._f("pre")(e.outsideVueInstance),expanded:""}})],1),e._v(" "),o("ApiView",{attrs:{data:e.api}}),e._v(" "),o("VariablesView",{attrs:{data:e.variables}})],1)},n=[];e.exports={render:o,staticRenderFns:n}},324:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the toast",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-dark</code>"},{name:"<code>message</code>",description:"Message text",type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Which position the toast will appear",type:"String",values:"<code>is-top-right</code>, <code>is-top</code>, <code>is-top-left</code>, <code>is-bottom-right</code>, <code>is-bottom</code>, <code>is-bottom-left</code>",default:"<code>is-top</code>"},{name:"<code>duration</code>",description:"Visibility duration in milliseconds",type:"Number",values:"—",default:"<code>2000</code>"},{name:"<code>queue</code>",description:"If should queue with others notices (snackbar/toast/notification)",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>container</code>",description:"DOM element the toast will be created on. Note that this also changes the <code>position</code> of the toast from <code>fixed</code> to <code>absolute</code>. Meaning that the container should be <code>fixed</code>. Also note that this will override the <code>defaultContainerElement</code> if you specified it in your Buefy Constructor Options. See Constructor options for more details.",type:"String",values:"—",default:"<code>body</code>"}]}]},325:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"<code>$toast-border-radius</code>",default:"<code>2em</code>"},{name:"<code>$toast-opacity</code>",default:"<code>0.92</code>"}]},326:function(e,t,o){var n=o(0),s=o(1227),i=o(1228),a=n(s,i,!1,null,null,null);e.exports=a.exports},381:function(e,t,o){var n=o(0),s=o(1508),i=o(1510),a=n(s,i,!1,null,null,null);e.exports=a.exports}});
//# sourceMappingURL=38.929edf10b2847d736ae9.js.map