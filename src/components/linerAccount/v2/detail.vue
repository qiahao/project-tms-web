<template lang="html">
    <div>
        <!-- 信息 -->
        <slide-modal v-model="slideModal" style="width: 860px;">
            <div slot="head" class="clearfix">
                <h3 class="fl">
                    {{operateType=='add'?'新增成员':'成员详情'}}
                </h3>
                <span class="fr">
                    <i-button size="small" v-show="operateType=='add'" type="primary" @click="addLinernew">保存</i-button>
                    <i-button size="small" v-show="operateType=='detail' && isEditAble" type="primary" @click="editLiner">保存</i-button>
                    <i-button size="small" v-show="operateType=='detail' && isEditAble" type="primary" @click="cancel">取消</i-button>
                    <i-button size="small" v-show="operateType=='detail' && !isEditAble  && account_status=='Y'" type="primary" @click="edit">编缉</i-button>
                    <i-button size="small" v-show="operateType=='detail' && account_status=='Y' && !isEditAble" type="primary" @click="resestPwd">密码重置</i-button>
                    <i-button size="small" v-show="operateType=='detail' && account_status=='N' && !isEditAble" type="primary" @click="changeStatus('Y')">启用</i-button>
                    <i-button size="small" v-show="operateType=='detail' && account_status=='Y' && !isEditAble" type="primary" @click="changeStatus('N')">禁用</i-button>
                </span>
            </div>
            <div slot="default">
                        <div  style="width:690px">
                        <i-form  ref="detailData" :model="detailData" :rules="ruleObj"  :label-width="105">
                            <div class="row-box mb10">
                                <Row>
                                    <i-col span="12"> 
                                        <Form-item label="账号：" prop="invite_mobile" >
                                            <i-input v-model='detailData.invite_mobile' :disabled="operateType=='detail'" placeholder="请输入账号" style="width: 170px" @on-blur='accountValate' ></i-input>
                                            <span class="state-status stategray" v-if="operateType=='detail' && account_status=='N'">禁用</span>
                                            <span class="state-status stategreen" v-if="operateType=='detail' && account_status=='Y'">启用</span>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12"> 
                                        <Form-item label="企业名称：" prop="liner_name" >
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_name' placeholder="请输入企业名称" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                            </div>
                            <div class="row-box mb10">
                                <Row>
                                    <i-col span="12">
                                        <Form-item label="所在地：" prop="liner_ad">
                                            <province-cascader :disabled="!isEditAble"    placeholder="请选择地址" :opts="provinceOpts" v-model="detailData.liner_ad"></province-cascader>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12">
                                        <Form-item label="地址：" prop="liner_address">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_address'  placeholder="请输入地址" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                                <Row>
                                    <i-col span="12">
                                        <Form-item label="联系人：" prop="liner_link_name">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_link_name' placeholder="请输入联系人" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12">
                                        <Form-item label="联系方式：" prop="liner_link_mobile">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_link_mobile'  placeholder="请输入联系电话" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                                <Row>
                                    <i-col span="24">
                                        <Form-item label="客户归属：" prop="liner_link_name">
                                            <Radio-group class="ml5"  v-model="detailData.account_belong">
                                                <Radio :disabled="!isEditAble" label="0" >
                                                    <span>浙江未名公路港 </span>
                                                </Radio>
                                                <Radio :disabled="!isEditAble" label="1">
                                                    <span>园外</span>
                                                </Radio>
                                            </Radio-group>
                                        </Form-item>
                                    </i-col>
                                </Row>
                                
                            </div>
                            <div class="row-box mb10">
                                <Row>
                                    <i-col span="12">
                                        <Form-item label="银行账号：" prop="liner_bank_no">
                                            <i-input  :disabled="!isEditAble" v-model='detailData.liner_bank_no'  placeholder="请输入银行账号" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12">
                                        <Form-item label="发票抬头：" prop="liner_invoice">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_invoice'  placeholder="请输入发票抬头" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                                <Row>
                                    <i-col span="12">
                                        <Form-item label="开户人：" prop="liner_bank_holder">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_bank_holder' placeholder="请输入银行开户人" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12">
                                        <Form-item label="纳税人识别号：" prop="liner_taxpayer_credit">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_taxpayer_credit' placeholder="请输入纳税人识别号" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                                <Row>
                                    <i-col span="12">
                                        <Form-item label="开户行：" prop="liner_bank_name">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_bank_name' placeholder="请输入开户行" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                            </div>
                            
                            <div class="row-box mb10">
                                <Row>
                                    <i-col span="12"> 
                                        <Form-item label="微信号："  prop="liner_wx">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_wx' placeholder="请输入微信账号" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12"> 
                                        <Form-item label="支付宝号："  prop="liner_ali">
                                            <i-input :disabled="!isEditAble" v-model='detailData.liner_ali' placeholder="请输入支付宝账号" style="width: 220px"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                            </div>
                            <div class="row-box mb10">
                                <Row>
                                    <i-col span="24">
                                        <Form-item label="备注：" prop="liner_remark">
                                            <i-input  :disabled="!isEditAble" v-model='detailData.liner_remark'  placeholder="请输入备注" style="width: 100%"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                            </div>
                            <div class="row-box mb10">
                                <Row>
                                    <i-col span="12" v-if="operateType=='detail'">
                                        <Form-item label="创建人员：" >
                                            <i-input v-model='creater' placeholder="" :readonly="operateType=='detail'"></i-input>
                                        </Form-item>
                                    </i-col>
                                    <i-col span="12" v-if="operateType=='detail'">
                                        <Form-item label="最近更新：" >
                                            <i-input  v-model='lastUpdater'  :readonly="operateType=='detail'"></i-input>
                                        </Form-item>
                                    </i-col>
                                </Row>
                            </div>

                            
                        </i-form>
                        </div>
            </div>
        </slide-modal>
    </div>
</template>
<script>
    import { addLiner,getLiner,editLiner,editLinerStatus,isLinerExit,resestLinerPwd} from '@/api/src/linerAccount'
    import { mapState } from 'vuex'
    import tableMixin from '@/mixins/tableMixin'
    import slideModalMixin from '@/mixins/slideModalMixin'
    import rule from '@/utils/validate-rule'

    export default{
        props: {list_id: '', value: {require:true}},
        data:function(){
             return {
                user:'',
                operateType:'add',
                invite_mobile:'',
                curid:'',
                search:{
                    page_size: 99,
                    act_user_id:''
                },
                ruleObj: {
                    liner_name: [
                        { required: true, message: '这是必填项' }
                    ],
                    liner_link_name: [
                        { required: true, message: '这是必填项' }
                    ],
                    liner_link_mobile: [
                        rule.required({ message: '联系人电话不能为空'}),
                        { validator: rule.phone, message: '请输入正确的手机号', trigger: 'blur' }
                    ],
                    liner_ad: [
                        { required: true, message: '这是必填项' }
                    ],
                    liner_address: [
                        { required: true, message: '这是必填项' }
                    ],
                    invite_mobile:[
                        { required: true, message: '这是必填项' },
                        { pattern:/^1[34578]\d{9}$/, message: '正确输入手机号码格式' }
                    ],
                },
                detailData:{
                    act_user_id: '',
                    liner_name: '',
                    liner_link_name: '',
                    liner_link_mobile: '',
                    liner_ad: '330400$浙江-嘉兴',
                    liner_area: '',
                    liner_area_code: '',
                    liner_address: '',
                    liner_remark: '',
                    invite_mobile: '',
                    liner_bank_no: '',
                    liner_bank_name: '',
                    liner_invoice: '',
                    liner_bank_holder: '',
                    invite_mobile: '',
                    liner_taxpayer_credit: '',
                    liner_ali: '',
                    liner_wx: '',
                    invite_type: '',
                    audit_state: '',
                    account_belong:'0'
                },
                account_status:'Y',
                provinceOpts: { 'change-on-select': true },
                creater:'',
                lastUpdater:'',
                isEditAble:true,
             }
        },
        created(){
        
        },
        mounted() {
            this.detailData.act_user_id=this.userInfo.user_id
        },
        components: {
        },
        mixins: [tableMixin,slideModalMixin],
        computed: {
            ...mapState(['userInfo','funcMenu'])
        },
        activated(){
            if(this.list_id==''){
                this.operateType='add'
                this.isEditAble=true
            }
            else{
                this.operateType='detail'
                this.loadDetail();
                this.isEditAble=false
            }
        },
        watch: {
            value (){
                this.slideModal = this.value;
            },
            list_id (){
                this.$refs.detailData.resetFields();
                this.curid=this.list_id;
                if(this.list_id==''){
                    this.operateType='add'
                    this.isEditAble=true
                }
                else{
                    this.operateType='detail'
                    this.loadDetail();
                    this.isEditAble=false
                }
            },
            slideModal (n,o){
                this.$emit('input',this.slideModal)
            },
            
        },
        methods :{
            //载入详情数据和配载运单列表
            loadDetail(){
                let _vm = this;
                getLiner({lcid:_vm.list_id,act_user_id:_vm.userInfo.user_id}).then(json=>{
                    _vm.detailData.liner_name = json.resultObj.liner_name
                    _vm.detailData.liner_link_name = json.resultObj.liner_link_name
                    _vm.detailData.liner_link_mobile = json.resultObj.liner_link_mobile
                    _vm.detailData.liner_ad = json.resultObj.liner_area_code+"$"+json.resultObj.liner_area
                    _vm.detailData.liner_address = json.resultObj.liner_address
                    _vm.detailData.liner_remark = json.resultObj.liner_remark
                    _vm.detailData.liner_bank_no = json.resultObj.liner_bank_no
                    _vm.detailData.liner_bank_name = json.resultObj.liner_bank_name
                    _vm.detailData.liner_invoice = json.resultObj.liner_invoice
                    _vm.detailData.liner_bank_holder = json.resultObj.liner_bank_holder
                    _vm.detailData.liner_taxpayer_credit = json.resultObj.liner_taxpayer_credit
                    _vm.detailData.liner_ali = json.resultObj.liner_ali
                    _vm.detailData.liner_wx = json.resultObj.liner_wx
                    _vm.account_status = json.resultObj.account_status
                    _vm.detailData.invite_type = json.resultObj.invite_type
                    _vm.detailData.audit_state = json.resultObj.audit_state
                    _vm.detailData.account_belong = json.resultObj.account_belong
                    _vm.creater = json.resultObj.create_user_name +" "+json.resultObj.create_time
                    _vm.lastUpdater = (json.resultObj.update_user_name?json.resultObj.update_user_name:'') +" "+(json.resultObj.update_time?json.resultObj.update_time:'')
                    if(json.resultObj.invite_mobile){
                        _vm.detailData.invite_mobile = json.resultObj.invite_mobile
                        _vm.isBinded=true;
                    }
                    else{
                        _vm.isBinded=false;
                    }
                    
                })
            },
            addLinernew(){
                let _vm = this;
                var Addr = this.detailData.liner_ad.split("$");
                this.detailData.liner_area = Addr[1];
                this.detailData.liner_area_code = Addr[0];
                _vm.$refs.detailData.validate((valid) => {
                    if (valid) {
                        addLiner(this.detailData).then((json)=>{
                            _vm.$Message.success("新增成功")
                            _vm.curid=json.resultObj
                            _vm.slideModal=false
                            bus.$emit('customer-list-reload')
                        })
                    }
                })
            },
            editLiner(){
                let _vm = this;
                var Addr = this.detailData.liner_ad.split("$");
                this.detailData.liner_area = Addr[1];
                this.detailData.liner_area_code = Addr[0];
                _vm.$refs.detailData.validate((valid) => {
                    if (valid) {
                        editLiner({lcid:_vm.list_id,...this.detailData}).then((json)=>{
                            _vm.$Message.success("修改成功")
                            _vm.isEditAble = false
                            bus.$emit('customer-list-reload')
                        })
                    }
                })
            },
            edit(){
                this.isEditAble = true
            },
            cancel(){
                let _vm = this
                this.isEditAble = true
                this.$Modal.confirm({
                    title: '确认提示',
                    content: '是否确认放弃修改？',
                    onOk (){
                        _vm.loadDetail()
                        _vm.isEditAble = false
                        
                    }
                })
            },
            changeStatus(e){
                let _vm = this;
                let params = {
                    act_user_id:this.userInfo.user_id,
                    lcid:_vm.list_id,
                    account_status:e
                }
                if(e == "N"){
                    this.$Modal.confirm({
                        title: '确认提示',
                        content: '是否确认停用此账号？',
                        onOk (){
                            editLinerStatus(params).then((data)=>{
                                _vm.$Message.success("修改成功")
                                _vm.account_status = e;
                                bus.$emit('customer-list-reload')
                            })
                        }
                    })
                }
                else{
                    this.$Modal.confirm({
                        title: '确认提示',
                        content: '是否确认启用此账号？',
                        onOk (){
                            editLinerStatus(params).then((data)=>{
                                _vm.$Message.success("修改成功")
                                _vm.account_status = e;
                                bus.$emit('customer-list-reload')
                            })
                        }
                    })
                    
                }
            },
            resestPwd(){
                let _vm = this;
                let params = {
                    act_user_id : this.userInfo.user_id,
                    lcid : _vm.list_id

                }
                this.$Modal.confirm({
                    title: '确认提示',
                    content: '是否确认重置密码？',
                    onOk (){
                        resestLinerPwd(params).then((json)=>{
                            _vm.$Message.success("密码重置成功")
                        })
                    }
                })
                
            },
            accountValate (){
                let _vm = this
                if(this.detailData.invite_mobile == ''){
                    return
                }
                let params = {
                    act_user_id:this.userInfo.user_id,
                    invite_mobile:this.detailData.invite_mobile,
                }
                setTimeout(()=>{
                    isLinerExit(params).then((json)=>{
                        if(json.resultObj.exists_type == '1'){
                            _vm.$Message.error("该账号已存在,请重新输入")
                            _vm.detailData.invite_mobile = ''
                        }
                    })
                },100)
                
            }
        }
    }
        
</script>
<style lang="scss">
.partner-type .ivu-select-dropdown{
    position:absolute !important;
}
</style>
<style  scoped="">
.state-status{
    margin-right:10px;
    margin-top:7px;
    padding:0 10px;
    border-radius:10px;
    background:rgba(22, 155, 213, 1);
    line-height: 20px;
    font-size: 12px;
    float: right;
    color:#fff
}
.stategreen{
    background:green;
    color:#fff
}
.statered{
    background:red;
    color:#fff
}
.stategray{
    background:#ccc;
    color:#000
}
</style>