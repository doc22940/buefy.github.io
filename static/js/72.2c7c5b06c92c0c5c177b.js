webpackJsonp([72],{197:function(e,t,a){var n=a(0)(a(885),a(886),null,null,null);e.exports=n.exports},885:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{data:[{id:1,first_name:"Jesse",last_name:"Simmons",date:"2016-10-15 13:43:27",gender:"Male"},{id:2,first_name:"John",last_name:"Jacobs",date:"2016-12-15 06:00:53",gender:"Male"},{id:3,first_name:"Tina",last_name:"Gilbert",date:"2016-04-26 06:26:28",gender:"Female"},{id:4,first_name:"Clarence",last_name:"Flores",date:"2016-04-10 10:28:46",gender:"Male"},{id:5,first_name:"Anne",last_name:"Lee",date:"2016-12-06 14:38:38",gender:"Female"}],columns:[{field:"id",label:"ID",width:"40",numeric:!0},{field:"first_name",label:"First Name"},{field:"last_name",label:"Last Name"},{field:"date",label:"Date",centered:!0},{field:"gender",label:"Gender"}],draggingRow:null,draggingRowIndex:null}},methods:{dragstart:function(e){this.draggingRow=e.row,this.draggingRowIndex=e.index,e.event.dataTransfer.effectAllowed="copy"},dragover:function(e){e.event.dataTransfer.dropEffect="copy",e.event.target.closest("tr").classList.add("is-selected"),e.event.preventDefault()},dragleave:function(e){e.event.target.closest("tr").classList.remove("is-selected"),e.event.preventDefault()},drop:function(e){e.event.target.closest("tr").classList.remove("is-selected");var t=e.index;this.$toast.open("Moved "+this.draggingRow.first_name+" from row "+(this.draggingRowIndex+1)+" to "+(t+1))}}}},886:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{data:e.data,columns:e.columns,draggable:""},on:{dragstart:e.dragstart,drop:e.drop,dragover:e.dragover,dragleave:e.dragleave}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=72.2c7c5b06c92c0c5c177b.js.map