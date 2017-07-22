// server.js
// BASE SETUP 7.22.2017

// Frank working on some new things and trying to figure out
// --------------------------------------------------------------------

// call the packages we need
var express     = require('express');         // call express
var app         = express();                  // define our app using express
var bodyParser  = requre('body-parser');      // configure app to use bodyParser()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());                   // this will let us get the data from a POST

var port = process.env.PORT || 1001;          // set the port

// ROUTES FOR OUR API
// --------------------------------------------------------------------

var router = express.Router();                // creates an instance of the express router

router.get('/', function(req,res) {
  res.json({ message: 'hooray! frank was here!'});
});

// more routes for the API will happen here

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api

app.use('/api', router);

// START THE SERVER
// --------------------------------------------------------------------
app.listen(port);
console.log('Magic happens on port ' + port);
