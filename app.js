const express = require('express');
const http = require('http');
const path = require('path');
const moment = require('moment');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));
const PORT = process.env.PORT || 8080;

io.on('connection', (socket) => {
  socket.on('chatting', (data) => {
    const { name, msg } = data;
    io.emit('chatting', {
      name,
      msg,
      time: moment(new Date()).format('h:mm A'),
    });
  });
});

console.log('heelo');

server.listen(PORT, () => console.log(`server is running ${PORT}`));
