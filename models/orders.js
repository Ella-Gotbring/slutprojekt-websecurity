const Datastore = require('nedb-promise'),
    orders = new Datastore({ filename: './Database/orderlist.db', autoload: true })

module.exports = {

    //new order
    async insert(body) {
        const orderInsert = {
            _id: body.id,
            timeStamp: Date.now(),
            status: 'inProcess',
            items: body.items,
            oderValue: body.orderValue,

        };
        return await orders.insert(orderInsert);
    },
    //get all orders
    async all() {
        return await orders.find({})
    },
    //get one order
    async getorderid(orderId) {
        return await orders.findOne({ _id: orderId })
    }
}