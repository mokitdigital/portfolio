<template>
  <div>
    <topbar />
    <router-view />
    <footer-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterComponent from '@/container/footer.vue'
import Topbar from '@/container/topbar.vue'

export default Vue.extend({
  components: {
    'footer-component': FooterComponent,
    Topbar
  }
})
</script>

<style>

</style>
