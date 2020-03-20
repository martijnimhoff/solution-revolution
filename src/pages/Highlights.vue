<template>

  <div class="wall-io">
    <!-- Header -->
    <div id="header-wrapper">
      <slot/>
    </div>

    <!-- Main -->
    <iframe src="https://walls.io/n6myh" frameborder="0"></iframe>
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

<style lang="scss">
  .wall-io {
    #header-wrapper {
      padding: 4em 0 2em;
      position: fixed;
      width: 100%;
    }

    iframe {
      margin-top: 45px;
      height: calc(100vh - 45px);
      width: 100%;
    }
  }
</style>
