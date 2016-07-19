(function(angular) {
  angular.module('app')
    .component('avatar', {
      bindings: {
        user: '<'
      },
      templateUrl: 'templates/avatar.html'
    });
})(window.angular);
