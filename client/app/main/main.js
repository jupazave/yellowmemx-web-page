'use strict';

angular.module('yellowmeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portafolio/portafolio.html',
        controller: 'PortafolioCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('clients', {
        url: '/clients',
        templateUrl: 'app/clients/clients.html',
        controller: 'PortafolioCtrl'
      });
  });