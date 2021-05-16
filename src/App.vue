<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  overflow-x: none;
}

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #857F72;
  }
}

a:hover {
  color: #857F72;
  text-decoration: dashed;
  &.router-link-exact-active:hover {
    color: #857F72;
    text-decoration: dashed;
  }
}
</style>
