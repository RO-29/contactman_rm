'use strict';
(function (angular) {
  'use strict;';

  angular
    .module('redmart')
    .factory('HttpCallService', function($http, $q, $rootScope)
    {
      var RMServices = function (url) 
      {
        var self = this;
        self.url = url;
        
        self.get = function (params, config) 
        {
          if (!params)
          params = {};
          var deferred = $q.defer();
          var config = {
            headers: { 'Content-type': 'application/json' },
            'dataType': 'json'
          }
          $http.get(self.url, config).success(function (data,status,headers) {
            deferred.resolve(data);
          }).error(function (data,status,headers) {
            deferred.reject(data,status,headers);
          });
          return deferred.promise;
        };
      };

      var svc = {
        callFunc: function (url) {
          if (!url) {
            return false;
          }
          return new RMServices(url);
        }
      };
      return svc;
    }); 
}(angular));