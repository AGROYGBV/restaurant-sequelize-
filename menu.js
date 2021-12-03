// CREATE TABLE menu (id INTEGER PRIMARY KEY,
//     menu_item_name TEXT,
//     menu_item_id INT,
//     FOREIGN KEY (menu_item_id) REFERENCES menu_item(id),
//     FOREIGN KEY (menu_item_name) REFERENCES menu_item(name)
//     );

const {sequelize, DataTypes, Model} = require('./db');

/**
 * Represents a Restaurant
 */
class Menu extends Model {
    // add methods here
}
Menu.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
}); 

module.exports = {
    Menu
};