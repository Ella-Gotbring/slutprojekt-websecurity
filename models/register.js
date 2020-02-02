const dataStore = require('nedb-promise')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const userdb = new dataStore({ filename: './Database/Userlist.db', autoload: true })

module.exports = {
    async create(body) {
        if (body.password == body.repeatpassword) {
            const user = await userdb.findOne({ email: body.email })
            if (user) {
                return false
            } else {
                const passwordHash = await bcrypt.hash(body.password, 10)
                const newUser = {
                    email: body.email,
                    password: passwordHash,
                    role: 'customer',
                    name: body.name,
                    adress: {
                        street: body.adress.street,
                        city: body.adress.city,
                        zip: body.adress.city
                    }
                }
                return await userdb.insert(newUser)
            }
        } else {
            return false
        }
    },
    async authorize(body) {
        const user = await userdb.findOne({ email: body.email })
        if (!user) {
            return false
        } else {
            const passwordMatching = awaitbcrypt.compare(body.password, user.password)
            if (passwordMatching) {
                const payload = {
                    email: user.email,
                    password=user.password
                }
                const token = jwt.sign(payload, process.env.secret)

                const userAuth = {
                    token: token,
                    user: {
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        adress: {
                            street: user.adress.street,
                            city: user.adress.city,
                            zip: user.adress.zip
                        }
                    }
                }
                return userAuth
            } else {
                return false
            }
        }
    }
}

