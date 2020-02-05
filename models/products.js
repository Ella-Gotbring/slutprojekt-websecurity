const Datastore = require('nedb-promise'),
    products = new Datastore({ filename: './Database/productlist.db', autoload: true })

module.exports = {
    async insert(body) {
        const productInsert = {
            _id: body.id,
            serial: body.serial,
            title: body.title,
            price: body.price,
            shortDesc: body.shortDesc,
            longDesc: body.longDesc,
            imgFile: body.imgFile
        };
        return await products.insert(productInsert);
    },
    //locate product with ID
    async getOne(id) {
        return await products.findOne({ _id: id })
    },
    //locate all products 
    async all() {
        return await products.find({})
    },
    //delete product with ID
    async remove(id) {
        return await products.remove({ _id: 'id' });
    },
    //update+return document with ID if updated 
    async update(id, body) {
        let productUpdated = await products.findOne({ _id: id }, { $set: body });
        productUpdated = await products.update(product, { $set: body });
        return productUpdated;

    }
}
