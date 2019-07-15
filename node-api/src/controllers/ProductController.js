/**No modelo MVC o controller vai cuidar da parte da 
 * logica do sistema */

/**Este arquivo vai lidar com as operações que pode ter neste modulo
 * Exemplo: listagem, criação, atualização, remoção, ...
*/

// Para lidar com o banco de dados Mongodb
const mongoose = require('mongoose');

// Importando o model de Product
const Product = mongoose.model('Product');

// Exportando um objeto com algumas funções
module.exports = {
    // Listando todos os dados(registros) de Produtos na base de dados
    async index(req, res) {
        /**query sao utilizados para parametros get, nesse caso pegando 
         * o parametro page que esta vindo atravez do get 
         * exemplo(site/pagina?page=2)
         * valor padrão = 1*/
        const { page = 1 } = req.query; 
        
        // await = so executa a proxima lina se for encontrada
        // paginate = retorna a quantidade de paginas e dados na base de dados
        const products = await Product.paginate({}, { page, limit: 10 });

        // Retorna em uma estrutura json(estrutura muito utilizada em api rest, é facil de ler e alterar dados)
        return res.json(products)
    },

    // Mostrar um elemento da base de dados atravez do id
    async show(req, res) {
        /**O id vira na requisição como um parametro da rota passada
         * no arquivo de rotas
         */
        const product = await Product.findById(req.params.id);

        return res.json(product)
    },

    // Criação de um novo produto
    async store(req, res) {
        /**O req contem todos dos dados da requisição e o corpo é um 
         * dos dados que vem atravez do metodo post na rota vindo do 
         * arquivo de rotas. Os dados vem no formato json sendo passado 
         * pelo programa insomnia*/ 
        const product = await Product.create(req.body);
        
        // Retorna o produto que acabou de ser criado na base de dados
        return res.json(product); 
    },

    // Atualiza um elemento da base de dados identificado pelo id
    async update(req, res) {
        /**Pega o elemento referente ao id passado e atualiza com os 
         * dados passado atravez do corpo do quererimento.
         * O objeto passado como parametro {new:true} faz com que o 
         * mongoose retorne o produto atualizado para a variavel product. 
         * Se não for passado o metodo vai retornar o produto antes dele 
         * ser atualizado*/ 
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }


};