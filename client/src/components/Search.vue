<template>
  <section class="container">
    <h1>Quel film cherchez-vous ?</h1>
    <div class="d-flex flex-column mx-auto align-items-center">
      <input
        class="col-4"
        type="search"
        placeHolder="recherchera par titre de film"
      />
      <button class="col-1 my-3 btn-primary btn" type="submit">
        Rechercher
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Search',
  props: {
    searchValue: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
