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

// =========== GET DISHES BY ID (including Recipe List)
dishesRouter.get("/:id", (req, res) => {
  const dishId = req.params.id;
  dishesDb
    .getDish(dishId)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({ error: "This dish could not be found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "This dish's information could not be retrieved." });
    });
});

// =========== ADD DISHES
dishesRouter.post("/", (req, res) => {
const dish = req.body;
if (!dish || !dish.name) {
  res.status(400).json({
    error: "You must include a dish with a name."
  });
} else {
  dishesDb
    .addDish(dish, "id")
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the dish to the database"
      });
    });
}
});


module.exports = dishesRouter;
