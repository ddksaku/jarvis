'use strict';

/* Controllers */

angular.module('JarvisApp')
	.controller('TicketController', ['$scope', 'TicketService', function ($scope, TicketService) {  		
		$scope.tickets = [];		
		$scope.tickets = TicketService.getTickets('ddksaku@gmail.com');				
	}]);