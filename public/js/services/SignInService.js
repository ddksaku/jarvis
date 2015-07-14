'use strict';

/* Services */

angular.module('JarvisApp')
	.service('SignInService', ['ValidationService', 'ContactService', 'MemberService', 
		function (ValidationService, ContactService, MemberService) {									
			this.signIn = function (userName, password) {						
				if (ValidationService.isValidEmailAddress(userName)) { 
					return ContactService.authenticate(userName, password);							
				} else { 
					return MemberService.isValidMemberIdAndPassword(userName, password);					
				}			
			};		
	}]);  