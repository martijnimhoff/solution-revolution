<template>
  <div class="wall-io">
    <!-- Main -->
    <iframe src="https://walls.io/n6myh?theme=fluid&amp;colorscheme=classic&amp;showheader=0" frameborder="0" title="#solutionrevolution"></iframe>
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
