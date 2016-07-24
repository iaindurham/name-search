describe('PeopleSearchController', function() {
  var $q;
  var $controller;
  var $rootScope;
  var ctrl;
  var SearchService;
  var stubSearchServiceSearch;

  beforeEach(module('app'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _$q_, _SearchService_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    SearchService = _SearchService_;
    stubSearchServiceSearch = sinon.stub(SearchService, 'search');
    stubSearchServiceSearch.returns($q.resolve([]));
  }));

  describe('When the controller is loaded', function () {
    beforeEach(function () {
      ctrl = $controller('PeopleSearchController');
    });

    it('should perform search with empty search string', function() {
      var emptySearchString = '';
      expect(stubSearchServiceSearch).to.have.been.calledWith(emptySearchString);
    });

    describe('When "change:search-box" event is triggered on the rootScope', function () {
      var searchString = 'a';
      var returnedResults = [
        'Pam',
        'Andy',
        'Mark'
      ];

      beforeEach(function () {
        stubSearchServiceSearch.returns($q.when(returnedResults));
        $rootScope.$broadcast('change:search-box', searchString);
        $rootScope.$digest();
      });

      it('should perform a search with the search string', function () {
        expect(stubSearchServiceSearch).to.have.been.calledWith(searchString);
      });

      it('should set the returned results', function () {
        expect(ctrl.searchResults).to.be.equal(returnedResults);
      });
    });
  });
});
