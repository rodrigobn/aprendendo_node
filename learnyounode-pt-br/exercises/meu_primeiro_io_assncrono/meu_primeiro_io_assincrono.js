const fs = require(`fs`);

var arquivo = process.argv[1];

fs.readFile(arquivo, `utf8`, function(err, conteudo){
    var linhas = conteudo.toString().split(`\n`).length - 1
    console.log(linhas);
});