const Board = require('../models/board.model')
const Cheese = require('../models/cheese.model')
const db = require('../db/db')

describe('a board', () => {

    const board2 = Board.create({ type: "greek cheeses", description: "contains feta, kefalotyri", rating: 7, userId: 2})
    const cheese1 =  Cheese.create({ title: "Brie", description: "soft cow's cheese, goes well with grapes and crackers"})
    const cheese2 =  Cheese.create({ title: "Pecorino", description: "hard, salty Italian cheese, often used for grating"})

    test('can be loaded with its cheeses', () => {

      //expect(board2.).toBe(cheese1.)
    })


})
