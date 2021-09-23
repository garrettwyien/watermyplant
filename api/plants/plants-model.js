const db = require('../data/db-config');

function find(){
    return db("plants");
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
    const [plant] = await db("plants")
    .insert(newPlant, ['nickname', 'species', 'h2oFrequency', 'image'])
    return plant
}

async function edit(plant_id, changes) {
    await db('plants')
    .where('plant_id', plant_id)
    .update(changes)
    return findById(plant_id)
}



module.exports ={
    find,
    findById,
    add,
    findBy,
    del,
    edit
};