webpackJsonp([4,25,47,123,124,125,224],{1050:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(81),a=n(82),o=n.n(a),s=n(1051),i=n.n(s),d=n(83),l=n.n(d),c=n(1052),u=n.n(c),m=n(84),p=n.n(m),f=n(1053),_=n.n(f),h=n(85),g=n.n(h),v=n(1054),b=n.n(v),y=n(86),x=n.n(y),F=n(1055),w=n.n(F);t.default={data:function(){return{api:r.default,ExSimple:o.a,ExSimpleCode:i.a,ExObjArrayCode:u.a,ExObjArray:l.a,ExHeader:p.a,ExHeaderCode:_.a,ExFooter:g.a,ExFooterCode:b.a,ExCustomAsyncCode:w.a,ExCustomAsync:x.a}}}},1051:function(e,t){e.exports="<template>\r\n    <section>\r\n        <p class=\"content\"><b>Selected:</b> {{ selected }}</p>\r\n        <b-field label=\"Find a JS framework\">\r\n            <b-autocomplete\r\n                rounded\r\n                v-model=\"name\"\r\n                :data=\"filteredDataArray\"\r\n                placeholder=\"e.g. jQuery\"\r\n                icon=\"magnify\"\r\n                @select=\"option => selected = option\">\r\n                <template slot=\"empty\">No results found</template>\r\n            </b-autocomplete>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                data: [\r\n                    'Angular',\r\n                    'Angular 2',\r\n                    'Aurelia',\r\n                    'Backbone',\r\n                    'Ember',\r\n                    'jQuery',\r\n                    'Meteor',\r\n                    'Node.js',\r\n                    'Polymer',\r\n                    'React',\r\n                    'RxJS',\r\n                    'Vue.js'\r\n                ],\r\n                name: '',\r\n                selected: null\r\n            }\r\n        },\r\n        computed: {\r\n            filteredDataArray() {\r\n                return this.data.filter((option) => {\r\n                    return option\r\n                        .toString()\r\n                        .toLowerCase()\r\n                        .indexOf(this.name.toLowerCase()) >= 0\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1052:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="block">\r\n            <b-switch v-model="openOnFocus">\r\n                Open dropdown on focus\r\n            </b-switch>\r\n            <b-switch v-model="keepFirst">\r\n                Keep-first <small>(will always have first option pre-selected)</small>\r\n            </b-switch>\r\n        </div>\r\n        <p class="content"><b>Selected:</b> {{ selected }}</p>\r\n        <b-field label="Find a name">\r\n            <b-autocomplete\r\n                v-model="name"\r\n                placeholder="e.g. Anne"\r\n                :keep-first="keepFirst"\r\n                :open-on-focus="openOnFocus"\r\n                :data="filteredDataObj"\r\n                field="user.first_name"\r\n                @select="option => selected = option">\r\n            </b-autocomplete>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    const data = require(\'@/data/sample.json\')\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                data,\r\n                keepFirst: false,\r\n                openOnFocus: false,\r\n                name: \'\',\r\n                selected: null\r\n            }\r\n        },\r\n        computed: {\r\n            filteredDataObj() {\r\n                return this.data.filter((option) => {\r\n                    return option.user.first_name\r\n                        .toString()\r\n                        .toLowerCase()\r\n                        .indexOf(this.name.toLowerCase()) >= 0\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},1053:function(e,t){e.exports="<template>\r\n    <section>\r\n        <p class=\"content\"><b>Selected:</b> {{ selected }}</p>\r\n        <b-field label=\"Find or add a Fruit\">\r\n            <b-autocomplete\r\n                v-model=\"name\"\r\n                ref=\"autocomplete\"\r\n                :data=\"filteredDataArray\"\r\n                placeholder=\"e.g. Orange\"\r\n                @select=\"option => selected = option\">\r\n                <template slot=\"header\">\r\n                    <a @click=\"showAddFruit\">\r\n                        <span> Add new... </span>\r\n                    </a> \r\n                </template>\r\n                <template slot=\"empty\">No results for {{name}}</template>\r\n            </b-autocomplete>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                data: [\r\n                    'Orange',\r\n                    'Apple',\r\n                    'Banana',\r\n                    'Pear',\r\n                    'Lemon',\r\n                    'Strawberry',\r\n                    'Kiwi'\r\n                ],\r\n                name: '',\r\n                selected: null\r\n            }\r\n        },\r\n        computed: {\r\n            filteredDataArray() {\r\n                return this.data.filter((option) => {\r\n                    return option\r\n                        .toString()\r\n                        .toLowerCase()\r\n                        .indexOf(this.name.toLowerCase()) >= 0\r\n                })\r\n            }\r\n        },\r\n        methods: {\r\n            showAddFruit() {\r\n                this.$dialog.prompt({\r\n                    message: `Fruit`,\r\n                    inputAttrs: {\r\n                        placeholder: 'e.g. Watermelon',\r\n                        maxlength: 20,\r\n                        value: this.name\r\n                    },\r\n                    confirmText: 'Add',\r\n                    onConfirm: (value) => {\r\n                        this.data.push(value)\r\n                        this.$refs.autocomplete.setSelected(value)\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1054:function(e,t){e.exports="<template>\r\n    <section>\r\n        <p class=\"content\"><b>Selected:</b> {{ selected }}</p>\r\n        <b-field label=\"Find or add a Fruit\">\r\n            <b-autocomplete\r\n                v-model=\"name\"\r\n                ref=\"autocomplete\"\r\n                :data=\"filteredDataArray\"\r\n                placeholder=\"e.g. Orange\"\r\n                @select=\"option => selected = option\">\r\n                <template slot=\"footer\">\r\n                    <a @click=\"showAddFruit\">\r\n                        <span> Add new... </span>\r\n                    </a> \r\n                </template>\r\n                <template slot=\"empty\">No results for {{name}}</template>\r\n            </b-autocomplete>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                data: [\r\n                    'Orange',\r\n                    'Apple',\r\n                    'Banana',\r\n                    'Pear',\r\n                    'Lemon',\r\n                    'Strawberry',\r\n                    'Kiwi'\r\n                ],\r\n                name: '',\r\n                selected: null\r\n            }\r\n        },\r\n        computed: {\r\n            filteredDataArray() {\r\n                return this.data.filter((option) => {\r\n                    return option\r\n                        .toString()\r\n                        .toLowerCase()\r\n                        .indexOf(this.name.toLowerCase()) >= 0\r\n                })\r\n            }\r\n        },\r\n        methods: {\r\n            showAddFruit() {\r\n                this.$dialog.prompt({\r\n                    message: `Fruit`,\r\n                    inputAttrs: {\r\n                        placeholder: 'e.g. Watermelon',\r\n                        maxlength: 20,\r\n                        value: this.name\r\n                    },\r\n                    confirmText: 'Add',\r\n                    onConfirm: (value) => {\r\n                        this.data.push(value)\r\n                        this.$refs.autocomplete.setSelected(value)\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},1055:function(e,t){e.exports='<template>\r\n    <section>\r\n        <p class="content"><b>Selected:</b> {{ selected }}</p>\r\n        <b-field label="Find a movie">\r\n            <b-autocomplete\r\n                :data="data"\r\n                placeholder="e.g. Fight Club"\r\n                field="title"\r\n                :loading="isFetching"\r\n                @typing="getAsyncData"\r\n                @select="option => selected = option">\r\n\r\n                <template slot-scope="props">\r\n                    <div class="media">\r\n                        <div class="media-left">\r\n                            <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">\r\n                        </div>\r\n                        <div class="media-content">\r\n                            {{ props.option.title }}\r\n                            <br>\r\n                            <small>\r\n                                Released at {{ props.option.release_date }},\r\n                                rated <b>{{ props.option.vote_average }}</b>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </template>\r\n            </b-autocomplete>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    import debounce from \'lodash/debounce\'\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                data: [],\r\n                selected: null,\r\n                isFetching: false\r\n            }\r\n        },\r\n        methods: {\r\n            // You have to install and import debounce to use it,\r\n            // it\'s not mandatory though.\r\n            getAsyncData: debounce(function (name) {\r\n                if (!name.length) {\r\n                    this.data = []\r\n                    return\r\n                }\r\n                this.isFetching = true\r\n                this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}`)\r\n                    .then(({ data }) => {\r\n                        this.data = []\r\n                        data.results.forEach((item) => this.data.push(item))\r\n                    })\r\n                    .catch((error) => {\r\n                        this.data = []\r\n                        throw error\r\n                    })\r\n                    .finally(() => {\r\n                        this.isFetching = false\r\n                    })\r\n            }, 500)\r\n        }\r\n    }\r\n<\/script>\r\n'},1056:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),n("Example",{attrs:{component:e.ExObjArray,code:e.ExObjArrayCode,title:"Object array"}}),e._v(" "),n("Example",{attrs:{component:e.ExHeader,code:e.ExHeaderCode,title:"Header"}},[n("p",[e._v("You can add your custom header to the autocomplete.")])]),e._v(" "),n("Example",{attrs:{component:e.ExFooter,code:e.ExFooterCode,title:"Footer"}},[n("div",{staticClass:"tags has-addons"},[n("span",{staticClass:"tag is-success"},[e._v("New!")]),e._v(" "),n("span",{staticClass:"tag is-info"},[e._v("0.7.6")])]),e._v(" "),n("p",[e._v("You can add your custom footer to the autocomplete.")])]),e._v(" "),n("Example",{attrs:{component:e.ExCustomAsync,code:e.ExCustomAsyncCode,title:"Async with custom template"}},[n("p",[e._v("You can have a custom template by adding a scoped slot to it.")]),e._v(" "),n("p",[n("small",[e._v("API from "),n("a",{attrs:{href:"https://www.themoviedb.org",target:"_blank"}},[e._v("TMDb")])]),e._v(".")])]),e._v(" "),n("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},271:function(e,t,n){var r=n(0)(n(1050),n(1056),null,null,null);e.exports=r.exports},743:function(e,t){e.exports=[{id:1,user:{first_name:"Jesse",last_name:"Simmons"},date:"2016/10/15 13:43:27",gender:"Male"},{id:2,user:{first_name:"John",last_name:"Jacobs"},date:"2016/12/15 06:00:53",gender:"Male"},{id:3,user:{first_name:"Tina",last_name:"Gilbert"},date:"2016/04/26 06:26:28",gender:"Female"},{id:4,user:{first_name:"Clarence",last_name:"Flores"},date:"2016/04/10 10:28:46",gender:"Male"},{id:5,user:{first_name:"Anne",last_name:"Lee"},date:"2016/12/06 14:38:38",gender:"Female"},{id:6,user:{first_name:"Sara",last_name:"Armstrong"},date:"2016/09/23 18:50:04",gender:"Female"},{id:7,user:{first_name:"Anthony",last_name:"Webb"},date:"2016/08/30 23:49:38",gender:"Male"},{id:8,user:{first_name:"Andrew",last_name:"Greene"},date:"2016/11/20 14:57:47",gender:"Male"},{id:9,user:{first_name:"Russell",last_name:"White"},date:"2016/07/13 09:29:49",gender:"Male"},{id:10,user:{first_name:"Lori",last_name:"Hunter"},date:"2016/12/09 01:44:05",gender:"Female"},{id:11,user:{first_name:"Ronald",last_name:"Wood"},date:"2016/12/04 02:23:48",gender:"Male"},{id:12,user:{first_name:"Michael",last_name:"Harper"},date:"2016/07/27 13:28:15",gender:"Male"},{id:13,user:{first_name:"George",last_name:"Dunn"},date:"2017/03/07 12:26:52",gender:"Male"},{id:14,user:{first_name:"Eric",last_name:"Rogers"},date:"2016/06/07 05:41:52",gender:"Male"},{id:15,user:{first_name:"Juan",last_name:"Meyer"},date:"2017/02/01 04:56:34",gender:"Male"},{id:16,user:{first_name:"Lori",last_name:"Shaw"},date:"2017/01/26 11:50:04",gender:"Female"},{id:17,user:{first_name:"Lori",last_name:"Cunningham"},date:"2016/05/01 10:00:56",gender:"Female"},{id:18,user:{first_name:"Charles",last_name:"Graham"},date:"2016/05/31 06:43:30",gender:"Male"},{id:19,user:{first_name:"Henry",last_name:"Morrison"},date:"2016/09/27 16:15:44",gender:"Male"},{id:20,user:{first_name:"Albert",last_name:"Mendoza"},date:"2016/08/08 05:29:24",gender:"Male"},{id:21,user:{first_name:"Ruby",last_name:"Snyder"},date:"2017/04/01 12:04:39",gender:"Female"},{id:22,user:{first_name:"Jesse",last_name:"Warren"},date:"2016/08/20 01:36:38",gender:"Male"},{id:23,user:{first_name:"Carlos",last_name:"Ferguson"},date:"2016/05/31 10:40:29",gender:"Male"},{id:24,user:{first_name:"Melissa",last_name:"Peters"},date:"2016/07/23 00:41:54",gender:"Female"},{id:25,user:{first_name:"Arthur",last_name:"Garza"},date:"2017/03/11 14:11:37",gender:"Male"},{id:26,user:{first_name:"Joe",last_name:"Berry"},date:"2016/07/09 15:16:56",gender:"Male"},{id:27,user:{first_name:"Joseph",last_name:"Bishop"},date:"2016/10/04 19:44:54",gender:"Male"},{id:28,user:{first_name:"Sarah",last_name:"Harper"},date:"2016/09/23 05:09:11",gender:"Female"},{id:29,user:{first_name:"Christopher",last_name:"Fuller"},date:"2016/04/12 00:05:35",gender:"Male"},{id:30,user:{first_name:"Alan",last_name:"Mendoza"},date:"2016/04/22 10:48:02",gender:"Male"},{id:31,user:{first_name:"James",last_name:"Davis"},date:"2017/01/16 15:17:03",gender:"Male"},{id:32,user:{first_name:"Scott",last_name:"Welch"},date:"2016/10/04 23:31:51",gender:"Male"},{id:33,user:{first_name:"Mildred",last_name:"Myers"},date:"2016/11/23 13:46:18",gender:"Female"},{id:34,user:{first_name:"Victor",last_name:"Martinez"},date:"2016/04/06 17:05:07",gender:"Male"},{id:35,user:{first_name:"Susan",last_name:"Medina"},date:"2016/12/09 10:33:37",gender:"Female"},{id:36,user:{first_name:"Judy",last_name:"Long"},date:"2016/07/26 16:19:04",gender:"Female"},{id:37,user:{first_name:"Joan",last_name:"Myers"},date:"2016/09/22 04:55:54",gender:"Female"},{id:38,user:{first_name:"Rachel",last_name:"Gonzales"},date:"2016/07/15 13:56:38",gender:"Female"},{id:39,user:{first_name:"Roger",last_name:"Hunt"},date:"2016/08/14 10:43:11",gender:"Male"},{id:40,user:{first_name:"Dorothy",last_name:"Howard"},date:"2016/06/19 05:34:49",gender:"Female"},{id:41,user:{first_name:"Eugene",last_name:"Lynch"},date:"2016/12/24 08:19:24",gender:"Male"},{id:42,user:{first_name:"Kathy",last_name:"Webb"},date:"2017/04/01 21:09:05",gender:"Female"},{id:43,user:{first_name:"Antonio",last_name:"White"},date:"2017/02/10 06:51:20",gender:"Male"},{id:44,user:{first_name:"Louis",last_name:"Spencer"},date:"2016/10/08 02:20:22",gender:"Male"},{id:45,user:{first_name:"Andrea",last_name:"Marshall"},date:"2016/09/04 10:59:57",gender:"Female"},{id:46,user:{first_name:"Eugene",last_name:"Sims"},date:"2017/03/15 06:39:48",gender:"Male"},{id:47,user:{first_name:"Mildred",last_name:"Gibson"},date:"2016/04/18 06:43:54",gender:"Female"},{id:48,user:{first_name:"Joan",last_name:"Arnold"},date:"2016/12/16 04:52:23",gender:"Female"},{id:49,user:{first_name:"Jesse",last_name:"Schmidt"},date:"2016/06/11 02:44:33",gender:"Male"},{id:50,user:{first_name:"David",last_name:"Frazier"},date:"2017/02/15 21:46:30",gender:"Male"},{id:51,user:{first_name:"Nicholas",last_name:"Howell"},date:"2016/11/01 15:08:31",gender:"Male"},{id:52,user:{first_name:"Douglas",last_name:"Chapman"},date:"2017/02/08 03:33:24",gender:"Male"},{id:53,user:{first_name:"Bruce",last_name:"Simmons"},date:"2016/07/14 12:11:17",gender:"Male"},{id:54,user:{first_name:"Antonio",last_name:"George"},date:"2016/11/07 19:12:55",gender:"Male"},{id:55,user:{first_name:"Chris",last_name:"Marshall"},date:"2016/07/03 12:11:45",gender:"Male"},{id:56,user:{first_name:"Ashley",last_name:"Hudson"},date:"2016/10/14 21:08:05",gender:"Female"},{id:57,user:{first_name:"Alan",last_name:"Edwards"},date:"2017/03/22 21:10:25",gender:"Male"},{id:58,user:{first_name:"George",last_name:"Clark"},date:"2016/04/28 03:15:05",gender:"Male"},{id:59,user:{first_name:"Frank",last_name:"Porter"},date:"2016/09/08 00:48:14",gender:"Male"},{id:60,user:{first_name:"Christopher",last_name:"Palmer"},date:"2016/05/24 08:58:12",gender:"Male"}]},744:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},745:function(e,t,n){var r=n(793),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},746:function(e,t,n){var r=n(745),a=r.Symbol;e.exports=a},782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Angular","Angular 2","Aurelia","Backbone","Ember","jQuery","Meteor","Node.js","Polymer","React","RxJS","Vue.js"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}}}},783:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find a JS framework"}},[n("b-autocomplete",{attrs:{rounded:"",data:e.filteredDataArray,placeholder:"e.g. jQuery",icon:"magnify"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("template",{slot:"empty"},[e._v("No results found")])],2)],1)],1)},staticRenderFns:[]}},784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(743);t.default={data:function(){return{data:r,keepFirst:!1,openOnFocus:!1,name:"",selected:null}},computed:{filteredDataObj:function(){var e=this;return this.data.filter(function(t){return t.user.first_name.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}}}},785:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"block"},[n("b-switch",{model:{value:e.openOnFocus,callback:function(t){e.openOnFocus=t},expression:"openOnFocus"}},[e._v("\n            Open dropdown on focus\n        ")]),e._v(" "),n("b-switch",{model:{value:e.keepFirst,callback:function(t){e.keepFirst=t},expression:"keepFirst"}},[e._v("\n            Keep-first "),n("small",[e._v("(will always have first option pre-selected)")])])],1),e._v(" "),n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find a name"}},[n("b-autocomplete",{attrs:{placeholder:"e.g. Anne","keep-first":e.keepFirst,"open-on-focus":e.openOnFocus,data:e.filteredDataObj,field:"user.first_name"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)},staticRenderFns:[]}},786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Orange","Apple","Banana","Pear","Lemon","Strawberry","Kiwi"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}},methods:{showAddFruit:function(){var e=this;this.$dialog.prompt({message:"Fruit",inputAttrs:{placeholder:"e.g. Watermelon",maxlength:20,value:this.name},confirmText:"Add",onConfirm:function(t){e.data.push(t),e.$refs.autocomplete.setSelected(t)}})}}}},787:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find or add a Fruit"}},[n("b-autocomplete",{ref:"autocomplete",attrs:{data:e.filteredDataArray,placeholder:"e.g. Orange"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("template",{slot:"header"},[n("a",{on:{click:e.showAddFruit}},[n("span",[e._v(" Add new... ")])])]),e._v(" "),n("template",{slot:"empty"},[e._v("No results for "+e._s(e.name))])],2)],1)],1)},staticRenderFns:[]}},788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:["Orange","Apple","Banana","Pear","Lemon","Strawberry","Kiwi"],name:"",selected:null}},computed:{filteredDataArray:function(){var e=this;return this.data.filter(function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0})}},methods:{showAddFruit:function(){var e=this;this.$dialog.prompt({message:"Fruit",inputAttrs:{placeholder:"e.g. Watermelon",maxlength:20,value:this.name},confirmText:"Add",onConfirm:function(t){e.data.push(t),e.$refs.autocomplete.setSelected(t)}})}}}},789:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find or add a Fruit"}},[n("b-autocomplete",{ref:"autocomplete",attrs:{data:e.filteredDataArray,placeholder:"e.g. Orange"},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("template",{slot:"footer"},[n("a",{on:{click:e.showAddFruit}},[n("span",[e._v(" Add new... ")])])]),e._v(" "),n("template",{slot:"empty"},[e._v("No results for "+e._s(e.name))])],2)],1)],1)},staticRenderFns:[]}},790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(791),a=n.n(r);t.default={data:function(){return{data:[],selected:null,isFetching:!1}},methods:{getAsyncData:a()(function(e){var t=this;if(!e.length)return void(this.data=[]);this.isFetching=!0,this.$http.get("https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query="+e).then(function(e){var n=e.data;t.data=[],n.results.forEach(function(e){return t.data.push(e)})}).catch(function(e){throw t.data=[],e}).finally(function(){t.isFetching=!1})},500)}}},791:function(e,t,n){function r(e,t,n){function r(t){var n=v,r=b;return v=b=void 0,A=t,x=e.apply(r,n)}function c(e){return A=e,F=setTimeout(p,t),S?r(e):x}function u(e){var n=e-w,r=e-A,a=t-n;return M?l(a,y-r):a}function m(e){var n=e-w,r=e-A;return void 0===w||n>=t||n<0||M&&r>=y}function p(){var e=o();if(m(e))return f(e);F=setTimeout(p,u(e))}function f(e){return F=void 0,C&&v?r(e):(v=b=void 0,x)}function _(){void 0!==F&&clearTimeout(F),A=0,v=w=b=F=void 0}function h(){return void 0===F?x:f(o())}function g(){var e=o(),n=m(e);if(v=arguments,b=this,w=e,n){if(void 0===F)return c(w);if(M)return F=setTimeout(p,t),r(w)}return void 0===F&&(F=setTimeout(p,t)),x}var v,b,y,x,F,w,A=0,S=!1,M=!1,C=!0;if("function"!=typeof e)throw new TypeError(i);return t=s(t)||0,a(n)&&(S=!!n.leading,M="maxWait"in n,y=M?d(s(n.maxWait)||0,t):y,C="trailing"in n?!!n.trailing:C),g.cancel=_,g.flush=h,g}var a=n(744),o=n(792),s=n(794),i="Expected a function",d=Math.max,l=Math.min;e.exports=r},792:function(e,t,n){var r=n(745),a=function(){return r.Date.now()};e.exports=a},793:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(17))},794:function(e,t,n){function r(e){if("number"==typeof e)return e;if(o(e))return s;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):d.test(e)?s:+e}var a=n(744),o=n(795),s=NaN,i=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=r},795:function(e,t,n){function r(e){return"symbol"==typeof e||o(e)&&a(e)==s}var a=n(796),o=n(799),s="[object Symbol]";e.exports=r},796:function(e,t,n){function r(e){return null==e?void 0===e?d:i:l&&l in Object(e)?o(e):s(e)}var a=n(746),o=n(797),s=n(798),i="[object Null]",d="[object Undefined]",l=a?a.toStringTag:void 0;e.exports=r},797:function(e,t,n){function r(e){var t=s.call(e,d),n=e[d];try{e[d]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[d]=n:delete e[d]),a}var a=n(746),o=Object.prototype,s=o.hasOwnProperty,i=o.toString,d=a?a.toStringTag:void 0;e.exports=r},798:function(e,t){function n(e){return a.call(e)}var r=Object.prototype,a=r.toString;e.exports=n},799:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},800:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"content"},[n("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),e._v(" "),n("b-field",{attrs:{label:"Find a movie"}},[n("b-autocomplete",{attrs:{data:e.data,placeholder:"e.g. Fight Club",field:"title",loading:e.isFetching},on:{typing:e.getAsyncData,select:function(t){return e.selected=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("img",{attrs:{width:"32",src:"https://image.tmdb.org/t/p/w500/"+t.option.poster_path}})]),e._v(" "),n("div",{staticClass:"media-content"},[e._v("\n                        "+e._s(t.option.title)+"\n                        "),n("br"),e._v(" "),n("small",[e._v("\n                            Released at "+e._s(t.option.release_date)+",\n                            rated "),n("b",[e._v(e._s(t.option.vote_average))])])])])]}}])})],1)],1)},staticRenderFns:[]}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"String, Number",values:"—",default:"—"},{name:"<code>data</code>",description:"Options / suggestions",type:"Array<String>, Array<Number>, Array<Object>",values:"—",default:"—"},{name:"<code>field</code>",description:"Property of the object (if <code>data</code> is array of objects) to use as display text, and to keep track of selected option",type:"String",values:"—",default:"<code>value</code>"},{name:"<code>custom-formatter</code>",description:"Function to format an option to a string for display in the input as alternative to <code>field</code> prop)",type:"Function",values:"—",default:""},{name:"<code>clear-on-select</code>",description:"Clear input text on select",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>open-on-focus</code>",description:"Open dropdown list on focus",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>keep-first</code>",description:"The first option will always be pre-selected (easier to just hit enter or tab)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>size</code>",description:"Vertical size of input, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>expanded</code>",description:"Makes input full width when inside a grouped or addon field",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name to be added",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>",default:"<code>mdi</code>"},{name:"<code>maxlength</code>",description:"Same as native <code>maxlength</code>, plus character counter",type:"String, Number",values:"—",default:"—"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],slots:[{name:"default",description:"",props:"<code>option: String|Object</code>, <code>index: Number</code>"},{name:"<code>empty</code>",description:"Show like an option if <code>data</code> array prop is empty",props:"—"},{name:"<code>header</code>",description:"Show a custom header as first option",props:"—"},{name:"<code>footer</code>",description:"Show a custom footer as last option",props:"—"}],events:[{name:"<code>input</code>",description:"Triggers when value is changed",parameters:"<code>value: String|Number</code>"},{name:"<code>select</code>",description:"Triggers when an option is selected or unset",parameters:"<code>option: String|Number|Object</code>"},{name:"<code>focus</code>",description:"Triggers when input has received focus",parameters:"<code>event: $event</code>"},{name:"<code>blur</code>",description:"Triggers when input has lost focus",parameters:"<code>event: $event</code>"},{name:"<code>typing</code>",description:"Triggers when user is typing",parameters:"<code>value: String</code>"},{name:"<code>[any].native</code>",description:"Listen to any native event, e.g. <code>click.native</code>",parameters:"<code>event: $event</code>"}],methods:[{name:"<code>checkHtml5Validity</code>",description:"Check validation of HTML5 (add the message and type/color), also updates the <code>isValid</code> property",return:"<code>isValid: Boolean</code>"},{name:"<code>focus</code>",description:"Set focus (internally uses the native <code>.select()</code> method)",return:"—"},{name:"<code>setSelected(selected: Any)</code>",description:"Select an option by an object (same type of <code>data</code> property)",return:"—"}]}]},82:function(e,t,n){var r=n(0)(n(782),n(783),null,null,null);e.exports=r.exports},83:function(e,t,n){var r=n(0)(n(784),n(785),null,null,null);e.exports=r.exports},84:function(e,t,n){var r=n(0)(n(786),n(787),null,null,null);e.exports=r.exports},85:function(e,t,n){var r=n(0)(n(788),n(789),null,null,null);e.exports=r.exports},86:function(e,t,n){var r=n(0)(n(790),n(800),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=4.981d37a0f941d1771bf6.js.map