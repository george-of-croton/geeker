
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('profiles').del(),

    // Inserts seed entries
    knex('profiles').insert({name: 'geordie-boi'})
  );
};
