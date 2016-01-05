describe('managerlistController', function () {
    var $rootScope,
        $scope,
        controller;
    
    beforeEach(function(){
        module('redmart');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('managerlistController',{$scope:$scope})
        });
    });

    describe("Action Handlers", function(){
        describe('getContacts', function(){
            it('should set data in rootScope if records found',function(){
                $scope.getContacts();
            });

            it('should set message "No records found." if records not found',function(){
                $scope.responsemessage = 'No records found.';   
            });
        });
    });
});



