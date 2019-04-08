<template>
  <div class="container changePassword">
    <dy-input-change title="原密码"
                     type="password"
                     placeholder="请输入原密码"
                     v-model="formData.password" />
    <dy-input-change
      title="新密码"
      type="password"
      placeholder="请输入新密码"
      v-model="formData.changePassword" />
    <div class="btn-wrap mt-20">
      <Button type="danger" size="large" @click="handleSave">保存</Button>
    </div>
  </div>
</template>

<script>
  import dyInputChange from '@/components/dy-input-change'
  import {Button, Toast} from 'mint-ui'

  export default {
    name: "index",
    components: {
      dyInputChange,
      Button
    },
    data () {
      return {
        formData: {
          password: '',
          changePassword: ''
        }
      }
    },
    methods: {
      handleSave () {
        this.$axios.post(this.$api.changePassword, this.formData).then(res => {
          if(res.code == 200){
            Toast({
              message: '密码修改成功，需要重新登录',
              duration: 1000
            })
            localStorage.removeItem('token')
            this.$store.commit('CHANGE_USERDATA', {})
            setTimeout(() => this.$router.replace('/login'), 1000)
          } else {
            Toast({
              message: res.msg,
              duration: 1000
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
