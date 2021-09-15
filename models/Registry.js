const { DataTypes, Model} = require('sequelize');
const {sequelize} = require('../db');

class Registry extends Model {}

Registry.init({
    groomName: DataTypes.STRING,
    brideName: DataTypes.STRING
},{
    sequelize,
    timestamps: false,
});

module.exports = {Registry};