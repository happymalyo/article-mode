const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

//Retrieve all products
router.get('/', async (req,res) => {
    try{
        const data = await Product.find();
        res.json(data);
    }catch(err){
        res.json({message: err.message});
    }
})

//Get One
//Get by ID Method
router.get('/:id', async (req, res) => {
    try{
        const data = await Product.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/images');
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
//Submit resource
router.post('/add', upload.single('image'),async (req, res) => {
    const product = new Product({
        article: req.body.article,
        couleur: req.body.couleur,
        image: req.file.filename,
        marque: req.body.marque,
        qualite: req.body.qualite,
        taille: req.body.taille,
        prix: req.body.prix,
        type: req.body.type
    });

    try{
        const dataSaved = await product.save();
        res.json(dataSaved);
    }catch(err){
        res.json({message : err.message});
    }
})

//Update resource
// router.patch('/update/:id', async (req,res)=> {
//     try {
//         const id = req.params.id;
//         const data = req.body;
//         const options = { new: true };

//         const dataUpdated = await Product.findByIdAndUpdate(
//             id, data, options
//         )
//         res.send(dataUpdated);
//     }catch(err){
//         res.json({message:err.message});
//     }
// })

router.post('/update/:id', upload.single('image'),async (req, res) =>{
    Product.findById(req.params.id)
        .then((product) => {
            product.article = req.body.article,
            product.couleur = req.body.couleur,
            product.image = req.file.filename,
            product.marque = req.body.marque,
            product.qualite = req.body.qualite,
            product.taille = req.body.taille,
            product.prix = req.body.prix,
            product.type = req.body.type

            product.save().then(() => {
                console.log('hey updated')
            }).catch((err) => {
                console.log(err)
            })
        })
        .catch(err => res.status(400).json('Error: '+err));
})


//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.send(`Document with ${data._id} has been deleted..`)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})



module.exports = router;