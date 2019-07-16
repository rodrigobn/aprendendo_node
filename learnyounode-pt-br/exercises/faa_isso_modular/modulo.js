const fs = require(`fs`);
const path = require(`path`);

module.exports = function(diretorio, extencao, callback){
    var listaArquivos = [];
    
    if (diretorio != undefined && extencao != undefined) {
        fs.readdir(diretorio, function(err, list) {
            if (err) {
                return callback(err);
            }
            list.forEach(element => {
                if (path.extname(element) == extencao) {
                    listaArquivos.push(element);
                }       
            });
            if (qtdArquivo == 0) {
                    return callback(`Sem arquivos ` + extencao);            
            } else {
                return callback(qtdArquivo + ` arquivo(s) encontrado`);
            }
        });
    } else {
        if (diretorio == undefined) {
            return callback(`Diretorio não informado`)
        }
        if (extencao == undefined) {
            return callback(`Exteção não informada`)
        }
    }

    return callback(null, listaArquivos);
}