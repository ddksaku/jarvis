'use strict';

/* Services */

angular.module('JarvisApp')
	.service('DashBoardService', ['GlobalService', 
		function (GlobalService) {	
			this.getFullAddress = function (city, state, country) {
				var fullAddress = '';
				
				if (city != undefined && city != '') {
					if (fullAddress != '') {
						fullAddress = fullAddress + ', ';
					} 
					fullAddress = fullAddress + city;	
				}				

				if (state != undefined && state != '') {
					if (fullAddress != '') {
						fullAddress = fullAddress + ', ';
					} 
					fullAddress = fullAddress + state;	
				}				

				if (country != undefined && country != '') {
					if (fullAddress != '') {
						fullAddress = fullAddress + ', ';
					} 
					fullAddress = fullAddress + country;	
				}		

				return fullAddress;		
			};		
		}]);  