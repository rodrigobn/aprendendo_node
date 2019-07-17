/**this é um objeto que aponta para 
 * module.exports e nao global */ 
console.log(this === global)

/**this é um objeto que aponta para 
 * module.exports e nao module */
console.log(this === module)

console.log(this === module.exports)

/**this dentro de uma função nao aponta
 * para exports nem para module.exports,
 * mas aponta para global
*/
console.log(this === exports)
function logThis(){
    console.log(`Dentro de uma função...`)
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)
    
    this.perigo = `...`
}

logThis()