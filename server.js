'use strict';

let port = 3000;

const io = require('socket.io')(port);
const util = require('util');

io.on('connect', initializeUser);

function initializeUser(socket){
  console.log(`Server detects a new connection`);

  // add listeners to each socket
  socket.on('read-success', (filePath, data) => {
    handleFileRead(filePath, data, socket);
  });

  socket.on('write-success', (filePath) => {
    handleFileWrite(filePath, socket);
  });
  socket.on('file-error', () => {
    handleFileError(filePath, err, socket)
  });

}

function handleFileRead(filePath, data, socket) {
  // console.log(`the server heard a read success`);
  // console.log(`socket.id: ${socket.id}, data: ${data}, filePath:${filePath}`);
  socket.broadcast.emit('read-success', filePath, data);
}
function handleFileWrite(filePath, socket) {
  // console.log(`the server heard a write success`);
  // console.log(`socket.id: ${socket.id}, filePath: ${filePath}`);
  socket.broadcast.emit('write-success', filePath);
}
function handleFileError(filePath, err, socket) {
  // console.log(`the server heard a file error`);
  // console.log(`socket.id: ${socket.id}, err: ${err}, filePath:${filePath}`);
  socket.broadcast.emit('file-error', filePath, err);
}

module.exports = {
  handleFileRead,
  handleFileWrite,
  handleFileError,
}
