const path = require('path');
const fs = require('fs').promises;
const {sequelize} = require('./db');
const { Item , Registry} = require('./models/index');



const seed = async () => {
    
    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'tiemyknot.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const {registries} = JSON.parse(String(buffer)); //parses data
    const {items} = JSON.parse(String(buffer));
    
    const registryPromises = registries.map(registry => Registry.create(registry));
    const itemPromises = items.map(item => Item.create(item))
    
    await Promise.all(registryPromises, itemPromises)
    console.log("db properly populated!")


    console.log("db populated!");
    
}


module.exports = seed