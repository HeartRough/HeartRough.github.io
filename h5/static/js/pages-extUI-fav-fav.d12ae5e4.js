(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"0efc":function(e,t,n){"use strict";n.r(t);var i=n("fb65"),c=n("ca9b");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("cc81");var o,r=n("f0c5"),f=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"30910e3b",null,!1,i["a"],o);t["default"]=f.exports},1665:function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(n("c0dd")),a={name:"UniFav",components:{uniIcons:c.default},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};t.default=a},"1ad9":function(e,t,n){"use strict";n.r(t);var i=n("82ce"),c=n("e599");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("d933");var o,r=n("f0c5"),f=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"23b6f7bc",null,!1,i["a"],o);t["default"]=f.exports},"61a4":function(e,t,n){var i=n("dfe5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=n("4f06").default;c("0aba421e",i,!0,{sourceMap:!1,shadowMode:!1})},"6e62":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(n("0efc")),a=i(n("29f3")),o=i(n("adf2")),r={components:{uniFav:c.default,uniNavBar:a.default,uniSection:o.default},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(e){this.checkList[e]=!this.checkList[e],this.$forceUpdate()}}};t.default=r},"82ce":function(e,t,n){"use strict";var i={"uni-section":n("adf2").default,"uni-fav":n("0efc").default,"uni-nav-bar":n("29f3").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"example-fav"},[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-first"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[0]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(0)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[1],star:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(1)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(2)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(3)}}})],1),n("uni-section",{attrs:{title:"自定义文字",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[4],"content-text":e.contentText},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(4)}}})],1),n("uni-section",{attrs:{title:"在自定义导航栏使用",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-fullWidth"},[n("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"arrowleft",title:"标题",color:"#333333","background-color":"#FFFFFF"}},[n("template",{attrs:{slot:"right"},slot:"right"},[n("uni-fav",{staticClass:"favBtn-nav",attrs:{checked:e.checkList[5],circle:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(5)}}})],1)],2)],1)],1)},a=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"9cd0":function(e,t,n){var i=n("e8fc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=n("4f06").default;c("c75541f6",i,!0,{sourceMap:!1,shadowMode:!1})},ca9b:function(e,t,n){"use strict";n.r(t);var i=n("1665"),c=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=c.a},cc81:function(e,t,n){"use strict";var i=n("9cd0"),c=n.n(i);c.a},d933:function(e,t,n){"use strict";var i=n("61a4"),c=n.n(i);c.a},dfe5:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-23b6f7bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-23b6f7bc]{font-size:14px;line-height:inherit}.example[data-v-23b6f7bc]{padding:0 15px 15px}.example-info[data-v-23b6f7bc]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-23b6f7bc]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-23b6f7bc]{padding:0 15px}.example-info[data-v-23b6f7bc]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-23b6f7bc]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-23b6f7bc]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-23b6f7bc]{font-size:18px;color:#fff}.word-btn[data-v-23b6f7bc]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-23b6f7bc]{background-color:#4ca2ff}\n.favBtn[data-v-23b6f7bc]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-23b6f7bc]{padding:%?32?% 0}.example-body-first[data-v-23b6f7bc]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.favBtn-nav[data-v-23b6f7bc]{\n\t\t/* left:-50rpx;\n */}body.?%PAGE?%[data-v-23b6f7bc]{background-color:#efeff4}",""]),e.exports=t},e599:function(e,t,n){"use strict";n.r(t);var i=n("6e62"),c=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=c.a},e8fc:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-fav[data-v-30910e3b]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px}.uni-fav--circle[data-v-30910e3b]{border-radius:30px}.uni-fav-star[data-v-30910e3b]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:24px;margin-right:3px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-fav-text[data-v-30910e3b]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:25px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}",""]),e.exports=t},fb65:function(e,t,n){"use strict";var i={"uni-icons":n("c0dd").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-fav",class:[!0===e.circle||"true"===e.circle?"uni-fav--circle":""],style:[{backgroundColor:e.checked?e.bgColorChecked:e.bgColor}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.checked||!0!==e.star&&"true"!==e.star?e._e():n("uni-icons",{staticClass:"uni-fav-star",style:{color:e.checked?e.fgColorChecked:e.fgColor},attrs:{color:e.fgColor,size:"14",type:"star-filled"}}),n("v-uni-text",{staticClass:"uni-fav-text",style:{color:e.checked?e.fgColorChecked:e.fgColor}},[e._v(e._s(e.checked?e.contentText.contentFav:e.contentText.contentDefault))])],1)},a=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);