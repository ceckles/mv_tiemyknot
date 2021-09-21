const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class Item extends Model {}

Item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING,
    quantity: DataTypes.STRING,
    status: DataTypes.BOOLEAN
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Item};