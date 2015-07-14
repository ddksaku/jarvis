/**
 * ContactController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var soap = require('soap');
var constants = require('../utils/constants');
var parameterUtil = require('../utils/parameterUtil');

var contactApiUrl = constants.CONTACT_API_URL;

module.exports = {
	index: function (req, res) {        										
	},

	/*
		Authenticate a contact logging into the portal.
	*/
  	authenticate: function (req, res) {	  		  		
  		var email = parameterUtil.getParameterValue(req.param('email'));
  		var loginpw = parameterUtil.getParameterValue(req.param('loginpw'));
  		
		var parameters = {			
			credentials: constants.CREDENTIALS,
			email: email,
			loginpw: loginpw 			
		};	
		
		console.log('--- /api/contact/authenticate ---')		
		console.log('parameters: ' + JSON.stringify(parameters, null, 4)); 

		soap.createClient(contactApiUrl, function (err, client) {			
	    	client.Authenticate(parameters, function (err, result) {    		    		
	        	if (err) {
	            	console.log(err);
	            	return;	            	
	        	}	

	        	console.log('response: ' + JSON.stringify(result, null, 4));	        	
	        	
	        	result = result.AuthenticateResult; // get the root element	        	
	        	return res.json(result);
	    	});
	    });
  	},	

  	/*
		Finds contact information by a set of conditions.
	*/
  	findContacts: function (req, res) {	  		  		
  		var conditions = parameterUtil.convertToQuery(req.query);  		  		
		var parameters = parameterUtil.getClientParameters(conditions, null); // conditions, orderBy			
		
		console.log('--- /api/member/findContacts ---')		
		console.log('parameters: ' + JSON.stringify(parameters, null, 4)); 

		soap.createClient(contactApiUrl, function (err, client) {			
	    	client.FindContacts(parameters, function (err, result) {    		    		
	        	if (err) {
	            	console.log(err);
	            	return;	            		            	
	        	}	

	        	console.log('response: ' + JSON.stringify(result, null, 4));	        	

				result = result.FindContactsResult;	        		        
	        	return res.json(result);	        	
	    	});
	    });
  	}
};
