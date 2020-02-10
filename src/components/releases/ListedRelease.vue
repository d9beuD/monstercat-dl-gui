<template>
  <b-col class="mb-2" md="6" lg="4" xl="3" @click="$router.push('/home/release/' + release.catalogId)">
    <b-form-row class="align-items-center">
      <b-col cols="2" sm="2" md="3">
        <b-img class="shadow" fluid-grow rounded :src="artwork"></b-img>
      </b-col>
      <b-col cols="10" sm="10" md="9">
        <h5 class="mb-0 text-truncate text-danger">{{ release.title }}</h5>
        <h6 class="mb-0">{{ release.artistsTitle }}</h6>
      </b-col>
    </b-form-row>
  </b-col>
</template>

<script>
import monstercat from '../../monstercat'

export default {
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  computed: {
    artwork () {
      return monstercat.artwork({ id: this.release.id, imageWidth: 128 })
    }
  }
}
</script>
