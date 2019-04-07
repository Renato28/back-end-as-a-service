(function() {
    'use strict';
    
    angular.module('baas-front-end.home')
    .controller('HomeCtrl', HomeCtrl);
  
    HomeCtrl.$inject = [];
  
    /* @ngInject */
    function HomeCtrl() {
      var vm = this;

      activate();

      function activate() {}
  
    }
  })();
  