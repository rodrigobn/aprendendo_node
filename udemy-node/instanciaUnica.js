/**O node faz cache dos modulos. Este objeto tera uma instancia 
 * simples porque o node mantem as instancias como sendo singleton 
 * 
 * (Singleton é um (anti-)padrão de projeto de software 
 * (do inglês Design Pattern). Este padrão garante a 
 * existência de apenas uma instância de uma classe, 
 * mantendo um ponto global de acesso ao seu objeto.)
 * */ 
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}