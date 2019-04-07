(function () {
    'use strict';

    angular
      .module('baas-front-end')
      .config(function ($stateProvider, $urlRouterProvider) {

        var appState = {
          abstract: true,
          name: 'app',
          url: '/app',
          templateUrl: 'app.html',
          controller: 'AppCtrl',
          controllerAs: 'vm'
        }

        var loginState = {
          name: 'login',
          url: '/login',
          templateUrl: 'login.html',
          controller: 'LoginCtrl',
          controllerAs: 'vm'
        }

        $stateProvider.state(appState);
        $stateProvider.state(loginState);
        $urlRouterProvider.otherwise('/login');
      })
  })();
