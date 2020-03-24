<template>
  <div>
    <!-- Main -->
    <div class="wrapper">
      <div id="main" class="container">
        <!-- Content -->
        <article id="content">
          <how-to-participate />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import HowToParticipate from '@/components/HowToParticipate'

export default {
  components: {
    HowToParticipate
  },
  head() {
    return {
      title: '',
      titleTemplate: 'Join the #SolutionRevolution',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'See how the #SolutionRevolution is spreading!'
        }
      ]
    }
  }
}
</script>
