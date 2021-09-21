const Plants = require('./plants-model');

function validatePayload(req,res,next){
    const { nickname, species, h2oFrequency } = req.body;
    if (!nickname || !species || !h2oFrequency) {
        next({status:422,message:'nickname, species, and watering frequency are required'})
    } else {
        next()
    }
};

module.exports = {
    validatePayload
};