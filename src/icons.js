import Vue from 'vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faDownload,
  faChevronLeft,
  faChevronRight,
  faExclamationTriangle,
  faSync,
  faUserAstronaut,
  faCompactDisc,
  faSearch,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDownload, faChevronLeft, faChevronRight, faExclamationTriangle, faSync, faUserAstronaut,
  faCompactDisc, faSearch, faCheck
)

Vue.component('fa-icon', FontAwesomeIcon)
