'use strict';

/* Services */

angular.module('JarvisApp')
	.service('ContactService', ['$http', 'DeferredService', function ($http, DeferredService) {					
		var baseUrl = '/api/contact';		
		
		this.authenticate = function (email, loginpw) {						      
			return DeferredService.promise($http({				
				method: 'GET', 
				url: baseUrl + '/authenticate', 
				params: {
					email: email,
					loginpw: loginpw
				}
			}));		      	
		};	

		this.findContacts = function (email) {						      
			return DeferredService.promise($http({				
				method: 'GET', 
				url: baseUrl + '/findContacts', 
				params: {
					email: email					
				}
			}));		      	
		};	
	}]);  