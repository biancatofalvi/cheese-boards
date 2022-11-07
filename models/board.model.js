const { DataTypes, Model } = require('sequelize')
//const { User } = require('./user.model')
const db = require('../db/db')

class Board extends Model {}

Board.init({
    type:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.INTEGER
    },
    userId:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        defaultValue: null

    }
}, {sequelize: db})

module.exports = Board
