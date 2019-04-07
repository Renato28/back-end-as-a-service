(function() {
  'use strict';

  angular.module('baas-front-end').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state', 'loginFactory'];

  /* @ngInject */
  function LoginCtrl($state, loginFactory) {
    var vm = this;
    vm.doLogin = doLogin;
    
    activate();

    function doLogin(user) {
      loginFactory.login(user).then(function(res) {
        if (res.user.uid) {
          $state.go('app.home');
        }
      }).catch(function (error) {
        console.log(error);
      });
    }

    function activate() {

    }
  } 
  })();
