'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

  // add listeners to each socket
  socket.on('read-success', logReadSuccess);
  function logReadSuccess(filePath, data) {
    console.log(`The logger heard a read success:`);
    console.log(`File data: ${data}, File path:${filePath}`);
  }

  socket.on('write-success', logWriteSuccess)
  function logWriteSuccess(filePath) {
    console.log(`The logger heard a write success:`);
    console.log(`File path: ${filePath}`);
  }

  socket.on('file-error', logFileError);
  function logFileError(filePath, err) {
      console.log(`The logger heard a file error:`);
      console.log(`Error: ${err}, File path:${filePath}`);
  }

  module.exports = {
    logReadSuccess,
    logWriteSuccess,
    logFileError,
  }

