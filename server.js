const express = require('express')
const path = require('path')
const { Restaurant } = require('./restaurant')
const { Menu } = require('./menu')
const { Menu_item } = require('./menu_item')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1) coinflip = 'Heads'
    else coinflip = 'Tails'
    res.send(coinflip)
})

app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.findAll()
    res.json(allRestaurants)
})

app.get('/menus', async (req, res) => {
    const allMenus = await Menu.findAll()
    res.json(allMenus)
})

app.get('/menu_items', async (req, res) => {
    const allMenu_items = await Menu_item.findAll()
    res.json(allMenu_items)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})