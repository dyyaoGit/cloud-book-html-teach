<template>
  <div>
    <router-view />
    <DyTabbar />
  </div>
</template>

<script>
  import DyTabbar from '@/components/tab-bar'

  export default {
    name: "layout",
    components: {
      DyTabbar
    }
  }
</script>

<style scoped>

</style>
