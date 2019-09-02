webpackJsonp([38,177,234],{1254:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(185),n=o(186),r=o.n(n),i=o(1255),s=o.n(i);t.default={data:function(){return{api:a.default,ExSimple:r.a,ExSimpleCode:s.a}}}},1255:function(e,t){e.exports='<template>\r\n    <b-navbar>\r\n        <template slot="brand">\r\n            <b-navbar-item tag="router-link" :to="{ path: \'/\' }">\r\n                <img\r\n                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"\r\n                    alt="Lightweight UI components for Vue.js based on Bulma"\r\n                >\r\n            </b-navbar-item>\r\n        </template>\r\n        <template slot="start">\r\n            <b-navbar-item href="#">\r\n                Home\r\n            </b-navbar-item>\r\n            <b-navbar-item href="#">\r\n                Documentation\r\n            </b-navbar-item>\r\n            <b-navbar-dropdown label="Info">\r\n                <b-navbar-item href="#">\r\n                    About\r\n                </b-navbar-item>\r\n                <b-navbar-item href="#">\r\n                    Contact\r\n                </b-navbar-item>\r\n            </b-navbar-dropdown>\r\n        </template>\r\n\r\n        <template slot="end">\r\n            <b-navbar-item tag="div">\r\n                <div class="buttons">\r\n                    <a class="button is-primary">\r\n                        <strong>Sign up</strong>\r\n                    </a>\r\n                    <a class="button is-light">\r\n                        Log in\r\n                    </a>\r\n                </div>\r\n            </b-navbar-item>\r\n        </template>\r\n    </b-navbar>\r\n</template>\r\n'},1256:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),o("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},185:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"Navbar",props:[{name:"<code>transparent</code>",description:"To seamlessly integrate the navbar in any visual context, you can add the is-transparent modifier on the navbar component. This will remove any hover or active background from the navbar items",type:"Boolean",values:"—",default:"false"},{name:"<code>fixed-top</code>",description:"Fixes the navbar to the top of the page",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>fixed-bottom</code>",description:"Fixes the navbar to the bottom of the page",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>is-active</code>",description:"To control the behaviour of the mobile menu programmatically, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>type</code>",description:"Type (color) of the background, optional",type:"String, ",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                  <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                  <code>is-warning</code>, <code>is-danger</code>,\n                  and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>wrapper-class</code>",description:"To wrap the navbar content into an div with the provided class",type:"String",values:"—",default:"—"},{name:"<code>close-on-click</code>",description:"Control the behavior of the mobile menu by clicking on a link or outside the menu",type:"Boolean",values:"<code>true</code>, <code>false</code>",default:"<code>false</code>"}],slots:[{name:"brand",description:"The slot for the brand logo",props:"—"},{name:"burger",description:"The slot for the burger that triggers the menu toggle",props:"<code>isOpened: Boolean</code>, <code>toggleActive: Function</code>"},{name:"start",description:"Items that will appear on the left",props:"—"},{name:"end",description:"Items that  will appear on the right",props:"—"}]},{title:"Navbar Item",props:[{name:"<code>tag</code>",description:"Sets the type of the component that have to render as navbar-item",type:"Boolean",values:"<code>a</code>, <code>router-link</code>, <code>div</code> and his html attributes like href, to, etc...",default:"a"},{name:"<code>active</code>",description:"Item is active",type:"Boolean",values:"-",default:"false"}]},{title:"Navbar Dropdown",props:[{name:"<code>hoverable</code>",description:"Dropdown will be triggered by hover instead of click",type:"Boolean",values:"-",default:"false"},{name:"<code>active</code>",description:"Item is active",type:"Boolean",values:"-",default:"false"}],slots:[{name:"default",description:"Menu item body",props:"—"},{name:"<code>label</code>",description:"Dropdown menu custom label",props:"-"}]}]},186:function(e,t,o){var a=o(0)(null,o(984),null,null,null);e.exports=a.exports},319:function(e,t,o){var a=o(0)(o(1254),o(1256),null,null,null);e.exports=a.exports},984:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-navbar",[o("template",{slot:"brand"},[o("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[o("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png",alt:"Lightweight UI components for Vue.js based on Bulma"}})])],1),e._v(" "),o("template",{slot:"start"},[o("b-navbar-item",{attrs:{href:"#"}},[e._v("\n            Home\n        ")]),e._v(" "),o("b-navbar-item",{attrs:{href:"#"}},[e._v("\n            Documentation\n        ")]),e._v(" "),o("b-navbar-dropdown",{attrs:{label:"Info"}},[o("b-navbar-item",{attrs:{href:"#"}},[e._v("\n                About\n            ")]),e._v(" "),o("b-navbar-item",{attrs:{href:"#"}},[e._v("\n                Contact\n            ")])],1)],1),e._v(" "),o("template",{slot:"end"},[o("b-navbar-item",{attrs:{tag:"div"}},[o("div",{staticClass:"buttons"},[o("a",{staticClass:"button is-primary"},[o("strong",[e._v("Sign up")])]),e._v(" "),o("a",{staticClass:"button is-light"},[e._v("\n                    Log in\n                ")])])])],1)],2)},staticRenderFns:[]}}});
//# sourceMappingURL=38.6bc493cb04764ee7449a.js.map