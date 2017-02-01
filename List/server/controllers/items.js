var mongoose = require('mongoose'),
	Item = mongoose.model('Item'),
	User = mongoose.model('User');


	function ItemsController () {
		var self = this;

		this.create = function(req, res){
			var item = new Item(req.body);
			item.save(function(err, result){
				if (err) {
					console.log(err);
				} else{
					console.log(result)
					res.json(result)
				};
			})

		}
		this.showByUser = function(req, res){
			// items = Item
			// .find({})
			// .populate('comments')
			// .exec( function(err,result){
			// 	if (err) {
			// 		console.log(err)
			// 	} else{
			// 		console.log("result", result)
			// 		res.json(result)
			// 	};
			// })

			items = Item.find({_userCreated: req.params.userID}).populate('_userAssigned').exec( function(err,result){
				if (err) {
					console.log(err)
				} else{
					console.log("result", result)
					res.json(result)
				};
			})
		}
		this.showByAnotherUser = function(req, res){
				console.log("test2",req.params.userName)
				User.find({name: req.params.userName}, function(err,result){
				if (err) {
					console.log(err)
				} else{
					console.log("?????", result)
					Item.find({_userAssigned: result[0]._id}).populate('_userCreated').exec( function(err,resultItems){
						if (err) {
							console.log(err)
						} else{
							// console.log("result", result)
							res.json(resultItems)
						};
					})
				}
			})
		}

		this.changeCompleted = function(req, res){
			console.log("CHANGE!!!!!!")
			Item.update({_id: req.params.itemID}, function(err,result){
				if(err){
					console.log(err)
				}
				else{
					if (result.completed ===true) {
						result.completed = false;
					} else{
						result.completed = true;
						result.save(function(err, updatedItem){
				         if (err){
				           console.log(err);
				         }else{
				           res.json(updatedItem);
				         }
				       })
					}
				}
			})
		}
		
	}

	module.exports = new ItemsController();