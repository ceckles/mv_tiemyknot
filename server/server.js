const express = require('express');
const { check, validationResult } = require("express-validator");
const {sequelize} = require('../db');

const {Registry} = require('../models/Registry');
const {Item} = require('../models/Item');

const seed = require('../seed')

//Validators
const idCheck = [check("id").isNumeric().withMessage("ID must be a number")];
const nameCheck = [check("name").isString().withMessage("Must enter letters only")];


const PORT = process.env.PORT || 3000;
const app = express();


// serve static assets from the public/ folder
app.use(express.static('public'));
app.use(express.json());
//Allow CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//Seed with default DB with data
seed();

app.get('/registry', async (req, res) => {
    const registry = await Registry.findAll()
    res.json({registry})
});

app.get('/registry/:id', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
        const singleReg = await Registry.findByPk(req.params.id,
             {include:{model: Item }});
    res.json({singleReg});
});


//Item Post Route
const addItemCheck = [
    check("quantity").isNumeric().withMessage("Quantity must be a number"),
    check("name").not().isEmpty().trim().escape().withMessage("Name must not be empty"),
    check("link").not().isEmpty().trim().escape().withMessage("Link must not be empty")
];

app.post("/registry/addItem/", addItemCheck, async(req, res) => {
    //Check for errors in data
    const error = validationResult(req.body);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()});
        console.log("Invalide Add Item");
    }

    //Create New Item for Registry
    const newItem = await Item.create(req.body);
    if(newItem) {
        console.log("Item Added")
        res.status(200).send("Item Added");
    }else{
        console.log("Failed Add Item");
        res.status(400).send("Failed to Create Item");
    }


});


//Reg Post Route
const regCheck = [
  check("groomName").not().isEmpty().trim().escape().withMessage("Groom Name must not be empty"),
  check("brideName").not().isEmpty().trim().escape().withMessage("Bride Name must not be empty"),
];
app.post("/registry/create", regCheck, async (req, res) => {
  //Check for errors in data
  const error = validationResult(req.body);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
    console.log("Error Add Reg");
  }

  //Create New Item for Registry
  const newReg = await Registry.create(req.body);
  if(newReg) {
      console.log("Reg Added")
      res.status(200).send("Registry Added");
  }else{
      console.log("Failed Add Reg");
      res.status(400).send("Failed to Create Reg");
  }
});




//Start server listin on PORT
app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
});