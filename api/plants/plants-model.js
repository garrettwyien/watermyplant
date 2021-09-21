const db = require('../data/db-config');

function find(){
    return db("plants")
    .select('plants.nickname', 'plants.species', 'plants.h2oFrequency');
}

function findById(plant_id){
    return db("plants")
    .where({ plant_id })
    .first();
}

const del = async plant_id => {
    const removeObj = await findById(plant_id);
    await db('plants')
      .where('plant_id', plant_id)
      .del()
    return removeObj;
  }

async function add(newPlant){
    const [plant_id] = await db("plants")
        .insert(newPlant);
    return findById(plant_id)
}
module.exports ={
    find,
    findById,
    add,
    // edit,
    del
};