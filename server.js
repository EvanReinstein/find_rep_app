const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

//CORS middleware 
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Body-Parser parses incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/************
*DATABASE*
*************/

const db = require('./models');








// Express server set up
app.listen(port, () => {
  console.log('Express server is up and running on port 3000');
});
