/**
 * MemberController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var soap = require('soap');
var constants = require('../utils/constants');
var parameterUtil = require('../utils/parameterUtil');

var memberApiUrl = constants.MEMBER_API_URL;

module.exports = {
	index: function (req, res) {        										
	},

	/*
		Determines if a given ConnectWise member id and password are valid.
	*/
  	isValidMemberIdAndPassword: function (req, res) {	  		  		
  		var memberId = parameterUtil.getParameterValue(req.param('memberId'));
  		var password = parameterUtil.getParameterValue(req.param('password'));
  		
		var parameters = {			
			credentials: constants.CREDENTIALS,
			memberId: memberId,
			password: password 			
		};	
		
		console.log('--- /api/member/isValidMemberIdAndPassword ---')		
		console.log('parameters: ' + JSON.stringify(parameters, null, 4)); 

		soap.createClient(memberApiUrl, function (err, client) {			
	    	client.IsValidMemberIdAndPassword(parameters, function (err, result) {    		    		
	        	if (err) {
	            	console.log(err);
	            	return;	            		            	
	        	}	

	        	console.log('response: ' + JSON.stringify(result, null, 4));	        	
	        	
	        	return res.json(result);	        	
	    	});
	    });
  	},

  	/*
		Finds ConnectWise members based on a set of conditions.
	*/
  	findMembers: function (req, res) {	  		  		
  		var conditions = parameterUtil.convertToQuery(req.query);  		  		
		var parameters = parameterUtil.getClientParameters(conditions, null); // conditions, orderBy			
		
		console.log('--- /api/member/findMembers ---')		
		console.log('parameters: ' + JSON.stringify(parameters, null, 4)); 

		soap.createClient(memberApiUrl, function (err, client) {			
	    	client.FindMembers(parameters, function (err, result) {    		    		
	        	if (err) {
	            	console.log(err);
	            	return;	            		            	
	        	}	

	        	console.log('response: ' + JSON.stringify(result, null, 4));	        	

				result = result.FindMembersResult;	        		        
	        	return res.json(result);	        	
	    	});
	    });
  	}


};
