app.controller('usersController', ['$scope', '$routeParams', 'orderByFilter', '$cookies','$location', 'itemFactory', 'userFactory', function($scope, $routeParams, orderBy, $cookies, $location, itemFactory, userFactory){

	$scope.userName = $cookies.get('name');

// Get all One USER's Info

	var getUser = function(){
		userFactory.getUser($routeParams.name, function(user){
			console.log("the 1 user page",user)
			$scope.userShow = user.data[0];
		});

		console.log("the user",$scope.userShow)
	}	

getUser();
// Get all ITEMS
	var getItems = function(){
		var name = $routeParams.name;
			itemFactory.getUserItems(name, function(items){
			console.log("All items",items)
			// $scope.items = orderBy(items.data, 'createdAt', true);
			$scope.items = items.data
		})
	}
	
	$scope.iCompleted = function(completed){
		if (completed== true) {
			return true;
		} else{
			return false;
		};
	}

	getItems();
	console.log("the items",$scope.items)


}])