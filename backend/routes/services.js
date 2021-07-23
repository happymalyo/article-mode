const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
    Service.find()
        .then(services => res.json(services))
        .catch(err => res.status(400).json('Error: '+err));
});

//Get one Service
router.route('/:id').get((req, res) => {
    Service.findById(req.params.id)
        .then((service) => res.json(service))
        .catch(err => res.status(400).json('Error: '+err));
});

//Delete
router.route('/:id').delete((req, res) => {
    Service.findByIdAndDelete(req.params.id)
        .then(() => res.json('Service deleted'))
        .catch(err => res.status(400).json('Error: '+err));
});

//Update
router.route('/update/:id').post((req, res) => {
    Service.findById(req.params.id)
        .then((service) => {
            service.categorie = req.body.categorie;
            service.sous_categorie = req.body.sous_categorie;
            service.image = req.body.image;
            service.description = req.body.description;
            service.site_web = req.body.site_web;
            service.phone = req.body.phone;
            service.ville = req.body.ville;
            service.adresse = req.body.adresse;
            service.email = req.body.email;

            service.save()
            .then(() => res.json('Service updated'))
            .catch(err => res.status().json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
            const categorie = req.body.categorie;
            const sous_categorie = req.body.sous_categorie;
            const image = req.body.image;
            const description = req.body.description;
            const site_web = req.body.site_web;
            const phone = req.body.phone;
            const email = req.body.email;
            const ville = req.body.ville;
            const adresse = req.body.adresse;
    
    const newService = new Service(
        {
            categorie,
            sous_categorie,
            image,
            description,
            site_web,
            phone,
            email,
            ville,
            adresse
        }
    );

    newService.save()
        .then(() => res.json('Service added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
