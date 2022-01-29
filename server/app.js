const express = require('express')
const app = express()
const movies = require('./movies.json')

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})

const iMovies = movies.map((movies) => {
  return {
    id: movies.id,
    title: movies.title,
    year: movies.year,
    director: movies.director,
    posterUrl: movies.posterUrl,
  }
})

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  next()
})

// Tous les films
app.get('/api/movies', (req, res) => {
  res.json(iMovies)
})

// Un film via son id
app.get('/api/movies/:movieID', (req, res) => {
  const id = Number(req.params.movieID)
  const movie = iMovies.find((movie) => movie.id === id)
  // Si aucun film trouvé, on renvoi un code 404
  if (!movie) {
    return res.status(404).send('Aucun film trouvé')
  }
  res.json(movie)
})

// Tous les films contenant le mot-clé dans le titre
app.get('/api/query', (req, res) => {
  const title = req.query.title.toLowerCase()
  const movie_result = iMovies.filter((movie) =>
    movie.title.toLowerCase().includes(title),
  )

  if (movie_result.length < 1) {
    return res.status(200).send('Aucun film trouvé')
  }
  res.json(movie_result)
})
