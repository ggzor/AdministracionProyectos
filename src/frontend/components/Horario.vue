<template lang="pug">
  div Ardilla gana {{ id }}
</template>

<script>
export default {
  data() {
    return {
      id: undefined
    }
  },
  mounted() {
    const match = window.location.href.match(/\?id=(\d+)/)

    if (match) {
      this.id = match[1]
    } else {
      
    }
  }
}
</script>

<style lang="scss">

</style>
