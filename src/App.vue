<template>
  <div class="outer-page-wrapper">
    <div id="page-wrapper">

      <!-- Header -->
      <div id="header-wrapper">
        <div id="header" class="container">

          <!-- Logo -->
          <h1 id="logo">
            <router-link to="/">#SolutionRevolution<sup>tm</sup></router-link>
          </h1>

          <!-- Nav -->
          <nav id="nav-left">
            <ul>
              <li>
                <router-link to="/vision" class="router-link">Vision</router-link>
              </li>
              <li>
                <router-link to="/livefeed" class="router-link">Live Feed</router-link>
              </li>
            </ul>
          </nav>

          <nav id="nav-right">
            <ul>
              <li>
                <router-link to="attribution" class="router-link">
                  Credits
                </router-link>
              </li>
              <li>
                <router-link to="participate" class="button">
                  Join the challenge
                </router-link>
              </li>
            </ul>
          </nav>

        </div>
      </div>

      <router-view/>


      <!-- Promo -->
      <div id="promo-wrapper">
        <section id="promo">
          <h2>What if Covid-19 is an open call for a better world? What will you do different?</h2>
          <router-link to="/vision" class="button">The vision</router-link>
        </section>
      </div>

      <!-- Footer -->
      <div id="footer-wrapper">
        <div class="container">
          <ul class="menu">
            <li>&copy; Solution Revolution. All rights reserved.</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="navButton">
      <a type="button" @click="toggleMobileMenu" class="toggle">
        <font-awesome-icon icon="bars"/>
      </a>
    </div>

    <div id="navPanel">
      <nav @click="toggleMobileMenu">
        <router-link :to="homeMenuItem.to"
                     class="link depth-0"
                     style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
        ><span class="indent-0"></span>{{ homeMenuItem.title }}
        </router-link>
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
            title: 'Live Feed',
            to: '/livefeed',
          },
          {
            title: 'Credits',
            to: '/attribution',
          },
          {
            title: 'Join the challenge',
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
