const db = require('../data/db-config')

function find() {
    return db('users')
}

function findById(id){
    return db("users")
    .where({ id })
    .first();
}

async function add(newUser){
    const [user_id] = await db("users")
    .insert(newUser);
    return findById(user_id)
}

module.exports ={
    find,
    findById,
    add,
    // edit,
};