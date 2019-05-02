
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Burgers'},
        {name: 'Cakes'},
        {name: 'Pastas'},
        {name: 'Salads'},
        {name: 'Grilled Chicken'},
        {name: 'Omelettes'}
      ]);
    });
};
