<template>
  <div>
    <!-- Header -->
    <div id="header-wrapper">
      <slot/>

      <!-- Hero -->
      <section id="hero" class="container">
        <header>
          <h2>
            #SolutionRevolution
          </h2>
        </header>
        <p style="">
          What if Covid-19 is an open call for a better world? What will you do different?
        </p>
        <ul class="actions">
          <li>
            <router-link to="/participate" class="button">Join the challenge</router-link>
          </li>
        </ul>
      </section>

    </div>


    <!-- Features 2 -->
    <div class="wrapper">
      <section class="container">
        <header class="major">
          <h2>Highlights</h2>
        </header>
        <div class="row features">
          <section class="col-4 col-12-narrower feature">
            <instagram-embed
                url="https://www.instagram.com/p/B99J1b5qVyV/"
                :max-width="500"
            />
          </section>
          <section class="col-4 col-12-narrower feature">
            <tweet id="1240983946340577280"/>
          </section>
          <section class="col-4 col-12-narrower feature">
            <instagram-embed
                url="https://www.instagram.com/p/B9UmmzxHohs/"
                :max-width="500"
            />
          </section>
        </div>
        <ul class="actions major">
          <li>
            <router-link to="/highlights" class="button">View more</router-link>
          </li>
        </ul>
      </section>
    </div>

    <!-- Features 1 -->
    <div class="wrapper">
      <div class="container">
        <how-to-participate/>
      </div>
    </div>
  </div>
</template>

<script>
  import InstagramEmbed from "vue-instagram-embed";
  import {Tweet} from "vue-tweet-embed";
  import HowToParticipate from "../components/HowToParticipate";

  export default {
    name: 'home',

    components: {
      InstagramEmbed,
      Tweet,
      HowToParticipate
    },
  }
</script>

<style lang="scss">

</style>
