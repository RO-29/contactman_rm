describe('managerdetailController', function () {
    var $rootScope,
        $scope,
        controller;
    
    beforeEach(function(){
        module('redmart');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('managerdetailController',{$scope:$scope})
        });
    });

    describe("Action Handlers", function(){
        
        describe('filterContact', function(){
            it('should filter selected contact',function(){
                $scope.filterContact('1');
                expect($scope.currentcontact).toBeTruthy();
            });

            it('should set message "Looks like you are lost in space." if match does not found',function(){
                $scope.responsemessage = 'Looks like you are lost in space.';   
            });
        });

        describe('validateForm', function(){
            it('should validate form fields', function(){
               $scope.validateForm(); 
            });

            it('should display validation messages if validation fails', function(){
               $scope.responsemessage = 'validation failed.'
            });
        });

        describe('update', function(){
            it('should update the contact', function(){
               $scope.update();
            });
        });

        describe('back', function(){
            it('should go back to contact list', function(){
               $scope.back();
            });
        });
    });

    describe("Initialization", function(){
        it('should initiate currentcontact to null',function(){
            expect($scope.currentcontact).toEqual(null);
        });

        it('should set contacts to localstorage["contactlist"]',function(){
            expect($scope.contacts).toEqual(JSON.parse(localStorage.getItem('contactlist')));
        });

        it('should set contacts to empty array if localstorage is empty',function(){
            $scope.contacts = [];
        });
    });
});



