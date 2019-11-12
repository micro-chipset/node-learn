const http = require('http');
const log = require('winston');

const server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

log.info("Server is running");
