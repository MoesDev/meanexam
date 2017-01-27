var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider){
	//Routes to load your new and edit pages with new and edit controllers attached to them
	$routeProvider
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'

	})
	.when('/edit/:id',{
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.when('/show/:id',{
		templateUrl: 'partials/show.html',
		controller: 'editController'
	})
	.otherwise({
		redirectTo: '/'
	})
})