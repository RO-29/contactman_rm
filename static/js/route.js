'use strict';

angular
	.module('redmart')
	.config(config);

	config.$inject = ['$routeProvider','$locationProvider'];

	function config($routeProvider,$locationProvider)
	{
		$routeProvider
			.when('/contact', {
				templateUrl : 'static/templates/manager/list.html',
				controller  : 'managerlistController'
			})
			.when('/contact/edit/:id', {
				templateUrl : 'static/templates/manager/detail.html',
				controller  : 'managerdetailController'
			})
			.when('/contact/new', {
				templateUrl : 'static/templates/manager/createnew.html',
				controller  : 'addManagerController'
			})
			.otherwise({
				redirectTo :'/contact'
			});
	}