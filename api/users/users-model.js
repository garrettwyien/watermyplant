const db = require('../data/db-config')

function find() {
    return db('users')
}

async function add(newUser){
    const [user] = await db('users')
        .insert(newUser, ['username', 'password', 'phoneNumber'])
    return user
}

module.exports ={
    find,
    // findBy,
    // add,
    // edit,
};