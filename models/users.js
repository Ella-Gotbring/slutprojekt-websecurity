const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Datastore = require('nedb-promise')
const users = new Datastore({ filename: './db/userlist.db', autoload: true });

module.exports = {
    async register(body) {
        if (body.password == body.repeatpassword) {
            const userN = await users.findOne({ email: body.email });
            //true=return false
            if (userN) {
                return false
            } else {
                const passwordHash = await bcrypt.hash(body.password, 10);
                //create new user
                const newUser = {
                    email: body.email,
                    password: passwordHash,
                    role: 'customer',
                    name: body.name,
                    adress: {
                        street: body.adress.street,
                        city: body.adress.city,
                        zip: body.adress.zip
                    }
                }
                return await users.insert(newUser) //insert new user in database
            }
        } else {
            return false
        }
    },//verify user when logging in
    async auth(body) {
        const userN = await users.findOne({ email: body.email })
        if (!userN) { //return false if email isn't in the database
            return false
        } else {
            const passwordMatching = await bcrypt.compare(body.password, userN.password)
            if (passwordMatching) {
                const payload = {
                    userId: user._id,
                    role: user.role
                }
                //create token
                const token = jwt.sign(payload, process.env.SECRET);
                return token;
            } else {
                return {
                    token: token,
                    user: {
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        adress: {
                            street: user.adress.street,
                            city: user.adress.city,
                            zip: user.adress.zip
                        },
                        orderHistory: user.orderHistory
                    }
                }
            }
        }
    }
}

