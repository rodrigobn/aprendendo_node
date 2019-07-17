const url = `http://files.cod3r.com.br/curso-js/funcionarios.json`
const axios = require(`axios`)

/**Funçao faz retornar true se for igual a China para ser 
 * passada mais adiante numa funçao de fiiltragem(filter) e
 * retornar todos os funcionarios da china
 * */ 
const chineses = f => f.pais === `China`
const mulheres = f => f.genero === `F`

/**Funçao para ser usado no metodo reduce(resgatar) 
 * com dois parametros: um acumulador e um elemento atual
 * O acumulador vai ser um funcionario para no final retornar-lo
 * */
const menorSalario = (func, funcAtual) => {
    /**Se um funcionario tiver o salariomenor do que o atual
     * retorna o novo funcionario, se nao retorna o atual com 
     * o menor salario*/ 
    return func.salario < funcAtual.salario ? func : funcAtual
}

/* 
Faz uma requisição a url usando get e uma funçao pegando 
os dados e atribuindo a uma resposta 
*/ 
axios.get(url).then(response => {
    // Pera os dados da resposta da aquisiçao
    const funcionarios = response.data 

    /**Filta a lista entre morar na china, mulheres e menor salario */
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})
