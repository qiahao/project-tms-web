webpackJsonp([13],{1124:function(e,t,i){var o=i(10)(i(1312),null,null,null);e.exports=o.exports},1140:function(e,t,i){var o,n,a;!function(i,l){n=[t],o=l,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={data:function(){return{usedId:"",routeName:""}},computed:{id:function(){return this.$route.params.id}},watch:{id:function(e,t){e&&this.$route.name==this.routeName&&(this.usedId=e)},usedId:function(e,t){this.init()}},methods:{init:function(){console.warn("[wran] rewrite < "+this.$options.name+" > component’s init function witch with detail-child-mixin")}},created:function(){this.usedId=this.id,this.routeName=this.$route.name},mounted:function(){}};e.default=t})},1141:function(e,t,i){(function(i){var o,n,a;!function(i,l){n=[t],o=l,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"detailModal",props:{value:{type:Boolean,require:!0}},data:function(){return{modal:this.value}},computed:{headClasses:function(){return["detail-modal-head"]},mainClasses:function(){return["detail-modal-main"]},footClasses:function(){return["detail-modal-foot"]}},watch:{value:function(e){this.modal=e}},methods:{close:function(){this.modal=!1,this.$emit("input",!1),this.$emit("on-detail-close"),i.$emit("on-detail-close")}},created:function(){},mounted:function(){}}})}).call(t,i(227))},1142:function(e,t,i){var o,n,a;!function(l,r){n=[t,i(1140)],o=r,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default={data:function(){return{detailShow:!1}},mixins:[i.default],methods:{},mounted:function(){var e=this;setTimeout(function(){e.detailShow=!0},500)},activated:function(){this.detailShow=!0},deactivated:function(){this.detailShow=!1},beforeRouteUpdate:function(e,t,i){var o=this;this.detailShow=!1,setTimeout(function(){o.detailShow=!0,i()},300)}}})},1143:function(e,t,i){t=e.exports=i(1083)(),t.push([e.i,".detail-modal{position:fixed;z-index:7;top:50px;right:0;bottom:0;width:880px;border-left:1px solid #dddee1;box-shadow:-1px 0 3px #dddee1;background:#fff}.detail-modal.has-head .detail-modal-head{display:block;z-index:7}.detail-modal.has-head .detail-modal-main{padding-top:53px}.detail-modal.has-foot .detail-modal-foot{display:block}.detail-modal.has-foot .detail-modal-main{padding-bottom:44px}.detail-modal .tit{font-size:16px}.detail-modal .ivu-icon-close-round{position:absolute;top:17px;right:14px;color:#8492a6;font-size:20px;cursor:pointer;z-index:7}.detail-modal .ivu-icon-close-round:hover{opacity:.7}.detail-modal-foot,.detail-modal-head{position:absolute;left:0;right:0;display:none;padding-left:20px}.detail-modal-head{top:0;height:53px;padding-top:2px;padding-bottom:1px;padding-right:39px;border-bottom:1px solid #e6e6e6;line-height:49px}.detail-modal-main{position:relative;height:100%}.detail-modal-main .inner{height:100%;padding:10px 20px;overflow-x:hidden;overflow-y:auto}.detail-modal-foot{bottom:0;height:44px;border-top:1px solid #e6e6e6;padding-top:1px;padding-bottom:2px;line-height:49px}.fix-modal-main .inner{background:#fbfbfb!important}.detail-modal .ivu-tabs{position:inherit}.detail-modal .detail-foot{position:absolute;bottom:0;left:0;right:0;box-shadow:0 -1px 2px 1px #dedede;background:#fff;padding:5px}.detail-modal .detail-foot .foot-inner{background:#f2f2f2;padding:5px}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/common/detail-modal/detail-modal.scss"],names:[],mappings:"AACA,cACE,eAAgB,AAChB,UAAW,AACX,SAAU,AACV,QAAS,AACT,SAAU,AACV,YAAa,AACb,8BAA+B,AAC/B,8BAA+B,AAC/B,eAAiB,CAClB,AACD,0CACI,cAAe,AACf,SAAW,CACd,AACD,0CACI,gBAAkB,CACrB,AACD,0CACI,aAAe,CAClB,AACD,0CACI,mBAAqB,CACxB,AACD,mBACI,cAAgB,CACnB,AACD,oCACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,cAAe,AACf,eAAgB,AAChB,eAAgB,AAChB,SAAW,CACd,AACD,0CACM,UAAY,CACjB,AACD,sCACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,aAAc,AACd,iBAAmB,CACpB,AACD,mBACE,MAAO,AACP,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,mBAAoB,AACpB,gCAAiC,AACjC,gBAAkB,CACnB,AACD,mBACE,kBAAmB,AACnB,WAAa,CACd,AACD,0BACI,YAAa,AACb,kBAAmB,AACnB,kBAAmB,AACnB,eAAiB,CACpB,AACD,mBACE,SAAU,AACV,YAAa,AACb,6BAA8B,AAC9B,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,uBACE,4BAA+B,CAChC,AACD,wBACE,gBAAkB,CACnB,AACD,2BACE,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kCAAqC,AACrC,gBAAiB,AACjB,WAAa,CACd,AACD,uCACI,mBAAoB,AACpB,WAAa,CAChB",file:"detail-modal.scss",sourcesContent:["\n.detail-modal {\n  position: fixed;\n  z-index: 7;\n  top: 50px;\n  right: 0;\n  bottom: 0;\n  width: 880px;\n  border-left: 1px solid #dddee1;\n  box-shadow: -1px 0 3px #dddee1;\n  background: #fff;\n}\n.detail-modal.has-head .detail-modal-head {\n    display: block;\n    z-index: 7;\n}\n.detail-modal.has-head .detail-modal-main {\n    padding-top: 53px;\n}\n.detail-modal.has-foot .detail-modal-foot {\n    display: block;\n}\n.detail-modal.has-foot .detail-modal-main {\n    padding-bottom: 44px;\n}\n.detail-modal .tit {\n    font-size: 16px;\n}\n.detail-modal .ivu-icon-close-round {\n    position: absolute;\n    top: 17px;\n    right: 14px;\n    color: #8492a6;\n    font-size: 20px;\n    cursor: pointer;\n    z-index: 7;\n}\n.detail-modal .ivu-icon-close-round:hover {\n      opacity: .7;\n}\n.detail-modal-head, .detail-modal-foot {\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: none;\n  padding-left: 20px;\n}\n.detail-modal-head {\n  top: 0;\n  height: 53px;\n  padding-top: 2px;\n  padding-bottom: 1px;\n  padding-right: 39px;\n  border-bottom: 1px solid #e6e6e6;\n  line-height: 49px;\n}\n.detail-modal-main {\n  position: relative;\n  height: 100%;\n}\n.detail-modal-main .inner {\n    height: 100%;\n    padding: 10px 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.detail-modal-foot {\n  bottom: 0;\n  height: 44px;\n  border-top: 1px solid #e6e6e6;\n  padding-top: 1px;\n  padding-bottom: 2px;\n  line-height: 49px;\n}\n.fix-modal-main .inner {\n  background: #fbfbfb !important;\n}\n.detail-modal .ivu-tabs {\n  position: inherit;\n}\n.detail-modal .detail-foot {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px -1px 2px 1px #dedede;\n  background: #fff;\n  padding: 5px;\n}\n.detail-modal .detail-foot .foot-inner {\n    background: #f2f2f2;\n    padding: 5px;\n}\n"],sourceRoot:""}])},1144:function(e,t,i){var o=i(1143);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(1084)("2c3d1bbe",o,!0)},1145:function(e,t,i){i(1144);var o=i(10)(i(1141),i(1146),null,null);e.exports=o.exports},1146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"slide-right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.modal,expression:"modal"}],staticClass:"detail-modal",class:{"has-head":e.$slots.head,"has-foot":e.$slots.foot}},[e.$slots.head?i("div",{class:e.headClasses},[e._t("head")],2):e._e(),e._v(" "),i("div",{class:e.mainClasses},[i("div",{staticClass:"inner"},[e._t("default")],2)]),e._v(" "),e.$slots.foot?i("div",{class:e.footClasses},[e._t("foot")],2):e._e(),e._v(" "),i("Icon",{attrs:{type:"close-round"},nativeOn:{click:function(t){return e.close(t)}}})],1)])},staticRenderFns:[]}},1154:function(e,t,i){var o,n,a;!function(l,r){n=[t,i(24),i(228)],o=r,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(t),a=o(i),l=(Math.round,a.default.imgHost),r={defaultFileList:[],showUploadList:!1,format:["jpg","jpeg","png"],maxSize:5120,multiple:!1,type:"drag",action:a.default.imgUploadUrl};e.default={props:{uploadOption:{default:function(){return{}}},urlList:{type:[Array,String],default:function(){return[]}},uploadId:{default:void 0},hideIfExist:!1},data:function(){return{viewImg:null,viewIndex:-1,viewModal:!1}},computed:{option:function(){return(0,n.default)({},r,this.uploadOption)},uploadList:function(){function e(e){var t=e;return e.indexOf(l)<0&&(e=l+e),{name:t,url:e,status:"finished"}}var t=[],i=[];return i=this.urlList,"string"==typeof i&&i&&(i=[i]),i||(i=[]),i.length&&(this.option.multiple?t=i.map(e):t.push(e(i[0]))),t},showUpload:function(){return!(this.hideIfExist&&this.uploadList.some(function(e){return"finished"==e.status}))}},methods:{formatErrorHandler:function(e,t){this.$Message.warning("文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。")},exceededSizeHandler:function(e,t){this.$Message.warning("文件 "+t.name+" 太大，不能超过 "+(this.option.maxSize/1024).toFixed(2)+"M。")},beforeUploadHandler:function(e,t){var i=!0;return this.option.maxNum&&this.option.maxNum<=this.uploadList.length&&(i=!1),i},successHandler:function(e,t){if(e&&1==e.result){if(t.name=e.resultObj,t.url=l+e.resultObj,this.option.maxNum&&this.option.maxNum<=this.uploadList.length)return this.$Message.warning("最多只能上传"+this.option.maxNum+"个文件");this.$emit("on-success",t,this.uploadId)}else this.$Message.warning("图片上传失败。"+e.resultInfo)},viewHandler:function(e,t){this.viewModal=!0,this.viewIndex=t,this.viewImg=e},removeHandler:function(){var e=this;this.$Modal.confirm({content:"删除该图片？",onOk:function(){e.$emit("on-remove",e.viewImg,e.viewIndex,e.uploadId),e.viewModal=!1,e.viewIndex=-1,e.viewImg=null}})}},mounted:function(){}}})},1155:function(e,t,i){t=e.exports=i(1083)(),t.push([e.i,".upload .upload-list{display:inline-block;width:60px;height:60px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.upload .upload-list:hover .image-cover{display:block}.upload .upload-list img{width:100%;height:100%}.upload .upload-list .image-cover{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.upload .upload-list i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.upload .upload-comp{display:inline-block}.upload .upload-comp .comp-inner{width:58px;height:58px;line-height:58px}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/common/upload-image/style.scss"],names:[],mappings:"AACA,qBACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAyC,AACzC,gBAAkB,CACnB,AACD,wCACI,aAAe,CAClB,AACD,yBACI,WAAY,AACZ,WAAa,CAChB,AACD,kCACI,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA+B,CAClC,AACD,uBACI,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACjB,AACD,qBACE,oBAAsB,CACvB,AACD,iCACI,WAAY,AACZ,YAAa,AACb,gBAAkB,CACrB",file:"style.scss",sourcesContent:["\n.upload .upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.upload .upload-list:hover .image-cover {\n    display: block;\n}\n.upload .upload-list img {\n    width: 100%;\n    height: 100%;\n}\n.upload .upload-list .image-cover {\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.6);\n}\n.upload .upload-list i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n.upload .upload-comp {\n  display: inline-block;\n}\n.upload .upload-comp .comp-inner {\n    width: 58px;\n    height: 58px;\n    line-height: 58px;\n}\n"],sourceRoot:""}])},1156:function(e,t,i){var o=i(1155);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(1084)("7f963ccc",o,!0)},1157:function(e,t,i){i(1156);var o=i(10)(i(1154),i(1158),null,null);e.exports=o.exports},1158:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload"},[e._l(e.uploadList,function(t,o){return i("div",{staticClass:"upload-list"},["finished"===t.status?[i("img",{attrs:{src:t.url}}),e._v(" "),i("div",{staticClass:"image-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){e.viewHandler(t,o)}}})],1)]:[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}),e._v(" "),i("Upload",{directives:[{name:"show",rawName:"v-show",value:e.showUpload,expression:"showUpload"}],ref:"upload",staticClass:"upload-comp",attrs:{"show-upload-list":e.option.showUploadList,format:e.option.format,"max-size":e.option.maxSize,multiple:e.option.multiple,type:e.option.type,action:e.option.action,"on-format-error":e.formatErrorHandler,"on-exceeded-size":e.exceededSizeHandler,"before-upload":e.beforeUploadHandler,"on-success":e.successHandler}},[i("div",{staticClass:"comp-inner"},[i("Icon",{attrs:{type:"camera",size:"20"}})],1)]),e._v(" "),i("Modal",{attrs:{title:"查看图片"},model:{value:e.viewModal,callback:function(t){e.viewModal=t},expression:"viewModal"}},[i("img",{staticClass:"view-img",attrs:{src:e.viewImg&&e.viewImg.url,width:"100%"}}),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("i-button",{attrs:{type:"warning",size:"small"},on:{click:e.removeHandler}},[e._v("删除")])],1)])],2)},staticRenderFns:[]}},1187:function(e,t,i){var o,n,a;!function(i,l){n=[t],o=l,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e){"use strict";function t(){return{truck_plate:{required:!0,message:"车牌号码不能为空",trigger:"blur"},truck_length:{required:!0,message:"请选择车长",trigger:"change"},truck_type:{required:!0,message:"请选择车型",trigger:"blur"},truck_weight:{required:!0,message:"载重不能为空",trigger:"blur"},driver_name:{required:!0,message:"司机姓名不能为空",trigger:"blur"},driver_mobile:{required:!0,message:"联系方式不能为空",trigger:"blur change"},driver_id_no:{required:!0,message:"身份证号不能为空",trigger:"blur"},truck_cube:{required:!0,message:"容积不能为空",trigger:"blur"}}}function i(){return{driver_name:"",driver_id_no:"",driver_qulification_no:"",driver_company:"",driver_company_road_permit_no:"",driver_mobile:"",driver_sex:"M",id_front_pic:"",id_back_pic:"",driver_lisence_pic:"",driver_pic:"",truck_plate:"",truck_plate_type:"",truck_vehicle_type:"H01",truck_owner:"",truck_tranport_permit_no:"",truck_frame:"",truck_catagory:"大车(干线)",truck_type:"",truck_length:"",truck_belong:"0",truck_weight:"",truck_cube:"",truck_drive_lisence:"",truck_operating_lisence:"",truck_pics:""}}Object.defineProperty(e,"__esModule",{value:!0}),e.getRules=t,e.getInitVehicle=i})},1200:function(e,t,i){var o,n,a;!function(l,r){n=[t,i(1145),i(1157),i(1142),i(101),i(1187)],o=r,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e,t,i,o,n,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=l(t),s=l(i),d=l(o),c=l(n),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(a),p=/^1[3|4|5|6|7|8|9][\d]{9}$/;e.default={name:"vehicle",data:function(){return{formRule:u.getRules(),dict:{truckType:[],truckLength:[],truckPlateType:[],truckVehicleType:[]},vehicle:u.getInitVehicle()}},mixins:[d.default,c.default],components:{detailModal:r.default,imgUpload:s.default},computed:{truckPics:function(){return this.vehicle.truck_pics?this.vehicle.truck_pics.split(","):[]}},methods:{init:function(){},closeDetail:function(){this.detailShow=!1,this.$router.push({name:"vehicleV1List"})},initDict:function(){function e(e){return e&&1==e.result&&e.resultObj&&e.resultObj.length>0?e.resultObj.map(function(e){return e}):[]}var t=this;this.$api.dictApi.dictTruckTypeApi().then(function(i){t.dict.truckType=e(i)}),this.$api.dictApi.dictTruckLengthApi().then(function(i){t.dict.truckLength=e(i)}),this.$api.dictApi.dictTruckPlateTypeApi().then(function(i){t.dict.truckPlateType=e(i)})},transBlur:function(){this.vehicle.truck_plate=this.vehicle.truck_plate.toUpperCase()},removeImg:function(e,t,i){this.vehicle[i].indexOf(e.name)>-1&&(this.vehicle[i]=this.vehicle[i].replace(e.name,"")),this.vehicle[i]=this.vehicle[i].split(",").filter(function(e){return e&&""!=e}).join(",")},uploadedImg:function(e,t){this.vehicle[t]=e.url},singleUpload:function(e,t){this.vehicle[t]=e.url},multipleUpload:function(e,t){this.vehicle[t]?this.vehicle[t]+=","+e.url:this.vehicle[t]=e.url},getYunbaVehicle:function(){var e=this;if(!this.isAddVehicle||!p.test(this.vehicle.driver_mobile))return!1;this.$api.vehicleApi.getYunbaDriverInfo({driver_mobile:this.vehicle.driver_mobile}).then(function(t){if(t.resultObj)for(var i in t.resultObj)t.resultObj.hasOwnProperty(i)&&t.resultObj[i]&&(e.vehicle[i]=t.resultObj[i])})},getYunbaTruckInfo:function(){var e=this;if(!this.isAddVehicle||this.vehicle.truck_plate.length<6)return!1;this.$api.vehicleApi.getYunbaTruckInfo({truck_plate:this.vehicle.truck_plate}).then(function(t){if(t.resultObj)for(var i in t.resultObj)t.resultObj.hasOwnProperty(i)&&t.resultObj[i]&&!e.vehicle[i]&&(e.vehicle[i]=t.resultObj[i])})}},created:function(){this.initDict()}}})},1218:function(e,t,i){var o=i(10)(i(1200),i(1220),null,null);e.exports=o.exports},1220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("detail-modal",{on:{"on-detail-close":e.closeDetail},model:{value:e.detailShow,callback:function(t){e.detailShow=t},expression:"detailShow"}},[i("div",{attrs:{slot:"head"},slot:"head"},[i("span",[e._v(e._s(e.title))]),e._v(" "),i("div",{staticClass:"fr"},[e.saveVehicle?i("i-button",{attrs:{type:"primary"},on:{click:e.saveVehicle}},[e._v("保存")]):e._e()],1)]),e._v(" "),i("div",{attrs:{slot:"default"},slot:"default"},[i("Form",{ref:"formVehicle",attrs:{model:e.vehicle,rules:e.formRule,"label-width":100}},[i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"车牌号码",prop:"truck_plate"}},[i("i-input",{attrs:{placeholder:"请输入车牌号码"},on:{"on-change":e.getYunbaTruckInfo,"on-blur":e.transBlur},model:{value:e.vehicle.truck_plate,callback:function(t){e.$set(e.vehicle,"truck_plate",t)},expression:"vehicle.truck_plate"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"牌照类型",prop:"truck_plate_type"}},[i("Select",{model:{value:e.vehicle.truck_plate_type,callback:function(t){e.$set(e.vehicle,"truck_plate_type",t)},expression:"vehicle.truck_plate_type"}},e._l(e.dict.truckPlateType,function(t){return i("Option",{key:t,attrs:{value:t.dict_value}},[e._v(e._s(t.dict_text))])}))],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"车长",prop:"truck_length"}},[i("Select",{model:{value:e.vehicle.truck_length,callback:function(t){e.$set(e.vehicle,"truck_length",t)},expression:"vehicle.truck_length"}},e._l(e.dict.truckLength,function(t){return i("Option",{key:t,attrs:{value:t.dict_value}},[e._v(e._s(t.dict_text))])}))],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"车架号",prop:"truck_frame"}},[i("i-input",{attrs:{placeholder:"请输入车架号"},model:{value:e.vehicle.truck_frame,callback:function(t){e.$set(e.vehicle,"truck_frame",t)},expression:"vehicle.truck_frame"}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"车型",prop:"truck_type"}},[i("Select",{model:{value:e.vehicle.truck_type,callback:function(t){e.$set(e.vehicle,"truck_type",t)},expression:"vehicle.truck_type"}},e._l(e.dict.truckType,function(t){return i("Option",{key:t,attrs:{value:t.dict_value}},[e._v(e._s(t.dict_text))])}))],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"载重",prop:"truck_weight"}},[i("i-input",{attrs:{placeholder:"请输入载重"},model:{value:e.vehicle.truck_weight,callback:function(t){e.$set(e.vehicle,"truck_weight",t)},expression:"vehicle.truck_weight"}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"容积",prop:"truck_cube"}},[i("i-input",{attrs:{placeholder:"请输入容积"},model:{value:e.vehicle.truck_cube,callback:function(t){e.$set(e.vehicle,"truck_cube",t)},expression:"vehicle.truck_cube"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"所有人",prop:"truck_owner"}},[i("i-input",{attrs:{placeholder:"请输入所有人或挂靠公司"},model:{value:e.vehicle.truck_owner,callback:function(t){e.$set(e.vehicle,"truck_owner",t)},expression:"vehicle.truck_owner"}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"业务类型",prop:"truck_catagory"}},[i("Radio-group",{model:{value:e.vehicle.truck_catagory,callback:function(t){e.$set(e.vehicle,"truck_catagory",t)},expression:"vehicle.truck_catagory"}},[i("Radio",{attrs:{label:"大车(干线)"}}),e._v(" "),i("Radio",{attrs:{label:"小车(短驳)"}})],1)],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"合作类型",prop:"truck_belong"}},[i("Radio-group",{model:{value:e.vehicle.truck_belong,callback:function(t){e.$set(e.vehicle,"truck_belong",t)},expression:"vehicle.truck_belong"}},[i("Radio",{attrs:{label:"0"}},[i("span",[e._v("自有")])]),e._v(" "),i("Radio",{attrs:{label:"1"}},[i("span",[e._v("外协")])])],1)],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"24"}},[i("Form-item",{attrs:{label:"道路运输证",prop:"truck_tranport_permit_no"}},[i("i-input",{attrs:{placeholder:"请输入道路运输许可证号"},model:{value:e.vehicle.truck_tranport_permit_no,callback:function(t){e.$set(e.vehicle,"truck_tranport_permit_no",t)},expression:"vehicle.truck_tranport_permit_no"}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"8"}},[i("Form-item",{attrs:{label:"营运证照片",prop:"truck_operating_lisence"}},[i("img-upload",{attrs:{"upload-id":"truck_operating_lisence","url-list":e.vehicle.truck_operating_lisence},on:{"on-remove":e.removeImg,"on-success":e.singleUpload}})],1)],1),e._v(" "),i("Col",{attrs:{span:"8"}},[i("Form-item",{attrs:{label:"车辆照片",prop:"truck_pics"}},[i("img-upload",{attrs:{"upload-id":"truck_pics","upload-option":{multiple:!0,maxNum:3},"url-list":e.truckPics},on:{"on-remove":e.removeImg,"on-success":e.multipleUpload}})],1)],1),e._v(" "),i("Col",{attrs:{span:"8"}},[i("Form-item",{attrs:{label:"行驶证照片",prop:"truck_drive_lisence"}},[i("img-upload",{attrs:{"upload-id":"truck_drive_lisence","url-list":e.vehicle.truck_drive_lisence},on:{"on-remove":e.removeImg,"on-success":e.singleUpload}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"司机姓名",prop:"driver_name"}},[i("i-input",{attrs:{placeholder:"请输入司机姓名"},model:{value:e.vehicle.driver_name,callback:function(t){e.$set(e.vehicle,"driver_name",t)},expression:"vehicle.driver_name"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"联系方式",prop:"driver_mobile"}},[i("i-input",{attrs:{placeholder:"请输入联系电话"},on:{"on-blur":e.getYunbaVehicle},model:{value:e.vehicle.driver_mobile,callback:function(t){e.$set(e.vehicle,"driver_mobile",t)},expression:"vehicle.driver_mobile"}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"身份证号",prop:"driver_id_no"}},[i("i-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.vehicle.driver_id_no,callback:function(t){e.$set(e.vehicle,"driver_id_no",t)},expression:"vehicle.driver_id_no"}})],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"性别",prop:"driver_sex"}},[i("Radio-group",{model:{value:e.vehicle.driver_sex,callback:function(t){e.$set(e.vehicle,"driver_sex",t)},expression:"vehicle.driver_sex"}},[i("Radio",{attrs:{label:"M"}},[i("span",[e._v("男")])]),e._v(" "),i("Radio",{attrs:{label:"F"}},[i("span",[e._v("女")])])],1)],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"24"}},[i("Form-item",{attrs:{label:"所有人",prop:"driver_company"}},[i("i-input",{attrs:{placeholder:"请输入所属公司或挂靠公司"},model:{value:e.vehicle.driver_company,callback:function(t){e.$set(e.vehicle,"driver_company",t)},expression:"vehicle.driver_company"}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"24"}},[i("Form-item",{attrs:{label:"经营许可证",prop:"driver_qulification_no"}},[i("i-input",{attrs:{placeholder:"请输入所属公司或挂靠公司的经营许可证号"},model:{value:e.vehicle.driver_qulification_no,callback:function(t){e.$set(e.vehicle,"driver_qulification_no",t)},expression:"vehicle.driver_qulification_no"}}),e._v("\n                            注：请让您的司机安装运吧司机版APP，以便能实时接收到您发布的运输任务！手机号即为登陆账号。\n                        ")],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"身份证正面",prop:"id_front_pic"}},[i("img-upload",{attrs:{"upload-id":"id_front_pic","url-list":e.vehicle.id_front_pic},on:{"on-remove":e.removeImg,"on-success":e.singleUpload}})],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"身份证反面",prop:"id_back_pic"}},[i("img-upload",{attrs:{"upload-id":"id_back_pic","url-list":e.vehicle.id_back_pic},on:{"on-remove":e.removeImg,"on-success":e.singleUpload}})],1)],1)],1),e._v(" "),i("Row",[i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"驾驶证照片",prop:"driver_lisence_pic"}},[i("img-upload",{attrs:{"upload-id":"driver_lisence_pic","url-list":e.vehicle.driver_lisence_pic},on:{"on-remove":e.removeImg,"on-success":e.singleUpload}})],1)],1),e._v(" "),i("Col",{attrs:{span:"12"}},[i("Form-item",{attrs:{label:"头像采集",prop:"driver_pic"}},[i("img-upload",{attrs:{"upload-id":"driver_pic","url-list":e.vehicle.driver_pic},on:{"on-remove":e.removeImg,"on-success":e.singleUpload}})],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]}},1312:function(e,t,i){var o,n,a;!function(l,r){n=[t,i(24),i(1218),i(1187)],o=r,void 0!==(a="function"==typeof o?o.apply(t,n):o)&&(e.exports=a)}(0,function(e,t,i,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(t),l=n(i),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(o);e.default={name:"vehicleAdd",data:function(){return{title:"新增车辆",isAddVehicle:!0}},extends:l.default,watch:{detailShow:function(e,t){this.initVehicle()}},methods:{initVehicle:function(){this.vehicle=r.getInitVehicle(),this.$refs.formVehicle.resetFields()},saveVehicle:function(){var e=this,t=!1;if(this.$refs.formVehicle.validate(function(e){return t=e}),t){var i=(0,a.default)(this.vehicle);this.$api.vehicleApi.apiAddVehicle(i).then(function(t){e.$Message.success("新增车辆成功"),e.dispatch("vehicle-list-reload"),e.initVehicle()})}}}}})}});
//# sourceMappingURL=13.1318f487c6d663fe5a2c.js.map