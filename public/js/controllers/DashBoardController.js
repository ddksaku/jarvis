'use strict';

/* Controllers */

angular.module('JarvisApp')
	.controller('DashBoardController', ['$scope', 'DashBoardService', 'GlobalService', 'ContactService', 
		function ($scope, DashBoardService, GlobalService, ContactService) {  		
			$scope.user = {};
			$scope.fullAddress = '';
		
			// var emailAddress = 'jeremie@ezmsp.com';
			var emailAddress = GlobalService.signedInUser.emailAddress;

			// load user profile
			ContactService.findContacts(emailAddress).then(function (response) {
				$scope.user = response.data.ContactFindResult[0];				

				var city = $scope.user.City;
				var state = $scope.user.State;
				var country = $scope.user.Country;				
				$scope.fullAddress = DashBoardService.getFullAddress(city, state, country);
			});				
		}]);