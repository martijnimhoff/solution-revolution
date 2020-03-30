<template>
  <div>
    <!-- Main -->
    <div class="wrapper">
      <div id="main" class="container">
        <!-- Content -->
        <article>
          <how-to-participate />
        </article>

        <template v-if="events">
          <h2 class="text-center">Upcoming discussions</h2>
          <div class="row">
            <div
              v-for="event in events"
              :key="event.id"
              class="col-6 col-12-narrower feature"
            >
              <header>
                <h3>
                  {{ event.summary }}
                </h3>
              </header>
              <ul>
                <li v-for="(timezone, index) in timezones" :key="index">
                  {{
                    moment(event.start.dateTime)
                      .tz(timezone)
                      .format('dddd, MMM Do YYYY, h:mm a zz')
                  }}
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import CalenderService from '../services/CalenderService'
import HowToParticipate from '@/components/HowToParticipate'

export default {
  components: {
    HowToParticipate
  },
  data() {
    return {
      events: null,
      timezones: [
        'America/Los_angeles',
        'America/New_York',
        'Europa/Amsterdam',
        'Asia/Tokyo'
      ]
    }
  },
  mounted() {
    // this.getEvents()
  },
  methods: {
    moment,
    async getEvents() {
      this.events = await CalenderService.getPublicEvents()
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
