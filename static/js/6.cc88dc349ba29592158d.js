webpackJsonp([6],{1136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(814),o=n.n(i);e.default={data:function(){return{expo:o.a}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,n="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=My website made with Buefy!&hashtags=madewithbuefy",i="status=1,width=575,height=400,top="+e+",left="+t;window.open(n,"",i)},getImg:function(t){return n(815)("./"+t)}}}},1137:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"content expo"},[n("div",{staticClass:"expo-head"},[n("div",{staticClass:"expo-head-text"},[t._v("Show us your own project or job!")]),t._v(" "),n("div",{staticClass:"expo-head-button"},[n("button",{staticClass:"button is-twitter",on:{click:t.tweet}},[n("b-icon",{attrs:{icon:"twitter"}}),t._v(" "),n("span",[t._v("#MadeWithBuefy")])],1)])]),t._v(" "),n("div",{staticClass:"columns is-multiline"},t._l(t.expo,function(e,i){return n("div",{key:e.title,staticClass:"column has-text-centered",class:i%3?"is-half":"is-full",staticStyle:{"padding-right":"2.5em"}},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"image-has-shadow",attrs:{src:t.getImg(e.img),alt:e.title}})]),t._v(" "),n("p",[n("a",{staticClass:"title is-5",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(e.title)+"\n                ")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"subtitle is-6"},[t._v("\n                    "+t._s(new Date(e.date).toLocaleDateString())+"\n                ")])])])}))])},staticRenderFns:[]}},300:function(t,e,n){var i=n(0)(n(1136),n(1137),null,null,null);t.exports=i.exports},814:function(t,e){t.exports=[{title:"JustBoil.me",date:"2019-08-20",img:"justboilme.png",url:"https://justboil.me"},{title:"Course Cosmos",date:"2019-08-11",img:"coursecosmos.png",url:"https://coursecosmos.com"},{title:"Menuver",date:"2019-08-01",img:"menuver.png",url:"https://menuver.com"},{title:"Philips Talent Pool",date:"2019-06-19",img:"philips-talentpool.png",url:"https://philips.talent-pool.com/projects"},{title:"FileGator",date:"2019-06-18",img:"filegator.png",url:"https://filegator.io"},{title:"Traject Ubudu",date:"2019-06-18",img:"traject-ubudu.png",url:"https://traject.ubudu.com"},{title:"Travelstop",date:"2019-06-13",img:"travelstop.png",url:"https://travelstop.com",featured:!0},{title:"Git Stars",date:"2019-06-01",img:"git-stars.png",url:"https://git-stars.netlify.com"},{title:"Marvel Match",date:"2019-05-24",img:"marvelmatch.png",url:"https://marvelmatch.com"},{title:"FOE Tools",date:"2019-05-24",img:"foe-tools.png",url:"https://foe-tools.github.io"},{title:"Brand Finance",date:"2019-05-24",img:"brandirectory.png",url:"https://brandirectory.com"},{title:"Repo Remover",date:"2019-05-24",img:"reporemover.png",url:"https://reporemover.xyz",featured:!0},{title:"Nest&Cut",date:"2019-05-22",img:"nestandcut.png",url:"https://nestandcut.com"},{title:"Okuna",date:"2019-04-24",img:"openbook.png",url:"https://www.okuna.io",featured:!0},{title:"Immunization Academy",date:"2019-04-24",img:"immunization-academy.png",url:"https://www.immunizationacademy.com"},{title:"Switchblade",date:"2019-04-24",img:"switchblade.png",url:"https://switchblade.xyz"},{title:"Moonlight",date:"2019-04-24",img:"moonlight.png",url:"https://www.moonlightwork.com",featured:!0},{title:"Im Done",date:"2019-04-24",img:"imdone.png",url:"https://imdone.io"},{title:"Tainacan",date:"2019-04-24",img:"tainacan.png",url:"http://tainacan.org/"},{title:"Counter Network",date:"2019-04-24",img:"counter-network.png",url:"https://counter.network"},{title:"Gods Unchained",date:"2019-04-24",img:"godsunchained.png",url:"https://godsunchained.info"},{title:"Picano",date:"2019-04-24",img:"picano.png",url:"https://picano.co"},{title:"Reaction Role",date:"2019-04-24",img:"reaction-role.png",url:"https://reaction-role.com"},{title:"Buchfink",date:"2019-04-24",img:"buchfink.png",url:"https://buchfink.ch"},{title:"Salamander Garten",date:"2019-04-24",img:"salamander-garten.png",url:"https://voranalyse.salamander-garten.ch"},{title:"Pumpipumpe Map",date:"2019-04-24",img:"pumpipumpe-map.png",url:"https://map.pumpipumpe.ch"},{title:"Prevue",date:"2019-04-24",img:"prevue.png",url:"https://pre-vue.herokuapp.com"}]},815:function(t,e,n){function i(t){return n(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./brandirectory.png":816,"./buchfink.png":817,"./counter-network.png":818,"./coursecosmos.png":819,"./filegator.png":820,"./foe-tools.png":821,"./git-stars.png":822,"./godsunchained.png":823,"./imdone.png":824,"./immunization-academy.png":825,"./justboilme.png":826,"./marvelmatch.png":827,"./menuver.png":828,"./moonlight.png":829,"./nestandcut.png":830,"./openbook.png":831,"./philips-talentpool.png":832,"./picano.png":833,"./prevue.png":834,"./pumpipumpe-map.png":835,"./reaction-role.png":836,"./reporemover.png":837,"./salamander-garten.png":838,"./switchblade.png":839,"./tainacan.png":840,"./traject-ubudu.png":841,"./travelstop.png":842};i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=815},816:function(t,e,n){t.exports=n.p+"static/img/brandirectory.d48a052.png"},817:function(t,e,n){t.exports=n.p+"static/img/buchfink.dabdb37.png"},818:function(t,e,n){t.exports=n.p+"static/img/counter-network.67e5a51.png"},819:function(t,e,n){t.exports=n.p+"static/img/coursecosmos.bbfa297.png"},820:function(t,e,n){t.exports=n.p+"static/img/filegator.ac65a2e.png"},821:function(t,e,n){t.exports=n.p+"static/img/foe-tools.295a881.png"},822:function(t,e,n){t.exports=n.p+"static/img/git-stars.9149dd4.png"},823:function(t,e,n){t.exports=n.p+"static/img/godsunchained.a85cc28.png"},824:function(t,e,n){t.exports=n.p+"static/img/imdone.8db3885.png"},825:function(t,e,n){t.exports=n.p+"static/img/immunization-academy.6095c98.png"},826:function(t,e,n){t.exports=n.p+"static/img/justboilme.81faca5.png"},827:function(t,e,n){t.exports=n.p+"static/img/marvelmatch.cc34f75.png"},828:function(t,e,n){t.exports=n.p+"static/img/menuver.aae84b8.png"},829:function(t,e,n){t.exports=n.p+"static/img/moonlight.52440e8.png"},830:function(t,e,n){t.exports=n.p+"static/img/nestandcut.1ff4f8a.png"},831:function(t,e,n){t.exports=n.p+"static/img/openbook.eb2bf8b.png"},832:function(t,e,n){t.exports=n.p+"static/img/philips-talentpool.9ac3164.png"},833:function(t,e,n){t.exports=n.p+"static/img/picano.9ee55c3.png"},834:function(t,e,n){t.exports=n.p+"static/img/prevue.29042c8.png"},835:function(t,e,n){t.exports=n.p+"static/img/pumpipumpe-map.b207af4.png"},836:function(t,e,n){t.exports=n.p+"static/img/reaction-role.bb2e85e.png"},837:function(t,e,n){t.exports=n.p+"static/img/reporemover.783c4e4.png"},838:function(t,e,n){t.exports=n.p+"static/img/salamander-garten.e1b1af4.png"},839:function(t,e,n){t.exports=n.p+"static/img/switchblade.794330f.png"},840:function(t,e,n){t.exports=n.p+"static/img/tainacan.5a127c4.png"},841:function(t,e,n){t.exports=n.p+"static/img/traject-ubudu.826bfa4.png"},842:function(t,e,n){t.exports=n.p+"static/img/travelstop.7e086d2.png"}});
//# sourceMappingURL=6.cc88dc349ba29592158d.js.map