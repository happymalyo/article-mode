const express = require('express');
const router = express.Router();
const Client = require('../models/client.model');

//Retrieve all clients
router.get('/', async (req,res) => {
    try{
        const data = await Client.find();
        res.json(data);
    }catch(err){
        res.json({message:err.message});
    }
})

//Get One
//Get by ID Method
router.get('/:id', async (req, res) => {
    try{
        const data = await Client.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Submit resource
router.post('/', async(req, res) => {
    const client = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        ville: req.body.ville,
        telephone: req.body.telephone
    })
    try{
        const dataSaved = await client.save();
        res.json(dataSaved)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;