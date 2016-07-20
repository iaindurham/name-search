(function(angular) {

  angular.module('app')
    .controller('SearchBoxController', SearchBoxController);

  function SearchBoxController($scope) {
    $scope.searchFor = '';

    $scope.onInputChange = function() {
      console.log('changed', $scope.searchFor)
    }
  }

})(window.angular);
