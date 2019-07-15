var https = require(`https`);
var fs = require(`fs`);
leituraAsync = require(`./leitura_async`);
leituraSync = require(`./leitura_sync`);
var arquivo = `./node-v10.16.0-x64.msi`;
var stream = fs.createWriteStream(arquivo);

var download = "https://nodejs.org/dist/v10.16.0/node-v10.16.0-x64.msi";

https.get(download, function(res){
    console.log(`Fazendo download do Node.js`);
    res.on(`end`, function(){
        console.log(`Download Finalizado!`)
        console.log(`Executando benchmark sync vs async...`);
        leituraAsync(arquivo);
        leituraSync(arquivo);
    });
});