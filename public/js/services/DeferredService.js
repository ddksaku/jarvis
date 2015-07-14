'use strict';

/* Services */

angular.module('JarvisApp')
	.service('DeferredService', ['$q', function ($q) {							
		this.promise = function (value) {			
			var deferred = $q.defer();       
			deferred.resolve(value);				
							
      		return deferred.promise;
		};	
	}]);  