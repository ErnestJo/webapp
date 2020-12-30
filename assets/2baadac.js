(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{680:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{readonly:!0,dialog:!1,valid:!1,show1:!1,show2:!1,show3:!1,show4:!1,edit:!1,confirmPassword:"",rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},form_data:{oldPassword:"",newPassword:""}}},beforeCreate:function(){this.$store.dispatch("retrieve_profile")},methods:{updatepasssword:function(){this.$store.dispatch("_update_user_password",this.form_data)},updateprofile:function(){var e=this;console.log(this.user.staff),delete this.user.staff.user,this.$store.dispatch("updatestaff",this.user.staff).then((function(){e.$store.dispatch("retrieve_profile"),e.edit=!1}))},getColor:function(e){return"user"===e?"yellow":"admin"===e?"blue darken-3 white--text":"moderator"===e?"green":"cyan"}},computed:{user:function(){return this.$store.getters.profile},passwordConfirmationRule:function(){var e=this;return function(){return e.form_data.newPassword===e.confirmPassword||"Password must match"}}}},l=r(54),n=r(63),d=r.n(n),c=r(222),f=r(452),v=r(451),m=r(502),w=r(527),_=r(464),h=r(442),x=r(645),y=r(435),k=r(494),C=r(163),P=r(185),V=r(465),$=r(445),U=r(495),T=r(53),D=r(93),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-card",{staticClass:"mx-auto"},[r("v-toolbar",{attrs:{color:"primary",flat:""}},[r("v-toolbar-title",[e._v(" User Profile")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[null!=e.user?r("v-btn",e._g(e._b({attrs:{medium:""}},"v-btn",l,!1),o),[r("v-icon",{attrs:{small:"",color:"primary"}},[e._v("mdi-lock")]),e._v("   Change\n            Password")],1):e._e()]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2"},[e._v("\n            Update password\n          ")]),e._v(" "),r("v-card-text",{staticClass:"pa-4"},[r("v-form",{staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(t){return t.preventDefault(),e.updatepasssword(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock","append-icon":e.show1?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password","error-count":"8",label:"Old password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.form_data.oldPassword,callback:function(t){e.$set(e.form_data,"oldPassword",t)},expression:"form_data.oldPassword"}}),e._v(" "),r("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show2?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min],type:e.show2?"text":"password","error-count":"8",label:"New password",placeholder:"********",name:"input-10-1",hint:"At least 8 characters",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(t){e.show2=!e.show2}},model:{value:e.form_data.newPassword,callback:function(t){e.$set(e.form_data,"newPassword",t)},expression:"form_data.newPassword"}}),e._v(" "),r("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show3?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min,e.passwordConfirmationRule],type:e.show3?"text":"password","error-count":"8",label:"Confirm password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(t){e.show3=!e.show3}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n              Cancel\n            ")]),e._v(" "),r("v-btn",{attrs:{color:"warning",small:"",type:"submit",disabled:!e.valid,form:"check-login-form"}},[e._v("\n              Update\n            ")])],1)],1)],1)],1),e._v(" "),null!=e.user?r("v-card-text",[r("v-form",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:e.user.username,label:"Username",readonly:e.readonly}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:e.user.email,label:"Email",readonly:e.readonly}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:e.user.createdDate,label:"Created At",readonly:e.readonly}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:e.user.lastModifiedDate,label:"Last Modified",readonly:e.readonly}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("h5",[e._v("Roles:")]),e._v(" "),e._l(e.user.roles,(function(t,i){return r("v-chip",{key:i,staticClass:"pa-1 mr-1 ",attrs:{color:e.getColor(t.name.toLowerCase()),small:""}},[e._v(e._s(t.name.toLowerCase()))])}))],2),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e.user.isStaff?r("v-checkbox",{attrs:{label:"Edit"},model:{value:e.edit,callback:function(t){e.edit=t},expression:"edit"}}):e._e()],1)],1)],1)],1)],1):r("v-card-text",[r("v-progress-circular",{attrs:{width:2,color:"primary",size:"20",indeterminate:""}})],1)],1),e._v(" "),e.edit?r("v-card",{staticClass:"mt-4",attrs:{tile:"",outlined:""}},[r("v-card-title",[e._v("\n      Edit profile\n    ")]),e._v(" "),r("v-card-text",[r("v-form",{staticClass:"mt-3",attrs:{id:"check-update-profile-form"},on:{submit:function(t){return t.preventDefault(),e.updateprofile(t)}}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Username",readonly:e.readonly},model:{value:e.user.staff.username,callback:function(t){e.$set(e.user.staff,"username",t)},expression:"user.staff.username"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Full name"},model:{value:e.user.staff.fullName,callback:function(t){e.$set(e.user.staff,"fullName",t)},expression:"user.staff.fullName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Phone"},model:{value:e.user.staff.contacts,callback:function(t){e.$set(e.user.staff,"contacts",t)},expression:"user.staff.contacts"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Level"},model:{value:e.user.staff.level,callback:function(t){e.$set(e.user.staff,"level",t)},expression:"user.staff.level"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email "},model:{value:e.user.staff.email,callback:function(t){e.$set(e.user.staff,"email",t)},expression:"user.staff.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Thumbnail link",readonly:""},model:{value:e.user.staff.imageUrl,callback:function(t){e.$set(e.user.staff,"imageUrl",t)},expression:"user.staff.imageUrl"}})],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"warning",small:"",type:"submit",form:"check-update-profile-form"}},[e._v("\n        Update\n      ")])],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCheckbox:m.a,VChip:w.a,VCol:_.a,VContainer:h.a,VDialog:x.a,VDivider:y.a,VForm:k.a,VIcon:C.a,VProgressCircular:P.a,VRow:V.a,VSpacer:$.a,VTextField:U.a,VToolbar:T.a,VToolbarTitle:D.a})}}]);