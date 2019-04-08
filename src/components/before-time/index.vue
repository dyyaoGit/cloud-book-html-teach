<template>
  <span>
    {{currentText}}
  </span>
</template>

<script>
  export default {
    name: "before-time",
    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    },
    data() {
      return {
        currentText: '',
        currentDate: new Date(),
        oldDate: null
      }
    },
    methods: {
      handleComputed () {
        this.oldDate = new Date(this.value)
        const oldTime = this.oldDate.getTime() // 获取服务器给我们的unix时间戳
        const currentTime = this.currentDate.getTime() // 获取本地的unix时间戳
        const reduceTime = currentTime - oldTime // unix时间戳的差
        const date = new Date()
        date.setHours(0)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)
        const zeroTime = date.getTime()
        const oldDay = this.oldDate.getDate()

        // 20190308 20:00:00
        // 昨晚8点看的 ==》  9点钟再看记录  ==》 显示多少小时前 20190308 00:00:00
        // 今天凌晨1点钟看的记录   =》 显示一天前

        if(reduceTime/(1000*60*60)<1){ // 小于一小时前    显示 （多少分钟前）
          this.currentText = `${Math.round(reduceTime / (1000*60))}分钟前`
        } else if(reduceTime/(1000*60*60)>=1 && (zeroTime - oldTime) < 0) {
          // 小于一天前      显示（多少小时前）
          this.currentText = `${Math.round(reduceTime/(1000*60*60))}小时前`
        } else if((zeroTime - oldTime) >=0 && reduceTime / (1000*60*60*24*31) < 1){         // 小于一个月前    显示（多少天前）
          this.currentText = `${Math.round(reduceTime/ (1000*60*60*24))}天前`
        } else {  // 显示多少个月
          this.currentText = `${Math.round(reduceTime / (1000 * 60 * 60 * 24 * 31))}月前`
        }
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val){
          if(val){
            this.handleComputed()
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
