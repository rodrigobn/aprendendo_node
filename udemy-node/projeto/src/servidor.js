// framework web para criaçao dos webservices

// A porta é unica por processo que vai saber quem vai atender a requisiçao
const porta = 3003

const express = require(`express`)
const app = express()

/**get = uma forma de requisiçao
 * parametros: um caminho e uma funçao middleware
 */
app.get(`/produtos`, (req, res, next) => {
    /**send = envia o objeto como resposta para a requisiçao 
     * convertido no formato json */
    res.send({nome: `Notebook`, preco:1499.99})
})

/**listen = metodo para criar uma porta para a aplicaçao
 * Parametro: porta e um callback opcional so para mostrar no
 * console que conseguiu e qual porta esta sendo usada
 */
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})