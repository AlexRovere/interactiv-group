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

<script>
import { defineComponent } from 'vue'
import Search from '@/components/Search.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Search,
  },
  methods: {
    test() {
      return this.currentOrder + this.currentPosition
    },
  },
  data() {
    return {
      currentOrder: 'title',
      currentPosition: 'desc',
      movies: [
        {
          id: 1,
          title: 'Beetlejuice',
          year: '1988',
          runtime: '92',
          genres: ['Comedy', 'Fantasy'],
          director: 'Tim Burton',
          actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
          plot:
            'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
          posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
        },
        {
          id: 2,
          title: 'The Cotton Club',
          year: '1984',
          runtime: '127',
          genres: ['Crime', 'Drama', 'Music'],
          director: 'Francis Ford Coppola',
          actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
          plot:
            'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
          posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
        },
        {
          id: 3,
          title: 'The Shawshank Redemption',
          year: '1994',
          runtime: '142',
          genres: ['Crime', 'Drama'],
          director: 'Frank Darabont',
          actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
          plot:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        },
        {
          id: 4,
          title: 'Crocodile Dundee',
          year: '1986',
          runtime: '97',
          genres: ['Adventure', 'Comedy'],
          director: 'Peter Faiman',
          actors: 'Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil',
          plot:
            'An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.',
          posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg',
        },
      ],
    }
  },
})
</script>
<style scoped lang="scss">
th,
td {
  color: #35495e;
}
</style>
