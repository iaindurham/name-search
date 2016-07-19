(function(angular) {

  angular.module('app')
    .controller('AvatarController', avatarsController);

  function avatarsController(SearchService) {
    var self = this;
    this.avatars = [];

    SearchService.search()
      .then(function (results) {
        self.avatars = results;
      });
  }

})(window.angular);
