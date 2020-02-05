const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = {
    async auth(req, res, next) {
        const token = req.headers.authorization
        if (!token) {
            res.status(404).json({ message: 'could not find token' })

        }
        try {
            const verified = await jwt.verify(token.replace("Bearer ", ""), process.env.SECRET)
            req.user = verified

        }
        catch (err) {
            res.status(404).json({ message: 'user is not verified' })
        }
        next()

    }
}


