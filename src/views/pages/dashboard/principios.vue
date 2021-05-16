<template>
  <b-modal
    id="principios"
    title="Principios"
    body-bg-variant="dark"
    header-bg-variant="dark"
    header-text-variant="light"
    header-border-variant="dark"
    hide-footer
    size="md"
    class="border-0"
  >
    <template #modal-header>
      <h3>Princípios</h3>
    </template>
    <b-tabs content-class="mt-3" nav-class="text-white" fill>
      <div v-for="(princ, index) in principios" :key="index">
        <b-tab title-link-class="text-light bg-dark" :title="princ.tabs.title">
          <b-card bg-variant="dark" text-variant="light">
            <b-list-group>
              <div v-for="(lt, index) in princ.tabs.list" :key="index">
                <b-list-group-item variant="dark" href="#" v-b-toggle="lt.id">{{ lt.title }}</b-list-group-item>
                <b-collapse :id="lt.id">
                  <b-list-group>
                    <b-list-group-item variant="dark">
                    {{ lt.text }}
                    </b-list-group-item>
                  </b-list-group>
                </b-collapse>
              </div>
            </b-list-group>
          </b-card>
        </b-tab>
      </div>
    </b-tabs>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { principios } from '../../../data/dashboard/principios'

export default Vue.extend({
  data () {
    return {
      principios
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
