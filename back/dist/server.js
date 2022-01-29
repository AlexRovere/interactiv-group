"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const http = require('http').createServer(app);
const socketServer = require('./socket/index');
socketServer.listen(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
http.listen(8080, 'localhost', () => {
    console.log('serveur connecté');
});
//# sourceMappingURL=server.js.map