var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;
var app = express();

// create application/json parser
app.use(bodyParser.json());

app.set('view engine', 'pug');

//app.set('view engine', 'ejs');


// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res) {
	res.render('index', {
		title: 'Hello guys good afternonn',
		showTitle: true,
		people: ['Ankit', 'Sabuj', 'Arka', 'subroto', 'Paromita']
	});
});
/*
app.get('/', function(req,res){
	res.send('Hello');
})*/

app.get('/contact', function(req,res){
	res.send('<h1>This is contact page</h1><br><h2>hello welcome to node.js</h2>');
})

app.get('/about', function(req,res){
	res.send('<h1>This is about page</h1>');
})

app.listen(port);
console.log("Server started on port: " +port);