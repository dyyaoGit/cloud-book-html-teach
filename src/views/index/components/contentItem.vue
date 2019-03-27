<template>
  <div class="content-item">
    <div class="content-item-row1">
      <h2 class="title">
        {{options.title}}
      </h2>
      <router-link to="#">更多...</router-link>
    </div>
    <div class="content-item-row2" v-for="(it, index) in options.books" :key="index">
      <div class="img-wrap">
        <img :src="it.img" :alt="it.img" class="img">
      </div>
      <div class="article">
        <div class="article-title">
          {{it.title}}
        </div>
        <div class="article-preview">
          {{it.desc}}
        </div>
        <div class="article-msg">
          <div class="author">
            {{it.author}}
          </div>
          <div class="date">
            {{it.updateTime}}
          </div>
          <div class="looknums">
            {{it.looknums}}人在看
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contentItem",
    props: {
      options: Object
    },
    created () {
      console.log(this.options);
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../globalCss/px2-rem';

  .content-item {
    margin-top: 20px;
    .content-item-row1 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-left: 2px solid #000;
      padding: 4px 0 4px 10px;
    }

    .content-item-row2 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .img-wrap {
        width: px-to-rem(200);
        height: px-to-rem(266);

        .img {
          height: 100%;
        }
      }
      .article {
        position: relative;
        flex: 1;
        margin-left: 9px;

        .article-title {
          color: #333;
          font-size: 18px;
          font-weight: 500;
        }
        .article-preview {
          margin-top: 10px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 12px;
          color: #555;
        }
        .article-msg {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #555;
        }
      }
    }
  }


</style>
