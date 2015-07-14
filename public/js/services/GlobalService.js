'use strict';

/* Services */

angular.module('JarvisApp')
	.factory('GlobalService', function () {													
		return {
			signedInUser: {}			
		};
	});  