const fs = require(`fs`);
const path = require(`path`);

module.exports = function(diretorio, extencao, callback){
    var listaArquivos = [];
    var qtdArquivo = 0;
    
    if (diretorio != undefined && extencao != undefined) {
        fs.readdir(diretorio, function(err, list) {
            if (err) {
                return callback(err);
            }
            list.forEach(element => {
                if (path.extname(element) == extencao) {
                    listaArquivos.push(element);
                    qtdArquivo ++;                  
                }       
            });
            if (qtdArquivo == 0) {
                    return callback(null, `Sem arquivos ` + extencao, listaArquivos);            
            } else {
                return callback(null, qtdArquivo + ` arquivo(s) encontrado(s) `, listaArquivos);
            }
        });
    } else {
        if (diretorio == undefined) {
            return callback(`Diretorio não informado`, null)
        }
        if (extencao == undefined) {
            return callback(`Exteção não informada`, null)
        }
    }
 }