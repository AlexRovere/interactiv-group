<template>
  <section class="container">
    <Search v-bind:movies="movies"></Search>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">
            Titre
            <img
              src="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png"
            />
          </th>
          <th scope="col">
            Année
            <img
              src="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png"
            />
          </th>
          <th scope="col">Réalisateur</th>
          <th scope="col">Affiche</th>
          <th scope="col">Modifier</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.title">
          <th scope="row">{{ movie.title }}</th>
          <td>{{ movie.year }}</td>
          <td>{{ movie.director }}</td>
          <td>
            <img
              class="img-thumbnail w-25"
              :src="movie.posterUrl"
              alt="affiche du film"
            />
          </td>
          <td>
            <router-link :to="{ name: 'update', params: { id: movie.id } }">
              <button class="btn btn-primary">Modifier</button>
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: 'delete', params: { id: movie.id } }">
              <button class="btn btn-danger">Supprimer</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from '@/components/Search.vue'
import DataService from '@/services/DataService'
import iMovies from '@/types/Movies'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
  name: 'Home',
  components: {
    Search,
  },
  data() {
    return {
      movies: [] as iMovies[],
      title: '',
    }
  },
  methods: {
    getAllMovies() {
      DataService.getAll()
        .then((response: ResponseData) => {
          this.movies = response.data
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
  },
  mounted() {
    this.getAllMovies()
  },
})
</script>

<style scoped lang="scss">
th,
td {
  color: $secondary;
}
</style>
