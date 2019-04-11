(function() {
  'use strict';
  
  angular.module('baas-front-end.produto')
  .controller('CreateProdutoCtrl', CreateProdutoCtrl);

  CreateProdutoCtrl.$inject = ['produtoFactory', '$state'];

  /* @ngInject */
  function CreateProdutoCtrl(produtoFactory, $state) {
    var vm = this;
    vm.create = create;
    activate();

    function create(produto) {
      if (produto.name && produto.descricao) {
        produtoFactory.create(produto).then(function(res) {
          $state.go('app.produto');
        }).catch(function (error) {
          console.log(error);
        });
      }
    }

    function activate() {
      
    }

  }
})();
  