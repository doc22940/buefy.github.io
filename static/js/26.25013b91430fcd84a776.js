webpackJsonp([26,59,146,147,148,222,223],{1156:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Tooltip right",position:"is-right"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Right\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip top"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Top (default)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip bottom",position:"is-bottom"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Bottom\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip left",position:"is-left"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Left\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"delayed by 1000ms",delay:1e3}},[e("button",{staticClass:"button is-primary"},[t._v("\n            Delayed\n        ")])])],1)},staticRenderFns:[]}},1157:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Text is dashed",dashed:""}},[t._v("\n        Simple text\n    ")]),t._v(" "),e("b-tooltip",{attrs:{label:"Maybe you like a little animation",position:"is-bottom",animated:""}},[e("button",{staticClass:"button"},[t._v("Animated")])]),t._v(" "),e("b-tooltip",{attrs:{label:"You prefer dark?",type:"is-dark",position:"is-bottom"}},[e("button",{staticClass:"button"},[t._v("Dark")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Or light?",type:"is-light",position:"is-bottom"}},[e("button",{staticClass:"button"},[t._v("Light")])]),t._v(" "),e("b-tooltip",{attrs:{label:"I'm never closing",always:""}},[e("button",{staticClass:"button"},[t._v("Always")])]),t._v(" "),e("b-tooltip",{attrs:{label:"I'm square",position:"is-bottom",square:""}},[e("button",{staticClass:"button"},[t._v("Square")])])],1)},staticRenderFns:[]}},1158:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Tooltip multilined, probably because it's too long for a casual tooltip",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (default)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"It's not briefy, but also not long enough",size:"is-small",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (small)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!",position:"is-bottom",size:"is-large",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (large)\n        ")])])],1)},staticRenderFns:[]}},1159:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{active:!0}}}},1160:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("button",{staticClass:"button is-primary",on:{click:function(o){t.active=!t.active}}},[t._v("\n        Toggle\n    ")]),t._v(" "),e("hr"),t._v(" "),e("b-tooltip",{attrs:{label:"I'm never closing",active:t.active,always:""}},[e("button",{staticClass:"button"},[t._v("\n            Always\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip right",position:"is-right",active:t.active}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Right\n        ")])])],1)},staticRenderFns:[]}},1418:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(302),l=e(303),i=e(304),a=e.n(i),s=e(1419),r=e.n(s),u=e(305),c=e.n(u),d=e(1420),b=e.n(d),p=e(306),m=e.n(p),v=e(1421),f=e.n(v),y=e(307),g=e.n(y),_=e(1422),x=e.n(_);o.default={data:function(){return{api:n.default,variables:l.default,ExSimple:a.a,ExStyles:c.a,ExMultilined:m.a,ExToggle:g.a,ExSimpleCode:r.a,ExStylesCode:b.a,ExMultilinedCode:f.a,ExToggleCode:x.a}}}},1419:function(t,o){t.exports='<template>\r\n    <section>\r\n        <b-tooltip label="Tooltip right"\r\n            position="is-right">\r\n            <button class="button is-dark">\r\n                Right\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip top">\r\n            <button class="button is-dark">\r\n                Top (default)\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip bottom"\r\n            position="is-bottom">\r\n            <button class="button is-dark">\r\n                Bottom\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip left"\r\n            position="is-left">\r\n            <button class="button is-dark">\r\n                Left\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="delayed by 1000ms"\r\n            :delay="1000">\r\n            <button class="button is-primary">\r\n                Delayed\r\n            </button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n'},1420:function(t,o){t.exports='<template>\r\n    <section>\r\n        <b-tooltip label="Text is dashed" dashed>\r\n            Simple text\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Maybe you like a little animation"\r\n            position="is-bottom"\r\n            animated>\r\n            <button class="button">Animated</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="You prefer dark?"\r\n            type="is-dark"\r\n            position="is-bottom">\r\n            <button class="button">Dark</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Or light?"\r\n            type="is-light"\r\n            position="is-bottom">\r\n            <button class="button">Light</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="I\'m never closing" always>\r\n            <button class="button">Always</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="I\'m square"\r\n            position="is-bottom"\r\n            square>\r\n            <button class="button">Square</button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n'},1421:function(t,o){t.exports='<template>\r\n    <section>\r\n        <b-tooltip\r\n            label="Tooltip multilined, probably because it\'s too long for a casual tooltip"\r\n            multilined>\r\n            <button class="button is-dark">\r\n                Multiline (default)\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip\r\n            label="It\'s not briefy, but also not long enough"\r\n            size="is-small"\r\n            multilined>\r\n            <button class="button is-dark">\r\n                Multiline (small)\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip\r\n            label="Tooltip large multilined, because it\'s really long to be on a medium size. Did I tell you it\'s really long? Yes, it is — I asure you!"\r\n            position="is-bottom"\r\n            size="is-large"\r\n            multilined>\r\n            <button class="button is-dark">\r\n                Multiline (large)\r\n            </button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n'},1422:function(t,o){t.exports='<template>\r\n    <section>\r\n        <button class="button is-primary"\r\n            @click="active = !active">\r\n            Toggle\r\n        </button>\r\n        <hr>\r\n\r\n        <b-tooltip label="I\'m never closing"\r\n            :active="active"\r\n            always>\r\n            <button class="button">\r\n                Always\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip right"\r\n            position="is-right"\r\n            :active="active">\r\n            <button class="button is-dark">\r\n                Right\r\n            </button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                active: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1423:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("Example",{attrs:{component:t.ExSimple,code:t.ExSimpleCode,vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExStyles,code:t.ExStylesCode,title:"Styles",vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExMultilined,code:t.ExMultilinedCode,title:"Multilined",vertical:""}},[e("p",[t._v("Well, it's not always "),e("em",[t._v("that")]),t._v(" brief.")])]),t._v(" "),e("Example",{attrs:{component:t.ExToggle,code:t.ExToggleCode,title:"Toggle",vertical:""}}),t._v(" "),e("ApiView",{attrs:{data:t.api}}),t._v(" "),e("VariablesView",{attrs:{data:t.variables}})],1)},staticRenderFns:[]}},302:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the tooltip",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>active</code>",description:"Whether tooltip is active or not",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>label</code>",description:"Tooltip text",type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Tooltip position in relation to the element",type:"String",values:"<code>is-top</code>, <code>is-bottom</code>, <code>is-left</code>, <code>is-right</code>",default:"<code>is-top</code>"},{name:"<code>always</code>",description:"Tooltip will be always active",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animated</code>",description:"Tooltip will have a little fade animation",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>square</code>",description:"Tooltip will be square (not rounded corners)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>dashed</code>",description:"Tooltip slot will have a dashed underline",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>multilined</code>",description:"Tooltip will be multilined",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>size</code>",description:"Tooltip multiline size (only works for multilined tooltips)",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"<code>is-medium</code>"},{name:"<code>delay</code>",description:"Tooltip delay before it appears (number in ms)",type:"Number",values:"—",default:"<code>0</code>"}]}]},303:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=[{name:"<code>$tooltip-arrow-size</code>",default:"<code>5px</code>"},{name:"<code>$tooltip-arrow-margin</code>",default:"<code>2px</code>"},{name:"<code>$tooltip-multiline-sizes</code>",default:"<code>\n        (\n            small: 180px,\n            medium: 240px,\n            large: 300px\n        )\n        </code>"}]},304:function(t,o,e){var n=e(0)(null,e(1156),null,null,null);t.exports=n.exports},305:function(t,o,e){var n=e(0)(null,e(1157),null,null,null);t.exports=n.exports},306:function(t,o,e){var n=e(0)(null,e(1158),null,null,null);t.exports=n.exports},307:function(t,o,e){var n=e(0)(e(1159),e(1160),null,null,null);t.exports=n.exports},355:function(t,o,e){var n=e(0)(e(1418),e(1423),null,null,null);t.exports=n.exports}});
//# sourceMappingURL=26.25013b91430fcd84a776.js.map