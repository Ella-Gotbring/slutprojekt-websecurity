const dataStore = require('nedb-promise')
const productdb = new dataStore({ filename: './Database/productlist.db', autoload: true })

module.exports = {
    async create(body) {
        return await productdb.insert({
            serial: body.serial,
            price: body.price,
            title: body.title,
            imgFile: 'skateboard-greta.png',
            shortDesc: body.shortDesc,
            longDesc: body.longDesc
        })
    },
    //locate product with ID
    async get(productId) {
        return await productdb.findOne({ _id: productId })
    },
    //locate all products 
    async all() {
        return await productdb.find({})
    },
    //delete product with ID
    async remove(productId) {
        const numDeleted = await productdb.remove({ _id: productId })
        return numDeleted > 0
    },
    //update+return document with ID if updated 
    async update(productId, body) {
        let product = await products.findOne({ _id: id }, { $set: body });
        product = await products.update(product, { $set: body });
        return product;

    }
}
