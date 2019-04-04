
exports.seed = function(knex, Promise) {
      return knex('dishes').insert([
        {name: 'Ackee and Salt Fish'},
        {name: 'Jerk Chicken'},
        {name: 'Conch Salad'}
      ]);
};
