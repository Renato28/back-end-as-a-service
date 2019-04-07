(function () {
  'use strict';

  angular.module('baas-front-end.home').config(function ($stateProvider) {

    var homeState = {
      name: 'app.home',
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm'
    }
      
    $stateProvider.state(homeState);

    })
  })();
  