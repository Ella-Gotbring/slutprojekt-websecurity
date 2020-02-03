const express = require('express')
const router = express.Router()

const Product = require('../models/users')

router.get('/', async (req, res) => {
    res.send('Order list')
})

router.post('/', async (req, res) => {
    res.send('Created new order')
})

router.get('/:productId', async (req, res) => {
    res.send('Information about order')
})

router.patch('/:productId', async (req, res) => {
    res.send('Order list')
})

router.delete('/:productId', async (req, res) => {
    res.send('Order is deleted')
})

module.exports = router