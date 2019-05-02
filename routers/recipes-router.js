const recipesRouter = require("express").Router();
const recipesDb = require("../data/helpers/recipes-model");

// =========== GET RECIPES
recipesRouter.get("/", (req, res) => {
  recipesDb
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The Recipes information could not be retrieved." });
    });
});

// =========== ADD RECIPES
recipesRouter.post("/", (req, res) => {
  const recipe = req.body;
  if (!recipe || !recipe.name || !recipe.dish_id || !recipe.instructions) {
    res.status(400).json({
      error: "You must include a recipe with a dish_id, name, and instructions."
    });
  } else {
    recipesDb
      .addRecipe(recipe, "id")
      .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the recipe to the database"
        });
      });
  }
});

module.exports = recipesRouter;
