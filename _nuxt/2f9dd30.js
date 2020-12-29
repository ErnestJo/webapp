(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{313:function(e,t,l){"use strict";l.r(t);var r={props:{title:{type:String,dafault:null}}},d=l(18),component=Object(d.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-toolbar",{attrs:{color:"primary",flat:"",dark:""}},[t("v-toolbar-title",[t("h4",[this._v(this._s(this.title))])]),this._v(" "),t("v-spacer")],1)}),[],!1,null,null,null);t.default=component.exports},359:function(e,t,l){"use strict";l.r(t);l(26);var r={components:{"tool-bar":l(313).default},data:function(){return{title:"Create New Patient",formHasErrors:!1,valid:!0,editedItem:{name:"",phone:"",address:"",emailAddress:"",guardianName:"",height:"",weight:"",bloodPressure:"",age:0,bloodGroup:"",gender:0,isAdmitted:!1,symptoms:"",note:"",marriageStatus:""},defaultItem:{name:"",phone:"",address:"",emailAddress:"",guardianName:"",height:"",weight:"",bloodPressure:"",age:0,bloodGroup:"",gender:0,isAdmitted:!1,symptoms:"",note:"",marriageStatus:""},rules:{required:function(e){return!!e||"Required."},counter:function(e){return e.length<=20||"Max 20 characters"},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Invalid e-mail."}},genderoptions:[{name:"Male",value:1},{name:"Female",value:2},{name:"Unspecified",value:0}]}},methods:{close:function(){},save:function(){this.editedItem.gender=this.editedItem.gender.name,console.log(this.editedItem);var e=this.$refs.form.validate();this.$refs.form.validate(),e&&this.$store.dispatch("create_new_patient",this.editedItem)}}},d=l(18),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"breadcrumb flat "},[l("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),l("router-link",{attrs:{to:"/patients"}},[e._v("Patients")]),e._v(" "),l("router-link",{staticClass:"active",attrs:{to:"/patients/add"}},[e._v("Create new Patient")])],1),e._v(" "),l("v-card",{staticClass:"mx-auto"},[l("tool-bar",{attrs:{title:e.title}}),e._v(" "),l("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l("v-container",[l("v-card-text",[l("v-container",[l("v-row",[l("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Full Name",hint:"Patient full name. E.g John Doe (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-select",{attrs:{hint:" "+e.editedItem.gender.name,items:e.genderoptions,label:"Select","item-value":"value",outlined:"","persistent-hint":"","return-object":"","single-line":""},scopedSlots:e._u([{key:"selection",fn:function(data){return[e._v("\n                        "+e._s(data.item.name)+"\n                      ")]}},{key:"item",fn:function(data){return[e._v("\n                        "+e._s(data.item.name)+", ("+e._s(data.item.value)+")\n                      ")]}}]),model:{value:e.editedItem.gender,callback:function(t){e.$set(e.editedItem,"gender",t)},expression:"editedItem.gender"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Phone No.",hint:"Patient phone No. e.g +255716xxxxxx (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Home Address",hint:"Address e.g 123 Hawaii, 31ST, H24KL (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{type:"number",outlined:"",label:"Age",hint:"Patient age. E.g 34 (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.age,callback:function(t){e.$set(e.editedItem,"age",t)},expression:"editedItem.age"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Guardian Name",hint:"Patient close relative. E.g Alice Doe (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.guardianName,callback:function(t){e.$set(e.editedItem,"guardianName",t)},expression:"editedItem.guardianName"}})],1)],1)],1),e._v(" "),l("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Email address",hint:"Patient Email  address. E.g example@email.com (Optional)",rules:[e.rules.required,e.rules.email]},model:{value:e.editedItem.emailAddress,callback:function(t){e.$set(e.editedItem,"emailAddress",t)},expression:"editedItem.emailAddress"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Marriage Status",hint:"Marriage Status (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.marriageStatus,callback:function(t){e.$set(e.editedItem,"marriageStatus",t)},expression:"editedItem.marriageStatus"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Height",hint:"Patient height. e.g 10FT (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.height,callback:function(t){e.$set(e.editedItem,"height",t)},expression:"editedItem.height"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Weight",hint:"Patient weight. e.g 10Kg (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.weight,callback:function(t){e.$set(e.editedItem,"weight",t)},expression:"editedItem.weight"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Blood Group",hint:"Blood group. e.g A,B,O (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.bloodGroup,callback:function(t){e.$set(e.editedItem,"bloodGroup",t)},expression:"editedItem.bloodGroup"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",label:"Blood pressure",hint:"Patient BP. (Mandatory)",rules:[e.rules.required]},model:{value:e.editedItem.bloodPressure,callback:function(t){e.$set(e.editedItem,"bloodPressure",t)},expression:"editedItem.bloodPressure"}})],1)],1)],1),e._v(" "),l("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"12"}},[l("v-textarea",{attrs:{label:"Symptoms",outlined:"",hint:"Patient initial symptoms"},model:{value:e.editedItem.symptoms,callback:function(t){e.$set(e.editedItem,"symptoms",t)},expression:"editedItem.symptoms"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-textarea",{attrs:{label:"Note:",outlined:"",hint:"Additional note if any"},model:{value:e.editedItem.note,callback:function(t){e.$set(e.editedItem,"note",t)},expression:"editedItem.note"}})],1)],1)],1)],1)],1)],1),e._v(" "),l("v-card-actions",[l("v-spacer"),e._v(" "),l("v-btn",{on:{click:e.close}},[e._v("Cancel")]),e._v(" "),l("v-btn",{attrs:{color:"success darken-1"},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ToolBar:l(313).default})}}]);