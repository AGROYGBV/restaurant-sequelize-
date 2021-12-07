const {sequelize, DataTypes, Model} = require('./db');

/**
 * Represents a Restaurant
 */
class Restaurant extends Model {

    // add methods here
    getHoursOfOperation() {
        return [this.open_time, this.close_time].join(' - ');
      }

}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    open_time: DataTypes.TIME,
    close_time:DataTypes.TIME,
    rating: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false,
}); 



module.exports = {
    Restaurant
};

// CREATE TABLE restaurant (id INTEGER PRIMARY KEY,
//     name TEXT,
//     address TEXT,
//     hours TEXT,
//     rating INT,
//     menu_id INT,
//     ticket_id INT,
//     FOREIGN KEY (menu_id) REFERENCES menu(id),
//     FOREIGN KEY (ticket_id) REFERENCES ticket_item(id)
//     );

