const {sequelize} = require('./db');
const {Restaurant} = require('./restaurant')
const {Menu} = require('./menu')
const {Menu_item} = require('./menu_item')
const {}

describe('Restaurant Database', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });

        const arrayOfRestaurants = [
            ({ name: 'Ronalds', image: 'http://some.image.url', location: '123 Main St', open_time: 6, close_time: 2400, rating: 3 }),
            ({ name: 'Ravens', image: 'http://Ravens.url', location: '319 Pearl St', open_time: 6, close_time: 1400, rating: 5 }),
            ({ name: 'Martins', image: 'http://Martins.url', location: '522 Tech ln', open_time: 11, close_time: 2000, rating: 4.5 }),
            ({ name: 'Amandas', image: 'http://Amandas.url', location: '645 Lovely Rd', open_time: 1400, close_time: 2300, rating: 5 })
        ]

        const arrayOfMenuItems = [
            ({ name: 'oatmeal', image: 'http://oatmeal.url', ingredients: 'steel-cut oats, cranberries, ginger, honey', allergins: 'CONTAINS: HONEY; gluten-free, vegetarian, nut-free', calories: 160, price: 6 }),
            ({ name: 'grain bowl', image: 'http://grain-bowl.url', ingredients: 'quinoa, asparagus, swiss chard, chickpeas', allergins: 'gluten-free, vegan, nut-free', calories: 550, price: 8 }),
            ({ name: 'vegan cheesecake', image: 'http://cheesecake.url', ingredients: 'walnuts, cashews, raspberries, agave, coconut milk, coconut oil', allergins: 'CONTAINS: NUTS; gluten-free, vegan', calories: 324, price: 6 }),
            ({ name: 'nachos', image: 'http://nachos.url', ingredients: 'tortilla chips, black beans, cheddar cheese, jalepenos, sour cream', allergins: 'CONTAINS: DAIRY; gluten-free', calories: 800, price: 10 }),
            ({ name: 'pickle sandwhich', image: 'http://pickle-sandwhich.url', ingredients: 'sourdough bread, mayo, house fermentend pickles', allergins: 'CONTAINS: GLUTEN, EGGS; vegetarian', calories: 210, price: 3 }),
            ({ name: 'samosas', image: 'http://samosas.url', ingredients: 'flour, olive oil, spiced potatoes, onions, peas, lentils', allergins: 'CONTAINS: GLUTEN; vegan', calories: 262, price: 7 }),
            ({ name: 'greek salad', image: 'http://greek-salad.url', ingredients: 'spring lettuce, olives, tomatos, green bell pepper, feta, olive oil and balsamic vinegar', allergins: 'CONTAINS: DAIRY; vegetarian', calories: 400, price: 8 })
        ]

        await Restaurant.bulkCreate(arrayOfRestaurants);
        await Menu_item.bulkCreate(arrayOfMenuItems);
        // const menu =  Menu.create({ name: 'Breakfast', image: 'http://some.image1.url' })
        // const menu_item = Menu_item.create({ name: 'oatmeal', image: 'http://some.image2.url' })
        //await Restaurant.create(restaurant)
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.findOne({where: {name: 'Ronalds'}});
        expect(restaurant.id).toBe(1)
    })

    test('restaurant has name', async () => {
        const restaurant2 = await Restaurant.findOne({where: {name: 'Ravens'}});
        expect(restaurant2.name).toBe('Ravens')
    })

    test('restaurant has start time', async () => {
        const restaurant3 = await Restaurant.findOne({where: {name: 'Martins'}});
        expect(restaurant3.open_time).toEqual(11)
    })

    test('restaurant has rating', async () => {
        const restaurant3 = await Restaurant.findOne({where: {name: 'Martins'}});
        expect(restaurant3.rating).toEqual(4.5)
    })

    test('restaurant has location', async () => {
        const restaurant4 = await Restaurant.findOne({where: {name: 'Amandas'}});
        expect(restaurant4.location).toBe('645 Lovely Rd')
    })


    test('can create a menu', async () => {
        expect(menu.id).toBe(1)
    })

    test('can create a menu item', async () => {
        const menu_item = await Menu_item.findOne({where: {name: 'oatmeal'}})
        expect(menu_item.id).toBe(1)
    })
})