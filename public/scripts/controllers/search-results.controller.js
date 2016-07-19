(function(angular) {

  angular.module('app')
    .controller('SearchResultsController', avatarsController);

  function avatarsController(SearchService) {
    var self = this;
    this.results = [];

    SearchService.search()
      .then(function (results) {
        self.results = results;
      });
  }

})(window.angular);
