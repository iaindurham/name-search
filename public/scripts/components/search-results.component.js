(function(angular) {
  angular.module('app')
    .component('searchResults', {
      bindings: {
        results: '<'
      },
      templateUrl: 'templates/search-results.html'
    });
})(window.angular);
