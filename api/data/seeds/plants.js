const plants = [
  {nickname: 'cactus nickname', species: 'cactus maractus', h2oFrequency: 1},
  {nickname: 'succulent nickname', species: 'succulent mucculent', h2oFrequency: 2},
  {nickname: 'fern nickname', species: 'fern mern', h2oFrequency: 3}
]



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert(plants);
    });
};
