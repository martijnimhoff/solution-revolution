import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faVideo,
  faUserFriends,
  faShareAlt,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faVideo, faUserFriends, faShareAlt, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)
