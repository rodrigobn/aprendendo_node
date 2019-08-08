const express = require('express');
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const port = 27017

//Iniciando o app
const app = express();
app.use(express.json()); //Permite que a aplicação receba dados no formato JSON


//iniciando o banco de dados (data base DB)
mongoose.connect(`mongodb://localhost:${port}/nodeapi`, { useNewUrlParser: true});

//requerer abaixo do banco de dados pois precisa que ja esteja conectado para executar
requireDir('./src/models');

//Rotas
//comando para definir o caminho para pegar os campos e usar na rota
app.use('/api', require('./src/routes'));

app.listen(3001);