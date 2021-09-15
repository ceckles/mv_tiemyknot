const { Item} = require('./models/Item');
const { Registry } = require('./models/Registry');
const { sequelize } = require('./db');

async function initialiseDB() {
    Registry.hasMany(Item);
    Item.belongsTo(Registry);
    await sequelize.sync();
}

module.exports = initialiseDB;