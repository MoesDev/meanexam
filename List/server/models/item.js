var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
	title: {type: String,
		required:true,
		minlength: 5,
		maxlength: 60},
	description: {type: String,
		required:true,
		minlength: 10,
		maxlength: 60},
	completed: {type: Boolean, default: false},
	userCreated: {type: String,
		required: true},
	_userCreated: {type: Schema.Types.ObjectId, ref: 'User'},
	_userAssigned: {type: Schema.Types.ObjectId, ref: 'User'},
}, 	{timestamps: true })


var Item = mongoose.model('Item', ItemSchema);