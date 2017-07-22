// server.js
// BASE SETUP 7.22.2017

// Frank working on some new things and trying to figure out
// --------------------------------------------------------------------

// call the packages we need
var express     = require('express');         // call express
var app         = express();                  // define our app using express
var bodyParser  = require('body-parser');      // configure app to use bodyParser()


// Added some features in this scotch guy
var mongoose    = require('mongoose');
var Bear        = require('./src/app/models/bear');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());                   // this will let us get the data from a POST

mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
                                              // connects to the DB
var port = process.env.PORT || 1001;          // set the port

// ROUTES FOR OUR API
// --------------------------------------------------------------------

var router = express.Router();                // creates an instance of the express router

// THIS IS HOW WE DEFINITE THE PARTS OF OUR ROUTER. THESE WILL RUN IN THE ORDER
// THEY ARE LISTED THANKS TO THE CHANGES IN EXPRESS 4.0
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening...');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req,res) {
  res.json({ message: 'hooray! frank was here!'});
});

// more routes for the API will happen here

// on routes that end in /bears
// --------------------------------------------------------------------
router.route('/bears')
// create a bear (accessed at POST http://localhost:1001/api/bears)
.post(function(req, res) {
  var bear = new Bear();      // create a new instance of the Bear model
  bear.name = req.body.name;  // set the bears name (comes from the request)

  // save the bear and check for errors
  bear.save(function(err) {
    if (err)
      res.send(err);

    res.json({message: 'Bear created!'});
  })
});

// REGISTER OUR ROUTES ------------------------------------------------
// all of our routes will be prefixed with /api

app.use('/api', router);

// START THE SERVER
// --------------------------------------------------------------------
app.listen(port);
console.log('Magic happens on port ' + port);
