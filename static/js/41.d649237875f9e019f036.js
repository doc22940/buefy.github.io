webpackJsonp([41,98,265,266],{1223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{snackbar:function(){this.$buefy.snackbar.open("Default, positioned bottom-right with a green 'OK' button")},warning:function(){var e=this;this.$buefy.snackbar.open({message:"Yellow button and positioned on top, click to close",type:"is-warning",position:"is-top",actionText:"Retry",indefinite:!0,onAction:function(){e.$buefy.toast.open({message:"Action pressed",queue:!1})}})},danger:function(){var e=this;this.$buefy.snackbar.open({duration:5e3,message:"Snackbar with red action, positioned on bottom-left and a callback.<br>Note: <em>Message can include html</em>.",type:"is-danger",position:"is-bottom-left",actionText:"Undo",queue:!1,onAction:function(){e.$buefy.toast.open({message:"Action pressed",queue:!1})}})}}}},1224:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium",on:{click:e.snackbar}},[e._v("\r\n            Launch snackbar (default)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-warning",on:{click:e.warning}},[e._v("\r\n            Launch snackbar (custom)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:e.danger}},[e._v("\r\n            Launch snackbar (custom)\r\n        ")])])},staticRenderFns:[]}},1641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(271),a=n(272),i=n(273),s=n.n(i),c=n(1642),r=n.n(c);t.default={data:function(){return{api:o.default,variables:a.default,ExSimple:s.a,ExSimpleCode:r.a,outsideVueInstance:"\n                import { SnackbarProgrammatic as Snackbar } from 'buefy'\n                Snackbar.open('Look at me!')"}}}},1642:function(e,t){e.exports="<template>\r\n    <section>\r\n        <button class=\"button is-medium\" @click=\"snackbar\">\r\n            Launch snackbar (default)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-warning\" @click=\"warning\">\r\n            Launch snackbar (custom)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-danger\" @click=\"danger\">\r\n            Launch snackbar (custom)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            snackbar() {\r\n                this.$buefy.snackbar.open(`Default, positioned bottom-right with a green 'OK' button`)\r\n            },\r\n            warning() {\r\n                this.$buefy.snackbar.open({\r\n                    message: 'Yellow button and positioned on top, click to close',\r\n                    type: 'is-warning',\r\n                    position: 'is-top',\r\n                    actionText: 'Retry',\r\n                    indefinite: true,\r\n                    onAction: () => {\r\n                        this.$buefy.toast.open({\r\n                            message: 'Action pressed',\r\n                            queue: false\r\n                        })\r\n                    }\r\n                })\r\n            },\r\n            danger() {\r\n                this.$buefy.snackbar.open({\r\n                    duration: 5000,\r\n                    message: 'Snackbar with red action, positioned on bottom-left and a callback.<br>Note: <em>Message can include html</em>.',\r\n                    type: 'is-danger',\r\n                    position: 'is-bottom-left',\r\n                    actionText: 'Undo',\r\n                    queue: false,\r\n                    onAction: () => {\r\n                        this.$buefy.toast.open({\r\n                            message: 'Action pressed',\r\n                            queue: false\r\n                        })\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1643:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"content"},[n("p",[e._v("They have only one button, and by default are queued to not confuse the user.")]),e._v(" "),n("p",[n("small",[n("b",[e._v("Note:")]),e._v(" They queue with "),n("router-link",{attrs:{to:"/documentation/toast"}},[e._v("Toasts")]),e._v(" as well.")],1)])]),e._v(" "),n("Example",{attrs:{title:"From inside Vue instance",component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),n("Example",{attrs:{title:"From outside Vue instance"}},[n("p",[e._v("You can use it on Vuex or VueRouter using this syntax:")]),e._v(" "),n("CodeView",{attrs:{lang:"javascript",code:e._f("pre")(e.outsideVueInstance),expanded:""}})],1),e._v(" "),n("ApiView",{attrs:{data:e.api}}),e._v(" "),n("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the action button. Please notice that it is the name of the parent class also",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-success</code>"},{name:"<code>message</code>",description:'Message text (can contain HTML). <div class="notification is-danger">Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noopener">XSS vulnerabilities</a>. Only use HTML interpolation on trusted content and never on user-provided content.</div>',type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Which position the snackbar will appear",type:"String",values:"<code>is-top-right</code>, <code>is-top</code>, <code>is-top-left</code>, <code>is-bottom-right</code>, <code>is-bottom</code>, <code>is-bottom-left</code>",default:"<code>is-bottom-right</code>"},{name:"<code>duration</code>",description:"Visibility duration in miliseconds",type:"Number",values:"—",default:"<code>3500</code>"},{name:"<code>queue</code>",description:"If should queue with others notices (snackbar/toast/notification)",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>indefinite</code>",description:"Show the Snackbar indefinitely until it is dismissed",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>container</code>",description:"DOM element the toast will be created on. Note that this also changes the <code>position</code> of the toast from <code>fixed</code> to <code>absolute</code>. Meaning that the container should be <code>fixed</code>. Also note that this will override the <code>defaultContainerElement</code> if you specified it in your Buefy Constructor Options. See Constructor options for more details.",type:"String",values:"—",default:"<code>body</code>"},{name:"<code>actionText</code>",description:"Snackbar's button text, set <code>null</code> for buttonless",type:"String",values:"—",default:"<code>OK</code>"},{name:"<code>onAction</code>",description:"Callback function when the button is clicked",type:"Function",values:"—",default:"—"}]}]},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"<code>$snackbar-background-color</code>",default:"<code>$dark</code>"},{name:"<code>$snackbar-color</code>",default:"<code>$dark-invert</code>"},{name:"<code>$snackbar-border-radius</code>",default:"<code>$radius</code>"},{name:"<code>$snackbar-button-text-transform</code>",default:"<code>uppercase</code>"},{name:"<code>$snackbar-box-shadow</code>",default:"<code>0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)</code>"}]},273:function(e,t,n){var o=n(0)(n(1223),n(1224),null,null,null);e.exports=o.exports},394:function(e,t,n){var o=n(0)(n(1641),n(1643),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=41.d649237875f9e019f036.js.map