<template>
  <div>

  </div>
</template>

<script>
import data from './data'
import methods from './methods'

export default {
  name: 'home/index',
  data,
  methods,
  created () {
    this.$dialog.confirm({
      title: '提示',
      message: '呵呵哒'
    })
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  @import url(~@/style/home/index.scss);
</style>
