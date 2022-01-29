"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMovie = exports.addMovie = exports.deleteMovie = exports.updateMovie = exports.fetchMovies = void 0;
const { Movie } = require('../models/movie.model');
const { logError } = require('../utils/index');
const fetchMovies = (socket) => {
    Movie.findAll()
        .then((movies) => socket.emit('fetchMovies', movies))
        .catch(logError);
};
exports.fetchMovies = fetchMovies;
const addMovie = (socket, data) => {
    Movie.create(data)
        .then(() => fetchMovies(socket)) // fetch updated movies
        .catch(logError);
};
exports.addMovie = addMovie;
const updateMovie = (socket, data) => {
    Movie.update(data, {
        where: { id: data },
    })
        .then(() => fetchMovies(socket)) // fetch updated movies
        .catch(logError);
};
exports.updateMovie = updateMovie;
const deleteMovie = (socket, id) => {
    Movie.destroy({
        where: { id },
    })
        .then(() => fetchMovies(socket)) // fetch updated movies
        .catch(logError);
};
exports.deleteMovie = deleteMovie;
const searchMovie = (socket, data) => {
    Movie.search(data, {
        where: { title: data },
    })
        .then(() => fetchMovies(socket)) // fetch updated movies
        .catch(logError);
};
exports.searchMovie = searchMovie;
//# sourceMappingURL=movie.controller.js.map