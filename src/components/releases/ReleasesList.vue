<template>
  <div>
    <b-container fluid class="sticky-top bg-blur">
      <div class="border-bottom mb-3 d-flex align-items-center justify-content-between">
        <h3 class="mb-0">{{ title }}</h3>
        <a href="#" class="text-decoration-none" @click="switchSeeAll">{{ seeAllText }}</a>
      </div>
    </b-container>
    <b-container fluid>
      <b-form-row>
        <listed-release v-for="(release, index) in list" :key="index" :release="release"></listed-release>
      </b-form-row>
    </b-container>
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
    data() {
      return {
        seeAll: false
      }
    },
    computed: {
      seeAllText() {
        return this.seeAll ? 'View less' : 'View more'
      },
      list() {
        return this.seeAll ? this.releasesList : this.releasesList.slice(0, 4)
      }
    },
    methods: {
      switchSeeAll(event) {
        event.preventDefault()
        this.seeAll = !this.seeAll
      }
    },
    components: {
      ListedRelease
    }
  }

</script>
