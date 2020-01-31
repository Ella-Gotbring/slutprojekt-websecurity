const express = require('express');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const Datastore = require('nedb');
const fs = require('fs');
// const Datastore = require('nedb-promises');
// const routes = require('./routes/register');
const app = express()
require('dotenv').config()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())


const db = new Datastore({ filename: 'data.db', autoload: true })

// app.use('/api/register', routes)

app.post('/api/register', async (req, res) => {
    const newUser = {

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: 'customer',
        adress: {
            street: req.body.adress.street,
            city: req.body.adress.city,
            zip: req.body.adress.zip,
        },
        payment: {
            cardOwner: '',
            cardNumber: '',
            validUntil: '',
            cvv: ''
        },
        orderHistory: []

    }
    await db.insert(newUser)
    res.status(201).json({ message: "User created" })

})

app.post('/api/auth', (req, res) => {
    User.find

})

app.listen(8080, () => console.log("Server started"))


