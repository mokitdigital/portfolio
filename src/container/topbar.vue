<template>
  <nav class="bg-dark bg-gradient p-4">
    <b-row>
      <b-col>
        <h1>Portfolio</h1>
      </b-col>
      <b-col>
        <button-sun-moon></button-sun-moon>
      </b-col>
      <b-col>
        <p class="d-flex justify-content-end menu-symbol" v-b-toggle.sidebar>&#9781;</p>
      </b-col>
      <sidebar />
    </b-row>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import sidebar from './sidebar.vue'
import ButtonSunMoon from '@/components/ButtonSunMoon.vue'

export default Vue.extend({
  components: { sidebar, 'button-sun-moon': ButtonSunMoon },
  data () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.bg-dark-jungle-green {
  background-color: #00100B !important;
}
nav {
  overflow-x: hidden;
}
.logo {
  width: 10%;
}

.menu-symbol {
  font-size: 36px;
  color: #857F72;
  cursor: pointer;
}

h1 {
  color: #857F72;
}
</style>
