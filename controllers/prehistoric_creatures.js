const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const FS = require('fs');

//Index
ROUTER.get('/', (req, res) => {
    //read the files that stores all my dinos and stores it in a variable
        let creatures = FS.readFileSync('./prehistoric_creatures.json');
    //parsing JSON into a JS mutable data structure 
        let creatureData = JSON.parse(creatures);
    
        console.log(creatureData);
    
        res.render('prehistoric_creatures/index', {creatures: creatureData });
    });
    
    //new - /dinos/new
ROUTER.get('/new', (req, res) => {
    console.log('new creature')
    res.render('prehistoric_creatures/new')
});

//create - POST /dinos
ROUTER.post('/', (req, res) => {
    console.log(req.body);
    // add creature to prehistoric_creatures.json

    // turn prehistoric_creatures.json into a mutable array
    let creatures = FS.readFileSync('./prehistoric_creatures.json')
    creaturesJS = JSON.parse(creatures);

    // add new dino from req.body to the array
    creaturesJS.push(req.body);

    //turn dino array into JSON
    let creatureJSON = JSON.stringify(creaturesJS);

    // write new dino array to dinos.json
    FS.writeFileSync('./prehistoric_creatures.json', creatureJSON)

    res.redirect('/prehistoric_creatures');
})


module.exports = ROUTER;