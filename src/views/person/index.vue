<template>
  <div class="person">
    <div class="top-box">
      <div class="login-box">
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

      <div class="read-data">
        <div class="col-line"></div>
        <div class="col-line"></div>
        <div class="read-data-item">
          <div class="item-row1">
            24
            <span class="little-title">本</span>
          </div>
          <div class="item-row2">
            已读书籍
          </div>
        </div>
        <div class="read-data-item">
          <div class="item-row1">
            22
            <span class="little-title">本</span>
          </div>
          <div class="item-row2">
            已收藏书籍
          </div>
        </div>
        <div class="read-data-item">
          <div class="item-row1">
            10
            <span class="little-title">本</span>
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
            <span class="menu-item-title">喜欢的书</span>
          </div>
          <i class="iconfont icon-youbian"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "person"
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
