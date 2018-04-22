# jsontocsv-example

## Hvordan teste
Start applikasjonen

`npm start`

Gjør en post (feks med [Postman](https://www.getpostman.com/)) til localhost:3000/csv

Hvor body er:

```
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
```
