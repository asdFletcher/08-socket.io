![CF](http://i.imgur.com/7v5ASc8.png) LAB 8
=================================================

## Socket.io

### Author: Fletcher LaRue

### Links and Resources
[![Build Status](https://travis-ci.com/asdFletcher/08-socket.io.svg?branch=master)](https://travis-ci.com/asdFletcher/08-socket.io)

* [repo](https://github.com/asdFletcher/08-socket.io)
* [travis](https://travis-ci.com/asdFletcher/08-socket.io)
<!-- * [back-end](http://xyz.com)
* [front-end](http://xyz.com) -->

--- 
---
### Description:
Project for Code Fellows 401 to refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.

The application currently uses a nested callback to accept a file from the user and perform various operations on it. It throws errors on failure and logs out success messages.

The task is to refactor the application to use events to surface errors and completion status, while also moving away from the big un-testable callback.

#### `logger.js` description
    - listens to server
    - logs events
#### `server.js` description
- the socket.io server
- use port 3000
- listens for file-save
    - emit an event when it happens
- listens for file-error
    - emit an event when it happens
- require socket.io

#### `app.js` description
- accept file name from CLI
- reads in a file
    - makes changes to it
    - saves the data to the file
    - uses promises
    - has separate functions
    - File reading/Writing/Uppercasing should happen in one module
    - Each operation should be in a separate function
    - Read/Write should be done in promises, not callbacks
- connected to server.js


---
### Files
#### `app.js`
#### `logger.js`
#### `server.js`

#### Test files
#### `app.test.js`
#### `logger.test.js`
#### `server.test.js`
---

### Modules
##### Exported Values and Methods for the following files:
#### `app.js`
- ###### `alterFile(filePath)`
- ###### `handleFileData(filePath, data)`
- ###### `handleWriteFile(filePath, newData)`

#### `logger.js`
- ###### `logReadSuccess(filePath, data)`
- ###### `logWriteSuccess(filePath)`
- ###### `logFileError(filePath, err)`

#### `server.js`
- ###### `handleFileRead(filePath, data, socket)`
- ###### `handleFileWrite(filePath, socket)`
- ###### `handleFileError(filePath, err, socket)`

--- 

#### `app.js`
- ###### `alterFile(filePath)`
    * requires 1 parameter
    * given a filePath alters the data in that file
    * asyncronously reads file data
- ###### `handleFileData(filePath, data)`
    * requires 2 parameters 
    * given `filePath` and `data`, capitalizes the words in the file
    * `filePath` specifies the location of the file to be altered
    * `data` are the contents of the file in buffer format
    * assumes that the file data is valid (no type checking of data)    
- ###### `handleWriteFile(filePath, newData)`
    * requires 2 parameters 
    * given `filePath` and `data`, capitalizes the words in the file
    * `filePath` specifies the location of the file to be altered
    * `data` are the new file contents in buffer format
    * asyncronously writes the new file data

#### `logger.js`
`logger.js` logs events from the server to the console.

* ###### `logReadSuccess(filePath, data)`
    * listens for file-read success
    * accepts a filePath and data which are logged
* ###### `logWriteSuccess(filePath)`
    * listens for file-write success
    * accepts a filePath which is logged
* ###### `logFileError(filePath, err)`
    * listens for file-errors (write or read)
    * accepts a filePath and an error which are logged

#### `server.js`
- ###### `handleFileRead(filePath, data, socket)`
    * requires 3 parameters
    * logs the parameters to the console.
- ###### `handleFileWrite(filePath, socket)`
    * requires 2 parameters
    * logs the parameters to the console.
- ###### `handleFileError(filePath, err, socket)`
    * requires 3 parameters
    * logs the parameters to the console.


### Testing
Tests can be found in the `__tests__` directory:
`__tests__/<file to be tested>.test.js`

Where `<file to be tested>` is the name of the file that the test file applies to.

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
    ```

* Run jest

    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved


---

### Dependencies

* Jest: `npm i jest` 
    * [Jest docs](https://jestjs.io/docs/en/getting-started)
    * testing
* JSDoc: `npm i jsdoc`
    * [JSDoc docs](http://usejsdoc.org/)
    * documentation
* socket.io: `npm i socket.io`
    * [socket.io docs](https://socket.io/docs/)
    * [socket.io server API](https://socket.io/docs/server-api/)
    * server communications via WebSocket
* socket.io-client: `npm i socket.io-client`
    * [socket.io docs](https://socket.io/docs/)
    * [socket.io client API](https://socket.io/docs/client-api/)
    * client communications via WebSocket



### Setup
#### `.env` requirements
* n/a

### Usage

Initialization routine:
- start the server
- start the logger
- run the application

--- 

TODO: add tests
TODO: add JSDoc notation

