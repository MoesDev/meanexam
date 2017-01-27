console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

var FriendSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	birthdate: String
})

var Friend = mongoose.model('Friend', FriendSchema);