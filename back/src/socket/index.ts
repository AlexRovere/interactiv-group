const io = require('socket.io');
import { fetchMovies, addMovie, updateMovie, deleteMovie, searchMovie } from '../controllers/movie.controller';
// const { fetchMovies, addMovie, updateMovie, deleteMovie, searchMovie } = require('../controllers/movie.controller');

const socketServer = {
  listen(server: any) {
    let ioServer = io(server)

    ioServer.on('Socket error', (err: any) => {
      console.log(err)
    })

    ioServer.on('connection', (socket: any) => {
      console.log('connexion réussie')

      socket.on('fetchMovies', () => fetchMovies(socket));
        
      socket.on('addMovie', (data: string) => addMovie(socket, data));

      socket.on('updateMovie', (data: string) => updateMovie(socket, data));

      socket.on('deleteMovie', (id: string) => deleteMovie(socket, id));

      socket.on('searchMovie', (data: string) => searchMovie(socket, data));
      
      socket.on('disconnect', () => console.log('disconnected')); 

      socket.on('hello_world', () => {
        socket.emit('test', "Hello world");
      });
      
      socket.on('pingRequest', () => {
        socket.emit('pingResponse', "ping");
      });
    });
  },
}

module.exports = socketServer
