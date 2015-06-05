'use strict';

describe('Service: mailgun', function () {

  // load the service's module
  beforeEach(module('yellowmeApp'));

  // instantiate service
  var mailgun;
  beforeEach(inject(function (_mailgun_) {
    mailgun = _mailgun_;
  }));

  it('should do something', function () {
    expect(!!mailgun).toBe(true);
  });

});
