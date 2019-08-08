const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        //com o await a proxima linha so é executada se houver mais dados do metodo find()
        const products = await Product.find(); //Sem parametros = encontrar todos

        return res.json(products) //retorna uma estrutura JSON
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product);
    },

    async destroy(req, res) {
        const product = await Product.findByIdAndDelete(req.params.id)

        return res.send();
    },

    async store(req, res) {
        //req.body contem todos os dados vindo da requisição
        const product = await Product.create(req.body); 

        return res.json(product); //retorna o produto q foi criado acima
    }
};