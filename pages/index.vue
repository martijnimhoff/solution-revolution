<template>
  <div class="wall-io">
    <!-- Main -->
    <iframe
      src="https://walls.io/n6myh?theme=fluid&amp;colorscheme=classic&amp;showheader=0"
      frameborder="0"
      title="#SolutionRevolution"
    ></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('overflow-hidden')
  },
  destroyed() {
    document.body.classList.remove('overflow-hidden')
  },
  head() {
    return {
      title: '',
      titleTemplate: 'Join the #SolutionRevolution',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'What if Covid-19 were an open call for a better world? What would you do different?'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
