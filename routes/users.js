const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/users')
require('dotenv').config()
const secret = process.env.SECRET;


//create the user
router.post('/api/register', async (req, res) => {
    const userRegister = await userModel.register(req.body);
    if (userRegister) {
        res.json(userRegister);
    } else {
        res.send('error...');
    }
});

//auth a user
router.post('/api/auth'), async (req, res) => {
    const token = await userModel.userLogin(req.body);
    const confirm = jwt.verify(token, secret);
    if (confirmed) {
        res.json(confirmed);
    } else {
        res.send('Did not work');
    }


}
module.exports = router;

