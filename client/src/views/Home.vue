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
    <div v-if="(filteredMovie.length === 0)">
      <h2>Aucun film trouvé</h2>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="col-3" @click="sortTable('title')">
            Titre
            <img
              src="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png"
            />
          </th>
          <th class="col-1" scope="col" @click="sortTable('year')">
            Année
            <img
              src="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png"
            />
          </th>
          <th scope="col" class="col-3" @click="sortTable('director')">
            Réalisateur
            <img
              src="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png"
            />
          </th>
          <th scope="col" @click="sortTable('posterUrl')">
            Affiche
            <img
              src="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png"
            />
          </th>
          <th scope="col" class="col-1">Modifier</th>
          <th scope="col" class="col-1">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in filteredMovie" :key="movie.id">
          <td align="center" scope="row">{{ movie.title }}</td>
          <td>{{ movie.year }}</td>
          <td>{{ movie.director }}</td>
          <td>
            <img
              class="img-thumbnail img-movies"
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
            <button @click="deleteMovie(movie.id)" class="btn btn-danger">
              Supprimer
            </button>
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
      ascending: false,
      sortColumn: '',
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
    deleteMovie(id: number) {
      DataService.delete(id)
        .then((response: ResponseData) => {
          console.log(response.data)
          const index = this.movies.findIndex((movie) => movie.id === id)
          this.movies.splice(index, 1)
          this.filteredMovie = this.movies
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
    sortTable(col: string) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending
      } else {
        this.ascending = true
        this.sortColumn = col
      }

      var ascending = this.ascending

      this.filteredMovie.sort(function (a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0
      })
    },
  },
  created() {
    this.getAllMovies()
  },
  watch: {
    // Traque les changements de la propriété search et filtre les films
    search(value) {
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
  computed: {
    columns() {
      if (this.filteredMovie.length == 0) {
        return []
      }
      return Object.keys(this.filteredMovie)
    },
  },
})
</script>

<style scoped lang="scss">
th,
td {
  color: $secondary;
}
.img-movies {
  width: 5vw;
}
td {
  text-align: center;
  vertical-align: middle;
}
</style>
