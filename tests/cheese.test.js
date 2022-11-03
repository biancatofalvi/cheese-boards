const Cheese = require('../models/cheese.model')
const db = require('../db/db')

describe('a cheese', () => {

    const cheese1 =  Cheese.create({ title: "Brie", description: "soft cow's cheese, goes well with grapes and crackers"})

    test('is of type object', () => {

      expect(typeof cheese1).toBe('object')
    })
})
