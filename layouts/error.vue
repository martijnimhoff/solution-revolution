<template>
  <div>
    <!-- Main -->
    <div class="wrapper">
      <div id="main" class="container">
        <div class="row">
          <div class="col-10 off-1">
            <article>
              <header>
                <h2>{{ message }}</h2>
              </header>
              <p v-if="statusCode === 404">
                <nuxt-link to="/">
                  Return to homepage
                </nuxt-link>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      // <--- Send in the error
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      // <--- Get the status code
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      // <--- Print the error
      return this.error.message
    }
  },
  head() {
    return {
      title: this.message // <--- Set the SEO title
    }
  }
}
</script>
