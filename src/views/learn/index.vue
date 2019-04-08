<template>
  <div class="container my-learn">
    <div class="my-learn-item" v-for="(item, index) in arr" :key="index">
      <div class="img-wrap">
        <img :src="item.book.img" alt="">
      </div>
      <div class="book-msg">
        <h2 class="title">
          {{item.book.title}}
        </h2>
        <div class="read-msg">
          书籍{{(item.title.index + 1)}}/{{item.title.total}}章节
        </div>
        <div class="progress-wrap">
          <div class="progress-box" style="flex: 1">
            <dy-progress :total="item.title.total" :value="item.title.index + 1"></dy-progress>
          </div>
          <div class="progress-text">
            已看{{(item.title.index/item.title.total).toFixed(2) * 100 + ''}}%
          </div>
        </div>
        <div class="prev-read-wrap">
          <div class="prev-read">
            上次查看： {{item.title.title}}
          </div>
          <div class="prev-read-day">
            <before-time :value="item.updatedTime || 123" />
          </div>
        </div>
        <div class="btns-wrap">
          <Button size="small">继续阅读</Button>
          <Button size="small">查看文档</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mint-ui'
  import dyProgress from '@/components/dy-progress'
  import beforeTime from '@/components/before-time'

  export default {
    name: "learn",
    components: {
      Button,
      dyProgress,
      beforeTime
    },
    data () {
      return {
        value: 80,
        time: new Date('2019-04-01T03:56:59.418Z'),
        arr: []
      }
    },
    methods: {
      getData () {
        this.$axios.get(this.$api.getReadList).then(res => {
          if(res.code == 200){
            this.arr = res.data.map(item => item)
          }
        })
      }
    },
    created () {
      this.getData()
    }

  }
</script>

<style scoped lang="scss" src="./index.scss">

</style>
