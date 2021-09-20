exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.integer('phoneNumber').notNullable()
    })
    .createTable('plants', (plants)=>{
      plants.increments('plant_id')
      plants.string('nickname', 200).notNullable()
      plants.string('species', 200)
      //h20frequency by week
      plants.integer('h2oFrequency').notNullable()
      plants.string('image', 200)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('plants')
}
