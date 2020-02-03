const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('auth-token')
    if (!token) {
        return false
    }
    try {
        const verified = jwt.verify(token, process.env.secret)
        req.user = verified
        next()
    }
    catch (err) {
        return false
    }
}