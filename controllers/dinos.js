const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const FS = require('fs');

//Index
ROUTER.get('/', (req, res) => {
//read the files that stores all my dinos and stores it in a variable
    let dinos = FS.readFileSync('./dinos.json');
//parsing JSON into a JS mutable data structure 
    let dinoData = JSON.parse(dinos);

    console.log(dinoData);

    res.render('dinos/index', {dinos: dinoData });
});


//new - /dinos/new
ROUTER.get('/new', (req, res) => {
    console.log('new dino')
    res.render('dinos/new')
});

//create - POST /dinos
ROUTER.post('/', (req, res) => {
        console.log(req.body);
        // add dino to dinos.json

        // turn dinos.json into a mutable array
        let dinos = FS.readFileSync('./dinos.json')
        dinosJS = JSON.parse(dinos);

        // add new dino from req.body to the array
        dinosJS.push(req.body);

        //turn dino array into JSON
        let dinoJSON = JSON.stringify(dinosJS);

        // write new dino array to dinos.json
        FS.writeFileSync('./dinos.json', dinoJSON)

        res.redirect('/dinos');
})


module.exports = ROUTER;