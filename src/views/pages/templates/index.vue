<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row class="mt-lg-5">
      <b-col>
        <b-jumbotron bg-variant="dark" class="text-center">
          <template #header>
            <h1 class="border-bottom border-dark">Templates</h1>
          </template>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row cols="1" cols-lg="3">
      <b-col class="box" v-for="(img, index) in images" :key="index">
        <a target="_blank" :href="img.to">
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
  name: 'Templates',
  data () {
    return {
      images: [
        {
          src: require('../../../assets/img/portfoliopattern.png'),
          to: 'https://portfolio-pattern.vercel.app/',
          text: 'Portfolio Pattern'
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
