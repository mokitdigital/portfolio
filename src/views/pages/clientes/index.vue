<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row class="mt-lg-5">
      <b-col>
        <b-jumbotron bg-variant="dark" class="text-center">
          <template #header>
            <h1 class="border-bottom border-dark">Clientes</h1>
          </template>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row cols="1" cols-lg="3">
      <b-col class="box" v-for="(img, index) in images" :key="index">
        <a :href="img.to" target="_blank">
          <b-img thumbnail fluid :src="img.src" :alt="img.alt"></b-img>
          <p class="text-white d-flex align-items justify-content-center mt-2 mb-5">{{ img.text }}</p>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Clientes',
  data () {
    return {
      images: [
        {
          src: require('../../../assets/img/dougweiss.png'),
          to: 'https://dougweiss.com.br',
          text: 'Doug Weiss',
          alt: 'Doug Weiss'
        },
        {
          src: require('../../../assets/img/ciadorelogio.png'),
          to: 'https://ciadorelogio.tk',
          text: 'Cia do Relógio',
          alt: 'Cia do Relógio'
        },
        {
          src: require('../../../assets/img/newwavestudy.png'),
          to: 'https://newwavestudy.tk',
          text: 'New Wave Study',
          alt: 'New Wave Study'
        },
        {
          src: require('../../../assets/img/sulconcept.png'),
          to: 'https://sulconcept.vercel.app',
          text: 'Sul Concept',
          alt: 'Sul Concept'
        }
      ]
    }
  },
  methods: {
    fade (el: string): void {
      const element = document.getElementById(el)?.classList.toggle('box')
      console.log(element)
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
  color: #857F72;
  border-color: #857F72;
}
.box {
  width: 100%;
  transition: opacity 1s ease-in-out;
}
.box:hover {
  cursor: pointer;
  opacity: 0.4;
  zoom: 1;
  filter: alpha(opacity=50);
}
</style>
