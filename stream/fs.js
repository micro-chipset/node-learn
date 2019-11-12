const fs = require('fs');

//fs.ReadStream наследует от streamReadable
var stream = new fs.ReadStream(__filename);

stream.on('readable', function() {
    var data = stream.read();
    console.log(data);
});

stream.on('end', () => {
    console.log("The end")
});
