<template>
  <div id="app">
    <transition
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <router-view/>
    </transition>
    <van-tabbar ref="tabbar" v-show="tabbarNameList.indexOf($route.name) !== -1" v-model="active" :safe-area-inset-bottom="true" :route="true">
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
  },
  mounted () {
    document.body.addEventListener('touchstart', function () {}) // 需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态
    this.$nextTick(() => {
      if (this.$refs.tabbar) this.SET_TABBAR_HEIGHT(this.$refs.tabbar.$el.offsetHeight)
    })
  },
  computed: {
    ...mapState([
      'scrollHeight',
      'xLoading'
    ])
  }
}
</script>

<style lang="scss">
@import '~@/assets/reset.scss';
@import '~@/style/comm.scss';
</style>
