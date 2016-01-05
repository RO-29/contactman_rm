'use strict';

angular
	.module('redmart')
	.controller('managerdetailController', ManagerDetailController);

	ManagerDetailController.$inject = ['$rootScope','$scope','$location', '$routeParams' ,'HttpCallService', 'UrlConfig', 'commonUtility'];

    function ManagerDetailController ($rootScope, $scope, $location, $routeParams, HttpCallService, UrlConfig, commonUtility) 
    {
		var contactid = $routeParams.id;
		$scope.currentcontact = null;
		$scope.contacts = JSON.parse(localStorage.getItem('contactlist')) || [];
		
		$scope.filterContact = function(){
			var len = $scope.contacts.length;
			for(var i=0;i<len;i++){
				if($scope.contacts[i].id == contactid){
					$scope.currentcontact = $scope.contacts[i];
				}
			}
			$scope.responsemessage = $scope.currentcontact != null ? '' : 'Looks like you are lost in space';
		};

		$scope.validateForm = function(){
			angular.element('.b-error-color').removeClass('b-error-color');
			$scope.responsemessage = '';

			if(!$scope.currentcontact.name){ $scope.responsemessage = 'Enter Name.'; commonUtility.highlightError('currentcontact.name'); return false; }
			if(!$scope.currentcontact.email){ $scope.responsemessage = 'Enter email id.'; commonUtility.highlightError('currentcontact.email'); return false; }
			if($scope.currentcontact.email){ 
				if(commonUtility.validateEmail($scope.currentcontact.email) == false){
					$scope.responsemessage = 'Enter valid email id.'
					commonUtility.highlightError('currentcontact.email');
					return false;
				}
			}
			if(!$scope.currentcontact.tel){ $scope.responsemessage = 'Enter telephone number.'; commonUtility.highlightError('currentcontact.tel'); return false; }
			if($scope.currentcontact.tel){ 
				if(commonUtility.validatePhone($scope.currentcontact.tel) == false){
					$scope.responsemessage = 'Enter valid phone number.'
					commonUtility.highlightError('currentcontact.tel');
					return false;
				}
			}
			return true;
		};

		$scope.update = function(){
			if($scope.validateForm()==true){
				if(!$rootScope.contacts){ $rootScope.contacts = $scope.contacts; }
				var len = $rootScope.contacts.length;
				for(var i=0;i<len;i++){
					if($rootScope.contacts[i].id == contactid){
						$rootScope.contacts[i].name = $scope.currentcontact.name;
						$rootScope.contacts[i].tel = $scope.currentcontact.tel;
						$rootScope.contacts[i].email = $scope.currentcontact.email;
						$scope.back();
						return false;
					}
				}
			}
		};

		$scope.back = function(){
			$location.path('/');
		};

		$scope.filterContact();
	}