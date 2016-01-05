"use strict";
(function (angular) {
    angular
        .module('redmart')
        .factory('UrlConfig',config);

        function config(){
            var urlConfig;
            urlConfig = {
                contactList:{
                    getcontacts: 'contacts.json'
                }
            };
            return urlConfig;
        }
})(angular);
