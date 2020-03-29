<template>
  <div>
    <!-- Main -->
    <div class="wrapper">
      <div id="main" class="container">
        <!-- Content -->
        <article>
          <how-to-participate />
        </article>
        <article>
          <h2 class="text-center">Upcoming discussions</h2>
          <button @click="getEvents">Test</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import CalenderService from '../services/CalenderService'
import HowToParticipate from '@/components/HowToParticipate'

export default {
  components: {
    HowToParticipate
  },
  methods: {
    getEvents() {
      CalenderService.getPublicEvents()
    }
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
