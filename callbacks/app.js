const funcaoSincrona = require(`./callbackSincrono`);
const funcaoAssincrona = require(`./callbackAssincrono`);

console.log(`Começando a execuçao da funçao sincrona! \n`); 

funcaoSincrona(function(string, numero){
    console.log(string);
    numero += 10;
    console.log(numero);
});

console.log(`\nfim da funçao sincrona!\n`)
console.log(`----------------------------`)
console.log(`\nComeçando a execuçao da funçao Assincrona! \n`); 

funcaoAssincrona(function(string, numero){
    console.log(string);
    numero += 10;
    console.log(numero);
});

console.log(`\nAguardando resposta da funçao Assincrona!\n`)