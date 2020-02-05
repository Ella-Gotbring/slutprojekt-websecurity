const express = require("express");
const router = new Router();
const userModel = require('../models/users')
require('dotenv').config()

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
    const token = await userModel.login(req.body);
    // const confirm = jwt.verify(token, secret);  not needed here
    if (token) {
        res.json(token);
        console.log(token);
    } else {
        res.json({ error: "Did not work lmao get rekt" });
    }


}
module.exports = router;

