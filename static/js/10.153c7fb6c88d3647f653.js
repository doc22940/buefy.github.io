webpackJsonp([10,99,100,101,102,195,196,197,266,267],{1170:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{value:5}}}},1171:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{label:"Simple"}},[t("b-slider",{model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})],1),e._v(" "),t("b-field",{attrs:{label:"Disabled"}},[t("b-slider",{attrs:{value:30,disabled:""}})],1)],1)},staticRenderFns:[]}},1172:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{label:"Small"}},[t("b-slider",{attrs:{size:"is-small",value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Default"}},[t("b-slider",{attrs:{value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Medium"}},[t("b-slider",{attrs:{size:"is-medium",value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Large"}},[t("b-slider",{attrs:{size:"is-large",value:20}})],1)],1)},staticRenderFns:[]}},1173:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{label:"Primary"}},[t("b-slider",{attrs:{type:"is-primary",value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Success"}},[t("b-slider",{attrs:{type:"is-success",value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Error"}},[t("b-slider",{attrs:{type:"is-danger",value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Info"}},[t("b-slider",{attrs:{type:"is-info",value:20}})],1),e._v(" "),t("b-field",{attrs:{label:"Warning"}},[t("b-slider",{attrs:{type:"is-warning",value:20}})],1)],1)},staticRenderFns:[]}},1174:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{sliderValue:0}},computed:{sliderType:function(){return this.sliderValue>25&&this.sliderValue<75?"is-warning":this.sliderValue>=75?"is-success":"is-danger"}}}},1175:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{label:"Tooltip type"}},[t("b-slider",{attrs:{"tooltip-type":e.sliderType},model:{value:e.sliderValue,callback:function(r){e.sliderValue=r},expression:"sliderValue"}})],1),e._v(" "),t("b-field",{attrs:{label:"Hide tooltip"}},[t("b-slider",{attrs:{tooltip:!1}})],1),e._v(" "),t("b-field",{attrs:{label:"Custom tooltip label"}},[t("b-slider",{attrs:{"custom-formatter":function(e){return e+"%"}}})],1),e._v(" "),t("b-field",{attrs:{label:"Rounded thumb"}},[t("b-slider",{attrs:{rounded:""}})],1)],1)},staticRenderFns:[]}},1176:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{label:"Show ticks"}},[t("b-slider",{attrs:{min:1,max:10,ticks:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Custom tick and label"}},[t("b-slider",{attrs:{size:"is-medium",min:0,max:10}},[e._l([3,5,8],function(r){return[t("b-slider-tick",{key:r,attrs:{value:r}},[e._v(e._s(r))])]})],2)],1),e._v(" "),t("b-field",{attrs:{label:"Fan"}},[t("b-slider",{attrs:{min:0,max:3,"aria-label":"Fan",tooltip:!1}},[t("b-slider-tick",{attrs:{value:0}},[e._v("Off")]),e._v(" "),t("b-slider-tick",{attrs:{value:1}},[e._v("Low")]),e._v(" "),t("b-slider-tick",{attrs:{value:2}},[e._v("High")]),e._v(" "),t("b-slider-tick",{attrs:{value:3}},[e._v("Auto")])],1)],1)],1)},staticRenderFns:[]}},1177:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{numbers:[2,5],numbers2:[2,6]}}}},1178:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",[t("b-slider",{attrs:{min:1,max:15,step:.5,ticks:""},model:{value:e.numbers,callback:function(r){e.numbers=r},expression:"numbers"}})],1),e._v(" "),t("b-field",[t("b-slider",{attrs:{type:"is-danger",min:-2,max:8,step:2},model:{value:e.numbers2,callback:function(r){e.numbers2=r},expression:"numbers2"}})],1)],1)},staticRenderFns:[]}},1179:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{value:20}}}},1180:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("b-field",{attrs:{grouped:""}},[t("b-field",{attrs:{expanded:""}},[t("b-slider",{attrs:{lazy:""},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{type:"number"},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})],1)],1)],1)},staticRenderFns:[]}},1487:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=t(260),i=t(261),n=t(262),d=t.n(n),a=t(1488),s=t.n(a),o=t(263),c=t.n(o),u=t(1489),b=t.n(u),p=t(264),f=t.n(p),m=t(1490),v=t.n(m),x=t(265),y=t.n(x),g=t(1491),h=t.n(g),_=t(266),k=t.n(_),E=t(1492),$=t.n(E),S=t(267),w=t.n(S),z=t(1493),T=t.n(z),C=t(268),R=t.n(C),V=t(1494),F=t.n(V);r.default={data:function(){return{api:l.default,variables:i.default,ExSimple:d.a,ExSimpleCode:s.a,ExSizes:c.a,ExSizesCode:b.a,ExTypes:f.a,ExTypesCode:v.a,ExCustomize:y.a,ExCustomizeCode:h.a,ExTick:k.a,ExTickCode:$.a,ExRange:w.a,ExRangeCode:T.a,ExLazy:R.a,ExLazyCode:F.a}}}},1488:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field label="Simple">\r\n            <b-slider v-model="value"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Disabled">\r\n            <b-slider :value="30" disabled></b-slider>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                value: 5\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1489:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field label="Small">\r\n            <b-slider size="is-small" :value="20">\r\n            </b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Default">\r\n            <b-slider :value="20">\r\n            </b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Medium">\r\n            <b-slider size="is-medium" :value="20">\r\n            </b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Large">\r\n            <b-slider size="is-large" :value="20">\r\n            </b-slider>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1490:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field label="Primary">\r\n            <b-slider type="is-primary" :value="20"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Success">\r\n            <b-slider type="is-success" :value="20"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Error">\r\n            <b-slider type="is-danger" :value="20"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Info">\r\n            <b-slider type="is-info" :value="20"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Warning">\r\n            <b-slider type="is-warning" :value="20"></b-slider>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1491:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field label="Tooltip type">\r\n            <b-slider v-model="sliderValue" :tooltip-type="sliderType"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Hide tooltip">\r\n            <b-slider :tooltip="false"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Custom tooltip label">\r\n            <b-slider :custom-formatter="val => val + \'%\'"></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Rounded thumb">\r\n            <b-slider rounded></b-slider>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                sliderValue: 0\r\n            }\r\n        },\r\n        computed:{\r\n            sliderType(){\r\n                if (this.sliderValue > 25 && this.sliderValue < 75){\r\n                    return "is-warning";\r\n                } else if (this.sliderValue >= 75){\r\n                    return "is-success";\r\n                }\r\n                return "is-danger";\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1492:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field label="Show ticks">\r\n            <b-slider :min="1" :max="10" ticks></b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Custom tick and label">\r\n            <b-slider size="is-medium" :min="0" :max="10">\r\n                <template v-for="val in [3, 5, 8]">\r\n                    <b-slider-tick :value="val" :key="val">{{ val }}</b-slider-tick>\r\n                </template>\r\n            </b-slider>\r\n        </b-field>\r\n\r\n        <b-field label="Fan">\r\n            <b-slider :min="0" :max="3" aria-label="Fan" :tooltip="false">\r\n                <b-slider-tick :value="0">Off</b-slider-tick>\r\n                <b-slider-tick :value="1">Low</b-slider-tick>\r\n                <b-slider-tick :value="2">High</b-slider-tick>\r\n                <b-slider-tick :value="3">Auto</b-slider-tick>\r\n            </b-slider>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1493:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-slider v-model="numbers" :min="1" :max="15" :step="0.5" ticks>\r\n            </b-slider>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-slider v-model="numbers2" type="is-danger" :min="-2" :max="8" :step="2">\r\n            </b-slider>\r\n        </b-field>\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                numbers: [2, 5],\r\n                numbers2: [2, 6]\r\n            }\r\n        }\r\n    }\r\n<\/script>'},1494:function(e,r){e.exports='<template>\r\n    <section>\r\n        <b-field grouped>\r\n            <b-field expanded>\r\n                <b-slider v-model="value" lazy></b-slider>\r\n            </b-field>\r\n            <b-field>\r\n                <b-input v-model="value" type="number"></b-input>\r\n            </b-field>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                value: 20\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1495:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExCustomize,code:e.ExCustomizeCode,title:"Customization",vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExTick,code:e.ExTickCode,title:"Tick and label",vertical:""}},[t("p",[e._v("Use Slider Tick component to add custom ticks and labels")])]),e._v(" "),t("Example",{attrs:{component:e.ExRange,code:e.ExRangeCode,title:"Range slider"}},[t("p",[e._v("Just bind the value to an Array.")])]),e._v(" "),t("Example",{attrs:{component:e.ExLazy,code:e.ExLazyCode,title:"Lazy update"}},[t("p",[e._v("Use "),t("code",[e._v("lazy")]),e._v(" to update "),t("code",[e._v("v-model")]),e._v(" only when dragging is finished.")])]),e._v(" "),t("ApiView",{attrs:{data:e.api}}),e._v(" "),t("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},260:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{title:"Slider",props:[{name:"<code>v-model</code>",description:"Binding value",type:"Number, Array",values:"—",default:"—"},{name:"<code>min</code>",description:"Minimum value",type:"Number",values:"—",default:"<code>0</code>"},{name:"<code>max</code>",description:"Maximum value",type:"Number",values:"—",default:"<code>100</code>"},{name:"<code>step</code>",description:"Step interval of ticks",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>type</code>",description:"Type (color) of the slider, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                <code>is-warning</code>, <code>is-danger</code>,\n                and any other colors you've set in the <code>$colors</code> list on Sass",default:"is-primary"},{name:"<code>size</code>",description:"Thickness of the slider, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>ticks</code>",description:"Show tick marks",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>tooltip</code>",description:"Show tooltip when thumb is being dragged",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>tooltip-type</code>",description:"The type (color) of the tootip. Defaults to <code>type</code>",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                <code>is-warning</code>, <code>is-danger</code>,\n                and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>type</code>"},{name:"<code>rounded</code>",description:"Rounded thumb",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Disable the slider",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>custom-formatter</code>",description:"Function to format the tooltip label for display",type:"Function",values:"—",default:"—"},{name:"<code>aria-label</code>",description:"Accessibility label for the thumbs",type:"String, Array",values:"—",default:"—"}],slots:[{name:"default",description:"Use SliderTick for custom ticks and labels",props:""}],events:[{name:"<code>input</code>",description:"Triggers when value is changed",parameters:"<code>value: Number|Array</code>"},{name:"<code>change</code>",description:"Triggers when value is changed after user interaction",parameters:"<code>value: Number|Array</code>"},{name:"<code>dragstart</code>",description:"Triggers when thumb is pressed",parameters:"—"},{name:"<code>dragend</code>",description:"Triggers when thumb is released",parameters:"—"},{name:"<code>dragging</code>",description:"Triggers when thumb is being dragged",parameters:"<code>value: Number|Array</code>"}]},{title:"SliderTick",props:[{name:"<code>value</code>",description:"The value that the tick represents",type:"Number",values:"—",default:"—"}],slots:[{name:"default",description:"Label",props:""}]}]},261:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{name:"<code>$slider-radius</code>",default:"<code>$radius</code>"},{name:"<code>$slider-track-background</code>",default:"<code>$grey-lighter</code>"},{name:"<code>$slider-track-radius</code>",default:"<code>$radius</code>"},{name:"<code>$slider-track-border</code>",default:"<code>0px solid $grey</code>"},{name:"<code>$slider-track-shadow</code>",default:"<code>0px 0px 0px $grey</code>"},{name:"<code>$slider-thumb-background</code>",default:"<code>$white</code>"},{name:"<code>$slider-thumb-radius</code>",default:"<code>$radius</code>"},{name:"<code>$slider-thumb-border</code>",default:"<code>1px solid $grey-light</code>"},{name:"<code>$slider-thumb-shadow</code>",default:"<code>none</code>"},{name:"<code>$slider-thumb-to-track-ratio</code>",default:"<code>2</code>"},{name:"<code>$slider-tick-to-track-ratio</code>",default:"<code>0.5</code>"},{name:"<code>$slider-tick-width</code>",default:"<code>3px</code>"},{name:"<code>$slider-tick-radius</code>",default:"<code>$radius</code>"},{name:"<code>$slider-tick-background</code>",default:"<code>$grey-light</code>"},{name:"<code>$slider-mark-size</code>",default:"<code>0.75rem</code>"}]},262:function(e,r,t){var l=t(0)(t(1170),t(1171),null,null,null);e.exports=l.exports},263:function(e,r,t){var l=t(0)(null,t(1172),null,null,null);e.exports=l.exports},264:function(e,r,t){var l=t(0)(null,t(1173),null,null,null);e.exports=l.exports},265:function(e,r,t){var l=t(0)(t(1174),t(1175),null,null,null);e.exports=l.exports},266:function(e,r,t){var l=t(0)(null,t(1176),null,null,null);e.exports=l.exports},267:function(e,r,t){var l=t(0)(t(1177),t(1178),null,null,null);e.exports=l.exports},268:function(e,r,t){var l=t(0)(t(1179),t(1180),null,null,null);e.exports=l.exports},384:function(e,r,t){var l=t(0)(t(1487),t(1495),null,null,null);e.exports=l.exports}});
//# sourceMappingURL=10.153c7fb6c88d3647f653.js.map