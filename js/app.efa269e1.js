(function(){"use strict";var t={4010:function(t,e,n){var i=n(144),l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},o=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"schools"},[e("wd-navbar",{attrs:{title:"校内保修"}},[e("div",{attrs:{slot:"left"},slot:"left"},[e("wd-icon",{staticClass:"middle",attrs:{name:"arrow-left"}})],1)]),e("h4",{staticStyle:{color:"white"}},[t._v("请按步骤操作")]),e("el-steps",{staticStyle:{color:"white"},attrs:{active:t.active,"finish-status":"success","align-center":""}},[e("el-step",{attrs:{title:"校区"}}),e("el-step",{attrs:{title:"场地分类"}}),e("el-step",{attrs:{title:"保修物品"}}),e("el-step",{attrs:{title:"故障描述"}}),e("el-step",{attrs:{title:"备注"}})],1),t.active<=3?e("el-button",{staticClass:"nextBtn",on:{click:t.next}},[t._v("确定")]):t._e(),4===t.active?e("el-button",{staticClass:"setBtn"},[t._v("提交")]):t._e(),e("div",{staticClass:"showText"},[e("h5",[t._v("校区:"+t._s(t.value))]),e("h5",[t._v("场地:"+t._s(t.site))]),e("h5",[t._v("物品:"+t._s(t.article))])]),t.showPickerView?e("wd-picker-view",{staticClass:"gunDong",attrs:{columns:t.columns[0],"columns-height":350},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}):t._e(),1===t.active?e("wd-picker-view",{attrs:{columns:[t.columns[1],t.columns[2]],"columns-height":350},model:{value:t.site,callback:function(e){t.site=e},expression:"site"}}):t._e(),2===t.active?e("h3",[t._v("请输入物品名称:")]):t._e(),2===t.active?e("wd-input",{attrs:{type:"textarea",placeholder:"请输入...",maxlength:"120",clearable:"","show-word-limit":"",size:"large"},model:{value:t.article,callback:function(e){t.article=e},expression:"article"}}):t._e(),3===t.active?e("h3",[t._v("请描述故障详情:")]):t._e(),3===t.active?e("wd-input",{attrs:{type:"textarea",placeholder:"请输入...",maxlength:"500",clearable:"","show-word-limit":"",size:"large"}}):t._e(),4===t.active?e("h3",[t._v("请描述:")]):t._e(),4===t.active?e("wd-input",{attrs:{type:"textarea",placeholder:"请输入...",maxlength:"300",clearable:"","show-word-limit":"",size:"large"}}):t._e(),4===t.active?e("div",{staticClass:"upPhoto"},[e("van-uploader",{staticStyle:{position:"absolute",bottom:"0%",right:"0%"},attrs:{multiple:"","max-size":512e3},on:{oversize:t.onOversize}})],1):t._e()],1)},a=[],s=n(9146),c={name:"HelloWorld",data(){return{active:0,value:"",site:"",article:"",columns:[["荔湾校区","沙太校区","增城校区"],["3号楼","2号楼","6号楼"],[101,102,103,104,105,106,107]],showPickerView:!0}},methods:{next(){this.active++>4&&(this.active=0),this.showPickerView=!1},onOversize(t){console.log(t),(0,s.Z)("文件大小不能超过 500kb")}}},u=c,f=n(1001),v=(0,f.Z)(u,r,a,!1,null,"0f69ead5",null),d=v.exports,p={name:"App",components:{HelloWorld:d}},h=p,m=(0,f.Z)(h,l,o,!1,null,null,null),w=m.exports,b=n(8232),_=n.n(b),g=n(4720),x=n.n(g),y=n(8534);n(5110);i["default"].config.productionTip=!1,i["default"].use(_()),i["default"].use(x()),i["default"].use(y.ZP),new i["default"]({render:t=>t(w)}).$mount("#app")}},e={};function n(i){var l=e[i];if(void 0!==l)return l.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,i,l,o){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],l=t[u][1],o=t[u][2];for(var a=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(a=!1,o<r&&(r=o));if(a){t.splice(u--,1);var c=l();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,l,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var l,o,r=i[0],a=i[1],s=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(s)var u=s(n)}for(e&&e(i);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkbaox"]=self["webpackChunkbaox"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4010)}));i=n.O(i)})();
//# sourceMappingURL=app.efa269e1.js.map