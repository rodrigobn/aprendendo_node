// framework web para criaçao dos webservices

// A porta é unica por processo que vai saber quem vai atender a requisiçao
const porta = 3003

const express = require(`express`)
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require(`./bancoDeDados`)

/**Use() = vai pegar qualquer requisiçao, padrão urlencoder, 
 * feita para o servidor usando o express Vai retornar uma 
 * funçao middleware que vai fazer um parser no body da 
 * requisiçao.
 * extended: true para não dar uma msg de advertencia q esta
 * depreciado
 */
app.use(bodyParser.urlencoded({ extended: true }))


/**get = uma forma de requisiçao
 * parametros: um caminho e uma funçao middleware
 */
app.get(`/produtos`, (req, res, next) => {
    /**send = envia o objeto como resposta para a requisiçao 
     * convertido no formato json */
    res.send(bancoDeDados.getProdutos())
})

app.get(`/produtos/:id`, (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
}) 

app.post(`/produtos`, (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    // converte em json
    res.send(produto)
})

app.put(`/produtos/:id`, (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    // converte em json
    res.send(produto)
})

app.delete(`/produtos/:id`, (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    // converte em json
    res.send(produto)
})

/**listen = metodo para criar uma porta para a aplicaçao
 * Parametro: porta e um callback opcional so para mostrar no
 * console que conseguiu e qual porta esta sendo usada
 */
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})