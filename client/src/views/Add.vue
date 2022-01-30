<template>
  <section class="container">
    <div v-if="!submitted">
      <form
        @submit="checkForm"
        class="mx-auto d-flex flex-column align-items-center"
      >
        <p v-if="errors.length" class="alert alert-danger">
          <b>Veuillez compléter ces champs :</b>
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
          </p>
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
              type="number"
              class="form-control"
              id="inputYear"
              min="1000"
              max="9999"
              v-model="year"
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
        <button type="submit" class="btn btn-primary my-3 col-2">
          Ajouter
        </button>
      </form>
    </div>
    <div v-else>
      <h4>Votre film a bien été enregistré !</h4>
      <button class="btn btn-primary" @click="newMovie">
        Ajouter un nouveau film ?
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataService from '@/services/DataService'
import iMovies from '@/types/Movies'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
  name: 'add',
  components: {},
  data() {
    return {
      title: '',
      year: '',
      director: '',
      posterUrl: '',
      submitted: false,
      errors: [],
    }
  },
  methods: {
    saveMovie() {
      let data = {
        title: this.title,
        year: this.year,
        director: this.director,
        posterUrl: this.posterUrl,
      }
      DataService.create(data)
        .then((response: ResponseData) => {
          console.log(response.data)
          this.submitted = true
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
    checkForm: function (e) {
      this.errors = []

      if (!this.title) {
        this.errors.push('Titre requis')
      }
      if (!this.year) {
        this.errors.push('Année requise')
      }
      if (!this.director) {
        this.errors.push('Réalisateur requis')
      }
      if (!this.posterUrl) {
        this.errors.push('Affiche requise')
      }

      if (!this.errors.length) {
        this.saveMovie()
      }

      e.preventDefault()
    },
    newMovie() {
      this.submitted = false
    },
  },
})
</script>
