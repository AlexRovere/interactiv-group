"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io = require('socket.io');
const movie_controller_1 = require("../controllers/movie.controller");
// const { fetchMovies, addMovie, updateMovie, deleteMovie, searchMovie } = require('../controllers/movie.controller');
const socketServer = {
    listen(server) {
        let ioServer = io(server);
        ioServer.on('Socket error', (err) => {
            console.log(err);
        });
        ioServer.on('connection', (socket) => {
            console.log('connexion réussie');
            socket.on('fetchMovies', () => (0, movie_controller_1.fetchMovies)(socket));
            socket.on('addMovie', (data) => (0, movie_controller_1.addMovie)(socket, data));
            socket.on('updateMovie', (data) => (0, movie_controller_1.updateMovie)(socket, data));
            socket.on('deleteMovie', (id) => (0, movie_controller_1.deleteMovie)(socket, id));
            socket.on('searchMovie', (data) => (0, movie_controller_1.searchMovie)(socket, data));
            socket.on('disconnect', () => console.log('disconnected'));
            socket.on('hello_world', () => {
                socket.emit('test', "Hello world");
            });
            socket.on('pingRequest', () => {
                socket.emit('pingResponse', "ping");
            });
        });
    },
};
module.exports = socketServer;
//# sourceMappingURL=index.js.map