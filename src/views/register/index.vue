<template>
  <div class="container register">
    <Logo />
    <div class="inputs">
      <dy-input v-model="formData.phone" placeholder="请输入手机号">
        <i class="iconfont icon-shoujihao" slot="icon"></i>
      </dy-input>
      <dy-input v-model="formData.password" :type="isHide?'password':'text'" placeholder="请输入密码">
        <i class="iconfont" :class="isHide?'icon-yincang':'icon-yanjing'" slot="icon" @click="isHide = !isHide"></i>
      </dy-input>
      <dy-input v-model="formData.code" placeholder="请输入6位验证码" :max="6">
        <i class="iconfont icon-yanzhengma" slot="icon"></i>
        <Button slot="right" size="small" @click="handleSendCode" style="width: 150px" :disabled="disabled&&!isCanSendCode" >{{btnText}}</Button>
      </dy-input>
    </div>
    <div class="btns">
      <Button type="primary" size="large" @click="handleRegister">立即注册</Button>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo/logo'
  import dyInput from '@/components/dy-input'
  import {Button,Toast} from 'mint-ui'
  import validator from 'validator'

  export default {
    name: "register",
    components: {
      Logo,
      dyInput,
      Button
    },
    data () {
      return {
        formData: {
          phone: '',
          password: '',
          code: ''
        },
        isHide: true,
        num: 60,
        disabled: true,
        btnText: '获取验证码',
        isSendCode: false,
        isCanSendCode: false
      }
    },
    methods: {
      handleRegister () {
        this.$axios.post(this.$api.register, this.formData).then(res => {
          if(res.code == 200){
            this.$router.push({
              name: 'login'
            })
            Toast({
              message: res.msg,
              duration: 1000
            })
          }
        })
      },
      handleSendCode () {
        this.isSendCode = true
        if(!this.disabled){
          this.disabled = true
          this.$axios.post(this.$api.sendCode, {
            phone: this.formData.phone
          }).then(res => {
            if(res.code == 200) {
              Toast({
                message: res.msg
              })
            } else {
              Toast({
                message: res.msg
              })
            }
          })

          let timer = setInterval(() => {
            this.num--;
            this.btnText = `再次获取(${this.num})s`
            if(this.num == 0){
              clearInterval(timer)
              this.num = 60
              this.btnText = '获取验证码'
              this.disabled = false
            }
          }, 1000)
        }
      }
    },
    watch: {
      formData: {
        deep: true,
        handler (newVal, oldVal) {
          if(validator.isMobilePhone(newVal.phone, 'zh-CN')){
            this.disabled = false
            this.isCanSendCode = true
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
