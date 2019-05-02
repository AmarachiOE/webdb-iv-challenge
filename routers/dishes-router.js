const dishesRouter = require("express").Router();
const dishesDb = require("../data/helpers/dishes-model");

// =========== GET DISHES
dishesRouter.get("/", (req, res) => {
  dishesDb
    .getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The dishes information could not be retrieved." });
    });
});

// =========== GET DISHES BY ID

// =========== ADD DISHES



module.exports = dishesRouter;