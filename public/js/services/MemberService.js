'use strict';

/* Services */

angular.module('JarvisApp')
	.service('MemberService', ['$http', 'DeferredService', function ($http, DeferredService) {				
		var baseUrl = '/api/member';		
		
		this.isValidMemberIdAndPassword = function (memberId, password) {			
			return DeferredService.promise($http({
				method: 'GET', 
				url: baseUrl + '/isValidMemberIdAndPassword', 
				params: {
					memberId: memberId,
					password: password
				}
			}));	  				  
		};		

		this.findMembers = function (memberId) {			
			return DeferredService.promise($http({
				method: 'GET', 
				url: baseUrl + '/findMembers', 
				params: {
					memberId: memberId					
				}
			}));	  				  
		};	
	}]);  