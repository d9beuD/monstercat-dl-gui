<template>
  <b-card class="shadow-sm mb-3">
    <b-row class="align-items-center">
      <b-col cols="auto">
        <h2 class="h2 mb-0">
          <fa-icon :icon="icon" fixed-width></fa-icon>
        </h2>
      </b-col>
      <b-col>
        <h2 class="mb-0">
          {{ title }}
        </h2>
      </b-col>
      <b-col cols="auto">
        <h4 class="mb-0">
          <fa-icon icon="chevron-right"></fa-icon>
        </h4>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
