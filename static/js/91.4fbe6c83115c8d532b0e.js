webpackJsonp([91],{170:function(n,e,a){var o=a(0)(a(917),a(918),null,null,null);n.exports=o.exports},917:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={props:["email","password"],template:'\n        <form action="">\n            <div class="modal-card" style="width: auto">\n                <header class="modal-card-head">\n                    <p class="modal-card-title">Login</p>\n                </header>\n                <section class="modal-card-body">\n                    <b-field label="Email">\n                        <b-input\n                            type="email"\n                            :value="email"\n                            placeholder="Your email"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-field label="Password">\n                        <b-input\n                            type="password"\n                            :value="password"\n                            password-reveal\n                            placeholder="Your password"\n                            required>\n                        </b-input>\n                    </b-field>\n\n                    <b-checkbox>Remember me</b-checkbox>\n                </section>\n                <footer class="modal-card-foot">\n                    <button class="button" type="button" @click="$parent.close()">Close</button>\n                    <button class="button is-primary">Login</button>\n                </footer>\n            </div>\n        </form>\n    '};e.default={methods:{imageModal:function(){this.$modal.open('<p class="image is-4by3">\n                    <img src="https://buefy.org/static/img/placeholder-1280x960.png">\n                </p>')},cardModal:function(){this.$modal.open({parent:this,component:o,hasModalCard:!0,customClass:"custom-class custom-class-2"})}}}},918:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("section",[a("button",{staticClass:"button is-primary is-medium",on:{click:function(e){n.imageModal()}}},[n._v("\n        Launch image modal (HTML)\n    ")]),n._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:function(e){n.cardModal()}}},[n._v("\n        Launch card modal (Component)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=91.4fbe6c83115c8d532b0e.js.map