webpackJsonp([9,54,55,71,72,73,74,75,178,179,255,256],{1393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tags:["Auckland","Wellington","Very long string that would overflow"]}}}},1394:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Add some tags"}},[n("b-taginput",{attrs:{ellipsis:"",icon:"label",placeholder:"Add a tag"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("p",{staticClass:"content"},[n("b",[e._v("Tags:")]),e._v(" "+e._s(e.tags))])],1)},staticRenderFns:[]}},1395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(897);t.default={data:function(){return{filteredTags:a,isSelectOnly:!1,tags:[],allowNew:!1,openOnFocus:!1}},methods:{getFilteredTags:function(e){this.filteredTags=a.filter(function(t){return t.user.first_name.toString().toLowerCase().indexOf(e.toLowerCase())>=0})}}}},1396:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"block"},[n("b-switch",{model:{value:e.allowNew,callback:function(t){e.allowNew=t},expression:"allowNew"}},[e._v("\n            Allow new tags\n        ")]),e._v(" "),n("b-switch",{model:{value:e.openOnFocus,callback:function(t){e.openOnFocus=t},expression:"openOnFocus"}},[e._v("\n            Open on focus\n        ")])],1),e._v(" "),n("b-field",{attrs:{label:"Enter some tags"}},[n("b-taginput",{attrs:{data:e.filteredTags,autocomplete:"","allow-new":e.allowNew,"open-on-focus":e.openOnFocus,field:"user.first_name",icon:"label",placeholder:"Add a tag"},on:{typing:e.getFilteredTags},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("pre",{staticStyle:{"max-height":"400px"}},[n("b",[e._v("Tags:")]),e._v(e._s(e.tags))])],1)},staticRenderFns:[]}},1397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(897);t.default={data:function(){return{filteredTags:a,isSelectOnly:!1,tags:[]}},methods:{getFilteredTags:function(e){this.filteredTags=a.filter(function(t){return t.user.first_name.toString().toLowerCase().indexOf(e.toLowerCase())>=0})}}}},1398:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Enter some tags"}},[n("b-taginput",{attrs:{data:e.filteredTags,autocomplete:"",field:"user.first_name",icon:"label",placeholder:"Add a tag"},on:{typing:e.getFilteredTags},scopedSlots:e._u([{key:"default",fn:function(t){return[n("strong",[e._v(e._s(t.option.id))]),e._v(": "+e._s(t.option.user.first_name)+"\n            ")]}}]),model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}},[e._v(" "),n("template",{slot:"empty"},[e._v("\n                There are no items\n            ")])],2)],1),e._v(" "),n("pre",{staticStyle:{"max-height":"400px"}},[n("b",[e._v("Tags:")]),e._v(e._s(e.tags))])],1)},staticRenderFns:[]}},1399:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Limited to 10 characters"}},[n("b-taginput",{attrs:{maxlength:"10",value:["Bulma","Vue","Buefy"]}})],1),e._v(" "),n("b-field",{attrs:{label:"Limited to 5 tags"}},[n("b-taginput",{attrs:{maxtags:"5",value:["One","Two","Three","Four"]}})],1),e._v(" "),n("b-field",{attrs:{label:"Limited to 10 characters and 5 tags"}},[n("b-taginput",{attrs:{maxlength:"10",maxtags:"5",value:["Red","Green","Blue","White"]}})],1)],1)},staticRenderFns:[]}},1400:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Success",type:"is-success"}},[n("b-taginput",{attrs:{value:["Tag"]}})],1),e._v(" "),n("b-field",{attrs:{label:"Error",type:"is-danger"}},[n("b-taginput",{attrs:{value:["Tag"]}})],1),e._v(" "),n("b-field",{attrs:{label:"Info",type:"is-info"}},[n("b-taginput",{attrs:{value:["Tag"]}})],1),e._v(" "),n("b-field",{attrs:{label:"Warning",type:"is-warning"}},[n("b-taginput",{attrs:{value:["Tag"]}})],1),e._v(" "),n("b-field",{attrs:{label:"Disabled"}},[n("b-taginput",{attrs:{value:["Tag"],disabled:""}})],1),e._v(" "),n("b-field",{attrs:{label:"Loading"}},[n("b-taginput",{attrs:{value:["Tag"],loading:""}})],1)],1)},staticRenderFns:[]}},1401:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tags:["Auckland","Wellington","Napier"]}}}},1402:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Dark"}},[n("b-taginput",{attrs:{type:"is-dark"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Info"}},[n("b-taginput",{attrs:{type:"is-info"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Success"}},[n("b-taginput",{attrs:{type:"is-success"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Warning"}},[n("b-taginput",{attrs:{type:"is-warning"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Danger"}},[n("b-taginput",{attrs:{type:"is-danger"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1)],1)},staticRenderFns:[]}},1403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tags:["Auckland","Wellington","Napier"]}}}},1404:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Small"}},[n("b-taginput",{attrs:{size:"is-small"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Default"}},[n("b-taginput",{model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Medium"}},[n("b-taginput",{attrs:{size:"is-medium"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Large"}},[n("b-taginput",{attrs:{size:"is-large"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1)],1)},staticRenderFns:[]}},1405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tags:["Auckland","Wellington","Napier"]}}}},1406:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Rounded"}},[n("b-taginput",{attrs:{rounded:""},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),n("b-field",{attrs:{label:"Attached"}},[n("b-taginput",{attrs:{attached:""},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1)],1)},staticRenderFns:[]}},1407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tags:["123","456","789"]}},methods:{beforeAdding:function(e){return 3===e.length}}}},1408:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-field",{attrs:{label:"Tags with 3 characters"}},[n("b-taginput",{attrs:{"before-adding":e.beforeAdding},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1)],1)},staticRenderFns:[]}},1691:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(321),r=n(322),s=n(323),l=n.n(s),i=n(1692),o=n.n(i),d=n(324),c=n.n(d),u=n(1693),p=n.n(u),g=n(325),m=n.n(g),f=n(1694),b=n.n(f),_=n(326),v=n.n(_),h=n(1695),x=n.n(h),y=n(327),w=n.n(y),M=n(1696),A=n.n(M),T=n(328),E=n.n(T),S=n(1697),F=n.n(S),k=n(329),C=n.n(k),O=n(1698),L=n.n(O),W=n(330),R=n.n(W),z=n(1699),B=n.n(z),N=n(331),j=n.n(N),P=n(1700),D=n.n(P);t.default={data:function(){return{api:a.default,variables:r.default,ExSimple:l.a,ExAutocomplete:c.a,ExTemplatedAutocomplete:m.a,ExLimit:v.a,ExState:w.a,ExType:E.a,ExSize:C.a,ExModifier:R.a,ExValidation:j.a,ExSimpleCode:o.a,ExAutocompleteCode:p.a,ExTemplatedAutocompleteCode:b.a,ExLimitCode:x.a,ExStateCode:A.a,ExTypeCode:F.a,ExSizeCode:L.a,ExModifierCode:B.a,ExValidationCode:D.a}}}},1692:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field label="Add some tags">\r\n            <b-taginput\r\n                v-model="tags"\r\n                ellipsis\r\n                icon="label"\r\n                placeholder="Add a tag">\r\n            </b-taginput>\r\n        </b-field>\r\n        <p class="content"><b>Tags:</b> {{ tags }}</p>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                tags: [\r\n                    \'Auckland\',\r\n                    \'Wellington\',\r\n                    \'Very long string that would overflow\'\r\n                ]\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n\r\n'},1693:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="block">\r\n            <b-switch v-model="allowNew">\r\n                Allow new tags\r\n            </b-switch>\r\n            <b-switch v-model="openOnFocus">\r\n                Open on focus\r\n            </b-switch>\r\n        </div>\r\n        <b-field label="Enter some tags">\r\n            <b-taginput\r\n                v-model="tags"\r\n                :data="filteredTags"\r\n                autocomplete\r\n                :allow-new="allowNew"\r\n                :open-on-focus="openOnFocus"\r\n                field="user.first_name"\r\n                icon="label"\r\n                placeholder="Add a tag"\r\n                @typing="getFilteredTags">\r\n            </b-taginput>\r\n        </b-field>\r\n        <pre style="max-height: 400px"><b>Tags:</b>{{ tags }}</pre>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const data = require(\'@/data/sample.json\')\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                filteredTags: data,\r\n                isSelectOnly: false,\r\n                tags: [],\r\n                allowNew: false,\r\n                openOnFocus: false\r\n            }\r\n        },\r\n        methods: {\r\n            getFilteredTags(text) {\r\n                this.filteredTags = data.filter((option) => {\r\n                    return option.user.first_name\r\n                        .toString()\r\n                        .toLowerCase()\r\n                        .indexOf(text.toLowerCase()) >= 0\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n\r\n'},1694:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field label="Enter some tags">\r\n            <b-taginput\r\n                v-model="tags"\r\n                :data="filteredTags"\r\n                autocomplete\r\n                field="user.first_name"\r\n                icon="label"\r\n                placeholder="Add a tag"\r\n                @typing="getFilteredTags">\r\n                <template slot-scope="props">\r\n                    <strong>{{props.option.id}}</strong>: {{props.option.user.first_name}}\r\n                </template>\r\n                <template slot="empty">\r\n                    There are no items\r\n                </template>\r\n            </b-taginput>\r\n        </b-field>\r\n        <pre style="max-height: 400px"><b>Tags:</b>{{ tags }}</pre>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const data = require(\'@/data/sample.json\')\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                filteredTags: data,\r\n                isSelectOnly: false,\r\n                tags: []\r\n            }\r\n        },\r\n        methods: {\r\n            getFilteredTags(text) {\r\n                this.filteredTags = data.filter((option) => {\r\n                    return option.user.first_name\r\n                        .toString()\r\n                        .toLowerCase()\r\n                        .indexOf(text.toLowerCase()) >= 0\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n\r\n'},1695:function(e,t){e.exports="<template>\r\n    <section>\r\n        <b-field label=\"Limited to 10 characters\">\r\n            <b-taginput\r\n                maxlength=\"10\"\r\n                :value=\"['Bulma', 'Vue', 'Buefy']\">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label=\"Limited to 5 tags\">\r\n            <b-taginput\r\n                maxtags=\"5\"\r\n                :value=\"['One', 'Two', 'Three', 'Four']\">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label=\"Limited to 10 characters and 5 tags\">\r\n            <b-taginput\r\n                maxlength=\"10\"\r\n                maxtags=\"5\"\r\n                :value=\"['Red', 'Green', 'Blue', 'White']\">\r\n            </b-taginput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n"},1696:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field\r\n            label="Success"\r\n            type="is-success">\r\n            <b-taginput\r\n                :value="[\'Tag\']">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field\r\n            label="Error"\r\n            type="is-danger">\r\n            <b-taginput\r\n                :value="[\'Tag\']">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field\r\n            label="Info"\r\n            type="is-info">\r\n            <b-taginput\r\n                :value="[\'Tag\']">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field\r\n            label="Warning"\r\n            type="is-warning">\r\n            <b-taginput\r\n                :value="[\'Tag\']">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Disabled">\r\n            <b-taginput\r\n                :value="[\'Tag\']"\r\n                disabled>\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Loading">\r\n            <b-taginput\r\n                :value="[\'Tag\']"\r\n                loading>\r\n            </b-taginput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},1697:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field label="Dark">\r\n            <b-taginput\r\n                v-model="tags"\r\n                type="is-dark">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Info">\r\n            <b-taginput\r\n                v-model="tags"\r\n                type="is-info">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Success">\r\n            <b-taginput\r\n                v-model="tags"\r\n                type="is-success">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Warning">\r\n            <b-taginput\r\n                v-model="tags"\r\n                type="is-warning">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Danger">\r\n            <b-taginput\r\n                v-model="tags"\r\n                type="is-danger">\r\n            </b-taginput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                tags: [\r\n                    \'Auckland\',\r\n                    \'Wellington\',\r\n                    \'Napier\'\r\n                ]\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1698:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field label="Small">\r\n            <b-taginput\r\n                v-model="tags"\r\n                size="is-small">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Default">\r\n            <b-taginput\r\n                v-model="tags">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Medium">\r\n            <b-taginput\r\n                v-model="tags"\r\n                size="is-medium">\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Large">\r\n            <b-taginput\r\n                v-model="tags"\r\n                size="is-large">\r\n            </b-taginput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                tags: [\r\n                    \'Auckland\',\r\n                    \'Wellington\',\r\n                    \'Napier\'\r\n                ]\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1699:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-field label="Rounded">\r\n            <b-taginput\r\n                v-model="tags"\r\n                rounded>\r\n            </b-taginput>\r\n        </b-field>\r\n\r\n        <b-field label="Attached">\r\n            <b-taginput\r\n                v-model="tags"\r\n                attached>\r\n            </b-taginput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                tags: [\r\n                    \'Auckland\',\r\n                    \'Wellington\',\r\n                    \'Napier\'\r\n                ]\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1700:function(e,t){e.exports="<template>\r\n    <section>\r\n        <b-field label=\"Tags with 3 characters\">\r\n            <b-taginput\r\n                v-model=\"tags\" \r\n                :before-adding=\"beforeAdding\">\r\n            </b-taginput>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                tags: [\r\n                    '123',\r\n                    '456',\r\n                    '789'\r\n                ]\r\n            }\r\n        },\r\n        methods: {\r\n        \tbeforeAdding(tag) {\r\n        \t\treturn tag.length === 3;\r\n        \t},\r\n        },\r\n    }\r\n<\/script>\r\n"},1701:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExAutocomplete,code:e.ExAutocompleteCode,title:"Autocomplete",vertical:""}},[n("p",[e._v("\n            To have autocomplete functionality, add the "),n("code",[e._v("autocomplete")]),e._v(" prop.\n            You can add any prop from "),n("router-link",{attrs:{to:"/documentation/autocomplete"}},[e._v("Autocomplete")]),e._v(" API.\n        ")],1)]),e._v(" "),n("Example",{attrs:{component:e.ExTemplatedAutocomplete,code:e.ExTemplatedAutocompleteCode,title:"Templated Autocomplete",vertical:""}},[n("p",[e._v("\n            Slots are available for autocomplete items and the empty message, like with the "),n("router-link",{attrs:{to:"/documentation/autocomplete"}},[e._v("Autocomplete")]),e._v(" control.\n        ")],1)]),e._v(" "),n("Example",{attrs:{component:e.ExLimit,code:e.ExLimitCode,title:"Limits",vertical:""}},[n("p",[e._v("\n            You can limit the length and number of tags with the "),n("code",[e._v("maxlength")]),e._v(" and "),n("code",[e._v("maxtags")]),e._v(" props.\n            Maxlength counter is only shown when typing.\n        ")])]),e._v(" "),n("Example",{attrs:{component:e.ExState,code:e.ExStateCode,title:"States",vertical:""}},[n("p",[e._v("You can change the input type setting a "),n("code",[e._v("type")]),e._v(" on "),n("b",[e._v("Field")]),e._v(".")])]),e._v(" "),n("Example",{attrs:{component:e.ExType,code:e.ExTypeCode,title:"Tag types",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExSize,code:e.ExSizeCode,title:"Sizes",vertical:""}}),e._v(" "),n("Example",{attrs:{component:e.ExModifier,code:e.ExModifierCode,title:"Modifiers",vertical:""}},[n("p",[e._v("You can change the style of the tags by setting the "),n("code",[e._v("rounded")]),e._v(" and "),n("code",[e._v("attached")]),e._v(" props.")])]),e._v(" "),n("Example",{attrs:{component:e.ExValidation,code:e.ExValidationCode,title:"Validation",vertical:""}},[n("p",[e._v("You can validate the value before adding it to the tag list")])]),e._v(" "),n("ApiView",{attrs:{data:e.api}}),e._v(" "),n("VariablesView",{attrs:{data:e.variables}})],1)},staticRenderFns:[]}},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"Array<String>, Array<Number>, Array<Object>",values:"—",default:"—"},{name:"<code>maxlength</code>",description:"Limits the length of each tag, plus character counter",type:"String, Number",values:"—",default:"—"},{name:"<code>maxtags</code>",description:"Limits the number of tags, plus tag counter",type:"String, Number",values:"—",default:"—"},{name:"<code>has-counter</code>",description:"Show counter when <code>maxlength</code> or <code>maxtags</code> props are passed",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>type</code>",description:"Type (color) of the tags, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-light</code>"},{name:"<code>size</code>",description:"Tag and input size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>rounded</code>",description:"Makes the tags rounded, optional",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>attached</code>",description:"Makes the tags attached instead of having an appended delete button, optional",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>ellipsis</code>",description:"Adds ellipsis on tags to not overflow the text. Title is then added to the tag with full text",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>closable</code>",description:"Add close/delete button to the tag",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>field</code>",description:"Property of the object (if <code>data</code> is array of objects) to use as display text",type:"String",values:"—",default:"<code>value</code>"},{name:"<code>autocomplete</code>",description:"Add autocomplete feature (if <code>true</code>, any Autocomplete props may be used too)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>allow-new</code>",description:"When <code>autocomplete</code>, it allow to add new tags",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>remove-on-keys</code>",description:"Allow removing last tag when pressing given keys, if input is empty",type:"Array",values:"—",default:"<code>[8]</code>"},{name:"<code>confirm-key-codes</code>",description:"Array of key codes which will add a tag when typing (default comma, enter and tab)",type:"Array",values:"—",default:"<code>[13, 188, 9]</code>"},{name:"<code>on-paste-separators</code>",description:"Array of chars used to split when pasting a new string",type:"Array",values:"—",default:"<code>[',']</code>"},{name:"<code>before-adding</code>",description:"Function to validate the value of the tag before adding",type:"Function",values:"—",default:"<code>(tagToAdd) => true</code>"},{name:"<code>allow-duplicates</code>",description:"Allows adding the same tag multiple times",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>readonly</code>",description:"Disable input/typing",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>check-infinite-scroll</code>",description:"Makes the autocomplete component check if list reached scroll end and emit <code>infinite-sroll</code> event.",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"Any other native attribute",description:"—",type:"—",values:"—",default:"—"}],slots:[{name:"default",description:"",props:"<code>option: String|Object</code>, <code>index: Number</code>"},{name:"<code>empty</code>",description:"Show like an option if <code>data</code> array prop is empty",props:"—"},{name:"<code>header</code>",description:"Show a custom header as first option",props:"—"},{name:"<code>footer</code>",description:"Show a custom footer as last option",props:"—"},{name:"<code>tag</code>",description:"For customizing content in tag item.",props:"<code>tag: String|Number|Object</code>"}],events:[{name:"<code>input</code>",description:"Triggers when tags are added/removed",parameters:"<code>value: Array</code>"},{name:"<code>typing</code>",description:"User started typing a tag",parameters:"<code>value: String</code>"},{name:"<code>add</code>",description:"Triggers when a tag has been added",parameters:"<code>value: String|Object</code>"},{name:"<code>remove</code>",description:"Triggers when a tag has been removed",parameters:"<code>value: String|Object</code>"},{name:"<code>infinite-scroll</code>",description:"Triggers when the autocomplete <code>.dropdown-list</code> has reached scroll end",parameters:"—"}]}]},322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"<code>$taginput-height</code>",default:"<code>1.7em</code>"}]},323:function(e,t,n){var a=n(0)(n(1393),n(1394),null,null,null);e.exports=a.exports},324:function(e,t,n){var a=n(0)(n(1395),n(1396),null,null,null);e.exports=a.exports},325:function(e,t,n){var a=n(0)(n(1397),n(1398),null,null,null);e.exports=a.exports},326:function(e,t,n){var a=n(0)(null,n(1399),null,null,null);e.exports=a.exports},327:function(e,t,n){var a=n(0)(null,n(1400),null,null,null);e.exports=a.exports},328:function(e,t,n){var a=n(0)(n(1401),n(1402),null,null,null);e.exports=a.exports},329:function(e,t,n){var a=n(0)(n(1403),n(1404),null,null,null);e.exports=a.exports},330:function(e,t,n){var a=n(0)(n(1405),n(1406),null,null,null);e.exports=a.exports},331:function(e,t,n){var a=n(0)(n(1407),n(1408),null,null,null);e.exports=a.exports},399:function(e,t,n){var a=n(0)(n(1691),n(1701),null,null,null);e.exports=a.exports},897:function(e,t){e.exports=[{id:1,user:{first_name:"Jesse",last_name:"Simmons"},date:"2016/10/15 13:43:27",gender:"Male"},{id:2,user:{first_name:"John",last_name:"Jacobs"},date:"2016/12/15 06:00:53",gender:"Male"},{id:3,user:{first_name:"Tina",last_name:"Gilbert"},date:"2016/04/26 06:26:28",gender:"Female"},{id:4,user:{first_name:"Clarence",last_name:"Flores"},date:"2016/04/10 10:28:46",gender:"Male"},{id:5,user:{first_name:"Anne",last_name:"Lee"},date:"2016/12/06 14:38:38",gender:"Female"},{id:6,user:{first_name:"Sara",last_name:"Armstrong"},date:"2016/09/23 18:50:04",gender:"Female"},{id:7,user:{first_name:"Anthony",last_name:"Webb"},date:"2016/08/30 23:49:38",gender:"Male"},{id:8,user:{first_name:"Andrew",last_name:"Greene"},date:"2016/11/20 14:57:47",gender:"Male"},{id:9,user:{first_name:"Russell",last_name:"White"},date:"2016/07/13 09:29:49",gender:"Male"},{id:10,user:{first_name:"Lori",last_name:"Hunter"},date:"2016/12/09 01:44:05",gender:"Female"},{id:11,user:{first_name:"Ronald",last_name:"Wood"},date:"2016/12/04 02:23:48",gender:"Male"},{id:12,user:{first_name:"Michael",last_name:"Harper"},date:"2016/07/27 13:28:15",gender:"Male"},{id:13,user:{first_name:"George",last_name:"Dunn"},date:"2017/03/07 12:26:52",gender:"Male"},{id:14,user:{first_name:"Eric",last_name:"Rogers"},date:"2016/06/07 05:41:52",gender:"Male"},{id:15,user:{first_name:"Juan",last_name:"Meyer"},date:"2017/02/01 04:56:34",gender:"Male"},{id:16,user:{first_name:"Silvia",last_name:"Rosa"},date:"2017/01/26 11:50:04",gender:"Female"},{id:17,user:{first_name:"Lori",last_name:"Cunningham"},date:"2016/05/01 10:00:56",gender:"Female"},{id:18,user:{first_name:"Charles",last_name:"Graham"},date:"2016/05/31 06:43:30",gender:"Male"},{id:19,user:{first_name:"Henry",last_name:"Morrison"},date:"2016/09/27 16:15:44",gender:"Male"},{id:20,user:{first_name:"Albert",last_name:"Mendoza"},date:"2016/08/08 05:29:24",gender:"Male"},{id:21,user:{first_name:"Ruby",last_name:"Snyder"},date:"2017/04/01 12:04:39",gender:"Female"},{id:22,user:{first_name:"Jesse",last_name:"Warren"},date:"2016/08/20 01:36:38",gender:"Male"},{id:23,user:{first_name:"Carlos",last_name:"Ferguson"},date:"2016/05/31 10:40:29",gender:"Male"},{id:24,user:{first_name:"Melissa",last_name:"Peters"},date:"2016/07/23 00:41:54",gender:"Female"},{id:25,user:{first_name:"Arthur",last_name:"Garza"},date:"2017/03/11 14:11:37",gender:"Male"},{id:26,user:{first_name:"Joe",last_name:"Berry"},date:"2016/07/09 15:16:56",gender:"Male"},{id:27,user:{first_name:"Joseph",last_name:"Bishop"},date:"2016/10/04 19:44:54",gender:"Male"},{id:28,user:{first_name:"Sarah",last_name:"Harper"},date:"2016/09/23 05:09:11",gender:"Female"},{id:29,user:{first_name:"Christopher",last_name:"Fuller"},date:"2016/04/12 00:05:35",gender:"Male"},{id:30,user:{first_name:"Alan",last_name:"Mendoza"},date:"2016/04/22 10:48:02",gender:"Male"},{id:31,user:{first_name:"James",last_name:"Davis"},date:"2017/01/16 15:17:03",gender:"Male"},{id:32,user:{first_name:"Scott",last_name:"Welch"},date:"2016/10/04 23:31:51",gender:"Male"},{id:33,user:{first_name:"Mildred",last_name:"Myers"},date:"2016/11/23 13:46:18",gender:"Female"},{id:34,user:{first_name:"Victor",last_name:"Martinez"},date:"2016/04/06 17:05:07",gender:"Male"},{id:35,user:{first_name:"Susan",last_name:"Medina"},date:"2016/12/09 10:33:37",gender:"Female"},{id:36,user:{first_name:"Judy",last_name:"Long"},date:"2016/07/26 16:19:04",gender:"Female"},{id:37,user:{first_name:"Joan",last_name:"Myers"},date:"2016/09/22 04:55:54",gender:"Female"},{id:38,user:{first_name:"Rachel",last_name:"Gonzales"},date:"2016/07/15 13:56:38",gender:"Female"},{id:39,user:{first_name:"Roger",last_name:"Hunt"},date:"2016/08/14 10:43:11",gender:"Male"},{id:40,user:{first_name:"Dorothy",last_name:"Howard"},date:"2016/06/19 05:34:49",gender:"Female"},{id:41,user:{first_name:"Eugene",last_name:"Lynch"},date:"2016/12/24 08:19:24",gender:"Male"},{id:42,user:{first_name:"Kathy",last_name:"Webb"},date:"2017/04/01 21:09:05",gender:"Female"},{id:43,user:{first_name:"Antonio",last_name:"White"},date:"2017/02/10 06:51:20",gender:"Male"},{id:44,user:{first_name:"Louis",last_name:"Spencer"},date:"2016/10/08 02:20:22",gender:"Male"},{id:45,user:{first_name:"Andrea",last_name:"Marshall"},date:"2016/09/04 10:59:57",gender:"Female"},{id:46,user:{first_name:"Eugene",last_name:"Sims"},date:"2017/03/15 06:39:48",gender:"Male"},{id:47,user:{first_name:"Mildred",last_name:"Gibson"},date:"2016/04/18 06:43:54",gender:"Female"},{id:48,user:{first_name:"Joan",last_name:"Arnold"},date:"2016/12/16 04:52:23",gender:"Female"},{id:49,user:{first_name:"Jesse",last_name:"Schmidt"},date:"2016/06/11 02:44:33",gender:"Male"},{id:50,user:{first_name:"David",last_name:"Frazier"},date:"2017/02/15 21:46:30",gender:"Male"},{id:51,user:{first_name:"Nicholas",last_name:"Howell"},date:"2016/11/01 15:08:31",gender:"Male"},{id:52,user:{first_name:"Douglas",last_name:"Chapman"},date:"2017/02/08 03:33:24",gender:"Male"},{id:53,user:{first_name:"Bruce",last_name:"Simmons"},date:"2016/07/14 12:11:17",gender:"Male"},{id:54,user:{first_name:"Antonio",last_name:"George"},date:"2016/11/07 19:12:55",gender:"Male"},{id:55,user:{first_name:"Chris",last_name:"Marshall"},date:"2016/07/03 12:11:45",gender:"Male"},{id:56,user:{first_name:"Ashley",last_name:"Hudson"},date:"2016/10/14 21:08:05",gender:"Female"},{id:57,user:{first_name:"Alan",last_name:"Edwards"},date:"2017/03/22 21:10:25",gender:"Male"},{id:58,user:{first_name:"George",last_name:"Clark"},date:"2016/04/28 03:15:05",gender:"Male"},{id:59,user:{first_name:"Frank",last_name:"Porter"},date:"2016/09/08 00:48:14",gender:"Male"},{id:60,user:{first_name:"Christopher",last_name:"Palmer"},date:"2016/05/24 08:58:12",gender:"Male"}]}});
//# sourceMappingURL=9.50d10969fc6719b83bae.js.map