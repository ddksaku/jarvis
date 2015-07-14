var constants = require('./constants');

/*
	all support functions for parameters
 */ 
var parameterUtil = {	
	/*
		Convert paramters to qurey.
	*/
	convertToQuery: function (parameters) {         
		var query = '';
		for (var key in parameters) {
			var value = parameters[key];

			if (value != undefined && value != '') { // avoid parameters undefined or empty
				if (query == '') {
					query = query + key + " = '" + value + "'";
					//query = query + key + ' = "' + value + '"';
				} else {
					query = query + " AND " + key + " = '" + value + "'";
					//query = query + ' AND ' + key + ' = "' + value + '"';					
				}  			
			}  			
		}

		return query;
	},

	/*
		Get client parameters via conditions and orderBy.
	*/
	getClientParameters: function (conditions, orderBy) {    	
		if (conditions == null) {
			conditions = '';
		}

		if (orderBy == null) {
			orderBy = '';
		}

		var parameters = {			
			credentials: constants.CREDENTIALS,
			conditions: conditions,
			orderBy: orderBy			
		};	

		return parameters;
	},

	/*
		Gets parameter value.
		If its value is undefined, returns empty string.
	*/
	getParameterValue: function (value) {		
		if (value == undefined) {
			value = '';
		}

		return value;
	}
};

module.exports = parameterUtil;