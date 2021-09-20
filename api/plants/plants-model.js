const db = require('../data/db-config');

function get(){
    return db("plants")
    .select('plants.nickname', 'plants.species', 'plants.h2oFrequency');
}

function getById(plant_id){
    return db("plants")
    .where({ plant_id })
    .first();
}

const del = async plant_id => {
    const removeObj = await getById(plant_id);
    await db('plants')
      .where('plant_id', plant_id)
      .del()
    return removeObj;
  }

module.exports ={
    get,
    getById,
    // add,
    // edit,
    del
};