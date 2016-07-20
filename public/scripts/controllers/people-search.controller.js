(function(angular) {

  angular.module('app')
    .controller('PeopleSearchController', PeopleSearchController);

  function PeopleSearchController(SearchService) {
    var self = this;

    SearchService.search()
      .then(function (results) {
        self.searchResults = results;
      });
  }

})(window.angular);
