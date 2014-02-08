# Get random free port within min to max
[![Build Status](https://travis-ci.org/iamssen/randomport.png)](https://travis-ci.org/iamssen/randomport)
[![Dependency Status](https://gemnasium.com/iamssen/randomport.png)](https://gemnasium.com/iamssen/randomport)

# Install

	$ npm install randomport

# Usage

	var randomport = require('randomport');
	var express = require('express');

	var app = express();

	// randomport(min, max, callback)
	randomport(8080, 9090, function(port) {
		console.log('Start within random free port ' + port);
		app.listen(port);
	});