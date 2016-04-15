exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('profiles', function(table){
      table.increments()
      table.string('name')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
};
