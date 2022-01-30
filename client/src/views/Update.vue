<template>
  <section class="container">
    <form class="mx-auto d-flex flex-column align-items-center">
      <div class="row">
        <div class="form-group w-50">
          <label for="title">Titre</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="inputTitle"
          />
        </div>
        <div class="form-group w-50">
          <label for="realisateur">Réalisateur</label>
          <input
            v-model="director"
            type="string"
            class="form-control"
            id="inputRealisateur"
          />
        </div>
      </div>
      <div>
        <div class="form-group">
          <label for="year">Année de sortie</label>
          <input
            v-model="year"
            type="number"
            class="form-control"
            id="inputYear"
            min="1000"
            max="9999"
          />
        </div>

        <div class="form-group">
          <label for="imgUrl">Affiche</label>
          <input
            v-model="posterUrl"
            type="string"
            class="form-control"
            id="inputImgUrl"
          />
        </div>
      </div>
      <div class="d-flex col-4 justify-content-around">
        <div class="col-6">
          <button
            @click="deleteMovie(this.$route.params.id)"
            class="btn btn-danger my-3"
          >
            Supprimer
          </button>
        </div>
        <div class="col-6">
          <button
            @click="updateMovie(this.$route.params.id)"
            class="btn btn-primary my-3 col-10"
          >
            Modifier
          </button>
        </div>
      </div>
    </form>
    <div v-if="submitted">
      <h4 v-if="updated">Votre film a bien été modifié !</h4>
      <h4 v-if="deleted">Votre film a bien été supprimé !</h4>
      <router-link to="/">
        <button class="btn btn-primary">
          Retour à l'accueil
        </button>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataService from '@/services/DataService'
import iMovies from '@/types/Movies'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
  name: 'update',
  components: {},
  data() {
    return {
      title: '',
      year: 1990,
      director: '',
      posterUrl: '',
      updated: false,
      deleted: false,
      submitted: false,
    }
  },
  methods: {
    getMovie(id: any) {
      DataService.get(id)
        .then((response: ResponseData) => {
          this.title = response.data.title
          this.year = response.data.year
          this.director = response.data.director
          this.posterUrl = response.data.posterUrl
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
    deleteMovie(id: number) {
      DataService.delete(id)
        .then((response: ResponseData) => {
          console.log(response.data)
          this.deleted = true
          this.updated = false
          this.submitted = true
          setTimeout(() => {
            this.$router.push({ name: 'Home' })
          }, 2000)
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
    updateMovie(id: number) {
      let data = {
        title: this.title,
        year: this.year,
        director: this.director,
        posterUrl: this.posterUrl,
      }
      DataService.update(id, data)
        .then((response: ResponseData) => {
          console.log(response.data)
          this.updated = true
          this.deleted = false
          this.submitted = true
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
  },
  mounted() {
    this.getMovie(this.$route.params.id)
  },
})
</script>
