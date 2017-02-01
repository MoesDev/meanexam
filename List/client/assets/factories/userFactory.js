app.factory('userFactory', [ '$http', function($http){
	console.log("In userFactory - client side");

	function userFactory(){
		var self = this;

		
		this.getUsers = function(callback){
			$http.get('/users').then(callback)
		}
		this.getUser = function(userName, callback){
			console.log("in the Factory for a User")
			$http.get('/users/'+ userName).then(callback)
		}

		this.login = function(user, callback, errCallback){
			console.log("In userFactory - login", user);
			var userName = user.name;
			$http.get('/users/'+ userName).then(function(data){
				if (data.data.length<1) {
					console.log("returned -not here",data)
				self.create(user, callback)
				} else{
				console.log("returned to factory GetUser", data)
				callback(data.data[0])
				};
			}, errCallback)
		}
		this.create = function(user, callback, errCallback){
			console.log("create client", user)
			$http.post('/users', user).then(function(data){
				callback(data.data);
			}, errCallback)
		}

	}

	return new userFactory();
}])
