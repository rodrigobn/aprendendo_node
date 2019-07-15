//JavaScript cria um servidor web que mostra uma pagina

// importa o modulo necessario para ativar um servidor HTTP e atribui a uma variavel local
var servidorWeb = require('http'); 

/* Instancia um servidor web com a funcao creatServer
Parametros: Funcao anonima de retorno(callback) 
*/
servidorWeb.createServer(function (request, response) {
    // Envia ao navegador um cabecalho com status 200, escreve a mensagem e encerra a resposta
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world\n');
}).listen(8124);

console.log(`Server running at http://127.0.0.1:8124/`);