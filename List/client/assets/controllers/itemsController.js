app.controller('itemsController', ['$scope', 'orderByFilter', '$cookies','$location', 'itemFactory', 'userFactory', function($scope, orderBy, $cookies, $location, itemFactory, userFactory){

	$scope.userName = $cookies.get('name');

// Get all USERS
	var getUsers = function(){
			userFactory.getUsers(function(users){
			console.log("All Users",users)
			$scope.users = orderBy(users.data, 'createdAt', true);
		});
	}
	// var getUser = function(user){
	// 		userFactory.getUser(user, function(user){
	// 		console.log("All Users",user)
	// 		$scope.user = orderBy(user.data, 'createdAt', true);
	// 	});
	// }

	getUsers();
	console.log("the users",$scope.users)

// Get all ITEMS
	var getItems = function(){
			itemFactory.getItems($cookies.get('id'), function(items){
			console.log("All items",items)
			// $scope.items = orderBy(items.data, 'createdAt', true);
			$scope.items = items.data
		});
	}

	getItems();
	console.log("the items",$scope.items)


	$scope.newItem = function(){
		$scope.item.userCreated = $cookies.get('name');
		$scope.item._userCreated = $cookies.get('id');
		console.log('then Scope Item',$scope.item);
		itemFactory.createItem($scope.item, function(item){
			console.log("item returned to front client",item)
	})
		$scope.item = {};
		getItems();
	}

	$scope.hideUser = function(user){
		if (user == $cookies.get('name')) {
			return true;
		} else{
			return false;
		};
	}

	$scope.changeCompleted = function(itemID){

		itemFactory.updateC(itemID, function(item){
			console.log("returned UPDATE", item)
		})
		getItems();
	}
	






}])