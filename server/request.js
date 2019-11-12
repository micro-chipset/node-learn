const url = require('url');
const debug = require('debug')('server:request');

module.exports = (req, res) => {
    const urlParsed = url.parse(req.url, true);

    debug("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        const message = urlParsed.query.message;
        debug("Echo: " + message);
        res.end(message);
        return;
    }

    debug("Unknown URL");

    res.status = 404;
    res.end('Not Found');
};
