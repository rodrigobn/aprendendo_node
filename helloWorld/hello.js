//JavaScript cria um servidor web que mostra uma pagina

// importa o modulo necessario para ativar um servidor HTTP e atribui a uma variavel local
var http = require('http'); 

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world\n');
}).listen(8124);

console.log(`Server running at http://127.0.0.1:8124/`);