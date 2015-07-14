'use strict';

/* Controllers */

angular.module('JarvisApp')
	.controller('SignInController', ['$scope', '$location', '$cookieStore', 'SignInService', 'MemberService', 'GlobalService', 
		function ($scope, $location, $cookieStore, SignInService, MemberService, GlobalService) {  		
			$scope.userName = '';
			$scope.password = '';
			$scope.isValidUser = true;

			$scope.signIn = function () {									
				SignInService.signIn($scope.userName, $scope.password).then(function (response) {	
					var data = response.data;			

					if (data.SessionID) { // it's a contact
						GlobalService.signedInUser.emailAddress = $scope.userName;						

						$scope.isValidUser = true;
						$location.path('/dashboard');
						$scope.$apply();
					} else if (data.IsValidMemberIdAndPasswordResult == true) { // it's a member						
						MemberService.findMembers($scope.userName).then(function (response) {
							GlobalService.signedInUser.emailAddress = response.data.MemberFindResult[0].EmailAddress;

							$scope.isValidUser = true;
							$location.path('/dashboard');
							$scope.$apply();
						});					
					} else {
						$scope.isValidUser = false;
					}									
				});						
			};
		}]);