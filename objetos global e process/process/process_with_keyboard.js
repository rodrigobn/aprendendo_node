// exige o codigo de help.js para ser utilizado 
var help = require(`./help`);
var keyboard = require(`./keyboard`);

keyboard.onReadable(function (option){
    console.log(option);
    console.log(option.length);
    // pega o q foi digitado e atribuido a variavel options na linha de comando e verifica os casos.    
    switch(option) {
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
            console.log(process.env);
            break;
        case`m`:
            console.log(process.memoryUsage());
            break
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
});

process.on(`exit`, function(){
    console.log(`bye`);
});

process.on(`uncaughtExteption`, function(){
    console.log(`error`);
});

a.b();