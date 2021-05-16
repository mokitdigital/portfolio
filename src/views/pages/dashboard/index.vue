<template>
  <b-container fluid class="bg-dark pb-5">
    <b-row>
      <b-col>
        <b-jumbotron bg-variant="dark" class="text-center">
          <template #header>
            <h1 class="border-bottom border-dark">Com o que trabalhamos?</h1>
          </template>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row cols="1" cols-lg="2" class="pb-5">
      <b-col>
        <b-list-group class="text-center mt-1 mb-3 mx-5">
          <b-list-group-item variant="dark" v-b-modal.quemsomos>Quem Somos</b-list-group-item>
        </b-list-group>
        <b-list-group class="text-center my-5 mx-5">
          <b-list-group-item variant="dark" v-b-modal.principios>Principios</b-list-group-item>
        </b-list-group>
        <b-list-group class="text-center my-5 mx-5">
          <b-list-group-item variant="dark" v-b-modal.modulos>Módulos específicos para sua empresa</b-list-group-item>
        </b-list-group>
        <b-list-group class="text-center my-5 mx-5">
          <b-list-group-item variant="dark" v-b-modal.valores>Valores</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col class="px-0">
        <div class="d-flex justify-content-center align-items-center" v-b-modal.instagram>
          <img src="../../../assets/img/instagram.jpg" width="400" class="mr-2" style="filter: grayscale(100%); border-radius: 50%;" />
        </div>
      </b-col>

      <modulos />
      <principios />
      <quem-somos />
      <valores />
      <instagram />
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import Instagram from './instagram.vue'
import modulos from './modulos.vue'
import principios from './principios.vue'
import quemsomos from './quemSomos.vue'
import valores from './valores.vue'

export default Vue.extend({
  name: 'Dashboard',
  components: { modulos, principios, 'quem-somos': quemsomos, valores, Instagram },
  data () {
    return {
      principios: principios,
      chart: '200',
      chartOptions: {
        responsive: true,
        maintainAspectRation: false
      }
    }
  },
  methods: {
  }
})
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  color: #857F72;
  border-color: #857F72;
}
</style>
