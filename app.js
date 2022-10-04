const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);

const socketIO = require('socket.io')

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is running ${PORT}`));