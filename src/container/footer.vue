<template>
  <footer class="footer mt-auto py-5 border-top bg-dark d-flex align-items-end">
    <b-container>
      <b-row class="d-flex justify-content-lg-between">
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="4"
          class="d-flex justify-content-lg-start justify-content-center"
        >
          <p class="text-white">{{ date }} | {{ time }}</p>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="4"
          class="d-flex justify-content-lg-center justify-content-center"
        >
          <p class="d-flex justify-content-end text-white">Mokit Digital ©</p>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="4" class="d-flex justify-content-center justify-content-lg-end">
          <a href="https://mokit.digital" target="_blank" rel="noopener noreferrer" class="d-flex justify-content-lg-end">
            Saiba Mais
          </a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

export default Vue.extend({
  data () {
    return {
      date: dayjs().format('DD/MM/YYYY'),
      time: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.time = dayjs().format('HH:mm:ss')
    }, 1000)
  }
})
</script>

<style lang="scss">
</style>
