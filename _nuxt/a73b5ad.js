(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{289:function(e,t,n){"use strict";var r={props:{services:{type:Array,default:null}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(e){this.$router.push("/services/"+e.id)},updatePagination:function(e){console.log(e)}}},c=n(18),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto"},[null==e.services.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",[n("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.services,search:e.search,"mobile-breakpoint":"100"},on:{"click:row":e.handleClick,"update:page":e.updatePagination},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(t){return[t.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[n("v-icon",e._g(e._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",c,!1),r),[e._v("mdi-stop-circle")])]}}],null,!0)},[e._v(" "),n("span",[e._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n.patientName)+" ( "+e._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(t){var r=t.item;return[null==r.staffName?n("p",[e._v("Unassigned")]):n("p",[e._v(e._s(r.staffName)+" ( "+e._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);t.a=component.exports},368:function(e,t,n){"use strict";n.r(t);n(9);var r=n(4),c={components:{"service-card":n(289).a},data:function(){return{services:[],search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{getAllServices:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.$get("services/").then((function(t){null!==t&&(e.services=t.body.sort((function(a,b){return b.isActive-a.isActive})))})).catch((function(e){console.log(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},handleClick:function(e){this.$router.push("/services/"+e.id)},updatePagination:function(e){console.log(e)}},created:function(){this.getAllServices()}},o=n(18),component=Object(o.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("service-card",{attrs:{services:this.services}})}),[],!1,null,null,null);t.default=component.exports}}]);