module.exports = function(...nomes) {
    /**Transforma numa lista o que foi passado no parametro
     * Para cada parametro => faça isso */ 
    return nomes.map(nome => `Boa semana ${nome}`)
}