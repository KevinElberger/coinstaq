const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connect', (socket) => {
  socket.broadcast.emit('test', 'hello world!');
  // socket.on('event', function(data) {

  // });
  // socket.on('disconnect', function() {

  // });
});

server.listen(3000);