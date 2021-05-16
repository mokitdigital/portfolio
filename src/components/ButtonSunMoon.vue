<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="one-quarter" id="switch">
      <input type="checkbox" class="checkbox" id="chk" />
      <label for="chk" class="label">
        <font-awesome-icon icon="moon" class="fa-moon"></font-awesome-icon>
        <font-awesome-icon icon="sun" class="fa-sun"></font-awesome-icon>
        <div class="ball"></div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ButtonSunMoon'
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  transition: background 0.2s linear;
}

body.dark {
  background: #292c35;
}

.checkbox {
  opacity: 0;
}

.label {
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1.5);
}

.label .ball {
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translate(0px);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translate(24px)
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}
</style>
