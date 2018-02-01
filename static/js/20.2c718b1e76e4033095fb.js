webpackJsonp([20,91,140,141,169],{1018:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-container"},[n("h1",{staticClass:"title is-spaced"},[e._v("Collapse")]),e._v(" "),n("h2",{staticClass:"subtitle"},[e._v("Collapse is a easy way to toggle what you want")]),e._v(" "),n("hr"),e._v(" "),n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExPanelTemplate,code:e.ExPanelTemplateCode,title:"Panel",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExCardTemplate,code:e.ExCardTemplateCode,title:"Card",vertical:""}}),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},122:function(e,t,n){var r=n(0)(null,n(760),null,null,null);e.exports=r.exports},123:function(e,t,n){var r=n(0)(n(682),n(787),null,null,null);e.exports=r.exports},124:function(e,t,n){var r=n(0)(null,n(848),null,null,null);e.exports=r.exports},229:function(e,t,n){var r=n(0)(n(871),n(1018),null,null,null);e.exports=r.exports},682:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isOpen:!0}}}},760:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-collapse",{staticClass:"card",scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("\n                Component\n            ")]),e._v(" "),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}])},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n                "),n("a",[e._v("#buefy")]),e._v(".\n            ")])]),e._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item"},[e._v("Save")]),e._v(" "),n("a",{staticClass:"card-footer-item"},[e._v("Edit")]),e._v(" "),n("a",{staticClass:"card-footer-item"},[e._v("Delete")])])])],1)},staticRenderFns:[]}},787:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"block"},[n("button",{staticClass:"button is-medium is-primary",on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v("\n            Toggle\n        ")])]),e._v(" "),n("b-collapse",{staticClass:"panel",attrs:{open:e.isOpen},on:{"update:open":function(t){e.isOpen=t}}},[n("div",{staticClass:"panel-heading",attrs:{slot:"trigger"},slot:"trigger"},[n("strong",[e._v("Title")])]),e._v(" "),n("p",{staticClass:"panel-tabs"},[n("a",{staticClass:"is-active"},[e._v("All")]),e._v(" "),n("a",[e._v("Public")]),e._v(" "),n("a",[e._v("Private")])]),e._v(" "),n("div",{staticClass:"panel-block"},[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n        ")])])],1)},staticRenderFns:[]}},848:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-collapse",{attrs:{open:!1}},[n("button",{staticClass:"button is-primary",attrs:{slot:"trigger"},slot:"trigger"},[e._v("Click me!")]),e._v(" "),n("div",{staticClass:"notification"},[n("div",{staticClass:"content"},[n("h3",[e._v("\n                    Subtitle\n                ")]),e._v(" "),n("p",[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n                    Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n                ")])])])])],1)},staticRenderFns:[]}},871:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(89),a=n(124),s=n.n(a),i=n(912),l=n.n(i),o=n(123),c=n.n(o),u=n(911),d=n.n(u),p=n(122),m=n.n(p),v=n(910),f=n.n(v);t.default={data:function(){return{api:r.default,ExSimple:s.a,ExSimpleCode:l.a,ExPanelTemplate:c.a,ExPanelTemplateCode:d.a,ExCardTemplate:m.a,ExCardTemplateCode:f.a}}}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>open</code>",description:"Whether collapse is open or not, use the .sync modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"}],slots:[{name:"default",description:"Content to show/hide",props:"—"},{name:"<code>trigger</code>",description:"Trigger content",props:"<code>open: Boolean</code>"}],events:[{name:"<code>open</code>",description:"Triggers when user opened",parameters:"—"},{name:"<code>close</code>",description:"Triggers when user closed",parameters:"—"}],methods:[{name:"<code>toggle</code>",description:"Toggle activation"}]}]},910:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse class="card">\r\n            <div slot="trigger" slot-scope="props" class="card-header">\r\n                <p class="card-header-title">\r\n                    Component\r\n                </p>\r\n                <a class="card-header-icon">\r\n                    <b-icon\r\n                        :icon="props.open ? \'menu-down\' : \'menu-up\'">\r\n                    </b-icon>\r\n                </a>\r\n            </div>\r\n            <div class="card-content">\r\n                <div class="content">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\r\n                    <a>#buefy</a>.\r\n                </div>\r\n            </div>\r\n            <footer class="card-footer">\r\n                <a class="card-footer-item">Save</a>\r\n                <a class="card-footer-item">Edit</a>\r\n                <a class="card-footer-item">Delete</a>\r\n            </footer>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n'},911:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <div class="block">\r\n            <button class="button is-medium is-primary"\r\n                @click="isOpen = !isOpen">\r\n                Toggle\r\n            </button>\r\n        </div>\r\n\r\n        <b-collapse class="panel" :open.sync="isOpen">\r\n            <div slot="trigger" class="panel-heading">\r\n                <strong>Title</strong>\r\n            </div>\r\n            <p class="panel-tabs">\r\n                <a class="is-active">All</a>\r\n                <a>Public</a>\r\n                <a>Private</a>\r\n            </p>\r\n            <div class="panel-block">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isOpen: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},912:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse :open="false">\r\n            <button class="button is-primary" slot="trigger">Click me!</button>\r\n            <div class="notification">\r\n                <div class="content">\r\n                    <h3>\r\n                        Subtitle\r\n                    </h3>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n'}});
//# sourceMappingURL=20.2c718b1e76e4033095fb.js.map