const fs = require(`fs`)

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 8.15
}

/**JSON.stringify() = qual conteudo sera persistido no arquivo, 
 * sera uma conversão do objeto em formato textual json */ 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    // Se a variavel err for nula então sera falsa e executara o proximo comando
    console.log(err || 'Arquivo salvo')
})