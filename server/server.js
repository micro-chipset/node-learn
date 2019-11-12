const http = require('http');
const debug = require('debug')('server');

const server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

debug("Server is running");
