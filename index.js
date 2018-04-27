var cors = require('cors');
const express = require('express');
const json2csv = require('json2csv').parse;
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(cors());

const fields = [
  'gruppenummer',
  'gruppenavn',
  'mva',
  'kjoekkenbong',
  'bokforingskonto',
  'artikkelnummer',
  'artikkelnavn',
  'pris 1',
  'pris 2',
  'gruppe',
  'vekt'
]; // Verdiene du ønsker å hente ut
const opts = { fields };

// Spesifiser hva pathen til endepunktet skal være
app.post('/csv', (req, res) => {
  try {
    const data = json2csv(req.body.data, opts); // Gjør om json til csv
    console.log(data)
    res.status(200).json({status:"ok"});
  } catch (err) {
    res.status(400).send();
  }
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));

/*
Hvordan teste:
Gjør en post til localhost:3000/csv

Hvor body er:
{
	"data": [
	    {
	      "car": "Audi",
	      "price": 40000,
	      "color": "blue"
	    },
	    {
	      "car": "BMW",
	      "price": 1000,
	      "color": "black"
	    },
	    {
	      "car": "Porsche",
	      "price": 60000,
	      "color": "green"
	    }
	  ]
}

*/
