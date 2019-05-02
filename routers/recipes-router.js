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


module.exports = recipesRouter;