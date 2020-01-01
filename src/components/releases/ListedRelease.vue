<template>
  <b-col class="mb-2" md="6" lg="4">
    <b-row>
      <b-col md="3">
        <b-img fluid :src="release.coverUrl"></b-img>
      </b-col>
      <b-col>
        <h4 class="mb-0">{{ release.title }}</h4>
        <h5 class="mb-0">{{ release.featuredArtist }}</h5>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
  export default {
    props: {
      release: {
        type: Object,
        required: true
      }
    }
  }

</script>
