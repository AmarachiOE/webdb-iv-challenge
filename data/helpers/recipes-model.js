const db = require("../dbConfig");

module.exports = {
    getRecipes,
    addRecipe
};

function getRecipes() {
    return db('recipes');
};

function addRecipe(recipe) {
    return db('recipes');
};