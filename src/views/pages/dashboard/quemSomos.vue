<template>
  <b-modal
    id="quemsomos"
    title="Quem Somos"
    body-bg-variant="dark"
    header-bg-variant="dark"
    header-text-variant="light"
    header-border-variant="dark"
    hide-footer
    size="md"
    class="border-0 text-center"
  >
    <template #modal-header>
      <h3>Quem Somos</h3>
    </template>
    <p class="text-white m-5">{{ quemsomos.text }}</p>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { quemsomos } from '../../../data/dashboard/quemsomos'
export default Vue.extend({
  data () {
    return {
      quemsomos
    }
  }
})
</script>

<style scoped>
h3 {
  font-size: 2rem;
  color: #857F72;
  border-color: #857F72;
}
</style>
