const {sequelize} = require('./db')
// const {Restaurant} = require('./restaurant')
// const { Menu } = require('./menu')
// const { Menu_item } = require('./menu_item')
const {Restaurant, Menu, Menu_item } = require("./associations")


const arrayOfRestaurants = [
    ({ name: 'Ronalds', image: 'http://some.image.url', location: '123 Main St', open_time: 6, close_time: 2400, rating: 3 }),
    ({ name: 'Ravens', image: 'http://Ravens.url', location: '319 Pearl St', open_time: 6, close_time: 1400, rating: 5 }),
    ({ name: 'Martins', image: 'http://Martins.url', location: '522 Tech ln', open_time: 11, close_time: 2000, rating: 4.5 }),
    ({ name: 'Amandas', image: 'http://Amandas.url', location: '645 Lovely Rd', open_time: 1400, close_time: 2300, rating: 5 })
]

const seedMenu = [
  {
    name: 'Breakfast',
    RestaurantId: 1
  },
  {
    name: 'Lunch',
    RestaurantId: 2
  },
  {
    name: 'Dinner',
    RestaurantId: 3
  },
  {
    name: 'Dessert',
    RestaurantId: 4
  }
]

const arrayOfMenuItems = [
    ({ name: 'oatmeal', image: 'http://oatmeal.url', ingredients: 'steel-cut oats, cranberries, ginger, honey', allergins: 'CONTAINS: HONEY; gluten-free, vegetarian, nut-free', calories: 160, price: 6, menuId: 1 }),
    ({ name: 'grain bowl', image: 'http://grain-bowl.url', ingredients: 'quinoa, asparagus, swiss chard, chickpeas', allergins: 'gluten-free, vegan, nut-free', calories: 550, price: 8, menuId: 2 }),
    ({ name: 'vegan cheesecake', image: 'http://cheesecake.url', ingredients: 'walnuts, cashews, raspberries, agave, coconut milk, coconut oil', allergins: 'CONTAINS: NUTS; gluten-free, vegan', calories: 324, price: 6, menuId: 4 }),
    ({ name: 'nachos', image: 'http://nachos.url', ingredients: 'tortilla chips, black beans, cheddar cheese, jalepenos, sour cream', allergins: 'CONTAINS: DAIRY; gluten-free', calories: 800, price: 10, menuId: 2 }),
    ({ name: 'pickle sandwhich', image: 'http://pickle-sandwhich.url', ingredients: 'sourdough bread, mayo, house fermentend pickles', allergins: 'CONTAINS: GLUTEN, EGGS; vegetarian', calories: 210, price: 3, menuId: 2 }),
    ({ name: 'samosas', image: 'http://samosas.url', ingredients: 'flour, olive oil, spiced potatoes, onions, peas, lentils', allergins: 'CONTAINS: GLUTEN; vegan', calories: 262, price: 7, menuId: 3 }),
    ({ name: 'greek salad', image: 'http://greek-salad.url', ingredients: 'spring lettuce, olives, tomatos, green bell pepper, feta, olive oil and balsamic vinegar', allergins: 'CONTAINS: DAIRY; vegetarian', calories: 400, price: 8, menuId: 3 })
]

const seed = async () => {
    try {
        await sequelize.sync({force: true})
        await Restaurant.bulkCreate(arrayOfRestaurants, {validate: true})
        await Menu.bulkCreate(seedMenu, {validate: true})
        await Menu_item.bulkCreate(arrayOfMenuItems, {validate:true})
        console.log('seeding success!')
        sequelize.close()
    } catch (error) {
        console.log('SOMETHING WENT WRONG WITH SEEDING: ', error)
    }
}

seed()
    .then(() => {
        console.log('seeding success!')
    })
    .catch(err => {
        console.error('oh no! Something went wrong!')
        console.log(err)
    })