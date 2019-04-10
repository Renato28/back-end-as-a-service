(function() {
  'use strict';
  
  angular.module('baas-front-end.produto')
  .controller('ProdutoCtrl', ProdutoCtrl);

  ProdutoCtrl.$inject = ['produtoFactory'];

  /* @ngInject */
  function ProdutoCtrl(produtoFactory) {
    var vm = this;
    vm.remove = remove;
    vm.update = update;
    vm.produtos = produtoFactory.findAll();

    activate();

    function remove(produto) {
      produtoFactory.remove(produto).then(function(res) {
        console.log('Removed');
      }).catch(function (error) {
        console.log(error);
      });  
    }

    function update(produto){
      produtoFactory.update(produto).then(function(res) {
        console.log('updated');
      }).catch(function(error){
        console.log(error)
      });
    }

    function activate() {
      
    }
  }
})();