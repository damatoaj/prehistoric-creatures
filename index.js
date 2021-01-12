const EXPRESS = require('express'); //step one
const LAYOUTS = require ('express-ejs-layouts'); //step five
const APP = EXPRESS(); //step two
const path = require('path');


// app setup
APP.set('view engine', 'ejs'); //step five
APP.use(LAYOUTS);
APP.use(EXPRESS.static(path.join(__dirname, '/static')));
APP.use(EXPRESS.urlencoded({ extended: false})); //body parsing middleware

APP.use('/dinos', require('./controllers/dinos'));
APP.use('/prehistoric_creatures', require('./controllers/prehistoric_creatures'));


//global routes
APP.get('/', (req,res) => { //step three
    // res.send('Home!!!')
    res.render('home');
});

APP.listen(8000), () => console.log('Hey! Listen!'); //step four