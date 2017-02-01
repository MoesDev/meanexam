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
			console.log(req.params.itemID)
			Item.findOne({_id: req.params.itemID}, function(err,result){
				if(err){
					console.log("the error", err)
				}
				else{
					console.log("got A Result", result)
					if (result.completed == false) {
						result.completed = true;
						result.save(function(err, updatedItem){
				         if (err){
				           console.log(err);
				         }else{
				         	console.log("%%%%%%%%%%%%%%%%%%%%", updatedItem)
				           res.json(updatedItem);
				         }
				       })
					} else{
						result.completed = false;
						result.save(function(err, updatedItem){
				         if (err){
				           console.log(err);
				         }else{
				         	console.log("%%%%%%%%%%%%%%%%%%%%", updatedItem)
				           res.json(updatedItem);
				         }
				       })
					}
				}
			})
		}
		
	}

	module.exports = new ItemsController();