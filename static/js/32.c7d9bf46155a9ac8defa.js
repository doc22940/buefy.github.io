webpackJsonp([32,135,136,137,288],{1049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{alert:function(){this.$buefy.dialog.alert("Everything looks fine!")},alertCustom:function(){this.$buefy.dialog.alert({title:"Title Alert",message:"I have a title, a custom button and <b>HTML</b>!",confirmText:"Cool!"})},alertCustomError:function(){this.$buefy.dialog.alert({title:"Error",message:"Something's not good but I have a custom <b>icon</b> and <b>type</b>",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})}}}},1050:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-primary",on:{click:e.alert}},[e._v("\r\n            Launch alert (default)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-primary",on:{click:e.alertCustom}},[e._v("\r\n            Launch alert (custom)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:e.alertCustomError}},[e._v("\r\n            Launch alert (custom)\r\n        ")])])},staticRenderFns:[]}},1051:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{confirm:function(){var e=this;this.$buefy.dialog.confirm({message:"Continue on this task?",onConfirm:function(){return e.$buefy.toast.open("User confirmed")}})},confirmCustom:function(){var e=this;this.$buefy.dialog.confirm({title:"Privacy Politics",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Fusce id fermentum quam. Proin sagittis,\n                        nibh id hendrerit imperdiet, elit sapien laoreet elit,\n                        ac scelerisque diam velit in nisl. Nunc maximus ex non\n                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,\n                        augue purus placerat justo,\n                        sit amet porttitor dui metus in nisl.\n                        Nulla non leo placerat, porta metus eu, laoreet risus.\n                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,\n                        sit amet sodales quam dui nec odio.\n                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.\n                        Pellentesque volutpat lacus at ante posuere,\n                        non pulvinar ante porta. Proin viverra eu massa nec porta.\n                        Aliquam rhoncus velit quis sem hendrerit,\n                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,\n                        eleifend venenatis ligula.\n                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.\n                        In hac habitasse platea dictumst.\n                        Pellentesque habitant morbi tristique senectus\n                        et netus et malesuada fames ac turpis egestas.",cancelText:"Disagree",confirmText:"Agree",type:"is-success",onConfirm:function(){return e.$buefy.toast.open("User agreed")}})},confirmCustomDelete:function(){var e=this;this.$buefy.dialog.confirm({title:"Deleting account",message:"Are you sure you want to <b>delete</b> your account? This action cannot be undone.",confirmText:"Delete Account",type:"is-danger",hasIcon:!0,onConfirm:function(){return e.$buefy.toast.open("Account deleted!")}})}}}},1052:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-info",on:{click:e.confirm}},[e._v("\r\n            Launch confirm (default)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-info",on:{click:e.confirmCustom}},[e._v("\r\n            Launch confirm (custom)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:e.confirmCustomDelete}},[e._v("\r\n            Launch confirm (custom)\r\n        ")])])},staticRenderFns:[]}},1053:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{prompt:function(){var e=this;this.$buefy.dialog.prompt({message:"What's your name?",inputAttrs:{placeholder:"e.g. Walter",maxlength:10},trapFocus:!0,onConfirm:function(t){return e.$buefy.toast.open("Your name is: "+t)}})},promptNumber:function(){var e=this;this.$buefy.dialog.prompt({message:"What's your age?",inputAttrs:{type:"number",placeholder:"Type your age",value:"18",maxlength:2,min:18},trapFocus:!0,onConfirm:function(t){return e.$buefy.toast.open("Your age is: "+t)}})}}}},1054:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-dark",on:{click:e.prompt}},[e._v("\r\n            Launch prompt (default)\r\n        ")]),e._v(" "),n("button",{staticClass:"button is-medium is-dark",on:{click:e.promptNumber}},[e._v("\r\n            Launch prompt (number)\r\n        ")])])},staticRenderFns:[]}},1371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(163),i=n(164),r=n.n(i),a=n(1372),s=n.n(a),c=n(165),u=n.n(c),l=n(1373),d=n.n(l),m=n(166),p=n.n(m),f=n(1374),b=n.n(f);t.default={data:function(){return{api:o.default,ExAlertDialog:r.a,ExAlertDialogCode:s.a,ExConfirmDialog:u.a,ExConfirmDialogCode:d.a,ExPromptDialog:p.a,ExPromptDialogCode:b.a,outsideVueInstance:"\n                import { DialogProgrammatic as Dialog } from 'buefy'\n                Dialog.alert('We can use confirm and prompt methods as well')"}}}},1372:function(e,t){e.exports="<template>\r\n    <section>\r\n        <button class=\"button is-medium is-primary\" @click=\"alert\">\r\n            Launch alert (default)\r\n        </button>\r\n        <button class=\"button is-medium is-primary\" @click=\"alertCustom\">\r\n            Launch alert (custom)\r\n        </button>\r\n        <button class=\"button is-medium is-danger\" @click=\"alertCustomError\">\r\n            Launch alert (custom)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            alert() {\r\n                this.$buefy.dialog.alert('Everything looks fine!')\r\n            },\r\n            alertCustom() {\r\n                this.$buefy.dialog.alert({\r\n                    title: 'Title Alert',\r\n                    message: 'I have a title, a custom button and <b>HTML</b>!',\r\n                    confirmText: 'Cool!'\r\n                })\r\n            },\r\n            alertCustomError() {\r\n                this.$buefy.dialog.alert({\r\n                    title: 'Error',\r\n                    message: 'Something\\'s not good but I have a custom <b>icon</b> and <b>type</b>',\r\n                    type: 'is-danger',\r\n                    hasIcon: true,\r\n                    icon: 'times-circle',\r\n                    iconPack: 'fa',\r\n                    ariaRole: 'alertdialog',\r\n                    ariaModal: true\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1373:function(e,t){e.exports="<template>\r\n    <section>\r\n        <button class=\"button is-medium is-info\" @click=\"confirm\">\r\n            Launch confirm (default)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-info\" @click=\"confirmCustom\">\r\n            Launch confirm (custom)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-danger\" @click=\"confirmCustomDelete\">\r\n            Launch confirm (custom)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            confirm() {\r\n                this.$buefy.dialog.confirm({\r\n                    message: 'Continue on this task?',\r\n                    onConfirm: () => this.$buefy.toast.open('User confirmed')\r\n                })\r\n            },\r\n            confirmCustom() {\r\n                this.$buefy.dialog.confirm({\r\n                    title: 'Privacy Politics',\r\n                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                        Fusce id fermentum quam. Proin sagittis,\r\n                        nibh id hendrerit imperdiet, elit sapien laoreet elit,\r\n                        ac scelerisque diam velit in nisl. Nunc maximus ex non\r\n                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,\r\n                        augue purus placerat justo,\r\n                        sit amet porttitor dui metus in nisl.\r\n                        Nulla non leo placerat, porta metus eu, laoreet risus.\r\n                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,\r\n                        sit amet sodales quam dui nec odio.\r\n                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.\r\n                        Pellentesque volutpat lacus at ante posuere,\r\n                        non pulvinar ante porta. Proin viverra eu massa nec porta.\r\n                        Aliquam rhoncus velit quis sem hendrerit,\r\n                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,\r\n                        eleifend venenatis ligula.\r\n                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.\r\n                        In hac habitasse platea dictumst.\r\n                        Pellentesque habitant morbi tristique senectus\r\n                        et netus et malesuada fames ac turpis egestas.`,\r\n                    cancelText: 'Disagree',\r\n                    confirmText: 'Agree',\r\n                    type: 'is-success',\r\n                    onConfirm: () => this.$buefy.toast.open('User agreed')\r\n                })\r\n            },\r\n            confirmCustomDelete() {\r\n                this.$buefy.dialog.confirm({\r\n                    title: 'Deleting account',\r\n                    message: 'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',\r\n                    confirmText: 'Delete Account',\r\n                    type: 'is-danger',\r\n                    hasIcon: true,\r\n                    onConfirm: () => this.$buefy.toast.open('Account deleted!')\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1374:function(e,t){e.exports="<template>\r\n    <section>\r\n        <button class=\"button is-medium is-dark\" @click=\"prompt\">\r\n            Launch prompt (default)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-dark\" @click=\"promptNumber\">\r\n            Launch prompt (number)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            prompt() {\r\n                this.$buefy.dialog.prompt({\r\n                    message: `What's your name?`,\r\n                    inputAttrs: {\r\n                        placeholder: 'e.g. Walter',\r\n                        maxlength: 10\r\n                    },\r\n                    trapFocus: true,\r\n                    onConfirm: (value) => this.$buefy.toast.open(`Your name is: ${value}`)\r\n                })\r\n            },\r\n            promptNumber() {\r\n                this.$buefy.dialog.prompt({\r\n                    message: `What's your age?`,\r\n                    inputAttrs: {\r\n                        type: 'number',\r\n                        placeholder: 'Type your age',\r\n                        value: '18',\r\n                        maxlength: 2,\r\n                        min: 18\r\n                    },\r\n                    trapFocus: true,\r\n                    onConfirm: (value) => this.$buefy.toast.open(`Your age is: ${value}`)\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1375:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExAlertDialog,code:e.ExAlertDialogCode,title:"Alert"}}),e._v(" "),n("Example",{attrs:{component:e.ExConfirmDialog,code:e.ExConfirmDialogCode,title:"Confirm"}}),e._v(" "),n("Example",{attrs:{component:e.ExPromptDialog,code:e.ExPromptDialogCode,title:"Prompt"}}),e._v(" "),n("Example",{attrs:{title:"From outside Vue instance"}},[n("p",[e._v("You can use it on Vuex or VueRouter using this syntax:")]),e._v(" "),n("CodeView",{attrs:{lang:"javascript",code:e._f("pre")(e.outsideVueInstance),expanded:""}})],1),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the confirm button (and the icon if <code>hasIcon</code>)",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>title</code>",description:"Dialog title",type:"String",values:"—",default:"—"},{name:"<code>message</code>",description:"Message text",type:"String",values:"—",default:"—"},{name:"<code>hasIcon</code>",description:"Adds an icon on the left side depending on the <code>type</code> or <code>icon</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name if <code>hasIcon</code>, optional",type:"String",values:"—",default:"—"},{name:"<code>iconPack</code>",description:"Icon pack to use if <code>hasIcon</code>, optional",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"—"},{name:"<code>size</code>",description:"Dialog's size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>zoom-out</code>"},{name:"<code>confirmText</code>",description:"Text of the confirm button",type:"String",values:"—",default:"<code>OK</code>"},{name:"<code>cancelText</code>",description:"Text of the cancel button",type:"String",values:"—",default:"<code>Cancel</code>"},{name:"<code>canCancel</code>",description:"Can close dialog by clicking cancel button, pressing escape or clicking outside",type:"Boolean, Array",values:"<code>escape</code>, <code>button</code>, <code>outside</code>",default:"<code>true</code> for Confirm/Prompt, <code>false</code> for Alert"},{name:"<code>inputAttrs</code>",description:"Prompt only: input's attributes",type:"Object",values:"Any HTML5 input attribute",default:"—"},{name:"<code>onConfirm</code>",description:"Callback function when the confirm button is clicked",type:"Function (value: String)",values:"—",default:"—"},{name:"<code>onCancel</code>",description:"Callback function when the dialog is canceled (cancel button is clicked / pressed escape / clicked outside)",type:"Function",values:"—",default:"—"},{name:"<code>scroll</code>",description:"<code>clip</code> to remove the <code>&lt;body&gt;</code> scrollbar, <code>keep</code> to have a non scrollable scrollbar\n                    to avoid shifting background, but will set <code>&lt;body&gt;</code> to position fixed, might break some layouts",type:"String",values:"<code>clip</code>, <code>keep</code>",default:"<code>clip</code>"},{name:"<code>container</code>",description:"DOM element the dialog will be created on. Note that this also changes the <code>position</code> of the dialog from <code>fixed</code> to <code>absolute</code>. Meaning that the container should be <code>fixed</code>. Also note that this will override the <code>defaultContainerElement</code> if you specified it in your Buefy Constructor Options. See Constructor options for more details.",type:"String",values:"—",default:"<code>body</code>"},{name:"<code>focusOn</code>",description:"Focus on confirm or cancel button (when dialog is not prompt)",type:"String",values:"<code>confirm</code>, <code>cancel</code>",default:"<code>confirm</code>"},{name:"<code>trap-focus</code>",description:"Trap focus inside the dialog.",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>aria-role</code>",description:"Role attribute to be passed to modal container for better accessibility.",type:"String",values:"<code>dialog</code>, <code>alertdialog</code>",default:"—"},{name:"<code>aria-modal</code>",description:"Improve accessiblity when enabled.",type:"Boolean",values:"—",default:"<code>false</code>"}]}]},164:function(e,t,n){var o=n(0)(n(1049),n(1050),null,null,null);e.exports=o.exports},165:function(e,t,n){var o=n(0)(n(1051),n(1052),null,null,null);e.exports=o.exports},166:function(e,t,n){var o=n(0)(n(1053),n(1054),null,null,null);e.exports=o.exports},365:function(e,t,n){var o=n(0)(n(1371),n(1375),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=32.c7d9bf46155a9ac8defa.js.map