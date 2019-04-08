<template>
  <div class="dy-change-input">
    <div class="title" v-if="title">
      {{title}}
    </div>
    <input type="text" :value="value" :placeholder="placeholder" class="input" @change="handleChange" v-if="type=='text'">
    <input type="password" :value="value" :placeholder="placeholder" class="input" @change="handleChange" v-if="type=='password'">
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      value: String,
      placeholder: String,
      title: String,
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      handleChange ($event) {
        console.log($event.target.value)
        this.$emit('input', $event.target.value)
        this.$emit('change', $event.target.value)
      }
    }
  }
</script>

<style lang="scss" src="./index.scss"></style>
