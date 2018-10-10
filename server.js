const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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

// Index of representatives
app.get('/api')

// Express server set up
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on port 3000');
});
