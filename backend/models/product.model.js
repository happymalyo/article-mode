const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const ProductSchema = Schema({
    article: {
        type: String,
        required: true
    },
    couleur:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true
    },
    qualite: {
        type: String,
        required: true
    },
    taille: {
        type: String,
        required: true
    },
    prix:  {
        type: String,
        required: true
    },
    type:  {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);