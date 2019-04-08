<template>
  <div class="container change-nickname">
    <dy-input-change :value="userMsg.username || userMsg.phone" @change="handleChange" />
    <div class="desc">
      更好的昵称能让你的朋友更容易记住你
    </div>
    <div class="btn-wrap">
      <Button size="large" type="primary" @click="handleSave">保存更改</Button>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
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
        username: ''
      }
    },
    computed: {
      userMsg () {
        return this.$store.state.userData.user
      }
    },
    methods: {
      ...mapActions(['getUserData']),
      handleChange (val) {
        this.username = val
      },
      handleSave () {
        this.$axios.put(this.$api.changeUser, {
          username: this.username
        }).then(res => {
          if(res.code == 200){
            Toast({
              message: '昵称修改成功',
              duration: 1000
            })
            this.getUserData()
            setTimeout(() => {
              this.$router.push('/changePerson')
            }, 1000)
          } else {
            Toast({
              message: res.msg
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss">

</style>
