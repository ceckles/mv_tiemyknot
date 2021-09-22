const {Registry} =require('./Registry')
const {Item} = require('./Item')


    Registry.hasMany(Item);
    Item.belongsTo(Registry);

module.exports = {Registry, Item};
