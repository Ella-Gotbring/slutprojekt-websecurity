const express = require('express')
const router = express.Router()

const productModel = require('../models/products')


//get all products
router.get('/api/products', async (req, res) => {
    const allProducts = await productModel.all();
    res.json(allProducts);
})

//new product is created, only admin

router.post('/api/products', async (req, res) => {
    const create = await productModel.create(req.body);
    if (!create) {
        res.json({ message: 'please try again' });
    } else {
        res.json(create);
    }
});

//get one product 
router.get('/api/products/:id', async (req, res) => {
    const create = await productModel.create(req.params.id);
    if (create) {
        res.json(create);
    } else {
        res.json({ message: 'product not available' })
    }
});

//update product, only admin
router.patch('/api/products/:productId', async (req, res) => {
    let update = await productModel.update(req.params.id, req.body);
    if (!update) {
        res.json({ message: 'please try again' });
    } else {
        res.json(update);
    }
});

//delete product with id, only admin
router.delete('/api/products/:id', async (req, res) => {
    const remove = await productModel.remove(req.params.id);
    if (!remove) {
        res.json({ message: 'removed' })
    } else {
        res.json(remove);
    }

})
module.exports = router;
