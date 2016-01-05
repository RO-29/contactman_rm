'use strict';

angular
	.module('redmart')
	.controller('addManagerController', AddManagerController);

	AddManagerController.$inject = ['$rootScope','$scope','$location', '$routeParams' ,'HttpCallService', 'UrlConfig', 'commonUtility'];

    function AddManagerController ($rootScope, $scope, $location, $routeParams, HttpCallService, UrlConfig, commonUtility) 
    {
		$scope.newcontact = {
			name: '',
			tel:'',
			email:''
		}
		$scope.validateForm = function(){
			angular.element('.b-error-color').removeClass('b-error-color');
			$scope.responsemessage = '';

			if(!$scope.newcontact.name){ $scope.responsemessage = 'Enter Name.'; commonUtility.highlightError('newcontact.name'); return false; }
			if(!$scope.newcontact.email){ $scope.responsemessage = 'Enter email id.'; commonUtility.highlightError('newcontact.email'); return false; }
			if($scope.newcontact.email){ 
				if(commonUtility.validateEmail($scope.newcontact.email) == false){
					$scope.responsemessage = 'Enter valid email id.'
					commonUtility.highlightError('newcontact.email');
					return false;
				}
			}
			if(!$scope.newcontact.tel){ $scope.responsemessage = 'Enter telephone number.'; commonUtility.highlightError('newcontact.tel'); return false; }
			if($scope.newcontact.tel){ 
				if(commonUtility.validatePhone($scope.newcontact.tel) == false){
					$scope.responsemessage = 'Enter valid phone number.'
					commonUtility.highlightError('newcontact.tel');
					return false;
				}
			}
			return true;
		};

		$scope.save = function(){
			if($scope.validateForm()==true){
				$rootScope.contacts = JSON.parse(localStorage.getItem('contactlist'));
				$rootScope.contacts.push({
					id:$rootScope.contacts.length+1,
					name : $scope.newcontact.name,
					tel : $scope.newcontact.tel,
					email : $scope.newcontact.email
				});
				delete localStorage['contactlist'];
        		localStorage.setItem('contactlist', JSON.stringify($rootScope.contacts));
				$scope.back();
			}
		};

		$scope.back = function(){
			$location.path('/');
		};
	}