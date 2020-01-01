<template>
  <div>
    <div class="border-bottom mb-3 sticky-top d-flex align-items-center justify-content-between">
      <h3 class="mb-0">{{ title }}</h3>
      <a href="#" @click="switchSeeAll">{{ seeAllText }}</a>
    </div>
    <b-form-row>
      <listed-release v-for="(release, index) in releasesList" :key="index" :release="release"></listed-release>
    </b-form-row>
  </div>
</template>

<script>
  import ListedRelease from './ListedRelease.vue'

  export default {
    props: {
      releasesList: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        default: 'New releases'
      }
    },
    data () {
      return {
        seeAll: false
      }
    },
    computed: {
      seeAllText () {
        return this.seeAll ? 'View more' : 'View less'
      }
    },
    methods: {
      switchSeeAll (event) {
        event.preventDefault()
        this.seeAll = !this.seeAll
      }
    },
    components: {
      ListedRelease
    }
  }

</script>
