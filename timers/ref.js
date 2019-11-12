const http = require('http');

const server = new http.Server((req, res) => {
    /* Обработка запросов */
}).listen(3000);

setTimeout(() => {
    server.close()
}, 2500);

const timer = setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();
