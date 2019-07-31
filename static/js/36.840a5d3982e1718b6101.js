webpackJsonp([36,162,215],{1153:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(158),o=t(159),a=t.n(o),l=t(1154),c=t.n(l);n.default={data:function(){return{api:i.default,ExSimple:a.a,ExSimpleCode:c.a}}}},1154:function(e,n){e.exports='<template>\r\n    <b-menu>\r\n        <b-menu-list label="Menu">\r\n            <b-menu-item icon="information-outline" label="Info"></b-menu-item>\r\n            <b-menu-item icon="settings" active expanded>\r\n                <template slot="label" slot-scope="props">\r\n                    Administrator\r\n                    <b-icon\r\n                        class="is-pulled-right"\r\n                        :icon="props.expanded ? \'menu-down\' : \'menu-up\'">\r\n                    </b-icon>\r\n                </template>\r\n                <b-menu-item icon="account" label="Users"></b-menu-item>\r\n                <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>\r\n                <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>\r\n            </b-menu-item>\r\n            <b-menu-item icon="account" label="My Account">\r\n                <b-menu-item label="Account data"></b-menu-item>\r\n                <b-menu-item label="Addresses"></b-menu-item>\r\n            </b-menu-item>\r\n        </b-menu-list>\r\n        <b-menu-list>\r\n            <b-menu-item\r\n                label="Expo"\r\n                icon="link"\r\n                tag="router-link"\r\n                target="_blank"\r\n                to="/expo">\r\n            </b-menu-item>\r\n        </b-menu-list>\r\n        <b-menu-list label="Actions">\r\n            <b-menu-item label="Logout"></b-menu-item>\r\n        </b-menu-list>\r\n    </b-menu>\r\n</template>\r\n'},1155:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode,vertical:""}}),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},158:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{title:"Menu",slots:[{name:"default",description:"Menu list elements",props:"—"}]},{title:"Menu List",props:[{name:"<code>label</code>",description:"Menu list label",type:"String",values:"—",default:"—"},{name:"<code>icon</code>",description:"Icon name",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"—",default:"<code>mdi</code>"}],slots:[{name:"default",description:"Menu item elements",props:"—"},{name:"<code>label</code>",description:"Menu list custom label",props:"—"}]},{title:"Menu Item",props:[{name:"<code>label</code>",description:"Menu item label",type:"String",values:"—",default:"—"},{name:"<code>icon</code>",description:"Icon name",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"—",default:"<code>mdi</code>"},{name:"<code>disabled</code>",description:"Item is disabled",type:"Boolean",values:"-",default:"false"},{name:"<code>active</code>",description:"Item is active, use the .sync modifier to make it two-way binding",type:"Boolean",values:"-",default:"false"},{name:"<code>expanded</code>",description:"Item is expanded when <code>default</code> contains menu items, use the .sync modifier to make it two-way binding",type:"Boolean",values:"-",default:"false"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>fade</code>"},{name:"<code>tag</code>",description:"Button tag name",type:"String",values:"<code>a</code>, <code>router-link</code>, <code>nuxt-link</code> or other nuxt alias",default:"<code>a</code>"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],events:[{name:"<code>click</code>",description:"Triggers on click",parameters:"<code>event: $event</code>"}],slots:[{name:"default",description:"Menu item body",props:"—"},{name:"<code>label</code>",description:"Menu list custom label",props:"<code>active: Boolean</code>,<code>expanded: Boolean</code>"}]}]},159:function(e,n,t){var i=t(0)(null,t(904),null,null,null);e.exports=i.exports},285:function(e,n,t){var i=t(0)(t(1153),t(1155),null,null,null);e.exports=i.exports},904:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-menu",[t("b-menu-list",{attrs:{label:"Menu"}},[t("b-menu-item",{attrs:{icon:"information-outline",label:"Info"}}),e._v(" "),t("b-menu-item",{attrs:{icon:"settings",active:"",expanded:""},scopedSlots:e._u([{key:"label",fn:function(n){return[e._v("\n                Administrator\n                "),t("b-icon",{staticClass:"is-pulled-right",attrs:{icon:n.expanded?"menu-down":"menu-up"}})]}}])},[t("b-menu-item",{attrs:{icon:"account",label:"Users"}}),e._v(" "),t("b-menu-item",{attrs:{icon:"cellphone-link",label:"Devices"}}),e._v(" "),t("b-menu-item",{attrs:{icon:"cash-multiple",label:"Payments",disabled:""}})],1),e._v(" "),t("b-menu-item",{attrs:{icon:"account",label:"My Account"}},[t("b-menu-item",{attrs:{label:"Account data"}}),e._v(" "),t("b-menu-item",{attrs:{label:"Addresses"}})],1)],1),e._v(" "),t("b-menu-list",[t("b-menu-item",{attrs:{label:"Expo",icon:"link",tag:"router-link",target:"_blank",to:"/expo"}})],1),e._v(" "),t("b-menu-list",{attrs:{label:"Actions"}},[t("b-menu-item",{attrs:{label:"Logout"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=36.840a5d3982e1718b6101.js.map