  <template>
  <div id="nav">
    <router-link to="/">Liste des films</router-link> |
    <router-link to="/add">Ajouter un film</router-link> |
    <router-link to="/update">Modifier un film</router-link>
  </div>
  </template>

  <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'nav',
});
</script>