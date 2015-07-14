/**
 * TicketController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var soap = require('soap');
var constants = require('../utils/constants');
var parameterUtil = require('../utils/parameterUtil');

var ticketApiUrl = constants.SERVICE_TICKET_API_URL;

module.exports = {	
	index: function (req, res) {        										
	},

	/*
		Finds service ticket information by a set of conditions. 
		If isOpen is set, it will pre-filter by the ticket status.
	*/
  	findServiceTickets: function (req, res) {	  		
  		var conditions = parameterUtil.convertToQuery(req.query);  		  		
		var parameters = parameterUtil.getClientParameters(conditions, 'SRServiceRecID'); // conditions, orderBy			
		
		console.log('--- /api/ticket/findServiceTickets ---')		
		console.log('parameters: ' + JSON.stringify(parameters, null, 4)); 

		soap.createClient(ticketApiUrl, function (err, client) {			
	    	client.FindServiceTickets(parameters, function (err, result) {    		    		
	        	if (err) {
	            	console.log(err);
	            	return;
	        	}			

	        	console.log('response: ' + JSON.stringify(result, null, 4));	        	
				
	        	result = result.FindServiceTicketsResult; // get the root element
	        	return res.json(result);																	    
	        	/*
				var ticketCount = result.Ticket.length;				
				var tickets = [];
				for (var index = 0; index < ticketCount; index++) {
					var srServiceRecId = result.Ticket[index].SRServiceRecID;
					var contactName = result.Ticket[index].ContactName;
					var contactEmailAddress = result.Ticket[index].ContactEmailAddress;
					var summary = result.Ticket[index].Summary;				
					var priority = result.Ticket[index].Priority;
					var ticketStatus = result.Ticket[index].TicketStatus;				
					var enteredDate = result.Ticket[index].EnteredDate;
					var lastUpdateDate = result.Ticket[index].LastUpdateDate;											

					var ticket = {
						srServiceRecId: srServiceRecId,  		
  						contactName: contactName,
  						contactEmailAddress: contactEmailAddress,
					  	summary: summary,
					  	priority: priority, 
					  	ticketStatus: ticketStatus,
					  	enteredDate: enteredDate,
					  	lastUpdateDate: lastUpdateDate
					};

					tickets.push(ticket);					
				}

				return res.json(tickets);																	    
				*/			
	    	});
	    });
  	}
};
