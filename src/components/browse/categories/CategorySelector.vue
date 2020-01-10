<template>
  <b-container fluid>
    <category-cell title="Artist" icon="user-astronaut"></category-cell>
    <category-cell title="Album" icon="compact-disc"></category-cell>
  </b-container>
</template>

<script>
import CategoryCell from './CategoryCell.vue'

export default {
  components: {
    CategoryCell
  }
}
</script>
