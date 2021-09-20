const db = require('../data/db-config')

function get() {
    return db('users')
}

async function add(newUser){
    const [user] = await db('users')
        .insert(newUser, ['username', 'password', 'phoneNumber'])
    return user
}

module.exports ={
    get,
    // getBy,
    // add,
    // edit,
};