<template>
  <section class="container">
    <div v-if="!submitted">
      <form class="mx-auto d-flex flex-column align-items-center">
        <div class="row">
          <div class="form-group w-50">
            <label for="title">Titre</label>
            <input type="text" class="form-control" id="inputTitle" />
          </div>
          <div class="form-group w-50">
            <label for="realisateur">Réalisateur</label>
            <input type="string" class="form-control" id="inputRealisateur" />
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
            />
          </div>

          <div class="form-group">
            <label for="imgUrl">Affiche</label>
            <input type="string" class="form-control" id="inputImgUrl" />
          </div>
        </div>
        <button @click="saveMovie" class="btn btn-primary my-3 col-2">
          Ajouter
        </button>
      </form>
    </div>
    <div v-else>
      <h4>Votre film a bien été enregistré !</h4>
      <button class="btn btn-success" @click="newMovie">
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
      movie: {
        id: '',
        title: '',
        year: '',
        director: '',
        posterUrl: '',
      } as iMovies,
      submitted: false,
    }
  },
  methods: {
    saveMovie() {
      let data = {
        title: this.movie.title,
        description: this.movie.year,
        year: this.movie.year,
        director: this.movie.director,
        posterUrl: this.movie.posterUrl,
      }

      DataService.create(data)
        .then((response: ResponseData) => {
          this.movie.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
    newMovie() {
      this.submitted = false
      this.movie = {} as iMovies
    },
  },
})
</script>
