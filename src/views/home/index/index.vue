<template>
  <div style="background: rgb(247, 247, 247);">
    <div style="position: relative;">
      <van-search
          style="position: fixed;left: 0;top: 0;z-index: 9999;width: 100%;background: transparent"
          v-model="searchKeyword"
          shape="round"
          placeholder="请输入您要搜索的医生名字/症状"
          @search="onSearch"
          @click.native="toSearch"
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
    <!-- <van-popup v-model="show" position="bottom" style="width: 100%;">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        @confirm="handlerConfirm"
      />
    </van-popup> -->
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
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              lazy-load
              round
              :src="'https://img.yzcdn.cn/vant/cat.jpeg'"
            />
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
    <div class="kefu">
      <svg t="1573726791742" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2744" width="200" height="200"><path d="M949.44 431.658667C939.392 203.050667 751.061333 16.64 520.448 12.352 405.141333 10.581333 294.869333 54.72 210.282667 137.749333c-79.552 78.101333-127.509333 183.765333-135.082667 293.696C32.32 440.554667 0 478.677333 0 524.266667l0 122.624c0 52.245333 42.432 94.741333 94.677333 94.912 0.128 0 0.234667 0.064 0.362667 0.064 11.776 0 21.354667-9.536 21.354667-21.376L116.394667 461.589333c0-109.184 45.141333-216.106667 123.818667-293.333333 76.352-74.944 176.149333-115.370667 279.445333-113.216 213.952 4.032 388.010667 181.397333 388.096 395.477333 0 0.064-0.042667 0.106667-0.042667 0.170667 0 0.064 0.042667 0.128 0.042667 0.213333l0 269.354667c0 0.085333-0.042667 0.128-0.042667 0.213333s0.042667 0.128 0.042667 0.213333l0 28.288c0 48.874667-28.714667 93.738667-73.109333 114.24l-203.093333 93.76 0-3.392c0-32.106667-26.133333-58.218667-58.197333-58.218667l-122.666667 0c-32.106667 0-58.197333 26.133333-58.197333 58.218667 0 32.064 26.133333 58.154667 58.197333 58.154667l159.488 0c3.328 0 6.506667-0.746667 9.344-2.133333l232.938667-107.52c59.52-27.477333 97.962667-87.594667 97.962667-153.066667L950.421333 739.2c42.069333-9.728 73.6-47.317333 73.6-92.288l0-122.624C1024 478.954667 992 441.024 949.44 431.658667zM42.730667 646.869333l0-122.624c0-21.184 12.757333-39.402667 30.933333-47.573333l0 217.770667C55.488 686.272 42.730667 668.074667 42.730667 646.869333zM588.8 969.002667l-138.133333 0c-8.512 0-15.445333-6.954667-15.445333-15.424 0-8.554667 6.954667-15.466667 15.445333-15.466667l122.666667 0c8.533333 0 15.466667 6.954667 15.466667 15.466667L588.8 969.002667zM981.269333 646.890667c0 21.162667-12.714667 39.381333-30.869333 47.552L950.4 476.736c18.133333 8.192 30.869333 26.368 30.869333 47.552L981.269333 646.890667z" p-id="2745" fill="#ffffff"></path><path d="M827.712 548.8c0-1.130667-0.469333-2.112-0.64-3.178667L855.466667 545.621333c11.797333 0 21.376-9.536 21.376-21.376l0-73.6c0-201.152-163.669333-364.8-364.842667-364.8-201.152 0-364.8 163.626667-364.8 364.8l0 73.6c0 11.818667 9.557333 21.354667 21.354667 21.354667l28.352 0c-0.170667 1.088-0.64 2.069333-0.64 3.2 0 174.08 141.653333 315.712 315.754667 315.712S827.733333 722.901333 827.712 548.8zM189.930667 450.645333c0-177.6 144.469333-322.069333 322.069333-322.069333 177.536 0 322.090667 144.490667 322.090667 322.090667l0 52.224-129.002667 0L705.066667 502.890667l0-101.333333c0-9.621333-6.357333-18.026667-15.637333-20.586667-9.173333-2.56-19.114667 1.344-24.042667 9.578667l-67.328 112.32L189.930667 502.869333 189.930667 450.645333zM238.954667 548.8c0-1.152-0.469333-2.133333-0.64-3.2l371.861333 0c7.466667 0 14.421333-3.925333 18.261333-10.346667l33.92-56.512 0 45.525333c0 11.818667 9.557333 21.354667 21.376 21.354667l101.888 0c-0.170667 1.088-0.64 2.069333-0.64 3.178667 0 150.570667-122.432 273.002667-273.002667 273.002667C361.429333 821.781333 238.954667 699.349333 238.954667 548.8z" p-id="2746" fill="#ffffff"></path></svg>
    </div>
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
