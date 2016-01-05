'use strict';

angular
	.module('redmart')
	.controller('managerlistController', ManagerListController);

	ManagerListController.$inject = ['$rootScope','$scope','$location','HttpCallService','UrlConfig'];

    function ManagerListController ($rootScope, $scope, $location,HttpCallService,UrlConfig) 
    {
		$scope.getContacts = function(){
			if(!$rootScope.contacts){
				var url = UrlConfig.contactList.getcontacts;
	        	var svc = HttpCallService.callFunc(url);
	        	svc.get().then(function(data) {
		            if(data){
	            		$rootScope.contacts = data.contacts;
	            		delete localStorage['contactlist'];
	            		localStorage.setItem('contactlist', JSON.stringify($rootScope.contacts));
		            }else{
		            	$scope.responsemessage = 'No records found.';	
		            }
		        }, function(data) {
		        	$scope.responsemessage = data ? data.message : 'There is some technical error occured while fetching posts.';
		        });
			}
		};

		$scope.deleteContact = function(id){
			if(confirm('are you sure want to delete this.')){
				var len = $rootScope.contacts.length;
				for(var i=0;i<len;i++){
					if($rootScope.contacts[i].id == id){
						$rootScope.contacts.splice(i,1);
						delete localStorage['contactlist'];
        				localStorage.setItem('contactlist', JSON.stringify($rootScope.contacts));
						return false;
					}
				}
				
			}
		};

		$scope.getContacts();
	}