describe('SearchBoxController', function() {
  var scope;
  var ctrl;
  var spyRootScopeBroadcast;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('SearchBoxController', {$scope: scope});
    spyRootScopeBroadcast = sinon.spy($rootScope, '$broadcast');
  }));

  it('should have search string be empty on load', function(){
    expect(scope.searchFor).to.equal('');
  });

  describe('Given the text in the search box has been updated', function () {
    var updatedText = 'h';

    beforeEach(function () {
        scope.searchFor = updatedText;
    });

    describe('When the input box onchange is triggered', function () {
      beforeEach(function () {
        scope.onInputChange();
      });

      it('should broadcast the "change:search-box" event on the rootScope with the updated text', function () {
        expect(spyRootScopeBroadcast).to.have.been.calledWith('change:search-box', updatedText)
      })
    });
  });
});
