const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    categorie: {type: String, required: true},
    sous_categorie: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    site_web: {type: String, required: true},
    phone: {type: String, required: true},
    ville:{type: String, default:"Fianarantsoa"},
    adresse: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    titre_note: {type: String},
    contenus_note: {type: String}
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;