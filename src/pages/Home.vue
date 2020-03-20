<template>
  <div>
    <!-- Header -->
    <div id="header-wrapper">
      <slot/>

      <!-- Hero -->
      <section id="hero" class="container">
        <header>
          <h2>
            Solution Revolution
          </h2>
        </header>
        <p style="">
          What if Covid-19 is an open call for a better world? What will you do different?
        </p>
        <ul class="actions">
          <li>
            <router-link to="/" class="button">Join the challenge</router-link>
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

        <header class="major">
          <h2>How to participate</h2>
        </header>
        <div class="row">
          <section class="col-4 col-12-narrower feature">
            <font-awesome-icon size="2x" icon="video"/>
            <header>
              <h3>Record your video</h3>
            </header>
            <p>Mention who nominated you. State your problem, and that is bad news! Then state your solution, and that
              is good news!</p>
          </section>
          <section class="col-4 col-12-narrower feature">
            <font-awesome-icon size="2x" icon="user-friends"/>
            <header>
              <h3>Nominate others</h3>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
              sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
              adipiscing elit. Curabitur vel sem sit.</p>
          </section>
          <section class="col-4 col-12-narrower feature">
            <font-awesome-icon size="2x" icon="share-alt"/>
            <header>
              <h3>Share</h3>
            </header>
            <p>Post your video to your favorite social media channel. Use the hashtag #goodnews and
              #solutionrelovution.</p>
          </section>
        </div>
      </div>
    </div>

    <!-- Promo -->
    <div id="promo-wrapper">
      <section id="promo">
        <h2>Solution revolution is an initiative by .... </h2>
        <router-link to="/vision" class="button">The vision</router-link>
      </section>
    </div>
  </div>
</template>

<script>
  import InstagramEmbed from "vue-instagram-embed";
  import {Tweet} from "vue-tweet-embed";

  export default {
    name: 'home',

    components: {
      InstagramEmbed,
      Tweet
    },
  }
</script>

<style lang="scss">

</style>
