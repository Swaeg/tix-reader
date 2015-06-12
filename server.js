/**
 * swaeg tix persister server
 */

var express = require('express');
var fs = require('fs');
//var bodyParser = require('body-parser');

var app = express();

var FILE = 'sold_tickets.txt';

// Use body parsing middleware to parse json from requests
//app.use(bodyParser.json());

// Save to file route
app.get('/save', function(request, response) {
	fs.appendFile(FILE, JSON.stringify(request.query.ticket) + "\r\n", function(err) {
		if (err) { 
			console.log(err); 
			return response.jsonp({'msg': "Error saving ticket code! Consult the server log."}); 
		}
		console.log("Saved data " + JSON.stringify(request.query.ticket) + " succesfully.");
	});
	return response.jsonp({'msg': "Ticket saved!"});
});

// Basic root route
app.get('/', function(request, response) {
        response.send('Ticket server online. Blast your ticket jsonp to /save');
});

// Start the server
var server = app.listen(8080, function() {

	var host = server.address().address;
	var port = server.address().port;
	console.log("Ticket server started.")
	console.log("");
	console.log("░░░░░░░░░▄░░░░░░░░░░░░░░▄");
	console.log("░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌");
	console.log("░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐");
	console.log("░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐");
	console.log("░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐");
	console.log("░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌");
	console.log("░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌");
	console.log("░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐");
	console.log("░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌");
	console.log("░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌");
	console.log("");
	console.log("wow much swg such tix");
	console.log("");
	console.log("Ticket server is listening.");

});

