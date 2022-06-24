const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

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

//Submit resource
router.post('/', async (req,res)=> {
    const product = new Product({
        article: req.body.article,
        couleur: req.body.couleur,
        image: req.body.image,
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
router.patch('/:id', async (req,res)=> {
    try {
        const id = req.params.id;
        const data = req.body;
        const options = { new: true };

        const dataUpdated = await Product.findByIdAndUpdate(
            id, data, options
        )
        res.send(dataUpdated);
    }catch(err){
        res.json({message:err.message});
    }
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