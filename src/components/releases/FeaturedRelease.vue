<template>
  <b-card class="mb-3 shadow" bg-variant="400">
    <b-row class="align-items-center">
      <b-col md="4" lg="3">
        <b-img fluid :src="release.coverUrl"></b-img>
      </b-col>
      <b-col>
        <div class="h5 mb-0">
          <b-badge class="border border-dark" variant="warning">Featured</b-badge>
        </div>
        <h2 class="mb-0">{{ release.title }}</h2>
        <h3 class="text-muted">By {{ release.renderedArtists }}</h3>
        <p>{{ release.releaseDate }}</p>
      </b-col>
    </b-row>
  </b-card>
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
