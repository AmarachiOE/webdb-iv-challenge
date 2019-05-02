const db = require("../dbConfig");

module.exports = {
  getDishes,
  getDish,
  addDish
};

// ====== getDishes() should return a list of all dishes in the database.
function getDishes() {
  return db("dishes");
}

// ====== getDish(id) should return the dish with the provided id and include a list of the related recipes.
function getDish(id) {
  return db("dishes as d")
    .join("recipes as r", "r.dish_id", "d.id")
    .select("d.id", "d.name as Dish", "r.name as Recipe")
    .where({ id: Number(id) });
}
// ====== addDish(id) should add the dish to the database and return the id of the new dish.
function addDish(dish) {
  return db("dishes")
  .insert(dish)
  .then(ids => ({ id: ids[0] }));
}
