webpackJsonp([119],{1124:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={props:["email","password"],template:'\n            <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                    <p class="modal-card-title">Login</p>\n                </header>\n                <section class="modal-card-body">\n                    <b-field label="Email">\n                        <b-input\n                            type="email"\n                            :value="email"\n                            placeholder="Your email"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-field label="Password">\n                        <b-input\n                            type="password"\n                            :value="password"\n                            password-reveal\n                            placeholder="Your password"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-checkbox>Remember me</b-checkbox>\n                </section>\n                <footer class="modal-card-foot">\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\n                    <button class="button is-primary">Login</button>\n                </footer>\n            </div>\n        '};e.default={components:{ModalForm:t},data:function(){return{isComponentModalActive:!1,formProps:{email:"evan@you.com",password:"testing"}}}}},1125:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("section",[o("button",{staticClass:"button is-primary is-medium",on:{click:function(e){n.isComponentModalActive=!0}}},[n._v("\r\n            Launch component modal\r\n        ")]),n._v(" "),o("b-modal",{attrs:{active:n.isComponentModalActive,"has-modal-card":"","full-screen":"","can-cancel":!1},on:{"update:active":function(e){n.isComponentModalActive=e}}},[o("modal-form",n._b({},"modal-form",n.formProps,!1))],1)],1)},staticRenderFns:[]}},219:function(n,e,o){var t=o(0)(o(1124),o(1125),null,null,null);n.exports=t.exports}});
//# sourceMappingURL=119.22b3c853113371ccb8ed.js.map