webpackJsonp([15,46,104,105,106,158],{1067:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(216),i=e(217),l=e.n(i),s=e(1068),a=e.n(s),r=e(218),u=e.n(r),c=e(1069),d=e.n(c),b=e(219),p=e.n(b),m=e(1070),v=e.n(m),f=e(220),g=e.n(f),y=e(1071),_=e.n(y);o.default={data:function(){return{api:n.default,ExSimple:l.a,ExStyles:u.a,ExMultilined:p.a,ExToggle:g.a,ExSimpleCode:a.a,ExStylesCode:d.a,ExMultilinedCode:v.a,ExToggleCode:_.a}}}},1068:function(t,o){t.exports='<template>\r\n    <section>\r\n        <b-tooltip label="Tooltip right"\r\n            position="is-right">\r\n            <button class="button is-dark">\r\n                Right\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip top">\r\n            <button class="button is-dark">\r\n                Top (default)\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip bottom"\r\n            position="is-bottom">\r\n            <button class="button is-dark">\r\n                Bottom\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip left"\r\n            position="is-left">\r\n            <button class="button is-dark">\r\n                Left\r\n            </button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n'},1069:function(t,o){t.exports='<template>\r\n    <section>\r\n        <b-tooltip label="Text is dashed" dashed>\r\n            Simple text\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Maybe you like a little animation"\r\n            position="is-bottom"\r\n            animated>\r\n            <button class="button">Animated</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="You prefer dark?"\r\n            type="is-dark"\r\n            position="is-bottom">\r\n            <button class="button">Dark</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Or light?"\r\n            type="is-light"\r\n            position="is-bottom">\r\n            <button class="button">Light</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="I\'m never closing" always>\r\n            <button class="button">Always</button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="I\'m square"\r\n            position="is-bottom"\r\n            square>\r\n            <button class="button">Square</button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n'},1070:function(t,o){t.exports='<template>\r\n    <section>\r\n        <b-tooltip\r\n            label="Tooltip multilined, probably because it\'s too long for a casual tooltip"\r\n            multilined>\r\n            <button class="button is-dark">\r\n                Multiline (default)\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip\r\n            label="It\'s not briefy, but also not long enough"\r\n            size="is-small"\r\n            multilined>\r\n            <button class="button is-dark">\r\n                Multiline (small)\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip\r\n            label="Tooltip large multilined, because it\'s really long to be on a medium size. Did I tell you it\'s really long? Yes, it is — I asure you!"\r\n            position="is-bottom"\r\n            size="is-large"\r\n            multilined>\r\n            <button class="button is-dark">\r\n                Multiline (large)\r\n            </button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n'},1071:function(t,o){t.exports='<template>\r\n    <section>\r\n        <button class="button is-primary"\r\n            @click="active = !active">\r\n            Toggle\r\n        </button>\r\n        <hr>\r\n\r\n        <b-tooltip label="I\'m never closing"\r\n            :active="active"\r\n            always>\r\n            <button class="button">\r\n                Always\r\n            </button>\r\n        </b-tooltip>\r\n\r\n        <b-tooltip label="Tooltip right"\r\n            position="is-right"\r\n            :active="active">\r\n            <button class="button is-dark">\r\n                Right\r\n            </button>\r\n        </b-tooltip>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                active: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1072:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("Example",{attrs:{component:t.ExSimple,code:t.ExSimpleCode,vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExStyles,code:t.ExStylesCode,title:"Styles",vertical:""}}),t._v(" "),e("Example",{attrs:{component:t.ExMultilined,code:t.ExMultilinedCode,title:"Multilined",vertical:""}},[e("p",[t._v("Well, it's not always "),e("em",[t._v("that")]),t._v(" brief.")])]),t._v(" "),e("Example",{attrs:{component:t.ExToggle,code:t.ExToggleCode,title:"Toggle",vertical:""}}),t._v(" "),e("ApiView",{attrs:{data:t.api}})],1)},staticRenderFns:[]}},216:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=[{props:[{name:"<code>type</code>",description:"Type (color) of the tooltip",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>active</code>",description:"Whether tooltip is active or not",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>label</code>",description:"Tooltip text",type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Tooltip position in relation to the element",type:"String",values:"<code>is-top</code>, <code>is-bottom</code>, <code>is-left</code>, <code>is-right</code>",default:"<code>is-top</code>"},{name:"<code>always</code>",description:"Tooltip will be always active",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animated</code>",description:"Tooltip will have a little fade animation",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>square</code>",description:"Tooltip will be square (not rounded corners)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>dashed</code>",description:"Tooltip slot will have a dashed underline",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>multilined</code>",description:"Tooltip will be multilined",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>size</code>",description:"Tooltip multiline size (only works for multilined tooltips)",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"<code>is-medium</code>"}]}]},217:function(t,o,e){var n=e(0)(null,e(883),null,null,null);t.exports=n.exports},218:function(t,o,e){var n=e(0)(null,e(884),null,null,null);t.exports=n.exports},219:function(t,o,e){var n=e(0)(null,e(885),null,null,null);t.exports=n.exports},220:function(t,o,e){var n=e(0)(e(886),e(887),null,null,null);t.exports=n.exports},257:function(t,o,e){var n=e(0)(e(1067),e(1072),null,null,null);t.exports=n.exports},883:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Tooltip right",position:"is-right"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Right\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip top"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Top (default)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip bottom",position:"is-bottom"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Bottom\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip left",position:"is-left"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Left\n        ")])])],1)},staticRenderFns:[]}},884:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Text is dashed",dashed:""}},[t._v("\n        Simple text\n    ")]),t._v(" "),e("b-tooltip",{attrs:{label:"Maybe you like a little animation",position:"is-bottom",animated:""}},[e("button",{staticClass:"button"},[t._v("Animated")])]),t._v(" "),e("b-tooltip",{attrs:{label:"You prefer dark?",type:"is-dark",position:"is-bottom"}},[e("button",{staticClass:"button"},[t._v("Dark")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Or light?",type:"is-light",position:"is-bottom"}},[e("button",{staticClass:"button"},[t._v("Light")])]),t._v(" "),e("b-tooltip",{attrs:{label:"I'm never closing",always:""}},[e("button",{staticClass:"button"},[t._v("Always")])]),t._v(" "),e("b-tooltip",{attrs:{label:"I'm square",position:"is-bottom",square:""}},[e("button",{staticClass:"button"},[t._v("Square")])])],1)},staticRenderFns:[]}},885:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Tooltip multilined, probably because it's too long for a casual tooltip",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (default)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"It's not briefy, but also not long enough",size:"is-small",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (small)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!",position:"is-bottom",size:"is-large",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (large)\n        ")])])],1)},staticRenderFns:[]}},886:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{active:!0}}}},887:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("button",{staticClass:"button is-primary",on:{click:function(o){t.active=!t.active}}},[t._v("\n        Toggle\n    ")]),t._v(" "),e("hr"),t._v(" "),e("b-tooltip",{attrs:{label:"I'm never closing",active:t.active,always:""}},[e("button",{staticClass:"button"},[t._v("\n            Always\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip right",position:"is-right",active:t.active}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Right\n        ")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=15.8c26a4eec5bf93461fe5.js.map