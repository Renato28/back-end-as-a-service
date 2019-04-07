(function () {
    'use strict';
  
    angular.module('baas-front-end').factory('loginFactory', loginFactory);
  
    loginFactory.$inject = ['$firebaseAuth'];
  
    /* @ngInject */
    function loginFactory($firebaseAuth) {

      var firebaseAuthObject = $firebaseAuth();

      var service = {
        firebaseAuthObject: firebaseAuthObject,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
      };

      return service;

      function login(user) {
        return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
      }

      function logout() {
        firebaseAuthObject.$signOut();
      }

      function isLoggedIn() {
        return firebaseAuthObject.$getAuth();
      }
  
    }
  })();
  