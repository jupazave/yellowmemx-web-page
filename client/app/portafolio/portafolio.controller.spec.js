'use strict';

describe('Controller: PortafolioCtrl', function () {

  // load the controller's module
  beforeEach(module('yellowmeApp'));

  var PortafolioCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortafolioCtrl = $controller('PortafolioCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
