const { Router } = require('express');
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const FS = require('fs');
let creatures = FS.readFileSync('./prehistoric_creatures.json');
let creatureData = JSON.parse(creatures);


//Index
ROUTER.get('/', (req, res) => {
    //read the files that stores all my dinos and stores it in a variable
    //parsing JSON into a JS mutable data structure 
    
        console.log(creatureData);
    
        res.render('prehistoric_creatures/index', {creatures: creatureData });
    });
  
    //new - /prehistoric_creatures/new
    ROUTER.get('/new', (req, res) => {
    console.log('new creature')
    res.render('prehistoric_creatures/new')
    });
    
// get 1 /prehistoric_creatures/1
ROUTER.get('/:id', (req, res) =>  {
    console.log(req.params.id);
    console.log(creatureData[req.params.id]);
    res.render('prehistoric_creatures/show', {creature: creatureData[req.params.id] });
})





//create - POST /prehistoric_creatures
ROUTER.post('/', (req, res) => {
    console.log(req.body);
    // add creature to prehistoric_creatures.json

    // turn prehistoric_creatures.json into a mutable array
    creaturesJS = JSON.parse(creatures);

    // add new creaturefrom req.body to the array
    creaturesJS.push(req.body);

    //turn dino array into JSON
    let creatureJSON = JSON.stringify(creaturesJS);

    // write new dino array to creatures.json
    FS.writeFileSync('./prehistoric_creatures.json', creatureJSON)

    res.redirect('/prehistoric_creatures');
})


module.exports = ROUTER;