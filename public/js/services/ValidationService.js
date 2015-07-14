'use strict';

/* Services */

angular.module('JarvisApp')
	.service('ValidationService', function () {								
		/*
			Checks if it's valid email address.
		*/
		this.isValidEmailAddress = function (emailAddress) {
			var emailRegexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;      	
			if (emailRegexPattern.test(emailAddress)) {
				return true;        
			} 

			return false;
		};
	});  