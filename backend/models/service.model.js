const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {type: String},
    categorie: {type: String},
    sous_categorie: {type: String},
    image: {type: String},
    description: {type: String},
    site_web: {type: String},
    phone: {type: String},
    ville:{type: String, default:"Fianarantsoa"},
    adresse: {type: String},
    email: {type: String, unique: true}
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;