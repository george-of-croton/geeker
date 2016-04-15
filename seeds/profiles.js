
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('profiles').del(),

    // Inserts seed entries
    knex('profiles').insert({name: 'geordie-boi'}),
    knex('profiles').insert({name: 'scully'}),
    knex('profiles').insert({name: 'tony'}),
    knex('profiles').insert({name: 'ollie'}),
    knex('profiles').insert({name: 'vicken'}),
    knex('profiles').insert({name: 'lizzie'}),
    knex('profiles').insert({name: 'maxine'})

  );
};
