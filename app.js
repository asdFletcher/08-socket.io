'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

function alterFile(filePath) {
  readFile(filePath)
    .then( (data) => {
      socket.emit('read-success', filePath, data);
      handleFileData(filePath, data);
    })
    .catch( (err) => {
      socket.emit('file-error', filePath, err);
      throw err;
    });
};

function handleFileData(filePath, data){
  let newData = data.toString().toUpperCase();
  newData = Buffer.from(newData);
  handleWriteFile(filePath, newData);
}

function handleWriteFile(filePath, newData){
  writeFile(filePath, newData)
    .then( () => {
      socket.emit('write-success', filePath);
    })
    .catch( (err) => {
      socket.emit('file-error', filePath, err);
      throw new Error(err);
    });
}

let filePath = process.argv.slice(2).shift();

alterFile(filePath);

module.exports = {
  alterFile,
  handleFileData,
  handleWriteFile,
}
