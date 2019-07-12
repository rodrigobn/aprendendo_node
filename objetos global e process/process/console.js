// Trabalhando com entrada, saída e saída de erro(I/O e err)

/* codigo para mostrar o que tem dentro do console.log() 
no terminal usado para tratamento de saida, entrada ou erro
*/
var konsole = {
    log: function (msg) {
        process.stdout.write(msg + `\n`); // usando stdout para mostrar na linha de comando
    },
    error: function (msg) {
        process.stderr.write(msg + `\n`);
    }
};
/* Verifica se o comando veio digitado no terminal ou 
veio de um arquivo */
konsole.log('A TTY: ' + !!process.stdout.isTTY); 
konsole.error(`B TTY: ` + !!process.stderr.isTTY)