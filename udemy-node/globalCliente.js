require(`./global`)

console.log(MinhaApp.saudacao())

/**Com o objeto congelado, nao pode ser
 * modificado
 */
MinhaApp.nome = `Eita`
console.log(MinhaApp.nome)