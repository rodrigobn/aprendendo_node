const express = require('express')
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

//Pegar o metodo do controller ao acessar o endereço passado
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//exportar para ser usado nos outros arquivos da aplicação
module.exports = routes;