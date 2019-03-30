<template>
  <div class="container">
    <div id="dom"></div>
    <div class="content markdown" :style="{fontSize: fontSize + 'px'}" v-html="html"></div>
    <div class="btns">
      <i class="iconfont icon-prev" @click="handleJump('prev')"></i>
      <i class="iconfont icon-mulu" @click="showTitles" ></i>
      <i class="iconfont icon-zitifangda" @click="handleAdd"></i>
      <i class="iconfont icon-zitisuoxiao" @click="handleReduce"></i>
      <i class="iconfont icon-next" @click="handleJump('next')"></i>
    </div>

    <div class="title-wrap" v-show="isShowTitles"  @click="hideTitles">
      <transition name="slide">
        <ul class="titles" v-show="isActive"  @click.stop>
          <li v-for="(item, index) in titles" :key="index" class="title-item">
            {{item.title}}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
  import Showdown from 'showdown'
  import { Toast } from 'mint-ui'

  export default {
    name: "dy-article",
    data () {
      return {
        article: {},
        html: '',
        fontSize: 48,
        titles: [],
        index: -1,
        isShowTitles: false,
        isActive: false
      }
    },
    methods: {
      getArticle (itemId) {
        return new Promise((resolve) => {
          const id = itemId?itemId:this.$route.params.id
          this.$axios.get(this.$api.getArticle + id).then(res => {
            const converter = new Showdown.Converter()
            this.html = converter.makeHtml(res.data.article.content)
            this.article = res.data
            this.index = res.data.article.index
            resolve()
          })
        })
      },
      handleAdd () {
        this.fontSize+=2
      },
      handleReduce () {
        if(this.fontSize<=42){
          Toast({
            message: '字体太小会损害眼睛哦',
            duration: 2000
          })
        } else {
          this.fontSize-=2
        }
      },
      getTitles () {
        const id = this.article.article.bookId
        this.$axios.get(this.$api.getTitles + id).then(res => {
          this.titles = res.data
        })
      },
      handleJump (isPrev) {
        const _this = this
        function getArticleByIndex() {
          const item = _this.titles.find(item => item.index == _this.index)
          const id = item._id
          _this.getArticle(id)
          _this.$router.push({
            name: 'article',
            params: {
              id
            }
          })
        }

        if(isPrev == 'prev'){
          if(this.index == 0){
            Toast({
              message: '已经是第一章了亲',
              duration: 1500
            })
          } else {
            this.index--;
            getArticleByIndex()
          }
        } else {
          if(this.index == this.titles.length){
            Toast({
              message: '已经是最后一章了亲',
              duration: 1500
            })
          } else {
            this.index++;
            getArticleByIndex()
          }
        }
      },
      showTitles () {
        this.isShowTitles = true
        this.isActive = true
      },
      hideTitles () {
        this.isActive = false
        setTimeout(() => {
          this.isShowTitles = false
        }, 500)
      }
    },
    created () {
      this.$nextTick(() => {
        console.log(document.querySelector('#dom'));

      })
      this.getArticle().then(() => {
        this.getTitles()
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '../../globalCss/px2-rem.scss';

  .btns {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background: #fff;

    .iconfont {
      flex: 1;
      color: #333;
      font-size: 24px;
      text-align: center;
      height: 42px;
      line-height: 42px;
    }
  }

  .title-wrap {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);

    .titles {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 60%;
      height: 100%;
      background: #fff;
      color: #000;

      .title-item {
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
    }

    .slide-enter, .slide-leave-to {
      transform: translate3d(-100%, 0, 0);
    }
    .slide-enter-active, .slide-leave-active {
      transition: transform .5s ease;
    }
  }
</style>

<style lang="scss">
  @import './markdown.scss';
</style>
