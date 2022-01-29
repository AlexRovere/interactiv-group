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
    </div>
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
        <tr v-for="movie in filteredMovie" :key="movie.title">
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
import DataService from '@/services/DataService'
import iMovies from '@/types/Movies'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
  name: 'Home',
  components: {},
  data() {
    return {
      movies: [] as iMovies[],
      filteredMovie: [] as iMovies[],
      title: '',
      search: '',
    }
  },
  methods: {
    getAllMovies() {
      DataService.getAll()
        .then((response: ResponseData) => {
          this.movies = response.data as iMovies[]
          this.filteredMovie = this.movies
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
  },
  mounted() {
    this.getAllMovies()
  },
  watch: {
    search(value, oldValue) {
      let resultMovies = this.movies

      let searchString = value.trim().toLowerCase()
      resultMovies = resultMovies.filter(function (item: any) {
        if (item.title.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      })
      console.log(resultMovies)
      this.filteredMovie = resultMovies
    },
  },
})
</script>

<style scoped lang="scss">
th,
td {
  color: $secondary;
}
</style>
