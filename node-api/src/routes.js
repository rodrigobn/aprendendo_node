/**Colocando as rotas neste arquivo para ficar mais organizado*/ 
const express = require('express');

const routes = express.Router();


const ProductController = require('./controllers/ProductController');
// Primeira rota
/* 
app.get() diz o que vai acontecer a apligação quando for acessada na porta

Parametros: rota, função anonima
A '/' indica a rota raiz da navegação.

req é a requisição que é feita ao servidor, 
contendo todos os detalhes e informações possiveis 
exemplos: parametros, corpo, cabeçalho, 
usuario que esta fazendo a requisição, autenticação, ip, ...

res é a resposta da requisição.

esse é o fluxo do back-end
*/
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show); // No express o parametro id pode ser passado da seguinte forma (/:id)
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Exportar para ser usado em outro arquivo(server.js por exemplo)
module.exports = routes;