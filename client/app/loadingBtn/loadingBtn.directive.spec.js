'use strict';

describe('Directive: loadingBtn', function () {

  // load the directive's module
  beforeEach(module('yellowmeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loading-btn></loading-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loadingBtn directive');
  }));
});