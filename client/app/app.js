'use strict';

angular.module('yellowmeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'duScroll',
  'validation'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });



(function() {
  mapController.$inject = ['$scope', '$routeParams'];
    function mapController($scope, $routeParams) {
      $scope.initialize = function() {
        var myLatlng = new google.maps.LatLng(21.038659, -89.639598);
        var mapOptions = {
          center: myLatlng,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          title:"Yellowme"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
      }

      $scope.locationName = $routeParams.locationName;
    }
  angular.module("yellowmeApp").controller("mapController", mapController);
}());