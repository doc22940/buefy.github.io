webpackJsonp([14,50,132,133,134,231,288,289],{1102:function(e,t,n){var o=n(1103);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(894)("4a844131",o,!0)},1103:function(e,t,n){t=e.exports=n(893)(!0),t.push([e.i,"\n.tag[data-v-19806782] {\n    cursor: pointer;\n}\n","",{version:3,sources:["C:/Users/Walter/Github/buefy/docs/pages/components/dropdown/examples/ExSimple.vue"],names:[],mappings:";AACA;IACI,gBAAgB;CACnB",file:"ExSimple.vue",sourcesContent:["\n.tag[data-v-19806782] {\n    cursor: pointer;\n}\n"],sourceRoot:""}])},1104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-dropdown",{attrs:{"aria-role":"list"}},[n("button",{staticClass:"button is-primary",attrs:{slot:"trigger"},slot:"trigger"},[n("span",[e._v("Click me!")]),e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],1),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Another action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Something else")])],1),e._v(" "),n("b-dropdown",{attrs:{hoverable:"","aria-role":"list"}},[n("button",{staticClass:"button is-info",attrs:{slot:"trigger"},slot:"trigger"},[n("span",[e._v("Hover me!")]),e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],1),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Another action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Something else")])],1),e._v(" "),n("b-dropdown",{attrs:{disabled:"","aria-role":"list"}},[n("button",{staticClass:"button",attrs:{slot:"trigger"},slot:"trigger"},[n("span",[e._v("Disabled")]),e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],1),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Another action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Something else")])],1),e._v(" "),n("b-dropdown",{attrs:{"aria-role":"list"}},[n("p",{staticClass:"tag is-success",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[e._v("\n            Custom trigger\n        ")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Another action")]),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Something else")])],1)],1)},staticRenderFns:[]}},1105:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"navbar-brand"},[e._m(0),e._v(" "),n("a",{staticClass:"navbar-item"},[n("b-icon",{attrs:{pack:"fab",icon:"github"}})],1),e._v(" "),n("a",{staticClass:"navbar-item"},[n("b-icon",{attrs:{pack:"fab",icon:"twitter"}})],1)]),e._v(" "),n("div",{staticClass:"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("b-dropdown",{attrs:{position:"is-bottom-left","aria-role":"menu","trap-focus":""}},[n("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[n("span",[e._v("Login")]),e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],1),e._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"menu-item",focusable:!1,custom:"",paddingless:""}},[n("form",{attrs:{action:""}},[n("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Email"}},[n("b-input",{attrs:{type:"email",placeholder:"Your email",required:""}})],1),e._v(" "),n("b-field",{attrs:{label:"Password"}},[n("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""}})],1),e._v(" "),n("b-checkbox",[e._v("Remember me")])],1),e._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-primary"},[e._v("Login")])])])])])],1)],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-item"},[n("img",{attrs:{src:"/static/img/buefy-logo.png",alt:"Buefy"}})])}]}},1106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{navigation:"home"}}}},1107:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"navbar-brand"},[e._m(0),e._v(" "),n("a",{staticClass:"navbar-item"},[n("b-icon",{attrs:{pack:"fab",icon:"github"}})],1),e._v(" "),n("a",{staticClass:"navbar-item"},[n("b-icon",{attrs:{pack:"fab",icon:"twitter"}})],1)]),e._v(" "),n("div",{staticClass:"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("b-dropdown",{attrs:{position:"is-bottom-left","aria-role":"menu"},model:{value:e.navigation,callback:function(t){e.navigation=t},expression:"navigation"}},[n("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[n("span",[e._v("Menu")]),e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],1),e._v(" "),n("b-dropdown-item",{attrs:{custom:"","aria-role":"menuitem"}},[e._v("\n                    Logged as "),n("b",[e._v("Rafael Beraldo")])]),e._v(" "),n("hr",{staticClass:"dropdown-divider"}),e._v(" "),n("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[n("a",{attrs:{href:"https://google.com",target:"_blank"}},[n("b-icon",{attrs:{icon:"link"}}),e._v("\n                        Google (link)\n                    ")],1)]),e._v(" "),n("b-dropdown-item",{attrs:{value:"home","aria-role":"menuitem"}},[n("b-icon",{attrs:{icon:"home"}}),e._v("\n                    Home\n                ")],1),e._v(" "),n("b-dropdown-item",{attrs:{value:"products","aria-role":"menuitem"}},[n("b-icon",{attrs:{icon:"cart"}}),e._v("\n                    Products\n                ")],1),e._v(" "),n("b-dropdown-item",{attrs:{value:"blog",disabled:"","aria-role":"menuitem"}},[n("b-icon",{attrs:{icon:"book-open"}}),e._v("\n                    Blog\n                ")],1),e._v(" "),n("hr",{staticClass:"dropdown-divider",attrs:{"aria-role":"menuitem"}}),e._v(" "),n("b-dropdown-item",{attrs:{value:"settings"}},[n("b-icon",{attrs:{icon:"settings"}}),e._v("\n                    Settings\n                ")],1),e._v(" "),n("b-dropdown-item",{attrs:{value:"logout","aria-role":"menuitem"}},[n("b-icon",{attrs:{icon:"logout"}}),e._v("\n                    Logout\n                ")],1)],1)],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-item"},[n("img",{attrs:{src:"/static/img/buefy-logo.png",alt:"Buefy"}})])}]}},1108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isPublic:!0}}}},1109:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-dropdown",{attrs:{"aria-role":"list"},model:{value:e.isPublic,callback:function(t){e.isPublic=t},expression:"isPublic"}},[n("button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[e.isPublic?[n("b-icon",{attrs:{icon:"earth"}}),e._v(" "),n("span",[e._v("Public")])]:[n("b-icon",{attrs:{icon:"account-multiple"}}),e._v(" "),n("span",[e._v("Friends")])],e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],2),e._v(" "),n("b-dropdown-item",{attrs:{value:!0,"aria-role":"listitem"}},[n("div",{staticClass:"media"},[n("b-icon",{staticClass:"media-left",attrs:{icon:"earth"}}),e._v(" "),n("div",{staticClass:"media-content"},[n("h3",[e._v("Public")]),e._v(" "),n("small",[e._v("Everyone can see")])])],1)]),e._v(" "),n("b-dropdown-item",{attrs:{value:!1,"aria-role":"listitem"}},[n("div",{staticClass:"media"},[n("b-icon",{staticClass:"media-left",attrs:{icon:"account-multiple"}}),e._v(" "),n("div",{staticClass:"media-content"},[n("h3",[e._v("Friends")]),e._v(" "),n("small",[e._v("Only friends can see")])])],1)])],1)},staticRenderFns:[]}},1110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selectedOptions:[]}}}},1111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("selected")]),e._v(": "+e._s(e.selectedOptions))]),e._v(" "),n("b-dropdown",{attrs:{multiple:"","aria-role":"list"},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}},[n("button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[n("span",[e._v("Selected ("+e._s(e.selectedOptions.length)+")")]),e._v(" "),n("b-icon",{attrs:{icon:"menu-down"}})],1),e._v(" "),n("b-dropdown-item",{attrs:{value:"option1","aria-role":"listitem"}},[n("span",[e._v("Option 1")])]),e._v(" "),n("b-dropdown-item",{attrs:{value:"option2","aria-role":"listitem"}},[n("span",[e._v("Option 2")])]),e._v(" "),n("b-dropdown-item",{attrs:{value:"option3","aria-role":"listitem"}},[n("span",[e._v("Option 3")])])],1)],1)},staticRenderFns:[]}},1527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(170),r=n(171),i=n(172),a=n.n(i),s=n(1528),d=n.n(s),l=n(173),c=n.n(l),p=n(1529),m=n.n(p),u=n(174),b=n.n(u),v=n(1530),g=n.n(v),f=n(175),w=n.n(f),_=n(1531),h=n.n(_),y=n(176),C=n.n(y),x=n(1532),k=n.n(x);t.default={data:function(){return{api:o.default,variables:r.default,ExSimple:a.a,ExSimpleCode:d.a,ExContentPosition:c.a,ExContentPositionCode:m.a,ExHasLinkDisabled:b.a,ExHasLinkDisabledCode:g.a,ExCustomize:w.a,ExCustomizeCode:h.a,ExCustomizeMultiple:C.a,ExCustomizeMultipleCode:k.a}}}},1528:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-dropdown aria-role="list">\r\n            <button class="button is-primary" slot="trigger">\r\n                <span>Click me!</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown hoverable aria-role="list">\r\n            <button class="button is-info" slot="trigger">\r\n                <span>Hover me!</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown disabled aria-role="list">\r\n            <button class="button" slot="trigger">\r\n                <span>Disabled</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown aria-role="list">\r\n            <p\r\n                class="tag is-success"\r\n                slot="trigger"\r\n                role="button">\r\n                Custom trigger\r\n            </p>\r\n\r\n            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>\r\n            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n    </section>\r\n</template>\r\n\r\n<style scoped>\r\n    .tag {\r\n        cursor: pointer;\r\n    }\r\n</style>\r\n'},1529:function(e,t){e.exports='<template>\r\n    <nav class="navbar">\r\n        <div class="navbar-brand">\r\n            <a class="navbar-item">\r\n                <img src="/static/img/buefy-logo.png" alt="Buefy">\r\n            </a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="github"></b-icon></a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="twitter"></b-icon></a>\r\n        </div>\r\n\r\n        <div class="navbar-menu">\r\n            <div class="navbar-end">\r\n                <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>\r\n                    <a\r\n                        class="navbar-item"\r\n                        slot="trigger"\r\n                        role="button">\r\n                        <span>Login</span>\r\n                        <b-icon icon="menu-down"></b-icon>\r\n                    </a>\r\n\r\n                    <b-dropdown-item\r\n                        aria-role="menu-item"\r\n                        :focusable="false"\r\n                        custom\r\n                        paddingless>\r\n                        <form action="">\r\n                            <div class="modal-card" style="width:300px;">\r\n                                <section class="modal-card-body">\r\n                                    <b-field label="Email">\r\n                                        <b-input\r\n                                            type="email"\r\n                                            placeholder="Your email"\r\n                                            required>\r\n                                        </b-input>\r\n                                    </b-field>\r\n\r\n                                    <b-field label="Password">\r\n                                        <b-input\r\n                                            type="password"\r\n                                            password-reveal\r\n                                            placeholder="Your password"\r\n                                            required>\r\n                                        </b-input>\r\n                                    </b-field>\r\n\r\n                                    <b-checkbox>Remember me</b-checkbox>\r\n                                </section>\r\n                                <footer class="modal-card-foot">\r\n                                    <button class="button is-primary">Login</button>\r\n                                </footer>\r\n                            </div>\r\n                        </form>\r\n                    </b-dropdown-item>\r\n                </b-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</template>\r\n'},1530:function(e,t){e.exports='<template>\r\n    <nav class="navbar">\r\n        <div class="navbar-brand">\r\n            <a class="navbar-item">\r\n                <img src="/static/img/buefy-logo.png" alt="Buefy">\r\n            </a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="github"></b-icon></a>\r\n            <a class="navbar-item"><b-icon pack="fab" icon="twitter"></b-icon></a>\r\n        </div>\r\n\r\n        <div class="navbar-menu">\r\n            <div class="navbar-end">\r\n                <b-dropdown                    \r\n                    v-model="navigation"\r\n                    position="is-bottom-left"\r\n                    aria-role="menu">\r\n                    <a\r\n                        class="navbar-item"\r\n                        slot="trigger"\r\n                        role="button">\r\n                        <span>Menu</span>\r\n                        <b-icon icon="menu-down"></b-icon>\r\n                    </a>\r\n\r\n                    <b-dropdown-item custom aria-role="menuitem">\r\n                        Logged as <b>Rafael Beraldo</b>\r\n                    </b-dropdown-item>\r\n                    <hr class="dropdown-divider">\r\n                    <b-dropdown-item has-link aria-role="menuitem">\r\n                        <a href="https://google.com" target="_blank">\r\n                            <b-icon icon="link"></b-icon>\r\n                            Google (link)\r\n                        </a>\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="home" aria-role="menuitem">\r\n                        <b-icon icon="home"></b-icon>\r\n                        Home\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="products" aria-role="menuitem">\r\n                        <b-icon icon="cart"></b-icon>\r\n                        Products\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="blog" disabled aria-role="menuitem">\r\n                        <b-icon icon="book-open"></b-icon>\r\n                        Blog\r\n                    </b-dropdown-item>\r\n                    <hr class="dropdown-divider" aria-role="menuitem">\r\n                    <b-dropdown-item value="settings">\r\n                        <b-icon icon="settings"></b-icon>\r\n                        Settings\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="logout" aria-role="menuitem">\r\n                        <b-icon icon="logout"></b-icon>\r\n                        Logout\r\n                    </b-dropdown-item>\r\n                </b-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                navigation: \'home\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1531:function(e,t){e.exports='<template>\r\n    <b-dropdown v-model="isPublic" aria-role="list">\r\n        <button class="button is-primary" type="button" slot="trigger">\r\n            <template v-if="isPublic">\r\n                <b-icon icon="earth"></b-icon>\r\n                <span>Public</span>\r\n            </template>\r\n            <template v-else>\r\n                <b-icon icon="account-multiple"></b-icon>\r\n                <span>Friends</span>\r\n            </template>\r\n            <b-icon icon="menu-down"></b-icon>\r\n        </button>\r\n\r\n        <b-dropdown-item :value="true" aria-role="listitem">\r\n            <div class="media">\r\n                <b-icon class="media-left" icon="earth"></b-icon>\r\n                <div class="media-content">\r\n                    <h3>Public</h3>\r\n                    <small>Everyone can see</small>\r\n                </div>\r\n            </div>\r\n        </b-dropdown-item>\r\n\r\n        <b-dropdown-item :value="false" aria-role="listitem">\r\n            <div class="media">\r\n                <b-icon class="media-left" icon="account-multiple"></b-icon>\r\n                <div class="media-content">\r\n                    <h3>Friends</h3>\r\n                    <small>Only friends can see</small>\r\n                </div>\r\n            </div>\r\n        </b-dropdown-item>\r\n    </b-dropdown>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isPublic: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1532:function(e,t){e.exports='<template>\r\n    <section>\r\n        <p class="content"><b>selected</b>: {{ selectedOptions }}</p>\r\n        <b-dropdown\r\n            v-model="selectedOptions"\r\n            multiple\r\n            aria-role="list">\r\n            <button class="button is-primary" type="button" slot="trigger">\r\n                <span>Selected ({{ selectedOptions.length }})</span>\r\n                <b-icon icon="menu-down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item value="option1" aria-role="listitem">\r\n                <span>Option 1</span>\r\n            </b-dropdown-item>\r\n\r\n            <b-dropdown-item value="option2" aria-role="listitem">\r\n                <span>Option 2</span>\r\n            </b-dropdown-item>\r\n\r\n            <b-dropdown-item value="option3" aria-role="listitem">\r\n                <span>Option 3</span>\r\n            </b-dropdown-item>\r\n        </b-dropdown>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                selectedOptions: []\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1533:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}},[n("p",[e._v("\n            While it appear as a modal for tablet and smartphones,\n            Dropdowns with "),n("code",[e._v("hoverable")]),e._v(" prop won't change it's behavior to avoid any malfunction with hover.\n        ")])]),e._v(" "),n("Example",{attrs:{component:e.ExContentPosition,code:e.ExContentPositionCode,title:"Content and position",paddingless:""}},[n("p",[e._v("Add the "),n("code",[e._v("custom")]),e._v(" prop to the item to add "),n("strong",[e._v("any type of content")]),e._v(".")]),e._v(" "),n("p",[e._v("Add the "),n("code",[e._v(':focusable="false"')]),e._v(" prop to the "),n("code",[e._v("dropdown-item")]),e._v(" if you dont want it to be focusable.")])]),e._v(" "),n("Example",{attrs:{component:e.ExHasLinkDisabled,code:e.ExHasLinkDisabledCode,title:"Links within",paddingless:""}},[n("p",[e._v("Add the "),n("code",[e._v("has-link")]),e._v(" prop to add a anchor tag / router-link, or "),n("code",[e._v("disabled")]),e._v(" to disable an item.")])]),e._v(" "),n("Example",{attrs:{component:e.ExCustomize,code:e.ExCustomizeCode,title:"Customizing with v-model"}}),e._v(" "),n("Example",{attrs:{component:e.ExCustomizeMultiple,code:e.ExCustomizeMultipleCode,title:"Multiple"}},[n("div",{staticClass:"tags has-addons"},[n("span",{staticClass:"tag is-success"},[e._v("New!")]),e._v(" "),n("span",{staticClass:"tag is-info"},[e._v("0.7.6")])]),e._v(" "),n("p",[e._v("Add the "),n("code",[e._v("multiple")]),e._v(" prop to select one or more item.")])]),e._v(" "),n("ApiView",{attrs:{data:e.api}}),e._v(" "),n("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"Dropdown",props:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>hoverable</code>",description:"Dropdown will be triggered by hover instead of click",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>position</code>",description:"Optional, position of the dropdown relative to the trigger",type:"String",values:"<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>",default:"Bottom right"},{name:"<code>disabled</code>",description:"Disables dropdown",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"},{name:"<code>inline</code>",description:"Dropdown content (items) are shown inline, trigger is removed",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>mobile-modal</code>",description:"Dropdown content (items) are shown into a modal on mobile",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>aria-role</code>",description:"Role attribute to be passed to list container for better accessibility. Use <code>menu</code> only in situations where your dropdown is related to navigation menus.",type:"String",values:"<code>list</code>, <code>menu</code>",default:"—"},{name:"<code>multiple</code>",description:"Allows multiple selections",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>trap-focus</code>",description:"Trap focus inside the dropdown.",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>can-close</code>",description:"Can close dropdown by pressing escape or by clicking outside",type:"Boolean, Array",values:"<code>escape</code>, <code>outside</code>",default:"<code>true</code>"},{name:"<code>close-on-click</code>",description:"Close dropdown when content is clicked",type:"Boolean",values:"—",default:"<code>true</code>"}],slots:[{name:"default",description:"",props:""},{name:"<code>trigger</code>",description:"Trigger content for the dropdown",props:"—"}],events:[{name:"<code>change</code>",description:"Triggers when an item is selected",parameters:"<code>value: String</code>"},{name:"<code>active-change</code>",description:"Triggers when dropdown is activated or deactivated (visibility of list)",parameters:"<code>active: Boolean</code>"}],methods:[{name:"<code>toggle</code>",description:"Toggle activation (dropdown list visibility)"}]},{title:"Item",props:[{name:"<code>value</code>",description:"The value that will be returned on events and v-model",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>separator</code>",description:"Set the item to be a separator",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Item is disabled",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>focusable</code>",description:"Item can be focused",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>custom</code>",description:"Item is not a clickable item",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>has-link</code>",description:"Use it if your item is an anchor tag or <code>router-link</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>paddingless</code>",description:"Remove padding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>aria-role</code>",description:"Role attribute to be passed to list item for better accessibility. Use <code>menuitem</code> only in situations where your dropdown is related to navigation menus.",type:"String",values:"<code>listitem</code>, <code>menuitem</code>",default:"—"}],slots:[{name:"default",description:"",props:""}],events:[{name:"<code>click</code>",description:"Triggers when the item is clicked",parameters:"—"}]}]},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"<code>$dropdown-mobile-breakpoint</code>",description:"The dropdown will be displayed as a modal below this value.",default:"<code>$desktop</code>"},{name:"<code>$dropdown-background-color</code>",description:"Modal background color when the dropdown is shown as a modal.",default:"<code>rgba($black, 0.86)</code>"},{name:"<code>$dropdown-disabled-opacity:</code>",description:"Defines dropdown disabled opacity.",default:"<code>0.5</code>"}]},172:function(e,t,n){function o(e){n(1102)}var r=n(0)(null,n(1104),o,"data-v-19806782",null);e.exports=r.exports},173:function(e,t,n){var o=n(0)(null,n(1105),null,null,null);e.exports=o.exports},174:function(e,t,n){var o=n(0)(n(1106),n(1107),null,null,null);e.exports=o.exports},175:function(e,t,n){var o=n(0)(n(1108),n(1109),null,null,null);e.exports=o.exports},176:function(e,t,n){var o=n(0)(n(1110),n(1111),null,null,null);e.exports=o.exports},376:function(e,t,n){var o=n(0)(n(1527),n(1533),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=14.81eb80a1424d6c8cfa81.js.map