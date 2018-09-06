webpackJsonp([12,33,88,89,146,178],{106:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"Dropdown",props:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>hoverable</code>",description:"Dropdown will be triggered by hover instead of click",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>position</code>",description:"Optional, position of the dropdown relative to the trigger",type:"String",values:"<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>",default:"Bottom right"},{name:"<code>disabled</code>",description:"Disables dropdown",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>inline</code>",description:"Dropdown content (items) are shown inline, trigger is removed",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>mobile-modal</code>",description:"Dropdown content (items) are shown into a modal on mobile",type:"Boolean",values:"—",default:"<code>true</code>"}],slots:[{name:"default",description:"",props:""},{name:"<code>trigger</code>",description:"Trigger content for the dropdown",props:"—"}],events:[{name:"<code>change</code>",description:"Triggers when an item is selected",parameters:"<code>value: String</code>"},{name:"<code>active-change</code>",description:"Triggers when dropdown is activated or deactivated (visibility of list)",parameters:"<code>active: Boolean</code>"}],methods:[{name:"<code>toggle</code>",description:"Toggle activation (dropdown list visibility)"}]},{title:"Item",props:[{name:"<code>value</code>",description:"The value that will be returned on events and v-model",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>separator</code>",description:"Set the item to be a separator",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Item is disabled",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>custom</code>",description:"Item is not a clickable item",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>has-link</code>",description:"Use it if your item is an anchor tag or <code>router-link</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>paddingless</code>",description:"Remove padding",type:"Boolean",values:"—",default:"<code>false</code>"}],slots:[{name:"default",description:"",props:""}],events:[{name:"<code>click</code>",description:"Triggers when the item is clicked",parameters:"—"}]}]},107:function(n,t,e){function o(n){e(740)}var r=e(0)(null,e(742),o,"data-v-19806782",null);n.exports=r.exports},108:function(n,t,e){var o=e(0)(null,e(743),null,null,null);n.exports=o.exports},109:function(n,t,e){var o=e(0)(e(744),e(745),null,null,null);n.exports=o.exports},110:function(n,t,e){var o=e(0)(e(746),e(747),null,null,null);n.exports=o.exports},237:function(n,t,e){var o=e(0)(e(937),e(942),null,null,null);n.exports=o.exports},740:function(n,t,e){var o=e(741);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(678)("4a844131",o,!0)},741:function(n,t,e){t=n.exports=e(677)(!0),t.push([n.i,"\n.tag[data-v-19806782] {\n    cursor: pointer;\n}\n","",{version:3,sources:["C:/projetos/buefy/docs/pages/components/dropdown/examples/ExSimple.vue"],names:[],mappings:";AACA;IACI,gBAAgB;CACnB",file:"ExSimple.vue",sourcesContent:["\n.tag[data-v-19806782] {\n    cursor: pointer;\n}\n"],sourceRoot:""}])},742:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("b-dropdown",[e("button",{staticClass:"button is-primary",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[n._v("Click me!")]),n._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],1),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1),n._v(" "),e("b-dropdown",{attrs:{hoverable:""}},[e("button",{staticClass:"button is-info",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[n._v("Hover me!")]),n._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],1),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1),n._v(" "),e("b-dropdown",{attrs:{disabled:""}},[e("button",{staticClass:"button",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[n._v("Disabled")]),n._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],1),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1),n._v(" "),e("b-dropdown",[e("p",{staticClass:"tag is-success",attrs:{slot:"trigger"},slot:"trigger"},[n._v("\n            Custom trigger\n        ")]),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1)],1)},staticRenderFns:[]}},743:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[n._m(0),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fab",icon:"github"}})],1),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fab",icon:"twitter"}})],1)]),n._v(" "),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[e("b-dropdown",{attrs:{position:"is-bottom-left"}},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[n._v("Login")]),n._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],1),n._v(" "),e("b-dropdown-item",{attrs:{custom:"",paddingless:""}},[e("form",{attrs:{action:""}},[e("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"email",placeholder:"Your email",required:""}})],1),n._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""}})],1),n._v(" "),e("b-checkbox",[n._v("Remember me")])],1),n._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button is-primary"},[n._v("Login")])])])])])],1)],1)])])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:"/static/img/buefy-logo.png",alt:"Buefy"}})])}]}},744:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{navigation:"home"}}}},745:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[n._m(0),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fab",icon:"github"}})],1),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fab",icon:"twitter"}})],1)]),n._v(" "),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[e("b-dropdown",{attrs:{position:"is-bottom-left"},model:{value:n.navigation,callback:function(t){n.navigation=t},expression:"navigation"}},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[n._v("Menu")]),n._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],1),n._v(" "),e("b-dropdown-item",{attrs:{custom:""}},[n._v("\n                    Logged as "),e("b",[n._v("Rafael Beraldo")])]),n._v(" "),e("hr",{staticClass:"dropdown-divider"}),n._v(" "),e("b-dropdown-item",{attrs:{"has-link":""}},[e("a",{attrs:{href:"https://google.com",target:"_blank"}},[e("b-icon",{attrs:{icon:"link"}}),n._v("\n                        Google (link)\n                    ")],1)]),n._v(" "),e("b-dropdown-item",{attrs:{value:"home"}},[e("b-icon",{attrs:{icon:"home"}}),n._v("\n                    Home\n                ")],1),n._v(" "),e("b-dropdown-item",{attrs:{value:"products"}},[e("b-icon",{attrs:{icon:"cart"}}),n._v("\n                    Products\n                ")],1),n._v(" "),e("b-dropdown-item",{attrs:{value:"blog",disabled:""}},[e("b-icon",{attrs:{icon:"book-open"}}),n._v("\n                    Blog\n                ")],1),n._v(" "),e("hr",{staticClass:"dropdown-divider"}),n._v(" "),e("b-dropdown-item",{attrs:{value:"settings"}},[e("b-icon",{attrs:{icon:"settings"}}),n._v("\n                    Settings\n                ")],1),n._v(" "),e("b-dropdown-item",{attrs:{value:"logout"}},[e("b-icon",{attrs:{icon:"logout"}}),n._v("\n                    Logout\n                ")],1)],1)],1)])])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:"/static/img/buefy-logo.png",alt:"Buefy"}})])}]}},746:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isPublic:!0}}}},747:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-dropdown",{model:{value:n.isPublic,callback:function(t){n.isPublic=t},expression:"isPublic"}},[e("button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[n.isPublic?[e("b-icon",{attrs:{icon:"earth"}}),n._v(" "),e("span",[n._v("Public")])]:[e("b-icon",{attrs:{icon:"account-multiple"}}),n._v(" "),e("span",[n._v("Friends")])],n._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],2),n._v(" "),e("b-dropdown-item",{attrs:{value:!0}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"media-left",attrs:{icon:"earth"}}),n._v(" "),e("div",{staticClass:"media-content"},[e("h3",[n._v("Public")]),n._v(" "),e("small",[n._v("Everyone can see")])])],1)]),n._v(" "),e("b-dropdown-item",{attrs:{value:!1}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"media-left",attrs:{icon:"account-multiple"}}),n._v(" "),e("div",{staticClass:"media-content"},[e("h3",[n._v("Friends")]),n._v(" "),e("small",[n._v("Only friends can see")])])],1)])],1)},staticRenderFns:[]}},937:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(106),r=e(107),i=e.n(r),a=e(938),s=e.n(a),d=e(108),c=e.n(d),l=e(939),p=e.n(l),b=e(109),m=e.n(b),v=e(940),u=e.n(v),g=e(110),w=e.n(g),f=e(941),_=e.n(f);t.default={data:function(){return{api:o.default,ExSimple:i.a,ExSimpleCode:s.a,ExContentPosition:c.a,ExContentPositionCode:p.a,ExHasLinkDisabled:m.a,ExHasLinkDisabledCode:u.a,ExCustomize:w.a,ExCustomizeCode:_.a}}}},938:function(n,t){n.exports='<template>\r\n    <section>\r\n        <b-dropdown>\r\n            <button class="button is-primary" slot="trigger">\r\n                <span>Click me!</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown hoverable>\r\n            <button class="button is-info" slot="trigger">\r\n                <span>Hover me!</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown disabled>\r\n            <button class="button" slot="trigger">\r\n                <span>Disabled</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown>\r\n            <p class="tag is-success" slot="trigger">\r\n                Custom trigger\r\n            </p>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n    </section>\r\n</template>\r\n\r\n<style scoped>\r\n    .tag {\r\n        cursor: pointer;\r\n    }\r\n</style>\r\n'},939:function(n,t){n.exports='<template>\r\n    <nav class="navbar">\r\n        <div class="navbar-brand">\r\n            <a class="navbar-item">\r\n                <img src="/static/img/buefy-logo.png" alt="Buefy">\r\n            </a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="github"></b-icon></a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="twitter"></b-icon></a>\r\n        </div>\r\n\r\n        <div class="navbar-menu">\r\n            <div class="navbar-end">\r\n                <b-dropdown position="is-bottom-left">\r\n                    <a class="navbar-item" slot="trigger">\r\n                        <span>Login</span>\r\n                        <b-icon icon="menu-down"></b-icon>\r\n                    </a>\r\n\r\n                    <b-dropdown-item custom paddingless>\r\n                        <form action="">\r\n                            <div class="modal-card" style="width:300px;">\r\n                                <section class="modal-card-body">\r\n                                    <b-field label="Email">\r\n                                        <b-input\r\n                                            type="email"\r\n                                            placeholder="Your email"\r\n                                            required>\r\n                                        </b-input>\r\n                                    </b-field>\r\n\r\n                                    <b-field label="Password">\r\n                                        <b-input\r\n                                            type="password"\r\n                                            password-reveal\r\n                                            placeholder="Your password"\r\n                                            required>\r\n                                        </b-input>\r\n                                    </b-field>\r\n\r\n                                    <b-checkbox>Remember me</b-checkbox>\r\n                                </section>\r\n                                <footer class="modal-card-foot">\r\n                                    <button class="button is-primary">Login</button>\r\n                                </footer>\r\n                            </div>\r\n                        </form>\r\n                    </b-dropdown-item>\r\n                </b-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</template>\r\n'},940:function(n,t){n.exports='<template>\r\n    <nav class="navbar">\r\n        <div class="navbar-brand">\r\n            <a class="navbar-item">\r\n                <img src="/static/img/buefy-logo.png" alt="Buefy">\r\n            </a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="github"></b-icon></a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="twitter"></b-icon></a>\r\n        </div>\r\n\r\n        <div class="navbar-menu">\r\n            <div class="navbar-end">\r\n                <b-dropdown v-model="navigation" position="is-bottom-left">\r\n                    <a class="navbar-item" slot="trigger">\r\n                        <span>Menu</span>\r\n                        <b-icon icon="menu-down"></b-icon>\r\n                    </a>\r\n\r\n                    <b-dropdown-item custom>\r\n                        Logged as <b>Rafael Beraldo</b>\r\n                    </b-dropdown-item>\r\n                    <hr class="dropdown-divider">\r\n                    <b-dropdown-item has-link>\r\n                        <a href="https://google.com" target="_blank">\r\n                            <b-icon icon="link"></b-icon>\r\n                            Google (link)\r\n                        </a>\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="home">\r\n                        <b-icon icon="home"></b-icon>\r\n                        Home\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="products">\r\n                        <b-icon icon="cart"></b-icon>\r\n                        Products\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="blog" disabled>\r\n                        <b-icon icon="book-open"></b-icon>\r\n                        Blog\r\n                    </b-dropdown-item>\r\n                    <hr class="dropdown-divider">\r\n                    <b-dropdown-item value="settings">\r\n                        <b-icon icon="settings"></b-icon>\r\n                        Settings\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="logout">\r\n                        <b-icon icon="logout"></b-icon>\r\n                        Logout\r\n                    </b-dropdown-item>\r\n                </b-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                navigation: \'home\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},941:function(n,t){n.exports='<template>\r\n    <b-dropdown v-model="isPublic">\r\n        <button class="button is-primary" type="button" slot="trigger">\r\n            <template v-if="isPublic">\r\n                <b-icon icon="earth"></b-icon>\r\n                <span>Public</span>\r\n            </template>\r\n            <template v-else>\r\n                <b-icon icon="account-multiple"></b-icon>\r\n                <span>Friends</span>\r\n            </template>\r\n            <b-icon icon="menu-down"></b-icon>\r\n        </button>\r\n\r\n        <b-dropdown-item :value="true">\r\n            <div class="media">\r\n                <b-icon class="media-left" icon="earth"></b-icon>\r\n                <div class="media-content">\r\n                    <h3>Public</h3>\r\n                    <small>Everyone can see</small>\r\n                </div>\r\n            </div>\r\n        </b-dropdown-item>\r\n\r\n        <b-dropdown-item :value="false">\r\n            <div class="media">\r\n                <b-icon class="media-left" icon="account-multiple"></b-icon>\r\n                <div class="media-content">\r\n                    <h3>Friends</h3>\r\n                    <small>Only friends can see</small>\r\n                </div>\r\n            </div>\r\n        </b-dropdown-item>\r\n    </b-dropdown>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isPublic: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},942:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Example",{attrs:{component:n.ExSimple,code:n.ExSimpleCode}},[e("p",[n._v("\n            While it appear as a modal for tablet and smartphones,\n            Dropdowns with "),e("code",[n._v("hoverable")]),n._v(" prop won't change it's behavior to avoid any malfunction with hover.\n        ")])]),n._v(" "),e("Example",{attrs:{component:n.ExContentPosition,code:n.ExContentPositionCode,title:"Content and position",paddingless:""}},[e("p",[n._v("Add the "),e("code",[n._v("custom")]),n._v(" prop to the item to add "),e("strong",[n._v("any type of content")]),n._v(".")])]),n._v(" "),e("Example",{attrs:{component:n.ExHasLinkDisabled,code:n.ExHasLinkDisabledCode,title:"Links within",paddingless:""}},[e("p",[n._v("Add the "),e("code",[n._v("has-link")]),n._v(" prop to add a anchor tag / router-link, or "),e("code",[n._v("disabled")]),n._v(" to disable an item.")])]),n._v(" "),e("Example",{attrs:{component:n.ExCustomize,code:n.ExCustomizeCode,title:"Customizing with v-model"}}),n._v(" "),e("ApiView",{attrs:{data:n.api}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.f23c959475775cd475d7.js.map