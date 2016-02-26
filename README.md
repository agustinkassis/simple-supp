
Simple wrapper for sending message using yowsup for nodejs

#### Installation

```
npm install simple-supp
```

#### Usage

```
var SimpleSupp = require('simple-supp');

var config = {
	phoneNumber: 'Your number including country and area code',
	password: 'Your password'
};

var supp = new SimpleSupp(config.phoneNumber, config.password);

var message = {
	to: 'Phone number including country and area code',
	content: 'Message content'
};

supp.send(message, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Message Sent!');
	}
});
```