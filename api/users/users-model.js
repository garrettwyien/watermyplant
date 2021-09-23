const db = require('../data/db-config')

function find() {
    return db('users')
}

function findById(id){
    return db("users")
    .where("user_id", id)
    .first();
}

async function add(newUser){
    const [user] = await db("users")
    .insert(newUser, ['username', 'password', 'phoneNumber'])
    return user
}

function findBy(filter) {
    return db("users")
    .where(filter);
  }

module.exports ={
    find,
    findById,
    add,
    findBy,
};