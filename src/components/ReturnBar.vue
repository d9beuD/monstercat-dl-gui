<template>
  <div class="sticky-top bg-blur">
    <b-container class="py-2" fluid>
      <b-link variant="primary" pill @click="goBack">
        <fa-icon icon="chevron-left"></fa-icon>
        Back
      </b-link>
    </b-container>
  </div>
</template>

<script>
  export default {
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }

</script>
