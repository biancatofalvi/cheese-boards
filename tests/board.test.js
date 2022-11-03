const Board = require('../models/board.model')
const db = require('../db/db')

describe('a board', () => {

    const board1 =  Board.create({ type: "soft cheeses", description: "contains brie, camembert and gorgonzola", rating: 8, userId: 1})

    test('is of type object', () => {

      expect(typeof board1).toBe('object')
    })
})
