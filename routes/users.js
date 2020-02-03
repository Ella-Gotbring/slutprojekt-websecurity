const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../models/users')

router.post('/auth', async (req, res) => {
    const users = await Users.authorize(req.body)
    if (user) {
        res.status(200).json(user)
        console.log(user)
    } else {
        res.status(400).json({ message: "Password or email did not match" })
    }
})

router.post('/register'), async (req, res) => {
    const users = await Users.create(req.body);
    console.log(users)
    if (users) {
        res.status(200).json({ message: "user is now registered" })
    } else {
        res.status(400).json({ message: "user exists already" })
    }

}
module.exports = router

