app.factory('itemFactory', ['$http', function($http){

	function itemFactory(){
		var self = this;

		this.createItem = function(item, callback){
			console.log("in createItem");

			$http.post('/items', item).then(function(data){
				callback(data.data)
			})
		}
		this.getItems = function(userID, callback){
			$http.get('/items/user/'+userID).then(callback)
		}
		this.getUserItems = function(userName, callback){
			$http.get('/items/anotherUser/'+ userName).then(callback)
		}

		this.updateC = function(itemID, callback){
			console.log("CHANGE", itemID)
			$http.get('/items/changeComplete/'+itemID).then(callback)
		}



	}

	return new itemFactory();
}])