import { iMovie } from "../models/movie.model"

const { Movie } = require('../models/movie.model')
const { logError } = require('../utils/index')

const fetchMovies = (socket: any) => {
  Movie.findAll()
    .then((movies: iMovie) => socket.emit('fetchMovies', movies))
    .catch(logError)
}

const addMovie = (socket: any, data: string) => {
  Movie.create(data)
    .then(() => fetchMovies(socket)) // fetch updated movies
    .catch(logError)
}

const updateMovie = (socket: any, data: string) => {
  Movie.update(data, {
    where: { id: data },
  })
    .then(() => fetchMovies(socket)) // fetch updated movies
    .catch(logError)
}

const deleteMovie = (socket: any, id: string) => {
  Movie.destroy({
    where: { id },
  })
    .then(() => fetchMovies(socket)) // fetch updated movies
    .catch(logError)
}

const searchMovie = (socket: any, data: string) => {
  Movie.search(data, {
    where: { title: data },
  })
    .then(() => fetchMovies(socket)) // fetch updated movies
    .catch(logError)
}

export {fetchMovies, updateMovie, deleteMovie, addMovie, searchMovie};