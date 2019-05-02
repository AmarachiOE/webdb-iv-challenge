const db = require("../dbConfig");

module.exports = {
  getRecipes,
  addRecipe
};

// ====== getRecipes() should return a list of all recipes in the database including the dish they belong to.
function getRecipes() {
  return db("recipes");
}

// ====== addRecipe(recipe) should add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
