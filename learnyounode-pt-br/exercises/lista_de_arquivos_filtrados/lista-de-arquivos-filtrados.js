const fs = require(`fs`);
const path = require(`path`);
let diretorio = undefined;
let extencao = undefined;

if (process.argv.length > 2) {
    diretorio = process.argv[2];    
} 
if (process.argv.length > 3){
    extencao = `.` + process.argv[3];
}

if (diretorio != undefined && extencao != undefined) {
    fs.readdir(diretorio, function(err, list) {
        let qtdArquivo = 0;
        if (err) {
            return console.error(err);
        }
        list.forEach(element => {
            if (path.extname(element) == extencao) {
                qtdArquivo ++;
                console.log(path.extname(element));
            }       
        });
        if (qtdArquivo == 0) {
                console.log(`Sem arquivos ` + extencao);            
        } else {
            console.log(qtdArquivo + ` arquivo(s) encontrado`);
        }
    })
} else {
    if (diretorio == undefined) {
        console.error(`Diretorio não informado`)
    }
    if (extencao == undefined) {
        console.error(`Exteção não informada`)
    }
}
