(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hot-hot"],{"1fd0":function(e,t,i){var n=i("d75c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("58fd06ef",n,!0,{sourceMap:!1,shadowMode:!1})},"6a63":function(e,t,i){"use strict";var n=i("1fd0"),s=i.n(n);s.a},"7c4e":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("7f7f");var s=n(i("f499"));i("6b54"),i("87b3");var a={data:function(){return{refreshing:!1,lists:[],fetchPageNum:1}},onLoad:function(){var e=this;this.getData(),uni.getProvider({service:"share",success:function(t){for(var i=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}e.providerList=i},fail:function(e){console.log("获取登录通道失败",e)}})},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onReachBottom:function(){this.getData()},methods:{getData:function(){var e=this;uni.request({url:this.$serverUrl+"/api/picture/posts.php?page="+(this.refreshing?1:this.fetchPageNum)+"&per_page=10",success:function(t){if(console.log(t),200!==t.statusCode)console.log("请求失败:",t);else{if(e.refreshing&&t.data[0].id===e.lists[0].id)return uni.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void uni.stopPullDownRefresh();for(var i=[],n=t.data,s=0,a=n.length;s<a;s++){var r=n[s];r.guid=e.newGuid()+r.id,i.push(r)}console.log("得到list",i),e.refreshing?(e.refreshing=!1,uni.stopPullDownRefresh(),e.lists=i,e.fetchPageNum=2):(e.lists=e.lists.concat(i),e.fetchPageNum+=1)}}})},newGuid:function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toUpperCase()},goDetail:function(e){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent((0,s.default)(e))})},share:function(e){var t=this;if(0!==this.providerList.length){var i=this.providerList.map(function(e){return e.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:t.providerList[i.tapIndex].id,scene:t.providerList[i.tapIndex].type&&"WXSenceTimeline"===t.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:e.title,imageUrl:e.img_src,href:"https://uniapp.dcloud.io",success:function(e){console.log("success:"+(0,s.default)(e))},fail:function(e){uni.showModal({content:e.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};t.default=a},c4a8:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[i("v-uni-view",{staticClass:"grid"},e._l(e.lists,function(t){return i("v-uni-view",{key:t.guid,staticClass:"grid-c-06"},[i("v-uni-view",{staticClass:"panel",on:{click:function(i){i=e.$handleEvent(i),e.goDetail(t)}}},[i("v-uni-image",{staticClass:"card-img card-list2-img",attrs:{src:t.img_src}}),i("v-uni-text",{staticClass:"card-num-view card-list2-num-view"},[e._v(e._s(t.img_num)+"P")]),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),i=e.$handleEvent(i),e.share(t)}}})],1)],1)],1)}),1),i("v-uni-text",{staticClass:"loadMore"},[e._v("加载中...")])],1)},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})},d4ce:function(e,t,i){"use strict";i.r(t);var n=i("7c4e"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},d75c:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".grid[data-v-4981cbe4]{padding-top:10px}",""])},db2e:function(e,t,i){"use strict";i.r(t);var n=i("c4a8"),s=i("d4ce");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("6a63");var r=i("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"4981cbe4",null);t["default"]=o.exports}}]);