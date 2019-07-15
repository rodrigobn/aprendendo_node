const express = require('express'); // Importando o framework express. Retorna uma função
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// metodo utilizado para permitir enviar dados no formato json para aplicação
app.use(express.json());

//Iniciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

/** Requerimento do codigo do produto
 * Criado abaixo do banco de dados pois precisa que ele ja esteja declarado */
requireDir('./src/models');


/**Rotas */
/**É como se fosse um coringa, 
 * Use = recebe todo tipo de requisição a partir da rota definida no parametro
 * exemplo: get, post, put, delete, ... */
app.use('/api', require('./src/routes'));

app.listen(3001); // pedindo para a aplicação utilizar a porta 3001 do navegador


/*
instalado a dependencia express
instalado a devDependencies nodemon (npm -D install nodemon)

-D = devDependencies são as dependencias que so seram utilizadas no 
desenvolvimento e não quando for utilizar online.

"dev": "nodemon server.js" -> Criado no arquivo packge.json para 
rodar sempre que algo for modificado e salvo

Ao rodar o comando 'npm run dev' vai rodar os scripts do arquivo packge.json
Com isso ele vai ficar 'Assistindo' possiveis modificações no codigo para reenviar
*/

/* instalar nova dependencia chamada mongoose(que é um ORM de bancos 
 * nao relacionais com mongodb), para trabalhar com o banco não 
 * relacionais (npm install mongoose)

 * ORM = utiliza javaScript para fazer os mesmos comandos que os 
 * comandos de um mySql por exemplo: insert, delete, update, ...
 * Object Relational Mapping transforma as tabelas em objetos no 
 * javaScript
 */

/* Criando model de produto
 * model dentro do modelo mvc representa uma tabela no banco de dados,
 * Tecnica utilizando a biblioteca require-dir que faz o papel do 
 * require em um diretorio em todos os arquivos automaticamente 
 * para não precisar fazer varios require para varios arquivos 
 * (npm install require-dir)
 */