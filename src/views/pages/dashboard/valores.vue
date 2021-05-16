<template>
  <b-modal
    id="valores"
    title="Valores"
    body-bg-variant="dark"
    header-bg-variant="dark"
    header-text-variant="light"
    header-border-variant="dark"
    hide-footer
    size="md"
    class="border-0 text-center"
  >
    <template #modal-header>
      <h3>Valores</h3>
    </template>
    <b-row cols="1">
      <b-col>
        <b-form-group
          size="lg"
          label="Interface de páginas"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="rotas"
            :options="optionsRotas"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          size="lg"
          label="Interface de estilo"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="estilo"
            :options="optionsEstilo"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          size="lg"
          label="Uso do banco de dados"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="bd"
            :options="optionsBD"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          size="lg"
          label="Uso de Analitycs"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="analitycs"
            :options="optionsAnalitycs"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          size="lg"
          label="Uso de suporte personalizado"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="suporte"
            :options="optionsSuporte"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          size="lg"
          label="Uso de histórico personalizado"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="vuex"
            :options="optionsVuex"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          size="lg"
          label="Instagram com cesta de compras"
          label-class="text-white"
          class="my-2"
        >
          <b-form-select
            v-model="instagram"
            :options="optionsInstagram"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-button variant="dark" size="lg" class="my-2" @click="getTotal">Calcular</b-button>
      </b-col>
      <b-col class="border-top mt-4">
        <b-form-group
          size="lg"
          label="Valor mensal"
          label-class="text-white"
          class="my-4"
        >
          <b-input-group
            size="lg"
            prepend="R$"
            append=",00"
          >
            <b-form-input
              type="number"
              v-model="mensal"
              class="text-right"
              readonly
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group
          size="lg"
          label="Valor por ano (com desconto de 25% ate Junho/2021)"
          label-class="text-white"
          class="my-4"
        >
          <b-input-group
            size="lg"
            prepend="R$"
            append=",00"
          >
            <b-form-input
              type="number"
              v-model="anual"
              class="text-right"
              readonly
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      rotas: 0,
      estilo: 0,
      bd: 0,
      analitycs: 0,
      suporte: 0,
      vuex: 0,
      instagram: 0,
      mensal: 0,
      anual: 0,
      optionsRotas: [
        { value: null || 0, text: 'Selecione o numero de paginas', disabled: true },
        { value: 160, text: '1 a 5 Páginas' },
        { value: 400, text: '6 a 20 Páginas' },
        { value: 600, text: '20+ Páginas' }
      ],
      optionsEstilo: [
        { value: null || 0, text: 'Selecione o estilo', disabled: true },
        { value: 160, text: 'Padrao' },
        { value: 600, text: 'Personalizado' }
      ],
      optionsBD: [
        { value: null || 0, text: 'Selecione o uso do Banco de Dados', disabled: true },
        { value: 160, text: 'Sem uso' },
        { value: 400, text: 'Cadastros' },
        { value: 600, text: 'Cadastros Personalizados [ Produtos Intermitentes, Login, etc]' }
      ],
      optionsAnalitycs: [
        { value: null || 0, text: 'Selecione o uso de Analitycs', disabled: true },
        { value: 160, text: 'Sem uso' },
        { value: 600, text: 'Com uso' }
      ],
      optionsSuporte: [
        { value: null || 0, text: 'Selecione o uso de suporte personalizado', disabled: true },
        { value: 160, text: 'Sem uso' },
        { value: 600, text: 'Com uso' }
      ],
      optionsVuex: [
        { value: null || 0, text: 'Selecione o histórico personalizado', disabled: true },
        { value: 0, text: 'Sem uso' },
        { value: 400, text: 'Com uso' }
      ],
      optionsInstagram: [
        { value: null || 0, text: 'Selecione se esta habilitado', disabled: true },
        { value: 0, text: 'Desabilitado' },
        { value: 600, text: 'Habilitado' }
      ]
    }
  },
  methods: {
    getTotal () {
      this.mensal = Math.round((this.rotas + this.estilo + this.bd + this.analitycs + this.suporte + this.vuex + this.instagram) / 12)
      this.anual = Math.round((this.rotas + this.estilo + this.bd + this.analitycs + this.suporte + this.vuex + this.instagram) * 0.75)
    }
  }
})
</script>

<style lang="scss" scoped>
h3 {
  font-size: 2rem;
  color: #857F72;
  border-color: #857F72;
}
</style>
