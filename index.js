var server = require("./server");
var router = require("./router");
var handler = require("./handlers");

var handle = {}
handle["/"] = handler.iniciar;
handle["/iniciar"] = handler.iniciar;
handle["/subir"] = handler.subir;

server.iniciarServidor(router.route,handle);