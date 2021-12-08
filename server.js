const express = require('express')
const path = require('path')
const { Restaurant } = require('./restaurant')
const { Menu } = require('./menu')
const { Menu_item } = require('./menu_item')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// flipcoin path
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1) coinflip = 'Heads'
    else coinflip = 'Tails'
    res.send(coinflip)
})

//restaurant & restaurant params get paths
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
//restaurant & restaurant params post, put, and delete paths
app.post('/restaurants', async (req, res) => {
    let newRestaurant = await Restaurant.create(req.body)
    res.send(newRestaurant ? "Restaurant Created" : "Restaurant Creation Failed")
})
app.put('/restaurants/:id', async (req, res) => {
    let updateRestaurant = await Restaurant.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updateRestaurant ? "Restaurant Updated" : "Restaurant Update Failed")
})
app.delete('/restaurants/:id', async (req,res) => {
    const deletedRestaurant = await Restaurant.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedRestaurant ? "Deleted Restaurant" : "Restaurant Deletion Failed")
})


//menus & menus params get paths
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
//menus & menus params post, put, and delete paths
app.post('/menus', async (req, res) => {
    let newMenu = await Menu.create(req.body)
    res.send(newMenu ? "Created Menu" : "Menu Creation Failed")
})
app.put('/menus/:id', async (req, res) => {
    let updateMenu = await Menu.update(req.body, {
        where: {id: req.params.id}
    })
    res.send(updateMenu ? "Updated Menu" : "Menu Update Failed")
})
app.delete('/menus/:id', async (req, res) => {
    const deletedMenu = await Menu.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedMenu ? "Menu Deleted" : "Menu Deletion Failed")
})

//menu items and menu item params get paths
app.get('/menu_items', async (req, res) => {
    const allMenu_items = await Menu_item.findAll()
    res.json(allMenu_items)
})
app.get('/menu_items/:id', async (req, res) => {
    const thisMenu_item = await Menu_item.findByPk(req.params.id)
    res.json(thisMenu_item)
})
app.get('/menu_items-name/:name', async (req, res) => {
    const thisMenu_item = await Menu_item.findOne({where:{name: req.params.name}})
    res.json(thisMenu_item)
})
//menu items and menu item params post, put, delete paths
app.post('/menu_items', async (req, res) => {
    let newMenu_item = await Menu_item.create(req.body)
    res.send(newMenu_item ? "Created Menu Item" : "Menu Item Creation Failed")
})
app.put('/menu_items/:id', async (req, res) => {
    let updateMenu_item = await Menu_item.update(req.body, {
        where: {id: req.params.id}
    })
    res.send(updateMenu_item ? "Updated Menu Item" : "Menu Item Update Failed")
})
app.delete('/menu_items/:id', async (req, res) => {
    const deletedMenu_item = await Menu_item.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedMenu_item ? "Menu Item Deleted" : "Menu Item Deletion Failed")
})

//listener
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})