const User = require('../models/user.model')
const db = require('../db/db')

describe('an user', () => {

    const user1 =  User.create({ name: "Laszlo", email: "laszlo@vampires.com"})

    test('is of type object', () => {

      expect(typeof user1).toBe('object')
    })
})
