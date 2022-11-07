const User = require('./user.model')
const Board = require('./board.model')
const Cheese = require('./cheese.model')



//one to many
User.hasMany(Board, {foreignKey: 'userId'})
Board.belongsTo(User)


//many to many
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})

module.exports = { User, Board, Cheese }
