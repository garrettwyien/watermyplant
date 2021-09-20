const express = require('express');
const Plants = require('./plants-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Plants.find()
    .then(plants=>{
        res.json(plants)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Plants.findById(req.params.id)
    .then(plants=>{
        res.json(plants)
    })
    .catch(next)
})


router.delete('/:plant_id', (req,res,next) =>{
    Plants.del(req.params.plant_id)
    .then(obj=>{
        res.json(obj)
    })
    .catch(next)
})

module.exports = router;