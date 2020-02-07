const express = require("express");
const router = express.Router();

const orderModel = require('../models/orders')


router.get('/api/orders', async (req, res) => {
    const OrderJSON = await orderModel.getOrder();
    res.json(OrderJSON)
})

router.post('/api/orders', async (req, res) => {
    const OrderJSON = await orderModel.create(req.body)
    if (!orderModel) {
        res.json({ message: 'Could not find your order' })
    } else {
        res.json({ message: 'Created order' })
    }

});

module.exports = router;