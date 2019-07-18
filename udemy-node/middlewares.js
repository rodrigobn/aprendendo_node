// Middleware pattern (chain of responsability)

const passo1 = (contexto, next) => {
    contexto.valor1 = `mid1`
    next()
}

const passo2 =  (contexto, next) => {
    contexto.valor2 = `mid2`
    next()
}

const passo3 = contexto => contexto.valor3 = `mid3`

/* ... = operador rest(junta todas as funções em um array)
 * middlewares = array de passos(funçoes) a ser executados */ 
const exec = (contexto, ...middlewares) => {
    // executando de forma recursiva
    const execPasso = indice => {
        // se middlewares foi setado
        middlewares && 
        // e indice é menor que o tamanho da lista
        indice < middlewares.length && 
        middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)

const contexto2 = {}
exec(contexto2, passo2, passo1, passo3)
console.log(contexto2)

const contexto3 = {}
exec(contexto3, passo1, passo3)
console.log(contexto3)

/**Como o passo 3 não chama o next, então ele so executa o passo 3 */
const contexto4 = {}
exec(contexto4, passo3, passo2, passo1)
console.log(contexto4)