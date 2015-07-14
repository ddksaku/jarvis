'use strict';


// Declare app level module which depends on filters, and services
angular.module('JarvisApp', ['ngCookies']).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/signIn.html',    			
            controller: 'SignInController'             
		})
        .when('/signin', {
            templateUrl: 'views/signIn.html',
            controller: 'SignInController'             
        })
        .when('/ticket', {
            templateUrl: 'views/Ticket/index.html', 
            controller: 'TicketController' 
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashBoardController'             
        })
		.otherwise({
			redirectTo: '/' 
		});

    $locationProvider.html5Mode(true);
}]);
