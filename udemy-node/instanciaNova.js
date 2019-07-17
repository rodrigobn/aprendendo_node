/**Uma factory retorna um novo objeto(nova instancia)
*/

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}