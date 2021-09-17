const express = require('express');
const { check, validationResult } = require("express-validator");
const {sequelize} = require('./db');

const {Registry} = require('./models/Registry');
const {Item} = require('./models/Item');

const seed = require('./seed')

//Validators
const idCheck = [check("id").isNumeric().withMessage("ID must be a number")];


const PORT = process.env.PORT || 3000;
const app = express();


// serve static assets from the public/ folder
app.use(express.static('public'));

//Allow CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//See DB
seed();

app.get('/registry', async (req, res) => {
    const registry = await Registry.findAll()
    res.json({registry})
})

app.get('/registry/:id',idCheck, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const registry = await Registry.findByPk(req.params.id)
    res.json({registry})
})

app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})