'use strict';

angular.module('yellowmeApp')
  .controller('NavbarCtrl', function ($scope, $location) {    
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
  });