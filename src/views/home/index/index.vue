<template>
  <div style="background: rgb(247, 247, 247);">
    <div style="position: relative;">
      <van-search
          style="position: fixed;left: 0;top: 0;z-index: 9999;width: 100%;background: transparent"
          v-model="searchKeyword"
          shape="round"
          placeholder="请输入您要搜索的医生名字/症状"
          @search="onSearch"
        />
      <van-swipe :autoplay="3000" indicator-color="white" :height="186">
        <van-swipe-item v-for="(item, key) in banner" :key="key">
          <van-image
            width="100%"
            height="100%"
            lazy-load
            fit="cover"
            :src="item"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="sticky">
      <van-notice-bar mode="closeable" left-icon="volume-o">
        通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容
      </van-notice-bar>
    </div>

    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <van-list
        :style="'margin-bottom: ' + tabbarHeight + 'px;'"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
      <div class="list">
        <div class="item" v-for="(item, key) in list" :key="key">
          <div class="left">
            <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573659622629&di=8dfc91e9e92cf0847f010aba1b694b27&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F26%2F20180526165703_U3nRu.thumb.224_0.jpeg'" alt="">
          </div>
          <div class="right">
            <div class="block">
              <div class="title">
                皮肤科
              </div>
              <div class="info">
                如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用
              </div>
            </div>
            <van-icon name="arrow" class="arrow"></van-icon>
          </div>
        </div>
      </div>
      </van-list>
    </van-pull-refresh>
    <nut-backtop
      :distance="200"
      :bottom="80"
    >
    </nut-backtop>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
import { mapState } from 'vuex'

export default {
  name: 'home-index',
  data,
  methods,
  created () {

  },
  mounted () {
    console.log(this.scrollHeight)
  },
  computed: {
    ...mapState([
      'scrollHeight',
      'searchKeyword',
      'tabbarHeight'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/style/home/index.scss';
</style>
