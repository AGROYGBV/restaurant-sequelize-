const express = require('express')
const path = require('path')
const { Restaurant } = require('./restaurant')
const { Menu } = require('./menu')
const { Menu_item } = require('./menu_item')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// flipcoin path
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1) coinflip = 'Heads'
    else coinflip = 'Tails'
    res.send(coinflip)
})

//restaurant & restaurant params paths
app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.findAll()
    res.json(allRestaurants)
})
app.get('/restaurants/:id', async (req, res) => {
    const thisRestaurant = await Restaurant.findByPk(req.params.id)
    res.json(thisRestaurant)
})
app.get('/restaurant-name/:name', async (req, res) => {
    const thisRestaurant = await Restaurant.findOne({where:{name: req.params.name}})
    res.json(thisRestaurant)
})

//menus & menus params paths
app.get('/menus', async (req, res) => {
    const allMenus = await Menu.findAll()
    res.json(allMenus)
})
app.get('/menus/:id', async (req, res) => {
    const thisMenu = await Menu.findByPk(req.params.id)
    res.json(thisMenu)
})
app.get('/menu-name/:name', async (req, res) => {
    const thisMenu = await Menu.findOne({where:{name: req.params.name}})
    res.json(thisMenu)
})

//menu items and menu item params paths
app.get('/menu_items', async (req, res) => {
    const allMenu_items = await Menu_item.findAll()
    res.json(allMenu_items)
})
app.get('/menu_items/:id', async (req, res) => {
    const thisMenu_item = await Menu_item.findByPk(req.params.id)
    res.json(thisMenu_item)
})
pp.get('/menu_items-name/:name', async (req, res) => {
    const thisMenu_item = await Menu_item.findOne({where:{name: req.params.name}})
    res.json(thisMenu_item)
})

//listener
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})