const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    /**Se o produto não tiver id, atribui um id a ele */
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    /**|| = Se nao encontrar retorna um objeto vazio */
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }