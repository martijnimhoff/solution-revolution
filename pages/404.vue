<template>
  <div>
    <!-- Main -->
    <div class="wrapper">
      <div id="main" class="container">
        <div class="row">
          <div class="col-10 off-1">
            <!-- Content -->
            <article id="content">
              <header>
                <h2>This page could not be found</h2>
              </header>
              <p>
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
  head() {
    return {
      title: 'Vision',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Read more about the vision behind the #SolutionRevolution.'
        }
      ]
    }
  }
}
</script>
