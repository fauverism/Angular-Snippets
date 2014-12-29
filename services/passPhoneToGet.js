'use strict';
angular.module('ngApp')
  .factory('phoneService', function($http, $q) {
    return {
      sendData: function(phoneNumber) {
        var deferred  = $q.defer();
        var phone1    = phoneNumber.substring(0,3);
        var phone2    = phoneNumber.substring(3,6);
        var phone3    = phoneNumber.substring(6,12);
        $http.get('http://website.com:9000/api/get?phone=' + phone1 + '&phone=' + phone2 + '&phone=' + phone3, {
          headers: {
            'Authorization': "Basic " + Base64.encode("admin" + ":" + "admin"),
            'Content-Type': 'application/json'
          },
          contentType: 'application/json',
          cache: false
        })
            .then(function(successResponse) {
              console.log('success', successResponse);
              GlobalObject = successResponse.data;
              deferred.resolve(successResponse);
            }, function(failedResponse) {
              console.log('failed', failedResponse);
              deferred.reject(failedResponse);
            });
        return deferred.promise;
      }
    };
  });
