webpackJsonp([34,102,103,257],{1069:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{total:200,current:10,perPage:10,rangeBefore:3,rangeAfter:1,order:"",size:"",isSimple:!1,isRounded:!1,prevIcon:"chevron-left",nextIcon:"chevron-right"}}}},1070:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Total"}},[t("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(n){e.total=n},expression:"total"}})],1),e._v(" "),t("b-field",{attrs:{label:"Items per page"}},[t("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(n){e.perPage=n},expression:"perPage"}})],1)],1),e._v(" "),t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Show buttons before current"}},[t("b-input",{attrs:{type:"number",min:"0"},model:{value:e.rangeBefore,callback:function(n){e.rangeBefore=n},expression:"rangeBefore"}})],1),e._v(" "),t("b-field",{attrs:{label:"Show buttons after current"}},[t("b-input",{attrs:{type:"number",min:"0"},model:{value:e.rangeAfter,callback:function(n){e.rangeAfter=n},expression:"rangeAfter"}})],1)],1),e._v(" "),t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Order"}},[t("b-select",{model:{value:e.order,callback:function(n){e.order=n},expression:"order"}},[t("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),t("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),t("option",{attrs:{value:"is-right"}},[e._v("is-right")])])],1),e._v(" "),t("b-field",{attrs:{label:"Size"}},[t("b-select",{model:{value:e.size,callback:function(n){e.size=n},expression:"size"}},[t("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),t("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),t("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),t("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),t("b-field",{attrs:{grouped:"","group-multiline":""}},[t("b-field",{attrs:{label:"Previous icon"}},[t("b-select",{model:{value:e.prevIcon,callback:function(n){e.prevIcon=n},expression:"prevIcon"}},[t("option",{attrs:{value:"chevron-left"}},[e._v("Chevron")]),e._v(" "),t("option",{attrs:{value:"arrow-left"}},[e._v("Arrow")])])],1),e._v(" "),t("b-field",{attrs:{label:"Next icon"}},[t("b-select",{model:{value:e.nextIcon,callback:function(n){e.nextIcon=n},expression:"nextIcon"}},[t("option",{attrs:{value:"chevron-right"}},[e._v("Chevron")]),e._v(" "),t("option",{attrs:{value:"arrow-right"}},[e._v("Arrow")])])],1)],1),e._v(" "),t("div",{staticClass:"block"},[t("b-switch",{model:{value:e.isSimple,callback:function(n){e.isSimple=n},expression:"isSimple"}},[e._v("Simple")]),e._v(" "),t("b-switch",{model:{value:e.isRounded,callback:function(n){e.isRounded=n},expression:"isRounded"}},[e._v("Rounded")])],1),e._v(" "),t("hr"),e._v(" "),t("b-pagination",{attrs:{total:e.total,current:e.current,"range-before":e.rangeBefore,"range-after":e.rangeAfter,order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage,"icon-prev":e.prevIcon,"icon-next":e.nextIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(n){e.current=n}}})],1)},staticRenderFns:[]}},1071:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{current:10,basicRomanNumeral:["","I","II","III","IV","V","VI","VII","VIII","IX","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","M","MM","MMM"]}},methods:{convertToRoman:function(e){var n=this,t=e.toString().split(""),r=t.length,o=r-1;return t.reduce(function(e,t){var r=n.basicRomanNumeral[+t+10*o],a=e+r;return o-=1,a},"")}},watch:{$route:{immediate:!0,handler:function(e,n){e.hash&&(this.current=parseInt(e.hash.replace(/\#page/g,"")))}}}}},1072:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-pagination",{attrs:{total:200,current:e.current,"per-page":10},on:{"update:current":function(n){e.current=n}},scopedSlots:e._u([{key:"default",fn:function(n){return t("b-pagination-button",{attrs:{page:n.page,id:"page"+n.page.number,tag:"router-link",to:"/documentation/pagination#page"+n.page.number}},[e._v("\n            "+e._s(e.convertToRoman(n.page.number))+"\n        ")])}},{key:"previous",fn:function(n){return t("b-pagination-button",{attrs:{page:n.page,tag:"router-link",to:"/documentation/pagination#page"+n.page.number}},[e._v("\n            Previous\n        ")])}},{key:"next",fn:function(n){return t("b-pagination-button",{attrs:{page:n.page,tag:"router-link",to:"/documentation/pagination#page"+n.page.number}},[e._v("\n            Next\n        ")])}}])})],1)},staticRenderFns:[]}},1363:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(216),o=t(217),a=t.n(o),i=t(1364),l=t.n(i),p=t(218),s=t.n(p),c=t(1365),u=t.n(c);n.default={data:function(){return{api:r.default,ExSimple:a.a,ExSimpleCode:l.a,ExSlot:s.a,ExSlotCode:u.a}}}},1364:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Total">\r\n                <b-input type="number" v-model="total"></b-input>\r\n            </b-field>\r\n            <b-field label="Items per page">\r\n                <b-input type="number" v-model="perPage"></b-input>\r\n            </b-field>\r\n        </b-field>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Show buttons before current">\r\n                <b-input type="number" v-model="rangeBefore" min="0"></b-input>\r\n            </b-field>\r\n            <b-field label="Show buttons after current">\r\n                <b-input type="number" v-model="rangeAfter" min="0"></b-input>\r\n            </b-field>\r\n        </b-field>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Order">\r\n                <b-select v-model="order">\r\n                    <option value="">default</option>\r\n                    <option value="is-centered">is-centered</option>\r\n                    <option value="is-right">is-right</option>\r\n                </b-select>\r\n            </b-field>\r\n            <b-field label="Size">\r\n                <b-select v-model="size">\r\n                    <option value="">default</option>\r\n                    <option value="is-small">is-small</option>\r\n                    <option value="is-medium">is-medium</option>\r\n                    <option value="is-large">is-large</option>\r\n                </b-select>\r\n            </b-field>\r\n        </b-field>\r\n        <b-field grouped group-multiline>\r\n            <b-field label="Previous icon">\r\n                <b-select v-model="prevIcon">\r\n                    <option value="chevron-left">Chevron</option>\r\n                    <option value="arrow-left">Arrow</option>\r\n                </b-select>\r\n            </b-field>\r\n            <b-field label="Next icon">\r\n                <b-select v-model="nextIcon">\r\n                    <option value="chevron-right">Chevron</option>\r\n                    <option value="arrow-right">Arrow</option>\r\n                </b-select>\r\n            </b-field>\r\n        </b-field>\r\n        <div class="block">\r\n            <b-switch v-model="isSimple">Simple</b-switch>\r\n            <b-switch v-model="isRounded">Rounded</b-switch>\r\n        </div>\r\n\r\n        <hr>\r\n        <b-pagination\r\n            :total="total"\r\n            :current.sync="current"\r\n            :range-before="rangeBefore"\r\n            :range-after="rangeAfter"\r\n            :order="order"\r\n            :size="size"\r\n            :simple="isSimple"\r\n            :rounded="isRounded"\r\n            :per-page="perPage"\r\n            :icon-prev="prevIcon"\r\n            :icon-next="nextIcon"\r\n            aria-next-label="Next page"\r\n            aria-previous-label="Previous page"\r\n            aria-page-label="Page"\r\n            aria-current-label="Current page">\r\n        </b-pagination>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                total: 200,\r\n                current: 10,\r\n                perPage: 10,\r\n                rangeBefore: 3,\r\n                rangeAfter: 1,\r\n                order: \'\',\r\n                size: \'\',\r\n                isSimple: false,\r\n                isRounded: false,\r\n                prevIcon: \'chevron-left\',\r\n                nextIcon: \'chevron-right\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1365:function(e,n){e.exports="<template>\r\n    <section>\r\n        <b-pagination\r\n            :total=\"200\"\r\n            :current.sync=\"current\"\r\n            :per-page=\"10\">\r\n\r\n            <b-pagination-button\r\n                slot-scope=\"props\"\r\n                :page=\"props.page\"\r\n                :id=\"`page${props.page.number}`\"\r\n                tag=\"router-link\"\r\n                :to=\"`/documentation/pagination#page${props.page.number}`\">\r\n                {{ convertToRoman(props.page.number) }}\r\n            </b-pagination-button>\r\n\r\n            <b-pagination-button\r\n                slot=\"previous\"\r\n                slot-scope=\"props\"\r\n                :page=\"props.page\"\r\n                tag=\"router-link\"\r\n                :to=\"`/documentation/pagination#page${props.page.number}`\">\r\n                Previous\r\n            </b-pagination-button>\r\n\r\n            <b-pagination-button\r\n                slot=\"next\"\r\n                slot-scope=\"props\"\r\n                :page=\"props.page\"\r\n                tag=\"router-link\"\r\n                :to=\"`/documentation/pagination#page${props.page.number}`\">\r\n                Next\r\n            </b-pagination-button>\r\n\r\n        </b-pagination>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                current: 10,\r\n                basicRomanNumeral: ['',\r\n                    'I','II','III','IV','V','VI','VII','VIII','IX','',\r\n                    'X','XX','XXX','XL','L','LX','LXX','LXXX','XC','',\r\n                    'C','CC','CCC','CD','D','DC','DCC','DCCC','CM','',\r\n                    'M','MM','MMM'\r\n                ]\r\n            }\r\n        },\r\n        methods: {\r\n            convertToRoman(num) {\r\n                const numArray = num.toString().split('');\r\n                const base = numArray.length;\r\n                let count = base-1;\r\n                const convertedRoman = numArray.reduce((roman, digit) => {\r\n                    const digitRoman = this.basicRomanNumeral[+digit + count*10];\r\n                    const result = roman + digitRoman;\r\n                    count -= 1;\r\n                    return result;\r\n                },'');\r\n                return convertedRoman;\r\n            }\r\n        },\r\n        watch: {\r\n            $route: {\r\n                immediate: true,\r\n                handler(newVal, oldVal) {\r\n                    if (newVal.hash) {\r\n                        this.current = parseInt(newVal.hash.replace(/\\#page/g, ''))\r\n                    }\r\n                },\r\n            },\r\n        }\r\n    }\r\n<\/script>\r\n"},1366:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),t("Example",{attrs:{component:e.ExSlot,code:e.ExSlotCode,title:"Custom pagination buttons"}},[t("p",[e._v("You can customize the buttons using "),t("b",[t("code",[e._v("b-pagination-button")])]),e._v(" as scoped slot.")]),e._v(" "),t("p",[e._v("For example, you can customize the inner text or use "),t("code",[e._v("router-link")]),e._v(" as tag.")])]),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},216:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{title:"Pagination",props:[{name:"<code>total</code>",description:"Total count of items",type:"Number",values:"—",default:"—"},{name:"<code>per-page</code>",description:"Items count for each page",type:"Number",values:"—",default:"<code>20</code>"},{name:"<code>range-before</code>",description:"Number of pagination items to show before current page",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>range-after</code>",description:"Items to paginatation items to show after current page",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>current</code>",description:"Current page number, use the <code>.sync</code> modifier to make it two-way binding",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>order</code>",description:"Buttons order, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"},{name:"<code>size</code>",description:"Pagination size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>simple</code>",description:"Simpler style",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>rounded</code>",description:"Rounded button styles",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>icon-prev</code>",description:"Icon to use for previous button",type:"String",values:"—",default:"<code>chevron-left</code>"},{name:"<code>icon-next</code>",description:"Icon to use for next button",type:"String",values:"—",default:"<code>chevron-right</code>"},{name:"<code>aria-next-label</code>",description:"Accessibility label for the next page link.",type:"String",values:"—",default:"—"},{name:"<code>aria-previous-label</code>",description:"Accessibility label for the previous page link.",type:"String",values:"—",default:"—"},{name:"<code>aria-page-label</code>",description:"Accessibility label for the page link. If passed, this text will be prepended to the number of the page.",type:"String",values:"—",default:"—"},{name:"<code>aria-current-label</code>",description:"Accessibility label for the current page link. If passed, this text will be prepended to the current page.",type:"String",values:"—",default:"—"}],slots:[{name:"default",description:"This is to customize numbered pagination buttons with the Button subcomponent.",props:'<code>:page="props.page"</code>'},{name:"next",description:"This is to customize the next pagination button with the Button subcomponent.",props:'<code>:page="props.page"</code>'},{name:"previous",description:"This is to customize the previous pagination button with the Button subcomponent.",props:'<code>:page="props.page"</code>'}],events:[{name:"<code>change</code>",description:"Triggers when the current page is changed",parameters:"<code>value: Number</code>"}]},{title:"Button",props:[{name:"<code>page</code>",description:'The prop page need to be passed upon the component (<code>:page="props.page"</code>).',type:"Object",values:"—",default:"—"},{name:"<code>tag</code>",description:"Button tag name",type:"String",values:"<code>a</code>, <code>button</code>, <code>input</code>, <code>router-link</code>, <code>nuxt-link</code> or other nuxt alias",default:"<code>a</code>"}],slots:[{name:"default",description:"<strong>Required</strong>, pagination button content",props:"-"}]}]},217:function(e,n,t){var r=t(0)(t(1069),t(1070),null,null,null);e.exports=r.exports},218:function(e,n,t){var r=t(0)(t(1071),t(1072),null,null,null);e.exports=r.exports},355:function(e,n,t){var r=t(0)(t(1363),t(1366),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=34.098a471a475acb130f6f.js.map