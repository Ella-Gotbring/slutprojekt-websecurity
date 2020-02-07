const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const userModel = require('../models/users')
require('dotenv').config();


//create the user
router.post('/api/register', async (req, res) => {
    const user = await userModel.register(req.body);
    if (user) {
        res.json(user);
    } else {
        res.send('error...');
    }
});


//auth a user
// router.post('/api/auth', async (req, res) => {
//     const token = await userModel.login(req.body);
//     if (token) {
//         res.json(token);
//         console.log(token);
//     } else {
//         res.json({ error: "Did not work" });
//     }
// })

module.exports = router;

