const Plants = require('./plants-model');

function validatePayload(req,res,next){
    const { nickname, species, h2oFrequency } = req.body;
    if (!nickname || !species || !h2oFrequency) {
        next({status:422,message:'nickname, species, and watering frequency are required'})
    } else {
        next()
    }
};

async function checkSpeciesFree(req, res, next) {
    try {
        const speciesFree = await Plants.findBy({ species: req.body.species})
        if (!speciesFree.length) {
        next()
        } else {
        next({ status: 422, message: 'species already exists'})
        }
    } catch (err) {
    next(err)
}}

function validateEdit(req,res,next){
    const { nickname, species, h2oFrequency, image } = req.body;
    if (!nickname && !species && !h2oFrequency && !image) {
        next({status:422,message:'a change is required to submit an edit'})
    } else {
        next()
    }
};


module.exports = {
    validatePayload,
    checkSpeciesFree,
    validateEdit
};