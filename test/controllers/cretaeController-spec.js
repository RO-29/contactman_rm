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
        
        describe('validateForm', function(){
            it('should validate form fields', function(){
               $scope.validateForm(); 
            });

            it('should display validation messages if validation fails', function(){
               $scope.responsemessage = 'validation failed.'
            });
        });

        describe('save', function(){
            it('should save the new contact', function(){
               $scope.save();
            });
        });

        describe('back', function(){
            it('should go back to contact list', function(){
               $scope.back();
            });
        });
    });

    describe("Initialization", function(){
        it('should initiate newcontact to json',function(){
            var json = {
                name: '',
                tel:'',
                email:''
            };
            expect($scope.newcontact).toEqual(json);
        });
    });
});



