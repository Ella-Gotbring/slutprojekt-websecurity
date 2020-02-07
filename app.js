const express = require('express');
const app = express();

//request handlers
// const userRoutes = require('./routes/users');
// const orderRoutes = require('./routes/orders');
// const productRoutes = require('./routes/products');
const login = require('./routes/users');

//middleware 
app.use(express.json())
app.use(express.static('public'))
// app.use('/', productRoutes)
// app.use('/', userRoutes)
app.use('/', login)
// app.use('/', orderRoutes)

app.listen(8080, () => console.log("Server started"))


