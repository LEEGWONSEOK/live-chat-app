const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));
const PORT = process.env.PORT || 8080;

io.on('connection', (socket) => {
  socket.on('chatting', (data) => {
    console.log(data);
    io.emit('chatting', `반갑다 ${data}`);
  });
})

server.listen(PORT, () => console.log(`server is running ${PORT}`));