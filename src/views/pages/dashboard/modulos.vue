<template>
  <b-modal
    id="modulos"
    title="Módulos"
    body-bg-variant="dark"
    header-bg-variant="dark"
    header-text-variant="light"
    header-border-variant="dark"
    hide-footer
    size="lg"
  >
    <template #modal-header>
      <h3>Módulos</h3>
    </template>
    <b-row cols="1">
      <b-col v-for="(mod, index) in modulos" :key="index">
        <b-card
          :title="mod.title"
          :img-src="mod.src"
          :img-alt="mod.alt"
          img-top
          style="max-width: 20rem;"
          class="m-2"
          bg-variant="dark"
          text-variant="light"
          img-height="200"
        >
          <b-button href="#" variant="dark" v-b-toggle="mod.example">Ver Exemplos</b-button>
        </b-card>
        <b-collapse :id="mod.example" class="my-2">
          <b-card bg-variant="dark" text-variant="light">{{ mod.text }}</b-card>
        </b-collapse>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { modulos } from '../../../data/dashboard/modulos'
export default Vue.extend({
  data () {
    return {
      modulos
    }
  }
})
</script>

<style scoped>
h3 {
  font-size: 3rem;
  color: #857F72;
  border-color: #857F72;
}
</style>
