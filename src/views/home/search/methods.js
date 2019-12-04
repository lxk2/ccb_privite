import { mapActions } from 'vuex'
export default {
  ...mapActions([
    'toSearch'
  ]),
  onSearch () {
    this.toSearch(this.keyword)
      .then(res => {

      })
      .catch(res => {

      })
  },
  onCancel () {

  },
  handlerClickGrid (e) {

  },
  onLoad () {
    setTimeout(() => {
      this.list += 7
      this.loading = false
      if (this.list > 40) {
        this.finished = true
      }
    }, 1000)
  }
}
