/*
// itera na lista dos comandos passado na linha de comando
process.argv.forEach(function(value){
    console.log(value);// Mostra o que foi digitado na linha de comando
});
*/

// exige o codigo de help.js para ser utilizado 
var help = require(`./help`)

// Slice = metodo para pegar de um ponto para frente na lista
var options = process.argv.slice(2);
console.log(options);
// Se o que vem da linha de comando for undefined ou vazio, então não retorna nada e encerra
if (options.length < 1){
    help.showOptions(); //Roda o metodo criado no outro arquivo
    return
};

// pega o q foi digitado e atribuido a variavel options na linha de comando e verifica os casos.
switch(options[0]) {
    case`a`:
        console.log(`pid: ` + process.pid);
        break;
    case`b`:
        console.log(`title: ` + process.title);
        break;
    case`c`:
        console.log(`arch: ` + process.arch);
        break;
    case`d`:
        console.log(`platform: ` + process.platform);
        break;
    case`e`:
        console.dir(process.env);
        break;
    case`m`:
        console.log(process.memoryUsage());
        break;
    case`u`:
        console.log(`uptime: ` + process.uptime());
        break;
    case`v`:
        console.dir(process.versions);
        break;
    case `q`:
        process.exit();
    default:
        help.showOptions();
}

process.on(`exit`, function(){
    console.log(`bye`);
});

process.on(`uncaughtException`, function(){
    console.log(`error`);
});

a.b();