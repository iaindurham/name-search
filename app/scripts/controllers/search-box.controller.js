(function(angular) {
  angular.module('app')
    .controller('SearchBoxController', SearchBoxController);

  function SearchBoxController($scope, $rootScope) {
    $scope.searchFor = '';

    $scope.onInputChange = function() {
      $rootScope.$broadcast('change:search-box', $scope.searchFor);
    }
  }

})(window.angular);
