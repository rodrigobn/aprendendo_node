const meuModulo = require(`./modulo`);

let diretorio = undefined;
let extencao = undefined;

if (process.argv.length > 2) {
    diretorio = process.argv[2];   
} 
if (process.argv.length > 3){
    extencao = `.` + process.argv[3];
}

meuModulo(diretorio, extencao, function(err, res, list){
    if (err != null) {
        console.log(err);
    } else {
        console.log(res);
        console.log(list);
    }
    
})