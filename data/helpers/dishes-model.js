const db = require("../dbConfig");

module.exports = {
  getDishes,
  getDish,
  getDish2,
  addDish
};

// ====== getDishes() should return a list of all dishes in the database.
function getDishes() {
  return db("dishes");
}

// ====== getDish(id) should return the dish with the provided id and include a list of the related recipes.
function getDish(id) {
  return db("dishes")
    .leftJoin("recipes", "recipes.dish_id", "dishes.id")
    .select(
      "dishes.name as Dish",
      "dishes.id",
      "recipes.name as Recipe",
      "recipes.instructions"
    )
    .where({ "dishes.id": Number(id) });

  //   return db("dishes")
  //     .select("dishes.name as Dish", "*")
  //     .where({ "dishes.id": Number(id) })
  //     .leftJoin("recipes", "dishes.id", "recipes.dish_id");
}

// ====== getDish2(id) should return the dish without recipes
function getDish2(id) {
  return db("dishes as d")
    .where({ id: Number(id) })
    .first();
}
// ====== addDish(id) should add the dish to the database and return the id of the new dish.
function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}
