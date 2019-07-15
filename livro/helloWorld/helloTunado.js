var servidorWeb = require(`http`); //modulo ativar um servidor HTTP
var fs = require(`fs`); //Modulo File System(sistema de arquivos)

servidorWeb.createServer(function (req, res){
    var name = require(`url`).parse(req.url, true).query.name;
    if (name === undefined) name = `world`; //Verifica se tem algo atribuido a variavel name
    if (name == `burningbird`) {
        var file = `phoenix5a.png`;
        // Verifica se o arquivo existe e devolve um objeto com informações sobre o arquivo, usado para criar o cabeçalho
        fs.stat(file, function (err, stat) {
            // Se o arquivo não existir 
            if (err) {
                console.error(err);
                res.writeHead(200, {"Content-Type": `text/plain`});
                res.end(`Sorry, Burningbird isn't around right now \n`)
            }else {
                // Se existe sera lida e atribuida a variavel img
                var img = fs.readFileSync(file);
                res.contentType = `image/png`;
                res.contentLength = stat.size;
                res.end(img, `binary`)
            }
        });        
    } else {
        res.writeHead(200, {'Content-Type': `text/plain`});
        res.end(`Hello ` + name + `\n`)
    }
}).listen(8124);

console.log(`Server running at port 8124/`);