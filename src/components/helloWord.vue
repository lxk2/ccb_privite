<template>
  <div>
    <h1 @click="handlerClick">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    handlerClick () {
      this.$emit('click', 1)
    }
  }
}
</script>
