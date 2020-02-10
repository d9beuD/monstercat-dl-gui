import Vue from 'vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faCheck,
  faChevronLeft,
  faChevronRight,
  faCompactDisc,
  faDownload,
  faExclamationTriangle,
  faHome,
  faSearch,
  faSync,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCheck,
  faChevronLeft,
  faChevronRight,
  faCompactDisc,
  faDownload,
  faExclamationTriangle,
  faHome,
  faSearch,
  faSync,
  faUserAstronaut,
)

Vue.component('fa-icon', FontAwesomeIcon)
