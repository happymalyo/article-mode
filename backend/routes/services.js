const router = require('express').Router();
let Service = require('../models/service.model');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');


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
            service.title = req.body.title;
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

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/img');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('image'),async (req, res) => {
    
    const service = new Service({
       title : req.body.title,
       categorie : req.body.categorie,
       sous_categorie : req.body.sous_categorie,
       image : req.file.filename,
       description : req.body.description,
       site_web : req.body.site_web,
       phone : req.body.phone,
       email : req.body.email,
       ville : req.body.ville,
       adresse : req.body.adresse
    });

    try{
        const serviceSaved = await service.save();
        res.json("Service added"); 
    }catch(err){
        res.json({message : err});
    }
});

module.exports = router;
