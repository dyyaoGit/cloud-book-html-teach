<template>
  <div class="container changePerson">
    <ul class="user-msg-list">
      <li class="user-msg-item">
        <hs-upload to="#" class="item-content" @success="changeAvatar">
          <div class="item-left">
            头像
          </div>
          <div class="item-right">
            <img :src="userData.user.avatar||zhenxiang" alt="默认头像" class="img">
            <i class="iconfont icon-youbian"></i>
          </div>
        </hs-upload>
      </li>
      <li class="user-msg-item">
        <router-link class="item-content" to="#">
          <div class="item-left">
            昵称
          </div>
          <div class="item-right">
            <span>
              {{userData.user.username || userData.user.phone}}
            </span>
            <i class="iconfont icon-youbian"></i>
          </div>
        </router-link>
      </li>
      <li class="user-msg-item">
        <router-link class="item-content" to="#">
          <div class="item-left">
            个性签名
          </div>
          <div class="item-right">
          <span>
              {{userData.user.desc || '这个家伙很懒，什么也没写'}}
          </span>
            <i class="iconfont icon-youbian"></i>
          </div>
        </router-link>
      </li>
      <li class="user-msg-item">
        <router-link class="item-content" to="#">
          <div class="item-left">
            修改密码
          </div>
          <div class="item-right">
            <i class="iconfont icon-youbian"></i>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import zhenxiang from '@/assets/zhenxiang.jpg'
  import dyUpload from '@/components/dy-upload'
  import hsUpload from '@/components/hs-upload'
  import {Button, Toast} from 'mint-ui'

  export default {
    name: "changePerson",
    components: {
      dyUpload,
      Button,
      hsUpload
    },
    data () {
      return {
        zhenxiang,img: ''
      }
    },
    methods: {
      handleSuccess (val) {
        console.log(val);
        this.img = val;
      },
      changeAvatar (url) {
        this.$axios.put(this.$api.changeUser, {avatar: url}).then(res => {
          if(res.code == 200){
            Toast({
              message: '头像修改成功'
            })

            this.$store.dispatch('getUserData')
          }
        })
      }
    },
    computed: {
      userData () {
        return this.$store.state.userData
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
