(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{310:function(t,e,r){"use strict";var o=r(11),n=r(7),l=r(90),c=r(20),d=r(12),h=r(50),f=r(199),m=r(71),v=r(8),y=r(73),x=r(72).f,w=r(40).f,F=r(19).f,_=r(337).trim,O=n.Number,A=O.prototype,C="Number"==h(y(A)),N=function(t){var e,r,o,n,l,c,d,code,h=m(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=_(h)).charCodeAt(0))||45===e){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>n)return NaN;return parseInt(l,o)}return+h};if(l("Number",!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var I,P=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof P&&(C?v((function(){A.valueOf.call(r)})):"Number"!=h(r))?f(new O(N(e)),r,P):N(e)},S=o?x(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;S.length>M;M++)d(O,I=S[M])&&!d(P,I)&&F(P,I,w(O,I));P.prototype=A,A.constructor=P,c(n,"Number",P)}},311:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("3e3b8fdd",content,!1,{sourceMap:!1})},314:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Object,default:null}},data:function(){return{chartOptions:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",width:1},xaxis:{type:"date",categories:this.data.categories},yaxis:{title:{text:"Total"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return""+t}},x:{format:"dd/MM/yy"}}}}}},n=r(18),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",height:"280",options:this.chartOptions,series:this.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";var o=r(5),n=r(51),l=r(336),c=r(200),d=r(8),h=1..toFixed,f=Math.floor,m=function(t,e,r){return 0===e?r:e%2==1?m(t,e-1,r*t):m(t*t,e/2,r)};o({target:"Number",proto:!0,forced:h&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){h.call({})}))},{toFixed:function(t){var e,r,o,d,h=l(this),v=n(t),data=[0,0,0,0,0,0],y="",x="0",w=function(t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=f(o/1e7)},F=function(t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=f(r/t),r=r%t*1e7},_=function(){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(h!=h)return"NaN";if(h<=-1e21||h>=1e21)return String(h);if(h<0&&(y="-",h=-h),h>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(h*m(2,69,1))-69)<0?h*m(2,-e,1):h/m(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(0,r),o=v;o>=7;)w(1e7,0),o-=7;for(w(m(10,o,1),0),o=e-1;o>=23;)F(1<<23),o-=23;F(1<<o),w(1,1),F(2),x=_()}else w(0,r),w(1<<-e,0),x=_()+c.call("0",v);return x=v>0?y+((d=x.length)<=v?"0."+c.call("0",v-d)+x:x.slice(0,d-v)+"."+x.slice(d-v)):y+x}})},336:function(t,e,r){var o=r(50);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},337:function(t,e,r){var o=r(21),n="["+r(338)+"]",l=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(t){return function(e){var r=String(o(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},338:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},339:function(t,e,r){"use strict";r(311)},340:function(t,e,r){(e=r(24)(!1)).push([t.i,".outlined[data-v-5b9452ec]{color:#00f!important;border-color:#00f!important}",""]),t.exports=e},342:function(t,e,r){"use strict";r.r(e);r(37),r(335),r(13),r(27),r(38),r(34),r(58),r(9);var o,n=r(4),l=(r(310),{props:{height:{type:Number,default:350},data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,width:"100%",type:"pie",background:"transparent",toolbar:{show:!0},animation:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},stroke:{width:0},labels:this.data.chartOptions.labels,dataLabels:{enabled:!0,dropShadow:{blur:0,opacity:0}},fill:{colors:["#44FF07","#58508D","#BC5090","#FF6361","#FFA600"],type:"solid"},plotOptions:{pie:{customScale:.8,startAngle:-45,donut:{labels:{show:!0,total:{showAlways:!0,show:!1}}}}},legend:{position:"bottom",show:!1,markers:{}},title:{text:this.data.title,align:"left",margin:0,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"10px",color:"#263238",fontWeight:"12"}}}}}}),c=r(18),d=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("apexchart",{attrs:{height:this.height,width:"90%",options:this.options,series:this.data.series}})}),[],!1,null,null,null).exports,h={props:{data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!0,offsetY:25}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},stroke:{width:3,curve:"smooth"},title:{text:"Average High & Low Temperature",align:"left",margin:10,offsetX:0,offsetY:2,floating:!1,style:{fontSize:"14px"}},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:4,colors:["#FFA41B"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:0},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5,itemMargin:{horizontal:5,vertical:15}}}}}},f=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{fluid:""}},[e("apexchart",{attrs:{height:"350",width:"98%",type:"line",options:this.options,series:this.data.series}})],1)}),[],!1,null,null,null).exports,m={props:{item:{type:Object,default:null}},data:function(){return{}}},v=(r(339),Object(c.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"pa-1",attrs:{cols:"12",xs:"4",sm:"6",md:"2",xl:"1"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{staticClass:"mx-auto ",attrs:{elevation:o?3:1,color:"#FFFFFF"}},[r("v-list-item",[r("v-list-item-avatar",{class:t.item.color+" lighten-5",attrs:{height:"45",rounded:""}},[r("v-icon",{attrs:{color:t.item.color+" darken-2"},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6 font-weight-black my-1",domProps:{innerHTML:t._s(t.item.value)}}),t._v(" "),r("v-list-item-subtitle",{class:t.item.color+"--text font-weight-normal text-caption ",domProps:{innerHTML:t._s(t.item.title)}})],1)],1)],1)]}}])})],1)}),[],!1,null,"5b9452ec",null).exports),y={props:{height:{type:Number,default:350},data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,width:"100%",type:"donut",background:"transparent",toolbar:{show:!0},animation:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},stroke:{width:0},labels:this.data.chartOptions.labels,dataLabels:{enabled:!0,dropShadow:{}},fill:{type:"solid",colors:["#44FF07","#58508D","#BC5090","#FF6361","#FFA600"]},plotOptions:{pie:{customScale:.8,startAngle:-45,donut:{labels:{show:!0,total:{showAlways:!0,show:!1}}}}},legend:{position:"bottom",show:!1,markers:{}},title:{text:this.data.title,align:"left",margin:0,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"10px",color:"#263238",fontWeight:"12"}}}}}},x={components:{"pie-chart":d,"bar-chart":f,summarycard:v,donutchart:Object(c.a)(y,(function(){var t=this.$createElement;return(this._self._c||t)("apexchart",{attrs:{height:this.height,width:"100%",options:this.options,series:this.data.series}})}),[],!1,null,null,null).exports,"area-chart-spline":r(314).default},data:function(){return{apexdata:{series:[{name:"Trends",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}]},pie_options:{series:[44,55,13,33],chartOptions:{labels:["Apple","Mango","Orange","Watermelon"]}}}},methods:{percentCalculation:function(t,e){return+(t/e*100).toFixed(2)},syncro:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).sync=!e.sync,t.next=4,Promise.all([e.$store.dispatch("retrievephysicians"),e.$store.dispatch("get_patient_trends"),e.$store.dispatch("get_patient_statistics")]).then((function(){console.log("Loading complete...")}));case 4:setTimeout((function(){e.sync=!e.sync}),2e3);case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},mounted:function(){this.syncro()},computed:{trend_items:{get:function(){return[{series:[this.$store.getters.statistic.totalMale,this.$store.getters.statistic.totalFemale,this.$store.getters.statistic.totalUnspecified],chartOptions:{labels:["Male Composition","Female Composition","Others Composition"]},title:"Gender Composition"},{series:[this.$store.getters.statistic.totalOpd,this.$store.getters.statistic.totalIpd],chartOptions:{labels:["Out Patient Department(OPD)","In Patient Department (IPD) "]},title:"OPD Vs IPD in (%)"},{series:[45,62],chartOptions:{labels:["Male","Female"]},title:"Overall Sex Trends"},{series:[44,55],chartOptions:{labels:["Male","Female"]},title:"Patient Trends By"},{series:[12,20,37],chartOptions:{labels:["Male","Female"]},title:"Patient Trends By"},{series:[44,55,27,45],chartOptions:{labels:["Male","Female"]},title:"Patient Trends By"}]}},summary_items:{get:function(){return[{title:"Overall Total Patients",subtitle:"Overall Total Patients",value:this.$store.getters.statistic.total,icon:"mdi-account-group-outline",color:"blue"},{title:"Assigned Patients",subtitle:"Assigned patients",measure:"p/d",value:this.$store.getters.statistic.totalAssigned,icon:"mdi-account-group-outline",color:"red"},{title:"Unassigned Patients",subtitle:"Unassigned Patients",value:this.$store.getters.statistic.totalUnassigned,icon:"mdi-account-group-outline",color:"teal"},{title:" OPD",subtitle:"OPD  Patients",value:this.$store.getters.statistic.totalOpd,measure:"p/d",icon:"mdi-account-group-outline",color:"lime"},{title:"IPD ",subtitle:"IPD  Patients",measure:"p/d",value:this.$store.getters.statistic.totalIpd,icon:"mdi-account-group-outline",color:"green"},{title:"Physicians",subtitle:"No. of Physicians",value:this.$store.getters.physicians.length,icon:"mdi-account-multiple",color:"light-blue"},{title:"Males",subtitle:"Male Patients",value:this.$store.getters.statistic.totalMale,icon:"mdi-gender-male",color:"indigo"},{title:"Females",subtitle:"Female patients",value:this.$store.getters.statistic.totalFemale,icon:"mdi-gender-female",color:"deep-orange"},{title:"Others",subtitle:"Special Gender",value:this.$store.getters.statistic.totalUnspecified,icon:"mdi-gender-male-female",color:"orange"},{title:"Success",subtitle:"Success Responses",value:"4245",icon:"mdi-select-group",color:"brown"},{title:"Success",subtitle:"Success Responses",value:"4245",icon:"mdi-select-group",color:"grey"},{title:"Average HT",subtitle:"Average Handle Time",value:"30 MIN",measure:"pt/min",icon:"mdi-select-group",color:"cyan"}]}},bsc_size:{get:function(){return this.$store.getters.trends.length}},bsc_chart:{get:function(){var t=this.$store.getters.trends,e=new Array,r=new Array,o=new Array,n=new Array,l=new Array;return t.forEach((function(element){e.push(element.total),r.push(element.male),o.push(element.female),n.push(element.other),l.push(element.date)})),l.push(0),{series:[{name:"Total",data:e},{name:"Male",data:r},{name:"Female",data:o},{name:"Other",data:n}],categories:l}}}},created:function(){}},w=Object(c.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-2 pa-0 px-2",attrs:{fluid:""}},[r("v-row",{staticClass:"mt-2",attrs:{justify:"start",align:"start"}},[t._l(t.summary_items,(function(e,i){return[0!==e.value?r("summarycard",{key:i,attrs:{item:e}}):t._e()]}))],2),t._v(" "),r("v-row",{staticClass:"mt-3",attrs:{justify:"start",align:"start"}},t._l(t.trend_items,(function(e,i){return r("v-col",{key:i,staticClass:"ma-0 pa-0 mt-1",attrs:{cols:"12",sm:"6",md:"2"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var o=t.hover;return[r("v-card",{staticClass:"mr-1 ml-1 mx-auto ",attrs:{elevation:o?3:1,dense:"",color:"#FFFFFF"}},[r("v-card-text",{staticClass:"ma-0 "},i%2==0?[r("pie-chart",{attrs:{data:e,height:200}})]:[r("donutchart",{attrs:{data:e,height:200}})],1)],1)]}}],null,!0)})],1)})),1),t._v(" "),r("v-row",{staticClass:"mt-3",attrs:{justify:"start",align:"start"}},[t.bsc_size>0?r("v-col",{staticClass:"ma-0 pa-0 mt-3",attrs:{cols:"12",sm:"12"}},[r("v-card",{staticClass:"mr-1 ml-1 ",attrs:{dense:""}},[r("area-chart-spline",{staticClass:"ma-0 ",attrs:{data:t.bsc_chart}})],1)],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[r("v-card",{staticClass:"mx-auto"},[r("bar-chart",{attrs:{data:t.apexdata}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[r("v-card",{staticClass:"mx-auto"},[r("bar-chart",{attrs:{data:t.apexdata}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[r("v-card",{staticClass:"mx-auto",attrs:{"min-height":"365"}},[r("pie-chart",{attrs:{data:t.pie_options,height:300}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[r("v-card",{staticClass:"mx-auto"},[r("v-card-text",[r("pie-chart",{staticStyle:{height:"200px"},attrs:{data:t.pie_options}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=w.exports;installComponents(w,{AreaChartSpline:r(314).default})}}]);