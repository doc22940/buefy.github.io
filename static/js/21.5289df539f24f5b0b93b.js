webpackJsonp([21,86,87,88,201],{1102:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(161),a=t(162),r=t.n(a),i=t(1103),s=t.n(i),c=t(163),l=t.n(c),d=t(1104),m=t.n(d),p=t(164),u=t.n(p),b=t(1105),v=t.n(b);n.default={data:function(){return{api:o.default,ExSimple:r.a,ExComponent:l.a,ExProgrammatic:u.a,ExSimpleCode:s.a,ExComponentCode:m.a,ExProgrammaticCode:v.a,programmaticSyntax:"\n            // From inside Vue instance\n            this.$modal.open(props)\n\n            // From outside Vue instance\n            import { ModalProgrammatic } from 'buefy/dist/components/modal'\n            ModalProgrammatic.open(props)"}}}},1103:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isImageModalActive = true">\r\n            Launch image modal\r\n        </button>\r\n        <button class="button is-primary is-medium"\r\n            @click="isCardModalActive = true">\r\n            Launch card modal (keep scroll)\r\n        </button>\r\n\r\n        <b-modal :active.sync="isImageModalActive">\r\n            <p class="image is-4by3">\r\n                <img src="/static/img/placeholder-1280x960.png">\r\n            </p>\r\n        </b-modal>\r\n\r\n        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">\r\n            <div class="card">\r\n                <div class="card-image">\r\n                    <figure class="image is-4by3">\r\n                        <img src="/static/img/placeholder-1280x960.png" alt="Image">\r\n                    </figure>\r\n                </div>\r\n                <div class="card-content">\r\n                    <div class="media">\r\n                        <div class="media-left">\r\n                            <figure class="image is-48x48">\r\n                                <img src="/static/img/placeholder-1280x960.png" alt="Image">\r\n                            </figure>\r\n                        </div>\r\n                        <div class="media-content">\r\n                            <p class="title is-4">John Smith</p>\r\n                            <p class="subtitle is-6">@johnsmith</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="content">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\r\n                        <a>#css</a> <a>#responsive</a>\r\n                        <br>\r\n                        <small>11:09 PM - 1 Jan 2016</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isImageModalActive: false,\r\n                isCardModalActive: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1104:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isComponentModalActive = true">\r\n            Launch component modal\r\n        </button>\r\n\r\n        <b-modal :active.sync="isComponentModalActive" has-modal-card>\r\n            <modal-form v-bind="formProps"></modal-form>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const ModalForm = {\r\n        props: [\'email\', \'password\'],\r\n        template: `\r\n            <form action="">\r\n                <div class="modal-card" style="width: auto">\r\n                    <header class="modal-card-head">\r\n                        <p class="modal-card-title">Login</p>\r\n                    </header>\r\n                    <section class="modal-card-body">\r\n                        <b-field label="Email">\r\n                            <b-input\r\n                                type="email"\r\n                                :value="email"\r\n                                placeholder="Your email"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-field label="Password">\r\n                            <b-input\r\n                                type="password"\r\n                                :value="password"\r\n                                password-reveal\r\n                                placeholder="Your password"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-checkbox>Remember me</b-checkbox>\r\n                    </section>\r\n                    <footer class="modal-card-foot">\r\n                        <button class="button" type="button" @click="$parent.close()">Close</button>\r\n                        <button class="button is-primary">Login</button>\r\n                    </footer>\r\n                </div>\r\n            </form>\r\n        `\r\n    }\r\n\r\n    export default {\r\n        components: {\r\n            ModalForm\r\n        },\r\n        data() {\r\n            return {\r\n                isComponentModalActive: false,\r\n                formProps: {\r\n                    email: \'evan@you.com\',\r\n                    password: \'testing\'\r\n                }\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1105:function(e,n){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="imageModal()">\r\n            Launch image modal (HTML)\r\n        </button>\r\n        <button class="button is-primary is-medium"\r\n            @click="cardModal()">\r\n            Launch card modal (Component)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const ModalForm = {\r\n        props: [\'email\', \'password\'],\r\n        template: `\r\n            <form action="">\r\n                <div class="modal-card" style="width: auto">\r\n                    <header class="modal-card-head">\r\n                        <p class="modal-card-title">Login</p>\r\n                    </header>\r\n                    <section class="modal-card-body">\r\n                        <b-field label="Email">\r\n                            <b-input\r\n                                type="email"\r\n                                :value="email"\r\n                                placeholder="Your email"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-field label="Password">\r\n                            <b-input\r\n                                type="password"\r\n                                :value="password"\r\n                                password-reveal\r\n                                placeholder="Your password"\r\n                                required>\r\n                            </b-input>\r\n                        </b-field>\r\n\r\n                        <b-checkbox>Remember me</b-checkbox>\r\n                    </section>\r\n                    <footer class="modal-card-foot">\r\n                        <button class="button" type="button" @click="$parent.close()">Close</button>\r\n                        <button class="button is-primary">Login</button>\r\n                    </footer>\r\n                </div>\r\n            </form>\r\n        `\r\n    }\r\n\r\n    export default {\r\n        methods: {\r\n            imageModal() {\r\n                this.$modal.open(\r\n                    `<p class="image is-4by3">\r\n                        <img src="https://buefy.org/static/img/placeholder-1280x960.png">\r\n                    </p>`\r\n                )\r\n            },\r\n            cardModal() {\r\n                this.$modal.open({\r\n                    parent: this,\r\n                    component: ModalForm,\r\n                    hasModalCard: true\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1106:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),t("Example",{attrs:{component:e.ExComponent,code:e.ExComponentCode,title:"Component"}},[t("p",[e._v("\n            A modal with a component. When you want to close the Modal, call the 'close' method —\n            "),t("code",[e._v("this.$parent.close()")]),e._v(" — from the injected component.\n        ")])]),e._v(" "),t("Example",{attrs:{component:e.ExProgrammatic,code:e.ExProgrammaticCode,title:"Programmatic"}},[t("p",[e._v("Syntax:")]),e._v(" "),t("CodeView",{attrs:{lang:"javascript",code:e._f("pre")(e.programmaticSyntax),expanded:""}})],1),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},161:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>active</code>",description:"Whether modal is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>component</code>",description:"Component to be injected, used to open a component modal programmatically.\n                    Close modal within the component by emitting a 'close' event — <code>this.$emit('close')</code>",type:"Object, Function",values:"—",default:"—"},{name:"<code>parent</code>",description:"Parent component of the modal, <strong>required</strong> if using <code>component</code>",type:"Vue",values:"—",default:"—"},{name:"<code>props</code>",description:"Props to be binded to the injected component",type:"Object",values:"—",default:"—"},{name:"<code>events</code>",description:"Events to be binded to the injected component",type:"Object",values:"—",default:"—"},{name:"<code>content</code>",description:"HTML content",type:"String",values:"—",default:"—"},{name:"<code>width</code>",description:"Width of the Modal",type:"Number, String",values:"—",default:"<code>960</code>"},{name:"<code>has-modal-card</code>",description:"If your modal content has a <code>.modal-card</code> as root, add this prop or the card might break on mobile",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>zoom-out</code>"},{name:"<code>can-cancel</code>",description:"Can close Modal by clicking 'X', pressing escape or clicking outside",type:"Boolean, Array",values:"<code>escape</code>, <code>x</code>, <code>outside</code>",default:"<code>['escape', 'x', 'outside']</code>"},{name:"<code>on-cancel</code>",description:"Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside)",type:"Function",values:"—",default:"—"},{name:"<code>scroll</code>",description:"<code>clip</code> to remove the <code>&lt;body&gt;</code> scrollbar, <code>keep</code> to have a non scrollable scrollbar\n                    to avoid shifting background, but will set <code>&lt;body&gt;</code> to position fixed, might break some layouts",type:"String",values:"<code>clip</code>, <code>keep</code>",default:"<code>clip</code>"}],events:[{name:"<code>close</code>",description:"Triggers when user closed/canceled or called programmatically from the injected component",parameters:"—"}]}]},162:function(e,n,t){var o=t(0)(t(868),t(869),null,null,null);e.exports=o.exports},163:function(e,n,t){var o=t(0)(t(870),t(871),null,null,null);e.exports=o.exports},164:function(e,n,t){var o=t(0)(t(872),t(873),null,null,null);e.exports=o.exports},274:function(e,n,t){var o=t(0)(t(1102),t(1106),null,null,null);e.exports=o.exports},868:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{isImageModalActive:!1,isCardModalActive:!1}}}},869:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isImageModalActive=!0}}},[e._v("\n        Launch image modal\n    ")]),e._v(" "),t("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isCardModalActive=!0}}},[e._v("\n        Launch card modal (keep scroll)\n    ")]),e._v(" "),t("b-modal",{attrs:{active:e.isImageModalActive},on:{"update:active":function(n){e.isImageModalActive=n}}},[t("p",{staticClass:"image is-4by3"},[t("img",{attrs:{src:"/static/img/placeholder-1280x960.png"}})])]),e._v(" "),t("b-modal",{attrs:{active:e.isCardModalActive,width:640,scroll:"keep"},on:{"update:active":function(n){e.isCardModalActive=n}}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-image"},[t("figure",{staticClass:"image is-4by3"},[t("img",{attrs:{src:"/static/img/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"media"},[t("div",{staticClass:"media-left"},[t("figure",{staticClass:"image is-48x48"},[t("img",{attrs:{src:"/static/img/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),t("div",{staticClass:"media-content"},[t("p",{staticClass:"title is-4"},[e._v("John Smith")]),e._v(" "),t("p",{staticClass:"subtitle is-6"},[e._v("@johnsmith")])])]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Phasellus nec iaculis mauris. "),t("a",[e._v("@bulmaio")]),e._v(".\n                    "),t("a",[e._v("#css")]),e._v(" "),t("a",[e._v("#responsive")]),e._v(" "),t("br"),e._v(" "),t("small",[e._v("11:09 PM - 1 Jan 2016")])])])])])],1)},staticRenderFns:[]}},870:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={props:["email","password"],template:'\n        <form action="">\n            <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                    <p class="modal-card-title">Login</p>\n                </header>\n                <section class="modal-card-body">\n                    <b-field label="Email">\n                        <b-input\n                            type="email"\n                            :value="email"\n                            placeholder="Your email"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-field label="Password">\n                        <b-input\n                            type="password"\n                            :value="password"\n                            password-reveal\n                            placeholder="Your password"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-checkbox>Remember me</b-checkbox>\n                </section>\n                <footer class="modal-card-foot">\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\n                    <button class="button is-primary">Login</button>\n                </footer>\n            </div>\n        </form>\n    '};n.default={components:{ModalForm:o},data:function(){return{isComponentModalActive:!1,formProps:{email:"evan@you.com",password:"testing"}}}}},871:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.isComponentModalActive=!0}}},[e._v("\n        Launch component modal\n    ")]),e._v(" "),t("b-modal",{attrs:{active:e.isComponentModalActive,"has-modal-card":""},on:{"update:active":function(n){e.isComponentModalActive=n}}},[t("modal-form",e._b({},"modal-form",e.formProps,!1))],1)],1)},staticRenderFns:[]}},872:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={props:["email","password"],template:'\n        <form action="">\n            <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                    <p class="modal-card-title">Login</p>\n                </header>\n                <section class="modal-card-body">\n                    <b-field label="Email">\n                        <b-input\n                            type="email"\n                            :value="email"\n                            placeholder="Your email"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-field label="Password">\n                        <b-input\n                            type="password"\n                            :value="password"\n                            password-reveal\n                            placeholder="Your password"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-checkbox>Remember me</b-checkbox>\n                </section>\n                <footer class="modal-card-foot">\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\n                    <button class="button is-primary">Login</button>\n                </footer>\n            </div>\n        </form>\n    '};n.default={methods:{imageModal:function(){this.$modal.open('<p class="image is-4by3">\n                    <img src="https://buefy.org/static/img/placeholder-1280x960.png">\n                </p>')},cardModal:function(){this.$modal.open({parent:this,component:o,hasModalCard:!0})}}}},873:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.imageModal()}}},[e._v("\n        Launch image modal (HTML)\n    ")]),e._v(" "),t("button",{staticClass:"button is-primary is-medium",on:{click:function(n){e.cardModal()}}},[e._v("\n        Launch card modal (Component)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=21.5289df539f24f5b0b93b.js.map