let express = require('express');
let filestream = require('fs');
let app = express();

let superheroes = filestream.readFileSync('friends.json', 'utf8');
app.get('/friends/:index', (request, response) => {
	let newFriends = JSON.parse(superheroes);
	let friendArray = eval(newFriends.friends);
	let sendString = '';
	for (let key in friendArray[request.params.index]) {
		sendString +=
			'<p>' + key + ' ' + friendArray[request.params.index][key] + '</p>';
	}
	response.send(sendString);
});
app.listen(3000);
