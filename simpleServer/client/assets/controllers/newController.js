app.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location){
	$scope.friends = [];



	var index = function(){
		friendsFactory.index(function(returnedData){
			$scope.friends = returnedData.data;
			console.log("In the New Control - index")
			console.log($scope.friends);
		})
	}

	$scope.create = function(){
		friendsFactory.create($scope.newFriend, function(){index();
		})
		$scope.newFriend = {};
	}

	$scope.delete = function(id){
		console.log("in ID Delete", id)
		friendsFactory.delete(id, friendsFactory.index)
		$location.url('/new')
	}

	index();
}])