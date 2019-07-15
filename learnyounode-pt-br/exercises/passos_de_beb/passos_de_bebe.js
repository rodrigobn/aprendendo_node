const process = require(`process`);
let soma = 0;
for (let index = 2; index < process.argv.length; index++) {
    soma += Number(process.argv[index]);
    
}
console.log(soma);
