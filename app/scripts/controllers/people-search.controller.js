(function(angular) {
  angular.module('app')
    .controller('PeopleSearchController', PeopleSearchController);

  function PeopleSearchController($rootScope, SearchService) {
    var self = this;
    this.searchResults = [];

    this.performSearch = function (searchString) {
      searchString = searchString || '';

      SearchService.search(searchString)
        .then(function (results) {
          self.searchResults = results;
        });
    };

    $rootScope.$on('change:search-box', function (event, searchString) {
      self.performSearch(searchString);
    });

    this.performSearch();
  }
})(window.angular);
