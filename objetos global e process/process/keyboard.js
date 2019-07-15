exports.onReadable = function(callback){
    // Stream que representa o conjunto de bytes digitado no terminal
    process.stdin.on(`readable`, function(){
        var chunk =  process.stdin.read();
        console.log(chunk);
        // Transformando o codigo stream em string e eliminando o caractere quebra de linha atraves do replace
        if (chunk) callback(chunk.toString().replace(/\n/, ''));
    });
}

