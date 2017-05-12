webpackJsonp([20],{358:function(e,c,t){var a=t(0)(t(389),t(436),null,null);e.exports=a.exports},389:function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checkbox:!0,checkboxGroup:["Flint"],checkboxProps:[{name:"<code>v-model</code>",description:"Binding value",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>custom-value</code>",description:"Native value when used inside a Checkbox Group",type:"String, Number, Boolean",values:"—",default:"—"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"—"},{name:"<code>checked</code>",description:"Same as native <code>checked</code>",type:"Boolean",values:"—",default:"<code>false</code>"}],checkboxEvents:[{name:"<code>change</code>",description:"Triggers when the value of checkbox changes",parameters:"<code>value: Boolean</code>, <code>event: $event</code>"}],checkboxGroupProps:[{name:"<code>v-model</code>",description:"Binding value",type:"Array",values:"—",default:"—"}],checkboxGroupEvents:[{name:"<code>change</code>",description:"Triggers when the value of any checkbox changes",parameters:"<code>value: Array</code></code>"}],template1:'\n            <div class="block">\n                <b-checkbox>Basic</b-checkbox>\n                <b-checkbox v-model="checkbox">{{ checkbox }}</b-checkbox>\n                <b-checkbox disabled>Disabled</b-checkbox>\n                <b-checkbox disabled checked>Disabled Checked</b-checkbox>\n            </div>\n\n            <h3 class="subtitle">Vertical</h3>\n            <div class="field">\n                <b-checkbox>Basic</b-checkbox>\n            </div>\n            <div class="field">\n                <b-checkbox v-model="checkbox">{{ checkbox }}</b-checkbox>\n            </div>\n            <div class="field">\n                <b-checkbox disabled>Disabled</b-checkbox>\n            </div>\n            <div class="field">\n                <b-checkbox disabled checked>Disabled Checked</b-checkbox>\n            </div>',code1:"\n            export default {\n                data() {\n                    return {\n                        checkbox: true\n                    }\n                }\n            }",template2:'\n            <div class="block">\n                <b-checkbox-group v-model="checkboxGroup">\n                    <b-checkbox custom-value="Silver">Silver</b-checkbox>\n                    <b-checkbox custom-value="Flint">Flint</b-checkbox>\n                    <b-checkbox custom-value="Vane">Vane</b-checkbox>\n                    <b-checkbox custom-value="Billy" disabled>Billy</b-checkbox>\n                </b-checkbox-group>\n            </div>\n            <p class="content"><b>Selection:</b> {{ checkboxGroup }}</p>\n\n            <h3 class="subtitle">Vertical example</h3>\n            <b-checkbox-group v-model="checkboxGroup">\n                <div class="field">\n                    <b-checkbox custom-value="Silver">Silver</b-checkbox>\n                </div>\n                <div class="field">\n                    <b-checkbox custom-value="Flint">Flint</b-checkbox>\n                </div>\n                <div class="field">\n                    <b-checkbox custom-value="Vane">Vane</b-checkbox>\n                </div>\n                <div class="field">\n                    <b-checkbox custom-value="Billy" disabled>Billy</b-checkbox>\n                </div>\n            </b-checkbox-group>',code2:"\n            export default {\n                data() {\n                    return {\n                        checkboxGroup: ['Flint']\n                    }\n                }\n            }"}}}},436:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title is-spaced"},[e._v("Checkbox")]),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Select a single or grouped options")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"block"},[t("b-checkbox",[e._v("Basic")]),e._v(" "),t("b-checkbox",{model:{value:e.checkbox,callback:function(c){e.checkbox=c},expression:"checkbox"}},[e._v(e._s(e.checkbox))]),e._v(" "),t("b-checkbox",{attrs:{disabled:""}},[e._v("Disabled")]),e._v(" "),t("b-checkbox",{attrs:{disabled:"",checked:""}},[e._v("Disabled Checked")])],1),e._v(" "),t("h3",{staticClass:"subtitle"},[e._v("Vertical example")]),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",[e._v("Basic")])],1),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",{model:{value:e.checkbox,callback:function(c){e.checkbox=c},expression:"checkbox"}},[e._v(e._s(e.checkbox))])],1),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",{attrs:{disabled:""}},[e._v("Disabled")])],1),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",{attrs:{disabled:"",checked:""}},[e._v("Disabled Checked")])],1)]),e._v(" "),t("div",{staticClass:"column"},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[t("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template1)))])]),e._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code1)))])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Checkbox Group")]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"block"},[t("b-checkbox-group",{model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[t("b-checkbox",{attrs:{"custom-value":"Silver"}},[e._v("Silver")]),e._v(" "),t("b-checkbox",{attrs:{"custom-value":"Flint"}},[e._v("Flint")]),e._v(" "),t("b-checkbox",{attrs:{"custom-value":"Vane"}},[e._v("Vane")]),e._v(" "),t("b-checkbox",{attrs:{"custom-value":"Billy",disabled:""}},[e._v("Billy")])],1)],1),e._v(" "),t("p",{staticClass:"content"},[t("b",[e._v("Selection:")]),e._v(" "+e._s(e.checkboxGroup))]),e._v(" "),t("h3",{staticClass:"subtitle"},[e._v("Vertical example")]),e._v(" "),t("b-checkbox-group",{model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[t("div",{staticClass:"field"},[t("b-checkbox",{attrs:{"custom-value":"Silver"}},[e._v("Silver")])],1),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",{attrs:{"custom-value":"Flint"}},[e._v("Flint")])],1),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",{attrs:{"custom-value":"Vane"}},[e._v("Vane")])],1),e._v(" "),t("div",{staticClass:"field"},[t("b-checkbox",{attrs:{"custom-value":"Billy",disabled:""}},[e._v("Billy")])],1)])],1),e._v(" "),t("div",{staticClass:"column"},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[t("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template2)))])]),e._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code2)))])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Checkbox properties")]),e._v(" "),t("b-table",{attrs:{data:e.checkboxProps,"default-sort":"name"},scopedSlots:e._u([["default",function(c){return[t("b-table-column",{attrs:{field:"name",label:"Name"},domProps:{innerHTML:e._s(c.row.name)}}),e._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"},domProps:{innerHTML:e._s(c.row.description)}}),e._v(" "),t("b-table-column",{attrs:{field:"type",label:"Type"},domProps:{innerHTML:e._s(c.row.type)}}),e._v(" "),t("b-table-column",{attrs:{field:"values",label:"Values"},domProps:{innerHTML:e._s(c.row.values)}}),e._v(" "),t("b-table-column",{attrs:{field:"default",label:"Default"},domProps:{innerHTML:e._s(c.row.default)}})]}]])}),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Checkbox events")]),e._v(" "),t("b-table",{attrs:{data:e.checkboxEvents,"default-sort":"name"},scopedSlots:e._u([["default",function(c){return[t("b-table-column",{attrs:{field:"name",label:"Name"},domProps:{innerHTML:e._s(c.row.name)}}),e._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"},domProps:{innerHTML:e._s(c.row.description)}}),e._v(" "),t("b-table-column",{attrs:{field:"parameters",label:"Parameters"},domProps:{innerHTML:e._s(c.row.parameters)}})]}]])}),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Group properties")]),e._v(" "),t("b-table",{attrs:{data:e.checkboxGroupProps,"default-sort":"name"},scopedSlots:e._u([["default",function(c){return[t("b-table-column",{attrs:{field:"name",label:"Name"},domProps:{innerHTML:e._s(c.row.name)}}),e._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"},domProps:{innerHTML:e._s(c.row.description)}}),e._v(" "),t("b-table-column",{attrs:{field:"type",label:"Type"},domProps:{innerHTML:e._s(c.row.type)}}),e._v(" "),t("b-table-column",{attrs:{field:"values",label:"Values"},domProps:{innerHTML:e._s(c.row.values)}}),e._v(" "),t("b-table-column",{attrs:{field:"default",label:"Default"},domProps:{innerHTML:e._s(c.row.default)}})]}]])}),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Group events")]),e._v(" "),t("b-table",{attrs:{data:e.checkboxGroupEvents,"default-sort":"name"},scopedSlots:e._u([["default",function(c){return[t("b-table-column",{attrs:{field:"name",label:"Name"},domProps:{innerHTML:e._s(c.row.name)}}),e._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"},domProps:{innerHTML:e._s(c.row.description)}}),e._v(" "),t("b-table-column",{attrs:{field:"parameters",label:"Parameters"},domProps:{innerHTML:e._s(c.row.parameters)}})]}]])})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.637c581e44e8feec3497.js.map