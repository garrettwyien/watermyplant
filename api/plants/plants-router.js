const { json } = require('express');
const express = require('express');
const Plants = require('./plants-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Plants.get()
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