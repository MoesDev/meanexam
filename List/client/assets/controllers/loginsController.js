app.controller('loginsController', ['$scope', 'userFactory', '$cookies', '$location', function($scope, userFactory, $cookies, $location){
	
	$scope.userName = $cookies.get('name');
	console.log("In loginsController - client side", $scope.userName);
	console.log($cookies.get('name'));

	$scope.login = function(){
		userFactory.login($scope.user, function(user){
				$cookies.put('name', user.name);
				$cookies.put('id', user._id);
				$scope.userName = $cookies.get('name');
				// console.log("cookies", $cookies.get('name'));
				// console.log("cookies", $cookies.get('id'));
				$location.url('/items');
		}, function(errors){
			console.log("Im in the errors clientcontrol", errors);
			$scope.errors = errors.data.errors;
			$location.url('/');
		}
		);
	}
	$scope.logOut = function(){
		$cookies.remove('name');
		$cookies.remove('id');
		$scope.userName = "";
		console.log("At logout all cookies left: ", $cookies.getAll())
		$location.url('/');
	}

	$scope.logoutShow = function(){
		if ($cookies.get('name')){
			return true;
		}
		else{
			return false;
		}
	}
}])