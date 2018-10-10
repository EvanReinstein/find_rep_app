const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const key = 'AIzaSyDVJVl2KwErAPbmzBwv6MMiFziM7l7cF3c';

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
*URL*
*************/
// const representative_endpoint = `https://www.googleapis.com/civicinfo/v2/representatives?address=${}&key=${}`;

/************
*DATABASE*
*************/

const db = require('./models');

/************
*Routes* --> All Routes/Endpoints
*************/

// Serve static files from public/
app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/vendors'));


// HTML ENDPOINTS
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/views/profile.html');
});

app.get('/rep_detail', (req, res) => {
  res.sendFile(__dirname + '/views/rep_detail.html');
});

app.get('/results', (req, res) => {
  res.sendFile(__dirname + '/views/results.html');
});


// JSON Routes

app.get('/api/rep-info', (req, res) => {
	console.log('Man dang');
	// res.json();
})

app.post('/api/rep-info', (req, res) => {
	// console.log("////////////////////////////");
	// console.log(req);
	// console.log("////////////////////////////");

	const zip = req.body.zip;

	request(`https://www.googleapis.com/civicinfo/v2/representatives?address=${zip}&key=${key}`, (err, res, body) => {
		if (err) { console.log(`Error in server request to Civic API is: ${err}`) }
		console.log(body, res);
		res.json();
	});
});

// Express server set up
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on port 3000');
});
