const express  = require("express");
const router = express.Router();

const productModel = require('../models/products')


//get all products
router.get('/api/products', async (req, res) => {
    const allProducts = await productModel.all();
    res.json(allProducts);
})

//new product is created, only admin

router.post('/api/products', async (req, res) => {
    const allProducts = await productModel.create(req.body);
    if (!allProducts) {
        res.json({ message: 'please try again' })
    } else {
        res.json(allProducts);
    }
});

//get one product 
router.get('/api/products/:id', async (req, res) => {
    const allProducts = await productModel.create(req.params.id);
    if (allProducts) {
        res.json(allProducts);
    } else {
        res.json({ message: 'product not available' })
    }
});

//update product, only admin
router.patch('/api/products/:id', async (req, res) => {
    let allProducts = await productModel.update(req.params.id, req.body);
    if (!allProducts) {
        res.json({ message: 'please try again' });
    } else {
        res.json(allProducts);
    }
});

//delete product with id, only admin
router.delete('/api/products/:id', async (req, res) => {
    const allProducts = await productModel.remove(req.params.id);
    if (!allProducts) {
        res.json({ message: 'removed' })
    } else {
        res.json(allProducts);
    }

})
module.exports = router;
