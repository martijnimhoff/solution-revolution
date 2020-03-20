<template>
  <div class="outer-page-wrapper">
    <div id="page-wrapper">

      <router-view>
        <div id="header" class="container">

          <!-- Logo -->
          <h1 id="logo">
            <router-link to="/">#SolutionRevolution</router-link>
          </h1>

          <!-- Nav -->
          <nav id="nav">
            <ul>
              <li
                  v-for="(menuItem, index) in menuItems"
                  :key="index"
                  :class="{break: index === 2}"
              >
                <router-link :to="menuItem.to" class="router-link">
                  {{ menuItem.title }}
                </router-link>
              </li>
            </ul>
          </nav>

        </div>
      </router-view>


      <!-- Promo -->
      <div id="promo-wrapper">
        <section id="promo">
          <h2>Solution revolution is an initiative by .... </h2>
          <router-link to="/vision" class="button">The vision</router-link>
        </section>
      </div>

      <!-- Footer -->
      <div id="footer-wrapper">
        <div class="container">
          <ul class="menu">
            <li>&copy; Solution revolution. All rights reserved.</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="navButton">
      <a type="button" @click="toggleMobileMenu" class="toggle"></a>
    </div>

    <div id="navPanel">
      <nav>
        <router-link :to="homeMenuItem.to">{{ homeMenuItem.title }}</router-link>
        <router-link
            v-for="(menuItem, index) in menuItems"
            :to="menuItem.to"
            :key="index"
            class="link depth-0"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
        >
          <span class="indent-0"></span> {{ menuItem.title }}
        </router-link>
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

        homeMenuItem: {
          title: 'Home',
          to: '/'
        },

        menuItems: [
          {
            title: 'Vision',
            to: '/vision',
          },
          {
            title: 'Highlights',
            to: '/highlights',
          },
          {
            title: 'Attribution',
            to: '/attribution',
          },
          {
            title: 'Participate',
            to: '/participate',
          },
        ]
      }
    },

    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;

        if (this.isMobileMenuOpen) {

          document.body.classList.add('navPanel-visible');
        } else {

          document.body.classList.remove('navPanel-visible');
        }
      }
    }
  }
</script>

<style>
  @import url('sass/main.scss');

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
