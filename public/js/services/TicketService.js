'use strict';

/* Services */

angular.module('JarvisApp')
	.service('TicketService', ['$http', function ($http) {				
		
		var baseUrl = '/api/ticket';		
		
		this.getTickets = function (contactEmailAddress) {			
			return $http({
				method: 'GET', 
				url: baseUrl + '/findServiceTickets', 
				params: {
					contactEmailAddress: contactEmailAddress
				}
			});	  				  
		};			
	}]);  