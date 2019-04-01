<template>
  <label class="dy-label">
    <slot name="icon">
      <i class="iconfont"></i>
    </slot>
    <input type="text" v-model="currentValue" class="dy-input" v-if="type==='text'" :placeholder="placeholder">
    <input type="password" v-model="currentValue" v-if="type==='password'" class="dy-input" :placeholder="placeholder">
    <slot name="right">

    </slot>
  </label>
</template>

<script>
  export default {
    name: "index",
    props: {
      value: String,
      type: {
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      max: {
        type: Number
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      currentValue (newValue, oldValue) {
        if(this.max){
          if(newValue.length > this.max){
            this.currentValue = oldValue
          }
        }
        this.$emit('input', newValue)
      },
      value () {
        this.currentValue = this.value
      }
    }
  }
</script>

<style lang="scss" src="./index.scss"></style>
