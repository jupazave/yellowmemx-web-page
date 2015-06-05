'use strict';

angular.module('yellowmeApp')
  .factory('Mailgun', function ($resource) {
    return $resource("https://mandrillapp.com/api/1.0/messages/send.json", {}, {
        sendmail: { method: 'POST', isArray: true }
    });
  });

