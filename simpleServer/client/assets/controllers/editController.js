app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location){
	
	$scope.friend = {};
	console.log("Here is the params")
	console.log($routeParams.id)
 /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */
 
	friendsFactory.getFriend($routeParams.id, function(returnedData){
		$scope.friend = returnedData;
		$scope.friend.birthdate = new Date(returnedData.birthdate)
		console.log('here',$scope.friend);
	})

	/*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */



	$scope.update = function(){
		friendsFactory.update($routeParams.id, $scope.friend, function(returnedData){
		console.log("RETURNED")
		$location.url('/new')
	})

		console.log("Update Update Update");
		console.log($scope.friend);

		// friendsFactory.update($scope.updateFriend, friendsFactory.index)
		// $scope.newFriend = {};
	}

}])