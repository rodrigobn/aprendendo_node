/**Schema = quais os campos que um produto pode ter e 
 * que tipos de valores os campos vão salvar */

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

/**Objeto como parametro com os campos que vai salvar no banco de dados para cada produto*/
const ProductSchema = new mongoose.Schema({
    title: { // primeiro campo
        type: String, //Tipo
        require: true, // obrigatorio
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        required: true
    },
    creatdAt: { // esta coluna salva uma data de criação de cada produto
        type: Date,
        default: Date.now, // Se preenche automaticamente com o valor da data atual que o registro for criado no banco
    },
 });

 ProductSchema.plugin(mongoosePaginate);

/**Codigo pra registrar um model na aplicação. A aplicação vai saber
 * que existe um model Product e um Schema(propriedades ou colunas) 
 * desse produto na base de dados
*/
mongoose.model('Product', ProductSchema);