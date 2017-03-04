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

	$scope.doneExist = function(items){
		var cnt = 0;
		for (var i = 0; i < items.length; i++) {
			if ($scope.iCompleted(items[i].completed) == true)
				cnt =cnt+1;
		}
		if (cnt ==0) {
			return false;
		} else{
			return true;
		};
	}
	$scope.pendingExist = function(items){
		var cnt = 0;
		for (var i = 0; i < items.length; i++) {
			if ($scope.iCompleted(items[i].completed) == false)
				cnt++;
		}
		if (cnt ==0) {
			return false;
		} else{
			return true;
		};
	}

	getItems();
	console.log("the items",$scope.items)


}])