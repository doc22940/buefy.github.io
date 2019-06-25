webpackJsonp([28,113,182,183,220],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>open</code>",description:"Whether collapse is open or not, use the .sync modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"},{name:"<code>aria-id</code>",description:"Id for the container div. Should be used with aria-controls on trigger for better accessibility.",type:"String",values:"—",default:""}],slots:[{name:"default",description:"Content to show/hide",props:"—"},{name:"<code>trigger</code>",description:"Trigger content",props:"<code>open: Boolean</code>"}],events:[{name:"<code>open</code>",description:"Triggers when user opened",parameters:"—"},{name:"<code>close</code>",description:"Triggers when user closed",parameters:"—"}],methods:[{name:"<code>toggle</code>",description:"Toggle activation"}]}]},107:function(e,t,n){var r=n(0)(null,n(826),null,null,null);e.exports=r.exports},1079:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(106),a=n(107),i=n.n(a),s=n(1080),o=n.n(s),c=n(108),l=n.n(c),u=n(1081),d=n.n(u),p=n(109),m=n.n(p),v=n(1082),f=n.n(v);t.default={data:function(){return{api:r.default,ExSimple:i.a,ExSimpleCode:o.a,ExPanelTemplate:l.a,ExPanelTemplateCode:d.a,ExCardTemplate:m.a,ExCardTemplateCode:f.a}}}},108:function(e,t,n){var r=n(0)(n(827),n(828),null,null,null);e.exports=r.exports},1080:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse :open="false" aria-id="contentIdForA11y1">\r\n            <button\r\n                class="button is-primary"\r\n                slot="trigger"\r\n                aria-controls="contentIdForA11y1">Click me!</button>\r\n            <div class="notification">\r\n                <div class="content">\r\n                    <h3>\r\n                        Subtitle\r\n                    </h3>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n'},1081:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <div class="block">\r\n            <button\r\n                class="button is-medium is-primary"\r\n                @click="isOpen = !isOpen"\r\n                aria-controls="contentIdForA11y2">\r\n                Toggle\r\n            </button>\r\n        </div>\r\n\r\n        <b-collapse\r\n                aria-id="contentIdForA11y2"\r\n                class="panel"\r\n                :open.sync="isOpen">\r\n            <div\r\n                slot="trigger"\r\n                class="panel-heading"\r\n                role="button"\r\n                aria-controls="contentIdForA11y2">\r\n                <strong>Title</strong>\r\n            </div>\r\n            <p class="panel-tabs">\r\n                <a class="is-active">All</a>\r\n                <a>Public</a>\r\n                <a>Private</a>\r\n            </p>\r\n            <div class="panel-block">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isOpen: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1082:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse class="card" aria-id="contentIdForA11y3">\r\n            <div\r\n                slot="trigger" \r\n                slot-scope="props"\r\n                class="card-header"\r\n                role="button"\r\n                aria-controls="contentIdForA11y3">\r\n                <p class="card-header-title">\r\n                    Component\r\n                </p>\r\n                <a class="card-header-icon">\r\n                    <b-icon\r\n                        :icon="props.open ? \'menu-down\' : \'menu-up\'">\r\n                    </b-icon>\r\n                </a>\r\n            </div>\r\n            <div class="card-content">\r\n                <div class="content">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\r\n                    <a>#buefy</a>.\r\n                </div>\r\n            </div>\r\n            <footer class="card-footer">\r\n                <a class="card-footer-item">Save</a>\r\n                <a class="card-footer-item">Edit</a>\r\n                <a class="card-footer-item">Delete</a>\r\n            </footer>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n'},1083:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExPanelTemplate,code:e.ExPanelTemplateCode,title:"Panel",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExCardTemplate,code:e.ExCardTemplateCode,title:"Card",vertical:""}}),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},109:function(e,t,n){var r=n(0)(null,n(829),null,null,null);e.exports=r.exports},275:function(e,t,n){var r=n(0)(n(1079),n(1083),null,null,null);e.exports=r.exports},826:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-collapse",{attrs:{open:!1,"aria-id":"contentIdForA11y1"}},[n("button",{staticClass:"button is-primary",attrs:{slot:"trigger","aria-controls":"contentIdForA11y1"},slot:"trigger"},[e._v("Click me!")]),e._v(" "),n("div",{staticClass:"notification"},[n("div",{staticClass:"content"},[n("h3",[e._v("\n                    Subtitle\n                ")]),e._v(" "),n("p",[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n                    Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n                ")])])])])],1)},staticRenderFns:[]}},827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isOpen:!0}}}},828:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"block"},[n("button",{staticClass:"button is-medium is-primary",attrs:{"aria-controls":"contentIdForA11y2"},on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v("\n            Toggle\n        ")])]),e._v(" "),n("b-collapse",{staticClass:"panel",attrs:{"aria-id":"contentIdForA11y2",open:e.isOpen},on:{"update:open":function(t){e.isOpen=t}}},[n("div",{staticClass:"panel-heading",attrs:{slot:"trigger",role:"button","aria-controls":"contentIdForA11y2"},slot:"trigger"},[n("strong",[e._v("Title")])]),e._v(" "),n("p",{staticClass:"panel-tabs"},[n("a",{staticClass:"is-active"},[e._v("All")]),e._v(" "),n("a",[e._v("Public")]),e._v(" "),n("a",[e._v("Private")])]),e._v(" "),n("div",{staticClass:"panel-block"},[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n        ")])])],1)},staticRenderFns:[]}},829:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-collapse",{staticClass:"card",attrs:{"aria-id":"contentIdForA11y3"},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[n("p",{staticClass:"card-header-title"},[e._v("\n                Component\n            ")]),e._v(" "),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}])},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n                "),n("a",[e._v("#buefy")]),e._v(".\n            ")])]),e._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item"},[e._v("Save")]),e._v(" "),n("a",{staticClass:"card-footer-item"},[e._v("Edit")]),e._v(" "),n("a",{staticClass:"card-footer-item"},[e._v("Delete")])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.e6057d53cc1ab195f091.js.map