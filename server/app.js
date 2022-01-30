const express = require('express')
const app = express()
const movies = require('./movies.json')
const fs = require('fs')
var cors = require('cors')

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})

// Récupère les infos utilent pour notre affichage
const iMovies = movies.map((movies) => {
  return {
    id: movies.id,
    title: movies.title,
    year: movies.year,
    director: movies.director,
    posterUrl: movies.posterUrl,
  }
})

app.use(express.json())

var corsOptions = {
  // origin: 'http://localhost:8080',
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.set('Cache-control', 'public, max-age=10')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  next()
})

app.options('*', cors(corsOptions))

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

// Créer un film
app.post('/api/movies', (req, res) => {
  let ids = movies.map((movie) => movie.id)
  let sorted = ids.sort((a, b) => a - b)
  let lastId = sorted[sorted.length - 1]
  let newMovie = {
    id: lastId + 1,
    title: req.body.title,
    year: req.body.year,
    director: req.body.director,
    posterUrl: req.body.posterUrl,
  }
  movies.push(newMovie)
  fs.writeFile('movies.json', JSON.stringify(movies, null, 4), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Le fichier a été crée')
  })

  res.status(201).json(newMovie)
})

// Modifier un film
app.put('/api/movies/:movieID', (req, res) => {
  const id = Number(req.params.movieID)
  const index = movies.findIndex((movie) => movie.id === id)
  if (index === -1) {
    return res.status(404).send('film non trouvé')
  }
  const updatedMovie = {
    id: movies[index].id,
    title: req.body.title,
    year: req.body.year,
    director: req.body.director,
    posterUrl: req.body.posterUrl,
  }
  console.log(updatedMovie)
  movies[index] = updatedMovie
  fs.writeFile('movies.json', JSON.stringify(movies, null, 4), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Le fichier a été modifié')
  })
  res.status(200).json('Le film a été modifié')
})

// Supprimer un Film
app.delete('/api/movies/:moviesID', (req, res) => {
  const id = Number(req.params.moviesID)
  const index = movies.findIndex((movie) => movie.id === id)
  if (index === -1) {
    return res.status(404).send('film non trouvé')
  }
  movies.splice(index, 1)
  fs.writeFile('movies.json', JSON.stringify(movies, null, 4), (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Le fichier a été supprimé')
  })
  res.status(200).json('Le film a été supprimé')
})
