<template>
  <div class="person">
    <div class="top-box">
      <div class="login-box" @click="jumpLogin" v-if="!userData.user">
        <div class="login-box-left">
          <h2 class="title">立即登录</h2>
          <div class="desc">
            时光回头，当下最重要
          </div>
        </div>
        <div class="login-box-right">
          <img src="@/assets/avatar_default.jpeg" alt="">
          <i class="iconfont icon-youbian"></i>
        </div>
      </div> <!--login-box end-->


      <div class="login-box user-box" v-else style="
flex-direction: row-reverse;justify-content: flex-end">
        <div class="login-box-left">
          <h2 class="title">{{userData.user.username || userData.user.phone}}</h2>
          <div class="desc">
            {{userData.user.desc||'这个用户很懒，什么也没写'}}
          </div>
        </div>
        <div class="login-box-right">
          <img :src="userData.user.avatar||zhenxiang" alt="">
        </div>
      </div>

      <div class="read-data">
        <div class="col-line"></div>
        <div class="col-line"></div>
        <div class="read-data-item">
          <div class="item-row1">
            {{userData.read || 24}}
            <span class="little-title">本</span>
          </div>
          <div class="item-row2">
            已读书籍
          </div>
        </div>
        <div class="read-data-item">
          <div class="item-row1">
            {{userData.collection || 20}}
            <span class="little-title">本</span>
          </div>
          <div class="item-row2">
            已收藏书籍
          </div>
        </div>
        <div class="read-data-item">
          <div class="item-row1">
            {{userData.like || 10}}
            <span class="little-title">章</span>
          </div>
          <div class="item-row2">
            喜欢
          </div>
        </div>
      </div> <!--read-data end-->
    </div>

    <div class="menu-wrap">
      <ul class="menu">
        <li class="menu-item">
          <div class="menu-item-left">
            <i class="iconfont icon-xiugaigerenxinxi"></i>
            <span class="menu-item-title">修改个人信息</span>
          </div>
          <i class="iconfont icon-youbian"></i>
        </li>
        <li class="menu-item">
          <div class="menu-item-left">
            <i class="iconfont icon-jiazhi1"></i>
            <span class="menu-item-title">收藏书单</span>
          </div>
          <i class="iconfont icon-youbian"></i>
        </li>
        <li class="menu-item">
          <div class="menu-item-left">
            <i class="iconfont icon-aihao-"></i>
            <span class="menu-item-title">喜欢的文章</span>
          </div>
          <i class="iconfont icon-youbian"></i>
        </li>
      </ul>
    </div>

    <div class="btn-wrap" v-if="userData.user">
      <Button type="danger" size="large" @click="logOut">退出登录</Button>
    </div>
  </div>
</template>

<script>
  import zhenxiang from '@/assets/zhenxiang.jpg'
  import {Button} from 'mint-ui'

  export default {
    name: "person",
    components: {
      Button
    },
    data () {
      return {
        zhenxiang
      }
    },
    methods: {
      jumpLogin () {
        this.$router.push({name: 'login'})
      },
      getUserData () {
        if (localStorage.getItem('token')){
          this.$store.dispatch('getUserData')
        }
      },
      logOut () {
        localStorage.removeItem('token')
        this.$store.commit('CHANGE_USERDATA', {})
      }
    },
    created () {
      this.getUserData()
    },
    computed: {
      userData () {
        return this.$store.state.userData
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
