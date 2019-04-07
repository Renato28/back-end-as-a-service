(function () {
    'use strict';
  
    angular.module('baas-front-end.produto').factory('produtoFactory', produtoFactory);
  
    produtoFactory.$inject = ['$firebaseArray', '$firebaseObject'];
  
    /* @ngInject */
    function produtoFactory($firebaseArray, $firebaseObject) {
      var produtosRef = firebase.database().ref('produtos');
      var produtos = $firebaseArray(produtosRef);
      
  
      var service = {
        findAll: findAll,
        findOne: findOne,
        create: create,
        remove: remove
      };
  
      return service;
  
      function findAll() {
        return produtos;
      };
  
      function create(produto) {
        return produtos.$add(produto).then(function(ref) {
          produto.firebaseId = ref.key;
          return produto;
        });
      };

      function remove(produto) {
        return produtos.$remove(produto).then(function(ref) {
        });
      };

      function findOne(produtoId) {
        people.$loaded().then(function() {
          console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
  
       });
        var refOne = produtosRef.child(produtoId);
        return $firebaseObject(refOne);
      };
  
    }
  })();
  