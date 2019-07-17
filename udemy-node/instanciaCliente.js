/**O require(`./instanciaUnica`) vai retornar um objeto */
const contadorA = require(`./instanciaUnica`)
const contadorB = require(`./instanciaUnica`)

/**O require(`./instanciaNova`) vai retornar uma funçao entao
 * require('./instanciaNova')() retorna o objeto criado pela
 * funçao
 */
const contadorC = require(`./instanciaNova`)()
const contadorD = require(`./instanciaNova`)()

/**Os valores mudam juntos pois o cache do node faz com que 
 * as duas variaveis pegam o mesmo objeto
 */
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

/**Os valores não mudam juntos pois aqui não tem cache, ja que
 * as duas variaveis recebe um novo objeto retornado pela funcao
 * no modulo instanciaNova.js
 */
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
