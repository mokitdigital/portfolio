<template>
  <div>
    <b-sidebar
      id="sidebar"
      bg-variant="dark"
      text-variant="white"
      backdrop
      shadow
      style="background-color: #857F72 !important;"
    >
      <b-row>
        <b-col>
          <h1 class="text-center border-bottom text-brown-white">Menu</h1>
        </b-col>
      </b-row>
      <b-row cols="1" class="text-center mt-5">
        <b-col class="my-2 p-0 text-brown-white opacity-text">
          <router-link to="/dashboard">
            <h5>
              Dashboard
            </h5>
          </router-link>
        </b-col>
        <b-col class="my-2 p-0 text-brown-white opacity-text">
          <router-link to="/clientes">
            <h5>
              Clientes
            </h5>
          </router-link>
        </b-col>
        <b-col class="my-2 p-0 text-brown-white opacity-text">
          <router-link to="/templates">
            <h5>
              Templates
            </h5>
          </router-link>
        </b-col>
        <b-col class="my-2 p-0 text-brown-white opacity-text">
          <router-link to="/plus">
            <h5>
              Plus
            </h5>
          </router-link>
        </b-col>
      </b-row>
    </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #857F72;
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

.text-brown-white {
  color: #857F72;
}

.opacity-text {
  transition: opacity 1s ease-in-out;
}

.opacity-text:hover {
  cursor: pointer;
  opacity: 0.4;
  zoom: 1;
  filter: alpha(opacity=50);
  background-color: #d1cbbd;
  color: #544f46;
  transition: background-color 1000ms linear;
}

.border-bottom {
  border-color: #857F72 !important;
}
</style>
