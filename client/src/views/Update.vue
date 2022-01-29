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
      <div class="d-flex col-4 justify-content-around">
        <div class="col-6">
          <router-link :to="{ name: 'delete', params: { id: 1 } }">
            <button type="submit" class="btn btn-danger my-3">
              Supprimer
            </button>
          </router-link>
        </div>
        <div class="col-6">
          <button type="submit" class="btn btn-primary my-3 col-10">
            Modifier
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'update',
  components: {},
})
</script>
