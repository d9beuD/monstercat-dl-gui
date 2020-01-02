<template>
  <b-col class="mb-2" md="6" lg="4" xl="3">
    <b-form-row class="align-items-center">
      <b-col cols="2" sm="2" md="3">
        <b-img class="shadow" fluid-grow rounded :src="release.coverUrl"></b-img>
      </b-col>
      <b-col cols="10" sm="10" md="9">
        <h5 class="mb-0 text-truncate text-danger">{{ release.title }}</h5>
        <h6 class="mb-0">{{ release.renderedArtists }}</h6>
      </b-col>
    </b-form-row>
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
