webpackJsonp([19,49,146,147,226,227,284],{1301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(131),o=n(132),i=n.n(o),s=n(1302),a=n.n(s),c=n(133),l=n.n(c),u=n(1303),d=n.n(u),p=n(134),m=n.n(p),v=n(1304),f=n.n(v),b=n(135),_=n.n(b),g=n(1305),x=n.n(g),C=n(136),h=n.n(C),y=n(1306),E=n.n(y);t.default={data:function(){return{api:r.default,ExSimple:i.a,ExSimpleCode:a.a,ExPanelTemplate:l.a,ExPanelTemplateCode:d.a,ExCardTemplate:m.a,ExCardTemplateCode:f.a,ExPosition:_.a,ExPositionCode:x.a,ExAccordion:h.a,ExAccordionCode:E.a}}}},1302:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse :open="false" aria-id="contentIdForA11y1">\r\n            <button\r\n                class="button is-primary"\r\n                slot="trigger"\r\n                aria-controls="contentIdForA11y1">Click me!</button>\r\n            <div class="notification">\r\n                <div class="content">\r\n                    <h3>\r\n                        Subtitle\r\n                    </h3>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n'},1303:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <div class="block">\r\n            <button\r\n                class="button is-medium is-primary"\r\n                @click="isOpen = !isOpen"\r\n                aria-controls="contentIdForA11y2">\r\n                Toggle\r\n            </button>\r\n        </div>\r\n\r\n        <b-collapse\r\n                aria-id="contentIdForA11y2"\r\n                class="panel"\r\n                :open.sync="isOpen">\r\n            <div\r\n                slot="trigger"\r\n                class="panel-heading"\r\n                role="button"\r\n                aria-controls="contentIdForA11y2">\r\n                <strong>Title</strong>\r\n            </div>\r\n            <p class="panel-tabs">\r\n                <a class="is-active">All</a>\r\n                <a>Public</a>\r\n                <a>Private</a>\r\n            </p>\r\n            <div class="panel-block">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isOpen: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1304:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse class="card" aria-id="contentIdForA11y3">\r\n            <div\r\n                slot="trigger" \r\n                slot-scope="props"\r\n                class="card-header"\r\n                role="button"\r\n                aria-controls="contentIdForA11y3">\r\n                <p class="card-header-title">\r\n                    Component\r\n                </p>\r\n                <a class="card-header-icon">\r\n                    <b-icon\r\n                        :icon="props.open ? \'menu-down\' : \'menu-up\'">\r\n                    </b-icon>\r\n                </a>\r\n            </div>\r\n            <div class="card-content">\r\n                <div class="content">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\r\n                    <a>#buefy</a>.\r\n                </div>\r\n            </div>\r\n            <footer class="card-footer">\r\n                <a class="card-footer-item">Save</a>\r\n                <a class="card-footer-item">Edit</a>\r\n                <a class="card-footer-item">Delete</a>\r\n            </footer>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n'},1305:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="content">\r\n            <h3>\r\n                Subtitle\r\n            </h3>\r\n            <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n            </p>\r\n        </div>\r\n        <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">\r\n            <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">\r\n                <b-icon :icon="!props.open ? \'menu-down\' : \'menu-up\'"></b-icon>\r\n                {{ !props.open ? \'All options\' : \'Fewer options\' }}\r\n            </a>\r\n            <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>\r\n                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>\r\n                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\r\n            </p>\r\n        </b-collapse>\r\n    </section>\r\n</template>\r\n\r\n<style scoped>\r\n    .content {\r\n        margin-bottom: 0 !important;\r\n    }\r\n</style>'},1306:function(e,t){e.exports='<template>\r\n    <section>\r\n\r\n        <b-collapse\r\n            class="card"\r\n            v-for="(collapse, index) of collapses"\r\n            :key="index"\r\n            :open="isOpen == index"\r\n            @open="isOpen = index">\r\n            <div\r\n                slot="trigger"\r\n                slot-scope="props"\r\n                class="card-header"\r\n                role="button">\r\n                <p class="card-header-title">\r\n                    {{ collapse.title }}\r\n                </p>\r\n                <a class="card-header-icon">\r\n                    <b-icon\r\n                        :icon="props.open ? \'menu-down\' : \'menu-up\'">\r\n                    </b-icon>\r\n                </a>\r\n            </div>\r\n            <div class="card-content">\r\n                <div class="content">\r\n                    {{ collapse.text }}\r\n                </div>\r\n            </div>\r\n        </b-collapse>\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isOpen: 0,\r\n                collapses: [\r\n                {\r\n                    title: \'Title 1\',\r\n                    text: \'Text 1\'\r\n                },\r\n                {\r\n                    title: \'Title 2\',\r\n                    text: \'Text 2\'\r\n                },\r\n                {\r\n                    title: \'Title 3\',\r\n                    text: \'Text 3\'\r\n                }\r\n                ]\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1307:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExPanelTemplate,code:e.ExPanelTemplateCode,title:"Panel",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExCardTemplate,code:e.ExCardTemplateCode,title:"Card",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExPosition,code:e.ExPositionCode,title:"Position",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExAccordion,code:e.ExAccordionCode,title:"Accordion Effect",vertical:""}}),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},r=[];e.exports={render:n,staticRenderFns:r}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>open</code>",description:"Whether collapse is open or not, use the .sync modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"},{name:"<code>aria-id</code>",description:"Id for the container div. Should be used with aria-controls on trigger for better accessibility.",type:"String",values:"—",default:""},{name:"<code>position</code>",description:"Trigger position",type:"String",values:"<code>is-top</code>, <code>is-bottom</code>",default:"<code>is-top</code>"}],slots:[{name:"default",description:"Content to show/hide",props:"—"},{name:"<code>trigger</code>",description:"Trigger content",props:"<code>open: Boolean</code>"}],events:[{name:"<code>open</code>",description:"Triggers when user opened",parameters:"—"},{name:"<code>close</code>",description:"Triggers when user closed",parameters:"—"}],methods:[{name:"<code>toggle</code>",description:"Toggle activation"}]}]},132:function(e,t,n){var r=n(0),o=n(979),i=r(null,o,!1,null,null,null);e.exports=i.exports},133:function(e,t,n){var r=n(0),o=n(980),i=n(981),s=r(o,i,!1,null,null,null);e.exports=s.exports},134:function(e,t,n){var r=n(0),o=n(982),i=r(null,o,!1,null,null,null);e.exports=i.exports},135:function(e,t,n){function r(e){n(983)}var o=n(0),i=n(985),s=r,a=o(null,i,!1,s,"data-v-01310292",null);e.exports=a.exports},136:function(e,t,n){var r=n(0),o=n(986),i=n(987),s=r(o,i,!1,null,null,null);e.exports=s.exports},353:function(e,t,n){var r=n(0),o=n(1301),i=n(1307),s=r(o,i,!1,null,null,null);e.exports=s.exports},979:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-collapse",{attrs:{open:!1,"aria-id":"contentIdForA11y1"}},[n("button",{staticClass:"button is-primary",attrs:{slot:"trigger","aria-controls":"contentIdForA11y1"},slot:"trigger"},[e._v("Click me!")]),e._v(" "),n("div",{staticClass:"notification"},[n("div",{staticClass:"content"},[n("h3",[e._v("\n                    Subtitle\n                ")]),e._v(" "),n("p",[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n                    Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n                ")])])])])],1)},r=[];e.exports={render:n,staticRenderFns:r}},980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isOpen:!0}}}},981:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"block"},[n("button",{staticClass:"button is-medium is-primary",attrs:{"aria-controls":"contentIdForA11y2"},on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v("\n            Toggle\n        ")])]),e._v(" "),n("b-collapse",{staticClass:"panel",attrs:{"aria-id":"contentIdForA11y2",open:e.isOpen},on:{"update:open":function(t){e.isOpen=t}}},[n("div",{staticClass:"panel-heading",attrs:{slot:"trigger",role:"button","aria-controls":"contentIdForA11y2"},slot:"trigger"},[n("strong",[e._v("Title")])]),e._v(" "),n("p",{staticClass:"panel-tabs"},[n("a",{staticClass:"is-active"},[e._v("All")]),e._v(" "),n("a",[e._v("Public")]),e._v(" "),n("a",[e._v("Private")])]),e._v(" "),n("div",{staticClass:"panel-block"},[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n        ")])])],1)},r=[];e.exports={render:n,staticRenderFns:r}},982:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-collapse",{staticClass:"card",attrs:{"aria-id":"contentIdForA11y3"},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[n("p",{staticClass:"card-header-title"},[e._v("\n                Component\n            ")]),e._v(" "),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}])},[e._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n                "),n("a",[e._v("#buefy")]),e._v(".\n            ")])]),e._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item"},[e._v("Save")]),e._v(" "),n("a",{staticClass:"card-footer-item"},[e._v("Edit")]),e._v(" "),n("a",{staticClass:"card-footer-item"},[e._v("Delete")])])])],1)},r=[];e.exports={render:n,staticRenderFns:r}},983:function(e,t,n){var r=n(984);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(874)("4c9ea7b9",r,!0)},984:function(e,t,n){t=e.exports=n(873)(!0),t.push([e.i,"\n.content[data-v-01310292] {\n    margin-bottom: 0 !important;\n}\n","",{version:3,sources:["C:/Users/Walter/Github/buefy/docs/pages/components/collapse/examples/ExPosition.vue"],names:[],mappings:";AACA;IACI,4BAA4B;CAC/B",file:"ExPosition.vue",sourcesContent:["\n.content[data-v-01310292] {\n    margin-bottom: 0 !important;\n}\n"],sourceRoot:""}])},985:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),e._v(" "),n("b-collapse",{attrs:{open:!1,position:"is-bottom","aria-id":"contentIdForA11y1"},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("a",{attrs:{"aria-controls":"contentIdForA11y1"}},[n("b-icon",{attrs:{icon:t.open?"menu-up":"menu-down"}}),e._v("\n            "+e._s(t.open?"Fewer options":"All options")+"\n        ")],1)}}])},[e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n        ")])])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",[e._v("\n            Subtitle\n        ")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),n("br"),e._v("\n            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. "),n("br"),e._v("\n            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.\n        ")])])}];e.exports={render:n,staticRenderFns:r}},986:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isOpen:0,collapses:[{title:"Title 1",text:"Text 1"},{title:"Title 2",text:"Text 2"},{title:"Title 3",text:"Text 3"}]}}}},987:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",e._l(e.collapses,function(t,r){return n("b-collapse",{key:r,staticClass:"card",attrs:{open:e.isOpen==r},on:{open:function(t){e.isOpen=r}},scopedSlots:e._u([{key:"trigger",fn:function(r){return n("div",{staticClass:"card-header",attrs:{role:"button"}},[n("p",{staticClass:"card-header-title"},[e._v("\n                "+e._s(t.title)+"\n            ")]),e._v(" "),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:r.open?"menu-down":"menu-up"}})],1)])}}],null,!0)},[e._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[e._v("\n                "+e._s(t.text)+"\n            ")])])])}),1)},r=[];e.exports={render:n,staticRenderFns:r}}});
//# sourceMappingURL=19.27442e4d6e31008f95e8.js.map