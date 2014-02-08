var net = require('net');
var randomport = require('../lib/randomport');

describe('find random port', function () {
	it('get random port', function (done) {
		randomport(14000, 15000, function (port) {
			if (port > 14000 && port < 15000) {
				done();
			}
		});
	});

	it('verify random port', function (done) {
		randomport(14000, 15000, function (port) {
			var server = net.createServer();

			server.listen(port, function (error) {
				server.once('close', function () {
					done();
				});
				server.close();

				server.on('error', function (error) {
					done(error);
				});
			});
		});
	});
});
