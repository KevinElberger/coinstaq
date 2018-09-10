const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);

let userCount = 0;

io.on('connection', function(socket) {
  let addedUser = false;

  socket.on('message', function(data) {

  });

  socket.on('add user', function(name) {
    if (addedUser) return;

    userCount += 1;
    addedUser = true;
    socket.username = name;
    
    socket.emit('login', {
      userCount: userCount
    });

    socket.broadcast.emit('user joined', {
      username: socket.username,
      userCount: userCount
    });
  });

  socket.on('disconnect', function() {
    if (addedUser) {
      userCount -= 1;

      socket.broadcast.emit('user left', {
        username: socket.username,
        userCount: userCount
      });
    }
  });
});
