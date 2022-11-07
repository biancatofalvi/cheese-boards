const Board = require('../models/board.model')
const Cheese = require('../models/cheese.model')
const db = require('../db/db')

describe('a board', () => {

    const board2 = Board.create({ type: "greek cheeses", description: "contains feta, kefalotyri", rating: 7, userId: 2})
    const cheese1 =  Cheese.create({ title: "Brie", description: "soft cow's cheese, goes well with grapes and crackers"})
    const cheese2 =  Cheese.create({ title: "Pecorino", description: "hard, salty Italian cheese, often used for grating"})

    test('can have many cheeses', () => {

      //expect(board2.).toBe(cheese1.)
    })

    test('can have many cheeses', () => {

      //expect(board2.).toBe(cheese2.)
    })

})

describe('a cheese', () => {

    const cheese1 =  Cheese.create({ title: "Brie", description: "soft cow's cheese, goes well with grapes and crackers"})
    const board2 = Board.create({ type: "greek cheeses", description: "contains feta, kefalotyri", rating: 7, userId: 2})
    const board3 = Board.create({ type: "hard cheeses", description: "contains parmigiano, pecorino", rating: 8, userId: 2})

    test('can be on many boards', () => {

      //expect(board2.).toBe(cheese1.)
    })

    test('can be on many boards', () => {

      //expect(board3.).toBe(cheese1.)
    })

})
