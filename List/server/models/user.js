console.log('in user model');

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:[2, "name length needs to be 2 or more"], maxlength:20},
})

var User = mongoose.model('User', UserSchema);