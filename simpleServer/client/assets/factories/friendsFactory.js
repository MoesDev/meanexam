console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http){
	var friends = [];
	var friend = {};
	function FriendsFactory(){
		var _this = this;
		this.create = function(newfriend, callback){
			console.log("In the Create $$$$");
			$http.post('/friends', newfriend).then(callback);
		}
		this.update = function(theParam, updatefriend, callback){
			console.log("In the Update $$$$");
			$http.put('/friends/'+theParam, updatefriend).then(callback);
		}
		this.index = function(callback){
			$http.get('/friends').then(callback);
		}
		this.delete = function(id, callback){
			console.log("FinFactry")
			$http.delete('/friends/'+id).then(callback);

		}
		this.show = function(){

		}
		this.getFriends = function(callback){
			callback(friends);
		}
		this.getFriend = function(theParam, callback){
			console.log("@@@@@ the get friend")
			$http.get('/friends/'+theParam).then(function(data){
				var friend = data.data;
				callback(friend)
			})
			console.log("finished friend")
		}
	//Close to Full Factory
	}
	console.log(new FriendsFactory());
	return new FriendsFactory();
}])