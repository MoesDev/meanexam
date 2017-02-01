console.log('In Routes - server side');

var users = require("../controllers/users.js");
var items = require("../controllers/items.js");

module.exports = function(app){
	app.get('/users', users.index);
	app.get('/users/:name', users.show);
	app.post('/users', users.create);

	app.get('/items/user/:userID', items.showByUser);
	app.get('/items/changeComplete/:itemID', items.changeCompleted);
	app.get('/items/anotherUser/:userName', items.showByAnotherUser);
	app.post('/items', items.create);

}