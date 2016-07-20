(function(angular) {
  angular.module('app')
    .factory('SearchService', searchService);

  function searchService($http) {
    var service = {
      search: performSearch
    };

    return service;

    function performSearch(searchString) {
      console.log(searchString)
      return $http({
        url: '/search',
        method: 'GET',
        params: {search: searchString}
      })
      .then(function successCallback(response) {
        return response.data.results;
      }, function errorCallback() {
        return [];
      });
    }
  }

})(window.angular);
