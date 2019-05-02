exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();

    tbl
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .string("name", 255)
      .notNullable()
      .unique();

    tbl.string("instructions").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
