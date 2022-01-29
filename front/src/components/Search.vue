<template>
  <section class="container">
    <h1>Quel film cherchez-vous ?</h1>
    <div class="d-flex flex-column mx-auto align-items-center">
      <input
        v-model="search"
        class="col-4"
        type="search"
        placeHolder="rechercher par titre de film"
      />
      <button @click="getResult" class="col-1 my-3 btn-primary btn">
        Rechercher
      </button>
      {{ this.resultMovies.title }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import iMovies from '@/types/Movies'

export default defineComponent({
  name: 'Search',
  props: ['movies'],
  data() {
    return {
      search: '',
      resultMovies: [] as iMovies[],
    }
  },
  methods: {
    getResult() {
      let resultMovies: iMovies[] = []
      let search = this.search

      if (!search) {
        return this.resultMovies
      }

      let searchString = search.trim().toLowerCase()
      resultMovies = this.movies.filter(function (item: any) {
        if (item.title.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      })
      console.log(resultMovies)
      return this.resultMovies
    },
  },
  computed: {
    filteredList() {
      let resultMovies: iMovies[] = []
      let search = this.search

      if (!search) {
        return this.resultMovies
      }

      let searchString = search.trim().toLowerCase()
      resultMovies = this.movies.filter(function (item: any) {
        if (item.title.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      })
      console.log(resultMovies)
      return this.resultMovies
    },
  },
  mounted() {
    console.log(this.movies)
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
