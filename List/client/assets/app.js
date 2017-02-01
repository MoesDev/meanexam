var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/signinPage.html',
		controller: 'loginsController'
	})
	.when('/items', {
		templateUrl: 'partials/items.html',
		controller: 'itemsController'
	})
	.when('/users/:name', {
		templateUrl: 'partials/user.html',
		controller: 'usersController'
	})
	.otherwise({
		redirectTo: '/'
	})
})