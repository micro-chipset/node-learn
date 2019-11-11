// http://127.0.0.1/echo?message=Hello -> Hello
const http = require('http');
const url = require('url');

const server = http.createServer();

server.on('request', (req, res) => {
    const urlParsed = url.parse(req.url, true);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
        return;
    }

    res.status = 404;
    res.end('Not Found');
});

server.listen(1337);
