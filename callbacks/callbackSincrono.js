// Exporta uma funçao de callback sincrona(resposta imediata)
module.exports = function(callback){
    console.log(`Executando funçao sincrona`); // Vai ser retornado de imediato
    callback(`callback executado`, 123); //Vai ser retornado uma String e um numero separados
}