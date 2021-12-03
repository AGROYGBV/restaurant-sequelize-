const {sequelize, DataTypes, Model} = require('./db')

const { Menu } = require('./menu')
const { Menu_item } = require('./menu_item')
const { Restaurant } = require('./restaurant')

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

Menu_item.belongsTo(Menu);
Menu.hasMany(Menu_item);


module.exports = {Menu, Menu_item, Restaurant, sequelize}