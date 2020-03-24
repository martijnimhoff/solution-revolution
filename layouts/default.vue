<template>
  <div class="outer-page-wrapper">
    <div id="page-wrapper">
      <!-- Header -->
      <div id="header-wrapper">
        <div id="header" class="container">
          <!-- Logo -->
          <h1 id="logo">
            <nuxt-link to="/">#SolutionRevolution</nuxt-link>
          </h1>

          <!-- Nav -->
          <nav id="nav-left">
            <ul>
              <li>
                <nuxt-link to="/vision" class="router-link">Vision</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/livefeed" class="router-link">
                  Live Map
                </nuxt-link>
              </li>
            </ul>
          </nav>

          <nav id="nav-right">
            <ul>
              <li>
                <nuxt-link to="/attribution" class="router-link">
                  Credits
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/participate" class="button">
                  Join the challenge
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <nuxt />

      <!-- Promo -->
      <div id="promo-wrapper">
        <section id="promo">
          <h2>
            What if Covid-19 were an open call for a better world? What would
            you do different?
          </h2>
          <nuxt-link to="/vision" class="button">The vision</nuxt-link>
        </section>
      </div>

      <!-- Footer -->
      <div id="footer-wrapper">
        <div class="container">
          <ul class="menu">
            <li>&copy; #solutionrevolution, All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="navButton">
      <a type="button" class="toggle" @click="toggleMobileMenu">
        <font-awesome-icon icon="bars" />
      </a>
    </div>

    <div id="navPanel">
      <nav @click="toggleMobileMenu">
        <nuxt-link
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.to"
          class="link depth-0"
          style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
        >
          <span class="indent-0"></span> {{ menuItem.title }}
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isMobileMenuOpen: false,

      menuItems: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Vision',
          to: '/vision'
        },
        {
          title: 'Live Feed',
          to: '/livefeed'
        },
        {
          title: 'Credits',
          to: '/attribution'
        },
        {
          title: 'Join the challenge',
          to: '/participate'
        }
      ]
    }
  },

  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen

      if (this.isMobileMenuOpen) {
        document.body.classList.add('navPanel-visible')
      } else {
        document.body.classList.remove('navPanel-visible')
      }
    }
  }
}
</script>

<style>
@import url('~/assets/main.scss');

.outer-page-wrapper {
  overflow: hidden;
}

iframe.instagram-media.instagram-media-rendered {
  min-width: 100% !important;
  max-width: 100% !important;
}

.twitter-tweet.twitter-tweet-rendered {
  margin-top: 0 !important;
  min-width: 100% !important;
  max-width: 100% !important;
}
</style>
