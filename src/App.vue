<template>
  <div id="app">
    <router-view/>
    <van-tabbar ref="tabbar" v-if="tabbarNameList.indexOf($route.name) !== -1" v-model="active" :safe-area-inset-bottom="true" :route="true">
      <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="community" icon="comment-o" to="/community/index">微社区</van-tabbar-item>
      <van-tabbar-item name="message" icon="chat-o" info="5" to="/message/index">消息</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o" to="/user/index">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      active: 'home',
      tabbarNameList: [
        'home',
        'community/index',
        'message/index',
        'user/index'
      ]
    }
  },
  methods: {
    ...mapMutations([
      'SET_SCROLLHEIGHT',
      'SET_TABBAR_HEIGHT'
    ])
  },
  created () {
    this.SET_SCROLLHEIGHT(document.body.scrollHeight)
    console.log(this.$route)
  },
  mounted () {
    this.$nextTick(() => {
      this.SET_TABBAR_HEIGHT(this.$refs.tabbar.$el.offsetHeight)
    })
  },
  computed: {
    ...mapState([
      'scrollHeight'
    ])
  }
}
</script>

<style lang="scss">
@import '~@/assets/reset.scss';
@import '~@/style/comm.scss';
</style>
