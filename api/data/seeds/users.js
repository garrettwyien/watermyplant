const users = 
  [
    {username: 'bradly', password: 'password', phoneNumber: 1234567890},
    {username: 'garrett', password: 'password', phoneNumber: 1234567890},
    {username: 'nathan', password: 'password', phoneNumber: 1234567890},
    {username: 'peter', password: 'password', phoneNumber: 1234567890},
    {username: 'ryan', password: 'password', phoneNumber: 1234567890}
  
  ]


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
