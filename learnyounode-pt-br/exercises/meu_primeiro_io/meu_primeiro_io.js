// operação de sistema de arquivos (filesystem)
const fs = require(`fs`);

var arquivoBuffer = fs.readFileSync(`./meu_primeiro_io.js`);

console.log(arquivoBuffer.toString().split('\n').length)