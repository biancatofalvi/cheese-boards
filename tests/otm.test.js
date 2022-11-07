const User = require('../models/user.model')
const Board = require('../models/board.model')
const db = require('../db/db')

describe('an user', () => {

    const user2 =  User.create({ id: 2, name: "Nadja", email: "nadja@vampires.com"})
    const board2 = Board.create({ type: "greek cheeses", description: "contains feta, kefalotyri", rating: 7, userId: 2})
    const board3 = Board.create({ type: "hard cheeses", description: "contains parmigiano, pecorino", rating: 8, userId: 2})

    test('has many boards', () => {

      expect(board2.userId).toBe(user2.id)
    })

    test('has many boards', () => {

      expect(board3.userId).toBe(user2.id)
    })

})
