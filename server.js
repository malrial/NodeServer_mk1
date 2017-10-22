	 
	var http = require("http");
	var url = require("url");

	function iniciarServidor(route,handle){

		function onRequest(request,response){
			var pathname = url.parse(request.url).pathname;
			console.log("peticion " + pathname +" recibida");

			route(handle,pathname);

			response.writeHead(200,{"Content-type":"text/html"});
			response.write("Hola 112");
			response.end();
		};


		http.createServer(onRequest).listen(8081);
		console.log("Server started");
	}

	exports.iniciarServidor = iniciarServidor;