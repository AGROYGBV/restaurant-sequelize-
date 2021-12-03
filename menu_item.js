// CREATE TABLE menu_item (id INTEGER PRIMARY KEY,
//     name TEXT,
//     ingredients TEXT,
//     allergins TEXT,
//     calories INT,
//     price INT,
//     ticket_id INT,
//     FOREIGN KEY (ticket_id) REFERENCES ticket(id)
//     );

const {sequelize, DataTypes, Model} = require('./db');

/**
 * Represents a Restaurant
 */
class Menu_item extends Model {

    // add methods here

}
Menu_item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    allergins: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
}); 

module.exports = {
    Menu_item
};