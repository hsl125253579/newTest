<template>
  <div>
    <index-top></index-top>
    <nuxt />
  </div>
</template>
<script>
import IndexTop from "../components/IndexTop"
export default {
  name:"default",
  components:{
    IndexTop
  }
}
</script>
<style lang="scss">
@import "../assets/_init.scss";
</style>
