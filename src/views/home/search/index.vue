<template>
  <div>
    <van-search
      v-model="searchKeyword"
      placeholder="请输入您要搜索的医生名字/症状"
      show-action
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
    >
    </van-search>
    <!-- <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      分割线
    </van-divider> -->
    <div class="eq">
      <div class="container">
        <div class="block">
          <div class="title">
            热门搜索
          </div>
          <van-icon name="delete" style="font-size: 20px!important" />
        </div>
        <div class="search-grid">
          <van-grid :column-num="4" :clickable="true" :gutter="15" :border="false">
            <van-grid-item
              v-for="value in 6"
              :key="value"
              text="文字"
              @click="handlerClickGrid(value)"
            />
          </van-grid>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <div class="title">
            历史搜索
          </div>
          <van-icon name="delete" style="font-size: 20px!important" />
        </div>
        <div class="search-grid">
          <van-grid :column-num="4" :clickable="true" :gutter="15" :border="false">
            <van-grid-item
              v-for="value in 6"
              :key="value"
              text="文字"
              @click="handlerClickGrid(value)"
            />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import data from './data'
import methods from './methods'

export default {
  name: 'home-search',
  data,
  methods,
  created () {

  },
  mounted () {

  },
  computed: {
    ...mapState([
      'searchKeyword'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/style/home/search.scss';
</style>
