<template>
  <label class="hs-upload-wrap">
    <input type="file" class="hs-upload-input" @change="change">
    <slot></slot>
  </label>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "index",
    data () {
      return {
        token: ''
      }
    },
    methods: {
      getToken () {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data
        })
      },
      change ($event) {
        const file = $event.target.files[0]
        const form = new FormData()
        form.append('file', file)
        form.append('token', this.token)
        axios.post('https://upload-z1.qiniup.com', form).then(res => {
          console.log(res)
          this.$emit('success', res.data.url)
        })
      }
    },
    created () {
      this.getToken()
    }
  }
</script>

<style lang="scss">
  .hs-upload-wrap {
    display: block;

    .hs-upload-input {
      display: none;
    }
    .upload-btn {
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #555;
      border: 1px solid #000;
    }
  }
</style>
