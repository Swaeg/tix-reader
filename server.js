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
	console.log(request.query.ticket);
	fs.appendFile(FILE, JSON.stringify(request.query.ticket) + "\r\n", function(err) {
		if (err) { throw err; }
		console.log("Saved data " + JSON.stringify(request.query.ticket) + " succesfully.");
	});
	return response.jsonp({'msg': "Saved!"});
});

// Basic root route
app.get('/', function(request, response) {
        response.send('Ticket server online.');
});

// Start the server
var server = app.listen(8080, function() {

	var host = server.address().address;
	var port = server.address().port;
	console.log("Ticket server listening at http://%s:%s", host, port);

});


/* wow such node
░░░░░░░░░▄░░░░░░░░░░░░░░▄
░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌
░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐
░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌
░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌
░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌
░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌ 
*/
