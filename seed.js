const path = require('path');
const fs = require('fs').promises;
const initialiseDB = require('./initialiseDB');
const {sequelize} = require('./db');
const { Item } = require('./models/Item');
const { Registry } = require('./models/Registry');


const seed = async () => {
    const seedPath = path.join(__dirname, 'tiemyknot.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const registries = JSON.parse(String(buffer)); //parses data

    initialiseDB();
    await sequelize.sync({ force: true });

    for (registryData of registries) {
        const reg = await Registry.create(registryData);
        //console.log(JSON.stringify(reg));
        for(const itemData of registryData.items){
            //console.log(JSON.stringify(itemData));
            const item = await Item.create(itemData);
            //console.log(JSON.stringify(item));
            await reg.addItem(item);
        }
    }

    console.log("db populated!");
    
}


module.exports = seed