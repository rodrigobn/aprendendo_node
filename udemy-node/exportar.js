console.log(`O module.exports inicia vazio: `, module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports. c = 3

exports = null
console.log(`Não muda `, module.exports)

exports = {
    nome: `Teste`
}
console.log(`Não muda `, module.exports)

module.exports = {
    nome: `Teste`
}
console.log(`Muda `, module.exports)