(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-add-phone-contact-add-phone-contact"],{"4c68":function(n,t,e){"use strict";e.r(t);var i=e("ca2e"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=a.a},5190:function(n,t,e){"use strict";e.r(t);var i=e("88f6"),a=e("4c68");for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);var s,c=e("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"3cbd2606",null,!1,i["a"],s);t["default"]=l.exports},"88f6":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("名称")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人名称",name:"name",value:n.name},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.nameChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("手机号")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人手机号",name:"phone",value:n.phone},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.phoneChange.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("添加联系人")])],1)],1)],1)],1)},u=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}))},ca2e:function(n,t,e){"use strict";var i=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var a=i(e("c964")),u={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(n){this.name=n.detail.value},phoneChange:function(n){this.phone=n.detail.value},add:function(){var n=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.addPhoneContact({firstName:n.name,mobilePhoneNumber:n.phone,success:function(){uni.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){uni.showModal({content:"添加联系人失败！",showCancel:!1})}});case 1:case"end":return t.stop()}}),t)})))()}}};t.default=u}}]);