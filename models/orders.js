const dataStore = require('nedb-promise')
const ordersdb = new dataStore({ filename: './Database/Orderlist.db', autoload: true })

module.exports = {
    async create() {
        return await ordersdb.insert({
            title: require.params.title,
            imgFile: require.filename,
            price: req.params.price,
            shortDesc: req - params.shortDesc,
            longDesc: req.params.longDesc
        })
    }

}