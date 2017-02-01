console.log('in usersController - Server side');

var mongoose = require('mongoose'),
	User = mongoose.model('User');

function UsersController () {
	console.log("server side controller")
	var self = this;

	this.index = function(req, res){
		users = User.find({}, function(err,result){
				if (err) {
					console.log(err)
				} else{
					console.log("result", result)
					res.json(result)
				};
			})
	}

	this.create = function(req,res){
		console.log("passed to Server Create: req ",req);
		var user = new User(req.body);
		user.save(function(err, result){
			if (err) {
				console.log("Made into server User create ERR", err);
				res.status(422);
				res.json(err);
			} else{
				console.log("server Create: ",result);
				res.json(result);
			};
		})

	}
	this.show = function(req, res){
		console.log("req body", req.params.name)
		var user = User.find({name: req.params.name}, function(err, result){
			if (err) {
				console.log(err);
				res.status(422);
				res.json(err);
			} else{
				console.log("Server COntroller Show, found:", result);
			};
			res.json(result);
		})
	}
}
module.exports = new UsersController();

