webpackJsonp([28,49,50,188],{1e3:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-upload",{attrs:{multiple:"","drag-drop":""},model:{value:e.dropFiles,callback:function(n){e.dropFiles=n},expression:"dropFiles"}},[t("section",{staticClass:"section"},[t("div",{staticClass:"content has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),e._v(" "),t("p",[e._v("Drop your files here or click to upload")])])])])],1),e._v(" "),t("div",{staticClass:"tags"},e._l(e.dropFiles,function(n,o){return t("span",{key:o,staticClass:"tag is-primary"},[e._v("\n            "+e._s(n.name)+"\n            "),t("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(n){e.deleteDropFile(o)}}})])}))],1)},staticRenderFns:[]}},1220:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(250),a=t(251),r=t.n(a),i=t(1221),l=t.n(i),d=t(252),s=t.n(d),c=t(1222),p=t.n(c);n.default={data:function(){return{api:o.default,ExSimple:r.a,ExDragDrop:s.a,ExSimpleCode:l.a,ExDragDropCode:p.a}}}},1221:function(e,n){e.exports='<template>\r\n    <b-field class="file">\r\n        <b-upload v-model="file">\r\n            <a class="button is-primary">\r\n                <b-icon icon="upload"></b-icon>\r\n                <span>Click to upload</span>\r\n            </a>\r\n        </b-upload>\r\n        <span class="file-name" v-if="file">\r\n            {{ file.name }}\r\n        </span>\r\n    </b-field>\r\n    \r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                file: null\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1222:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-upload v-model="dropFiles"\r\n                multiple\r\n                drag-drop>\r\n                <section class="section">\r\n                    <div class="content has-text-centered">\r\n                        <p>\r\n                            <b-icon\r\n                                icon="upload"\r\n                                size="is-large">\r\n                            </b-icon>\r\n                        </p>\r\n                        <p>Drop your files here or click to upload</p>\r\n                    </div>\r\n                </section>\r\n            </b-upload>\r\n        </b-field>\r\n\r\n        <div class="tags">\r\n            <span v-for="(file, index) in dropFiles"\r\n                :key="index"\r\n                class="tag is-primary" >\r\n                {{file.name}}\r\n                <button class="delete is-small"\r\n                    type="button"\r\n                    @click="deleteDropFile(index)">\r\n                </button>\r\n            </span>\r\n        </div>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                dropFiles: []\r\n            }\r\n        },\r\n        methods: {\r\n            deleteDropFile(index) {\r\n                this.dropFiles.splice(index, 1)\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1223:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),t("Example",{attrs:{component:e.ExDragDrop,code:e.ExDragDropCode,title:"Drag and drop",vertical:""}}),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},250:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"File, Array<File>",values:"—",default:"[]"},{name:"<code>drag-drop</code>",description:"Accepts drag & drop and change its style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>type</code>",description:"Type (color) of the drag area when hovered",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"-"},{name:"<code>required</code>",description:"Same as native <code>required</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>accept</code>",description:"Same as native <code>accept</code>",type:"String",values:"—",default:"-"},{name:"<code>loading</code>",description:"Add the loading state",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>multiple</code>",description:"Same as native, also push new item to <code>v-model</code> instead of replacing",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>native</code>",description:"Replace last chosen files every time (like native file input element)",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>input</code>",description:"Triggers when the file list is changed",parameters:"<code>value: File</code> or <code>File[]</code>"}],methods:[{name:"<code>checkHtml5Validity</code>",description:"Check validation of HTML5 (add the message and type/color), also updates the <code>isValid</code> property",return:"<code>isValid: Boolean</code>"}]}]},251:function(e,n,t){var o=t(0)(t(997),t(998),null,null,null);e.exports=o.exports},252:function(e,n,t){var o=t(0)(t(999),t(1e3),null,null,null);e.exports=o.exports},291:function(e,n,t){var o=t(0)(t(1220),t(1223),null,null,null);e.exports=o.exports},997:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{file:null}}}},998:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-field",{staticClass:"file"},[t("b-upload",{model:{value:e.file,callback:function(n){e.file=n},expression:"file"}},[t("a",{staticClass:"button is-primary"},[t("b-icon",{attrs:{icon:"upload"}}),e._v(" "),t("span",[e._v("Click to upload")])],1)]),e._v(" "),e.file?t("span",{staticClass:"file-name"},[e._v("\n        "+e._s(e.file.name)+"\n    ")]):e._e()],1)},staticRenderFns:[]}},999:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{dropFiles:[]}},methods:{deleteDropFile:function(e){this.dropFiles.splice(e,1)}}}}});
//# sourceMappingURL=28.9bc3c8fd5fe0de572d38.js.map