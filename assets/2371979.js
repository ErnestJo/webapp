(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{469:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(470),o=r(2),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},470:function(t,e,r){"use strict";r(12),r(9),r(161),r(10),r(162),r(23),r(16),r(17),r(13),r(11);var n=r(1),o=(r(471),r(215)),c=r(473),l=r(89),d=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},471:function(t,e,r){var content=r(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("e23b7040",content,!0,{sourceMap:!1})},472:function(t,e,r){(e=r(14)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},481:function(t,e,r){"use strict";r(12),r(9),r(10),r(47),r(160),r(90),r(474),r(23),r(16),r(17),r(13),r(19),r(34),r(42),r(69),r(72),r(11),r(48);var n=r(1),o=(r(301),r(3)),c=r(70),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=f.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),m=f.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function O(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],_)_[e].forEach((function(t){var n=r[t],o=O(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},482:function(t,e,r){"use strict";r(12),r(31),r(9),r(10),r(47),r(160),r(474),r(16),r(17),r(13),r(19),r(34),r(71),r(42),r(69),r(11),r(48);var n=r(1),o=(r(301),r(3)),c=r(70),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return f.reduce((function(r,n){return r[t+Object(l.G)(n)]=e(),r}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},_=y("align",(function(){return{type:String,default:null,validator:m}})),O=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},x=y("justify",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},w=y("alignContent",(function(){return{type:String,default:null,validator:j}})),k={align:Object.keys(_),justify:Object.keys(x),alignContent:Object.keys(w)},S={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},_),{},{justify:{type:String,default:null,validator:O}},x),{},{alignContent:{type:String,default:null,validator:j}},w),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=C.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=P(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),C.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},567:function(t,e,r){var content=r(621);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("72311d6a",content,!0,{sourceMap:!1})},620:function(t,e,r){"use strict";r(567)},621:function(t,e,r){(e=r(14)(!1)).push([t.i,"h2[data-v-f4085256]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),t.exports=e},677:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{mode:0,switch1:!0,select:{locale:"English",lang:"en"},locales:[{locale:"English",lang:"en"},{locale:"Kiswahili",lang:"sw"},{locale:"French",lang:"fr"},{locale:"Arab",lang:"ar"}]}},methods:{toggle:function(t){"true"==="".concat(t)?(this.$vuetify.theme.dark=!0,this.$store.dispatch("change_to_dark"),document.body.style.background="#354141"):(this.$store.dispatch("change_to_light"),this.$vuetify.theme.dark=!1,document.body.style.backgroundImage="url(https://cdn.hipwallpaper.com/i/50/79/MSsZP2.jpg)")},changeLanguage:function(t){this.$i18n.locale=t}},created:function(){},computed:{isDark:function(){return this.$store.getters.isDark}}},o=(r(620),r(54)),c=r(65),l=r.n(c),d=r(470),v=r(469),f=r(481),h=r(459),y=r(482),m=r(582),_=r(462),O=r(465),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"space-around"}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-card",[r("v-card-title",[t._v("\n          Switch Dark/Light Mode\n\n          "),r("v-spacer"),t._v(" "),r("v-switch",{attrs:{value:!0,inset:"",color:"primary"},on:{change:function(e){return t.toggle(null!==e)}},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-card",[r("v-card-title",[t._v("\n          "+t._s(t.$t("label.titles.changelanguage"))+"\n          "),r("v-spacer"),t._v(" "),r("v-select",{attrs:{items:t.locales,"item-text":"locale","item-value":"lang","persistent-hint":"","return-object":"","single-line":"",dense:"",lass:"font-weight-light"},on:{change:function(e){return t.changeLanguage(t.select.lang)}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)],1)],1)],1)}),[],!1,null,"f4085256",null);e.default=component.exports;l()(component,{VCard:d.a,VCardTitle:v.d,VCol:f.a,VContainer:h.a,VRow:y.a,VSelect:m.a,VSpacer:_.a,VSwitch:O.a})}}]);