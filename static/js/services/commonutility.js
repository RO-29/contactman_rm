'use strict';
(function(angular){
	angular
		.module('redmart')
		.factory('commonUtility',commonUtility);

		function commonUtility()
		{
			var validation = {
				validateEmail: function (email)
		        {
		            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		            return regex.test(email);
	          	},
			  	validatePhone: function (phone)
			  	{
		            var regex =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		            return regex.test(phone);
	          	},
	          	highlightError: function(modelvalue){
			      angular.element(angular.element('[ng-model="'+modelvalue+'"]')[0]).addClass('b-error-color');
			    }
			}
			return validation;
		}
		
})(angular);
