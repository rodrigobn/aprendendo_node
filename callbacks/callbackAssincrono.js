// Exporta uma funçao de callback assincrona(fica aguardando resposta)
module.exports = function(callback){
    console.log(`Executando funçao assincrona`); // Vai ser retornado de imediato
    setTimeout(() => { // Vai ser executado depois de um tempo
        callback(`callback executado`, 123); //Vai ser retornado uma String e um numero separados
    }, 5000);    
}