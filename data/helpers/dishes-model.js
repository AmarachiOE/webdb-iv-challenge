const db = require("../dbConfig");

module.exports = {
    getDishes,
    getDish,
    addDish
};


function getDishes() {
    return db('dishes');
};

function getDish(id) {
    return db('dishes');

};

function addDish(dish) {
    return db('dishes');

};