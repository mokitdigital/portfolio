<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row class="mt-lg-5">
      <b-col>
        <b-jumbotron bg-variant="dark" class="text-center">
          <template #header>
            <h1 class="border-bottom border-dark">Plus</h1>
          </template>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row cols="1" cols-lg="3">
      <b-col class="box" v-for="(img, index) in images" :key="index">
        <a :href="img.to" target="_blank" rel="noopener noreferrer">
          <b-img thumbnail fluid :src="img.src" alt="Image 1"></b-img>
          <p class="text-white d-flex align-items justify-content-center mt-2 mb-5">{{ img.text }}</p>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Plus',
  data () {
    return {
      images: [
        {
          src: require('../../../assets/img/palpitometro.png'),
          to: 'https://palpitometro.vercel.app/',
          text: 'Palpitômetro'
        },
        {
          src: require('../../../assets/img/googleanalitycs.png'),
          to: 'https://analytics.google.com/analytics/web/#/p237116002/reports/defaulthome',
          text: 'Google Analitycs'
        },
        {
          src: require('../../../assets/img/googleads.jpg'),
          to: 'https://ads.google.com/intl/pt-BR_br/home/pricing/',
          text: 'Google Ads'
        }
      ]
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
