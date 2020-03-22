<template>
  <div class="wall-io">
    <!-- Main -->
    <iframe src="https://walls.io/n6myh?colorscheme=classic&amp;theme=map&amp;show_header=0&amp;map_style=classic" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      document.body.classList.add('overflow-hidden');
    },
    destroyed() {
      document.body.classList.remove('overflow-hidden');
    }
  }
</script>

<style lang="scss" scoped>

  #header-wrapper {
    padding: 4em 0 2em;
    position: fixed;
    width: 100%;
  }

  .wall-io iframe {
    height: calc(100vh - 112px);
    width: 100%;
  }
</style>
