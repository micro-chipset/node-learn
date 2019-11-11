// Демо простейщего применения EE
// аргументы передаются по цепочке
// обработчики срабатывают в том же порядке, в котором назначены

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function (request) {
    request.approved = true;
});

server.on('request', function (request) {
    console.log(request);
});

server.on('error', function (err) {
    console.log(err)
});

server.emit('request', {from: "Клиент"});

server.emit('request', {from: "Еще клиент"});

server.emit('error', new Error("Серверная ошибка"));
