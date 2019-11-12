const http = require('http');

const fs = require('fs');

var server = new http.Server();

server.on('request', function(req, res) {

    if (req.url === '/') {

        fs.readFile('index.html', function(err,info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("На сервере произошла ошибка");
                return;
            }
            res.end(info)
        });
    } else { /* 404 */}

});

server.listen(3000);
