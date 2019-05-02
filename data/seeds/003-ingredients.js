exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {quantity: 1, name: "Pound Ground Beef (98% lean)" },
        {quantity: 1, name: "Package of Buns" },
        {quantity: 2, name: "Slices of Cheddar Cheese" },
        {quantity: 1, name: "Sliced Yellow Onion" },
        {quantity: 2, name: "Pickles" },
        {quantity: 2, name: "Jalapenos" },
        {quantity: 6, name: "Black Bean Patty" },
        {quantity: 3, name: "Cups of Flour" },
        {quantity: 2, name: "Eggs" },
        {quantity: 1, name: "Cup of Milk" },
        {quantity: 0.5, name: "Cups of Sugar" },
        {quantity: 2, name: "1lb Bags of Cocoa Powder" },
        {quantity: 2, name: "Drops of Red Food Coloring" }
      ]);
    });
};
