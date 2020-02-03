const express = require('express')
const router = express.Router()

const Product = require('../models/products')

router.get('/', async (req, res) => {
    const products = await Product.all()
    res.json(products)
})

router.post('/', async (req, res) => {
    const product = await Product.create(req.body)
    if (product) {
        res.status(201).json(product)
        console.log(product)
    } else {
        res.status(404).json({ message: "product does not exist" })
    }
})

router.get('/:productId', async (req, res) => {
    const product = await Product.get(req.params.productId)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "Could not find product" })
    }

})

router.patch('/:productId', async (req, res) => {
    res.send('The product is now changed')
})

router.delete('/productId', async (req, res) => {
    const product = await Product.remove(req.params.productId)
    if (product) {
        res.status(200).json({ message: 'Product is now deleted' })
    } else {
        res.status(404).json({ message: 'Product with the given id does not exist' })
    }

})
module.exports = router
