(function(angular) {

  angular.module('app')
    .factory('SearchService', searchService);

  function searchService($http) {
    var service = {
      search: performSearch
    };

    return service;

    function performSearch() {
      return $http.get('/search')
        .then(function successCallback(response) {
          return response.data.results;
        }, function errorCallback() {
          return [];
        });
    }
  }

})(window.angular);
