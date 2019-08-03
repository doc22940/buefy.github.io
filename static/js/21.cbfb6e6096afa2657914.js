webpackJsonp([21,97,98,99,100,233],{1228:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(177),a=o(178),r=o.n(a),s=o(1229),i=o.n(s),c=o(179),l=o.n(c),d=o(1230),m=o.n(d),p=o(180),u=o.n(p),b=o(1231),v=o.n(b),f=o(181),h=o.n(f),g=o(1232),y=o.n(g);n.default={data:function(){return{api:t.default,ExSimple:r.a,ExComponent:l.a,ExProgrammatic:u.a,ExFullScreen:h.a,ExSimpleCode:i.a,ExComponentCode:m.a,ExProgrammaticCode:v.a,ExFullScreenCode:y.a,programmaticSyntax:"\n            // From inside Vue instance\n            this.$buefy.modal.open(props)\n\n            // From outside Vue instance\n            import { ModalProgrammatic as Modal } from 'buefy'\n            Modal.open(props)"}}}},1229:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isImageModalActive = true">\r\n            Launch image modal\r\n        </button>\r\n        <button class="button is-primary is-medium"\r\n            @click="isCardModalActive = true">\r\n            Launch card modal (keep scroll)\r\n        </button>\r\n\r\n        <b-modal :active.sync="isImageModalActive">\r\n            <p class="image is-4by3">\r\n                <img src="/static/img/placeholder-1280x960.png">\r\n            </p>\r\n        </b-modal>\r\n\r\n        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">\r\n            <div class="card">\r\n                <div class="card-image">\r\n                    <figure class="image is-4by3">\r\n                        <img src="/static/img/placeholder-1280x960.png" alt="Image">\r\n                    </figure>\r\n                </div>\r\n                <div class="card-content">\r\n                    <div class="media">\r\n                        <div class="media-left">\r\n                            <figure class="image is-48x48">\r\n                                <img src="/static/img/placeholder-1280x960.png" alt="Image">\r\n                            </figure>\r\n                        </div>\r\n                        <div class="media-content">\r\n                            <p class="title is-4">John Smith</p>\r\n                            <p class="subtitle is-6">@johnsmith</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="content">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\r\n                        <a>#css</a> <a>#responsive</a>\r\n                        <br>\r\n                        <small>11:09 PM - 1 Jan 2016</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isImageModalActive: false,\r\n                isCardModalActive: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1230:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isComponentModalActive = true">\r\n            Launch component modal\r\n        </button>\r\n\r\n        <b-modal :active.sync="isComponentModalActive" has-modal-card>\r\n            <modal-form v-bind="formProps"></modal-form>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const ModalForm = {\r\n        props: [\'email\', \'password\'],\r\n        template: `\r\n            <form action="">\r\n                <div class="modal-card" style="width: auto">\r\n                    <header class="modal-card-head">\r\n                        <p class="modal-card-title">Login</p>\r\n                    </header>\r\n                    <section class="modal-card-body">\r\n                        <b-field label="Email">\r\n                            <b-input\r\n                                type="email"\r\n                                :value="email"\r\n                                placeholder="Your email"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-field label="Password">\r\n                            <b-input\r\n                                type="password"\r\n                                :value="password"\r\n                                password-reveal\r\n                                placeholder="Your password"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-checkbox>Remember me</b-checkbox>\r\n                    </section>\r\n                    <footer class="modal-card-foot">\r\n                        <button class="button" type="button" @click="$parent.close()">Close</button>\r\n                        <button class="button is-primary">Login</button>\r\n                    </footer>\r\n                </div>\r\n            </form>\r\n        `\r\n    }\r\n\r\n    export default {\r\n        components: {\r\n            ModalForm\r\n        },\r\n        data() {\r\n            return {\r\n                isComponentModalActive: false,\r\n                formProps: {\r\n                    email: \'evan@you.com\',\r\n                    password: \'testing\'\r\n                }\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1231:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="imageModal()">\r\n            Launch image modal (HTML)\r\n        </button>\r\n        <button class="button is-primary is-medium"\r\n            @click="cardModal()">\r\n            Launch card modal (Component)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const ModalForm = {\r\n        props: [\'email\', \'password\'],\r\n        template: `\r\n            <form action="">\r\n                <div class="modal-card" style="width: auto">\r\n                    <header class="modal-card-head">\r\n                        <p class="modal-card-title">Login</p>\r\n                    </header>\r\n                    <section class="modal-card-body">\r\n                        <b-field label="Email">\r\n                            <b-input\r\n                                type="email"\r\n                                :value="email"\r\n                                placeholder="Your email"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-field label="Password">\r\n                            <b-input\r\n                                type="password"\r\n                                :value="password"\r\n                                password-reveal\r\n                                placeholder="Your password"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-checkbox>Remember me</b-checkbox>\r\n                    </section>\r\n                    <footer class="modal-card-foot">\r\n                        <button class="button" type="button" @click="$parent.close()">Close</button>\r\n                        <button class="button is-primary">Login</button>\r\n                    </footer>\r\n                </div>\r\n            </form>\r\n        `\r\n    }\r\n\r\n    export default {\r\n        methods: {\r\n            imageModal() {\r\n                this.$buefy.modal.open(\r\n                    `<p class="image is-4by3">\r\n                        <img src="https://buefy.org/static/img/placeholder-1280x960.png">\r\n                    </p>`\r\n                )\r\n            },\r\n            cardModal() {\r\n                this.$buefy.modal.open({\r\n                    parent: this,\r\n                    component: ModalForm,\r\n                    hasModalCard: true,\r\n                    customClass: \'custom-class custom-class-2\'\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1232:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isComponentModalActive = true">\r\n            Launch component modal\r\n        </button>\r\n\r\n        <b-modal :active.sync="isComponentModalActive"\r\n            has-modal-card full-screen :can-cancel="false">\r\n            <modal-form v-bind="formProps"></modal-form>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const ModalForm = {\r\n        props: [\'email\', \'password\'],\r\n        template: `\r\n            <div class="modal-card" style="width: auto">\r\n                <header class="modal-card-head">\r\n                    <p class="modal-card-title">Login</p>\r\n                </header>\r\n                <section class="modal-card-body">\r\n                    <b-field label="Email">\r\n                        <b-input\r\n                            type="email"\r\n                            :value="email"\r\n                            placeholder="Your email"\r\n                            required>\r\n                        </b-input>\r\n                    </b-field>\r\n\r\n                    <b-field label="Password">\r\n                        <b-input\r\n                            type="password"\r\n                            :value="password"\r\n                            password-reveal\r\n                            placeholder="Your password"\r\n                            required>\r\n                        </b-input>\r\n                    </b-field>\r\n\r\n                    <b-checkbox>Remember me</b-checkbox>\r\n                </section>\r\n                <footer class="modal-card-foot">\r\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\r\n                    <button class="button is-primary">Login</button>\r\n                </footer>\r\n            </div>\r\n        `\r\n    }\r\n\r\n    export default {\r\n        components: {\r\n            ModalForm\r\n        },\r\n        data() {\r\n            return {\r\n                isComponentModalActive: false,\r\n                formProps: {\r\n                    email: \'evan@you.com\',\r\n                    password: \'testing\'\r\n                }\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1233:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),o("Example",{attrs:{component:e.ExComponent,code:e.ExComponentCode,title:"Component"}},[o("p",[e._v("\n            A modal with a component. When you want to close the Modal, call the 'close' method —\n            "),o("code",[e._v("this.$parent.close()")]),e._v(" — from the injected component.\n        ")])]),e._v(" "),o("Example",{attrs:{component:e.ExProgrammatic,code:e.ExProgrammaticCode,title:"Programmatic"}},[o("p",[e._v("Syntax:")]),e._v(" "),o("CodeView",{attrs:{lang:"javascript",code:e._f("pre")(e.programmaticSyntax),expanded:""}})],1),e._v(" "),o("Example",{attrs:{component:e.ExFullScreen,code:e.ExFullScreenCode,title:"Full Screen"}},[o("div",{staticClass:"tags has-addons"},[o("span",{staticClass:"tag is-success"},[e._v("New!")]),e._v(" "),o("span",{staticClass:"tag is-info"},[e._v("0.7.8")])]),e._v(" "),o("p",[e._v("Add the "),o("code",[e._v("full-screen")]),e._v(" prop to cover the whole page.")])]),e._v(" "),o("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},177:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>active</code>",description:"Whether modal is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>component</code>",description:"Component to be injected, used to open a component modal programmatically.\n                    Close modal within the component by emitting a 'close' event — <code>this.$emit('close')</code>",type:"Object, Function",values:"—",default:"—"},{name:"<code>parent</code>",description:"Parent component of the modal, <strong>required</strong> if using <code>component</code>",type:"Vue",values:"—",default:"—"},{name:"<code>props</code>",description:"Props to be binded to the injected component",type:"Object",values:"—",default:"—"},{name:"<code>events</code>",description:"Events to be binded to the injected component",type:"Object",values:"—",default:"—"},{name:"<code>content</code>",description:"HTML content",type:"String",values:"—",default:"—"},{name:"<code>width</code>",description:"Width of the Modal",type:"Number, String",values:"—",default:"<code>960</code>"},{name:"<code>has-modal-card</code>",description:"If your modal content has a <code>.modal-card</code> as root, add this prop or the card might break on mobile",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>zoom-out</code>"},{name:"<code>can-cancel</code>",description:"Can close Modal by clicking 'X', pressing escape or clicking outside",type:"Boolean, Array",values:"<code>escape</code>, <code>x</code>, <code>outside</code>",default:"<code>['escape', 'x', 'outside']</code>"},{name:"<code>on-cancel</code>",description:"Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside)",type:"Function",values:"—",default:"—"},{name:"<code>scroll</code>",description:"<code>clip</code> to remove the <code>&lt;body&gt;</code> scrollbar, <code>keep</code> to have a non scrollable scrollbar\n                    to avoid shifting background, but will set <code>&lt;body&gt;</code> to position fixed, might break some layouts",type:"String",values:"<code>clip</code>, <code>keep</code>",default:"<code>clip</code>"},{name:"<code>custom-class</code>",description:"CSS classes to be applied on modal",type:"String",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closed/canceled or called programmatically from the injected component",parameters:"—"}]}]},178:function(e,n,o){var t=o(0)(o(959),o(960),null,null,null);e.exports=t.exports},179:function(e,n,o){var t=o(0)(o(961),o(962),null,null,null);e.exports=t.exports},180:function(e,n,o){var t=o(0)(o(963),o(964),null,null,null);e.exports=t.exports},181:function(e,n,o){var t=o(0)(o(965),o(966),null,null,null);e.exports=t.exports},313:function(e,n,o){var t=o(0)(o(1228),o(1233),null,null,null);e.exports=t.exports},959:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isImageModalActive:!1,isCardModalActive:!1}}}},960:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isImageModalActive=!0}}},[e._v("\n        Launch image modal\n    ")]),e._v(" "),o("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isCardModalActive=!0}}},[e._v("\n        Launch card modal (keep scroll)\n    ")]),e._v(" "),o("b-modal",{attrs:{active:e.isImageModalActive},on:{"update:active":function(n){e.isImageModalActive=n}}},[o("p",{staticClass:"image is-4by3"},[o("img",{attrs:{src:"/static/img/placeholder-1280x960.png"}})])]),e._v(" "),o("b-modal",{attrs:{active:e.isCardModalActive,width:640,scroll:"keep"},on:{"update:active":function(n){e.isCardModalActive=n}}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-image"},[o("figure",{staticClass:"image is-4by3"},[o("img",{attrs:{src:"/static/img/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),o("div",{staticClass:"card-content"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("figure",{staticClass:"image is-48x48"},[o("img",{attrs:{src:"/static/img/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),o("div",{staticClass:"media-content"},[o("p",{staticClass:"title is-4"},[e._v("John Smith")]),e._v(" "),o("p",{staticClass:"subtitle is-6"},[e._v("@johnsmith")])])]),e._v(" "),o("div",{staticClass:"content"},[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Phasellus nec iaculis mauris. "),o("a",[e._v("@bulmaio")]),e._v(".\n                    "),o("a",[e._v("#css")]),e._v(" "),o("a",[e._v("#responsive")]),e._v(" "),o("br"),e._v(" "),o("small",[e._v("11:09 PM - 1 Jan 2016")])])])])])],1)},staticRenderFns:[]}},961:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={props:["email","password"],template:'\n        <form action="">\n            <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                    <p class="modal-card-title">Login</p>\n                </header>\n                <section class="modal-card-body">\n                    <b-field label="Email">\n                        <b-input\n                            type="email"\n                            :value="email"\n                            placeholder="Your email"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-field label="Password">\n                        <b-input\n                            type="password"\n                            :value="password"\n                            password-reveal\n                            placeholder="Your password"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-checkbox>Remember me</b-checkbox>\n                </section>\n                <footer class="modal-card-foot">\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\n                    <button class="button is-primary">Login</button>\n                </footer>\n            </div>\n        </form>\n    '};n.default={components:{ModalForm:t},data:function(){return{isComponentModalActive:!1,formProps:{email:"evan@you.com",password:"testing"}}}}},962:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isComponentModalActive=!0}}},[e._v("\n        Launch component modal\n    ")]),e._v(" "),o("b-modal",{attrs:{active:e.isComponentModalActive,"has-modal-card":""},on:{"update:active":function(n){e.isComponentModalActive=n}}},[o("modal-form",e._b({},"modal-form",e.formProps,!1))],1)],1)},staticRenderFns:[]}},963:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={props:["email","password"],template:'\n        <form action="">\n            <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                    <p class="modal-card-title">Login</p>\n                </header>\n                <section class="modal-card-body">\n                    <b-field label="Email">\n                        <b-input\n                            type="email"\n                            :value="email"\n                            placeholder="Your email"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-field label="Password">\n                        <b-input\n                            type="password"\n                            :value="password"\n                            password-reveal\n                            placeholder="Your password"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-checkbox>Remember me</b-checkbox>\n                </section>\n                <footer class="modal-card-foot">\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\n                    <button class="button is-primary">Login</button>\n                </footer>\n            </div>\n        </form>\n    '};n.default={methods:{imageModal:function(){this.$buefy.modal.open('<p class="image is-4by3">\n                    <img src="https://buefy.org/static/img/placeholder-1280x960.png">\n                </p>')},cardModal:function(){this.$buefy.modal.open({parent:this,component:t,hasModalCard:!0,customClass:"custom-class custom-class-2"})}}}},964:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.imageModal()}}},[e._v("\n        Launch image modal (HTML)\n    ")]),e._v(" "),o("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.cardModal()}}},[e._v("\n        Launch card modal (Component)\n    ")])])},staticRenderFns:[]}},965:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={props:["email","password"],template:'\n        <div class="modal-card" style="width: auto">\n            <header class="modal-card-head">\n                <p class="modal-card-title">Login</p>\n            </header>\n            <section class="modal-card-body">\n                <b-field label="Email">\n                    <b-input\n                        type="email"\n                        :value="email"\n                        placeholder="Your email"\n                        required>\n                    </b-input>\n                </b-field>\n\n                <b-field label="Password">\n                    <b-input\n                        type="password"\n                        :value="password"\n                        password-reveal\n                        placeholder="Your password"\n                        required>\n                    </b-input>\n                </b-field>\n\n                <b-checkbox>Remember me</b-checkbox>\n            </section>\n            <footer class="modal-card-foot">\n                <button class="button" type="button" @click="$parent.close()">Close</button>\n                <button class="button is-primary">Login</button>\n            </footer>\n        </div>\n    '};n.default={components:{ModalForm:t},data:function(){return{isComponentModalActive:!1,formProps:{email:"evan@you.com",password:"testing"}}}}},966:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isComponentModalActive=!0}}},[e._v("\n        Launch component modal\n    ")]),e._v(" "),o("b-modal",{attrs:{active:e.isComponentModalActive,"has-modal-card":"","full-screen":"","can-cancel":!1},on:{"update:active":function(n){e.isComponentModalActive=n}}},[o("modal-form",e._b({},"modal-form",e.formProps,!1))],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=21.cbfb6e6096afa2657914.js.map