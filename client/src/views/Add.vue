<template>
  <section class="container">
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
      <button
        v-on:click="addMovie()"
        type="submit"
        class="btn btn-primary my-3 col-2"
      >
        Ajouter
      </button>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'add',
  components: {},
  methods: {
    addMovie() {
      console.log('addMovie')
    },
  },
})
</script>
