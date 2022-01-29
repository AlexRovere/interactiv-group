<template>
  <section class="container">
    <Search></Search>

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
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Max payne</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from '@/components/Search.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Search,
  },
})
</script>
<style scoped lang="scss">
th,
td {
  color: $secondary;
}
</style>
