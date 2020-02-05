const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Datastore = require('nedb-promise'),
    users = new Datastore({ filename: './Database/userlist.db', autoload: true });

module.exports = {
    async register(body) {
        if (body.password == body.repeatpassword) {
            const userN = await users.findOne({ email: body.email });
            //true=return false
            if (userN) {
                return false
            } else {
                const passwordHash = await bcrypt.hash(body.password, 10);
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
                return await users.insert(newUser)
            }
        } else {
            return false
        }
    },
    async login(body) {
        const userN = await users.findOne({ email: body.email })
        if (!userN) {
            return false
        } else {
            const passwordMatching = await bcrypt.compare(body.password, userN.password)
            if (passwordMatching) {
                const payment = {
                    token: 'JWT_TOKEN',
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
                const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '2hrs' });
                return token;
            } else {
                return false;
            }
        }
    }
}

