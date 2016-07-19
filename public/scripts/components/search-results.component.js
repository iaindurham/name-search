(function(angular) {
  angular.module('app')
    .component('searchResults', {
      templateUrl: 'templates/search-results.html',
      controller: 'SearchResultsController'
    });
})(window.angular);
