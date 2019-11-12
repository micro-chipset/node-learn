const http = require('http');
const fs = require('fs');

new http.Server((req, res) => {
    // res instanceof http.ServerResponse < streamWritable

    if (req.url === '/big.html') {

        const file = new fs.ReadStream('big.html');
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res) {
    file.pipe(res);
    // file.pipe(process.stdout);
    
    file.on('error', (err) => {
        res.statusCode = 500;
        res.end("Server error");
        console.error(err);
    });

    file.on('open', () => {
        console.log("open")
    });

    file.on('close', () => {
        console.log("close")
    });
    
    res.on('close', () => {
        file.destroy();
    })
}
