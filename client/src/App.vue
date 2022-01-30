<template>
  <div class="wrapper">
    <router-link to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" />
    </router-link>
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.logo {
  width: 5%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.wrapper {
  max-width: 90vw;
}
</style>
