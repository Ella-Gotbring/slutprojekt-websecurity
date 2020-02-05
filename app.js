const express = require('express');
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

//request handlers
const userRoutes = require('./routes/users')
const orderRoutes = require('./routes/orders')
const productRoutes = require('./routes/products')

//middleware 
app.use(express.json())
app.use(express.static('public'))
app.use('/api/products', productRoutes)
app.use('/api/', userRoutes)
app.use('/api/orders', orderRoutes)
app.use(express.urlencoded())

app.listen(8080, () => console.log("Server started"))


