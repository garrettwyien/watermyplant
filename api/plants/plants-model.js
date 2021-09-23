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

function findBy(filter) {
    return db("plants")
    .where(filter);
  }


async function add(newPlant){
    const [plant_id] = await db("plants")
        .insert(newPlant);
    return plant_id
}

async function edit(plant_id, changes) {
    const editedPlants = await db('plants')
    .where('plant_id', plant_id)
    .update(changes)
    .first();
    return editedPlants
}



module.exports ={
    find,
    findById,
    add,
    findBy,
    del,
    edit
};