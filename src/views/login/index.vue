<template>
  <div class="container login">
    <Logo />
    <div class="inputs">
      <div class="input-item username">
        <dy-input v-model="formData.phone" icon="icon-username">`
          <i class="iconfont icon-username" slot="icon"></i>
        </dy-input>
      </div>
      <div class="input-item password">
        <dy-input :type="isHide?'password': 'text'" v-model="formData.password" icon="icon-yincang">
          <i class="iconfont" slot="icon" :class="isHide?'icon-yincang': 'icon-yanjing'" @click="isHide = !isHide"></i>
        </dy-input>
      </div>
      <div class="register">
        <router-link :to="{name: 'register'}">没有账号？立即注册</router-link>
      </div>
      <div class="btn-wrap">
        <Button size="large" type="primary" @click="handleLogin">立即登录</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast, Button} from 'mint-ui'
  import dyInput from '@/components/dy-input'
  import validator from 'validator'
  import Logo from '../../components/Logo/logo'
  export default {
    name: "index",
    components: {
      dyInput,
      Button,
      Logo
    },
    data() {
      return {
        formData: {
          phone: '',
          password: ''
        },
        isHide: true
      }
    },
    methods: {
      handleLogin () {
        let validatorStatus = this.handleValidator()
        if(validatorStatus){
          this.$axios.post(this.$api.login, this.formData).then(res => {
            if(res.code == 200){
              localStorage.setItem('token', res.token)
              Toast({
                message: '登录成功',
                duration: 1000
              })
              setTimeout(() => {
                this.$router.push({
                  name: 'index'
                })
              }, 1000)
            }
          })
        }
      },
      handleValidator () {
        let phoneOk = validator.isMobilePhone(this.formData.phone, 'zh-CN')
        let passwordOk = validator.isLength(this.formData.password, {min: 6, max: undefined})

        if(phoneOk&&passwordOk){
          return true
        } else if(!phoneOk){
          Toast({
            message: '不是合法的手机号码'
          })
          return false
        } else if(!passwordOk){
          Toast({
            message: '密码长度必须大于6位'
          })
          return false
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
