const bcrypt = require('bcryptjs')

const users = 
  [
    {username: 'bradly', password: bcrypt.hashSync('password'),  phoneNumber: 1234567890},
    {username: 'garrett', password: bcrypt.hashSync('password'), phoneNumber: 1234567890},
    {username: 'nathan', password: bcrypt.hashSync('password'), phoneNumber: 1234567890},
    {username: 'peter', password: bcrypt.hashSync('password'), phoneNumber: 1234567890},
    {username: 'ryan', password: bcrypt.hashSync('password'), phoneNumber: 1234567890}
  
  ]


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
