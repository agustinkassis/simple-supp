'use strict';

var exec = require('child_process').exec,
	debug = require('debug')('simple-supp');

function SimpleSupp(phoneNumber, password) {
	this.phoneNumber = phoneNumber;
	this.password = password;
	debug('SimpleSupp initialized');
}

SimpleSupp.prototype.send = function (message, cb) {
	debug('Sending message to ' + message.to);
	message.content.replace(/\\/g, "\\\\")
	   .replace(/"/g, "\\\"");

	return exec('yowsup-cli demos -l ' + this.phoneNumber + ':' + this.password + ' -s ' + message.to + ' "' + message.content + '"', function (err, stdout, stderr) {
		if (stderr.indexOf('Message sent') > -1) {
			debug('Message Sent');
			cb();
		} else {
			debug('Error found');
			cb(err || stdout);
		}
	});
}

module.exports = SimpleSupp;