<template>
  <label>
    <input type="file" @change="handleChange" class="input" />
    <slot></slot>
  </label>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "dy-upload",
    data() {
      return {
        currentValue: '',
        token: ''
      }
    },
    methods: {
      getToken () {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data;
        })
      },
      handleChange ($event) {
        let file = $event.target.files[0]
        console.log(file);
        let formData = new FormData()
        formData.append('file', file)
        formData.append('token', this.token)
        axios.post('https://upload-z1.qiniup.com', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => {
          this.$emit('success', res.data.url)
        })
      }
    },
    created () {
      this.getToken()
    }
  }
</script>

<style scoped>
  .input {
    display: none;
  }
</style>
