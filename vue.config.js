const path = require('path')

module.exports = {
  configureWebpack: config => {
    console.log(path.join(__dirname, '/theme.less'))
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          // ...其他 loader 配置
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                'hack': `true; @import "${path.join(__dirname, '/theme.less')}";`
              }
            }
          }
        ]
      }
    )
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}
