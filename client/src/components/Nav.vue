<template>
  <div id="nav">
    <router-link to="/">Liste des films</router-link>
    |
    <router-link to="/add">Ajouter un film</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nav',
})
</script>
