// Trabalhando com entradas, saidas e erros(I/O e err)
// codigo para mostrar o que tem dentro do console.log()

var konsole = {
    loge: function (msg) {
        process.stdout.write(msg + `\n`);
    }
};
konsole.loge('A');