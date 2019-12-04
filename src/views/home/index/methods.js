export default {
  onLoad () {
    setTimeout(() => {
      this.list += 7
      this.loading = false
      if (this.list > 40) {
        this.finished = true
      }
    }, 1000)
  },
  onRefresh () {

  },
  onSearch () {

  },
  onCancel () {

  },
  toSearch () {
    this.$router.push({
      path: '/home/search'
    })
  }
}
