exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          dish_id: 1,
          name: "American Cheeseburger",
          instructions:
            "Mold beef into a patty. Cook the patty. Put patty between buns, and top with onion rings, cheese, pickles, and any other condiment of choice."
        },
        {
          dish_id: 1,
          name: "Jalapeno Burger",
          instructions:
            "Mold beef into a patty. Cook the patty. Put patty between buns, and top with onion rings, cheese, jalapenos, and any other condiment of choice."
        },
        {
          dish_id: 1,
          name: "Veggie Burger",
          instructions:
            "Cook the black bean patty. Put patty between buns, and top with onion rings, cheese, jalapenos, pickles, and any other condiment of choice."
        },
        {
          dish_id: 2,
          name: "Chocolate Cake",
          instructions:
            "Mix all ingredients into a bowl and fold into a baking pan. Heat in over for 20 minutes at 340 degrees. Let cool and serve."
        },
        {
          dish_id: 2,
          name: "Red Velvet Cake",
          instructions:
            "Mix all ingredients into a bowl and fold into a baking pan. Heat in over for 20 minutes at 340 degrees. Let cool and serve."
        }
      ]);
    });
};
