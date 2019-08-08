const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, //Significa que é obrigatorio
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Significa que será o padrão, automatico
    },

});

mongoose.model('Product', ProductSchema);