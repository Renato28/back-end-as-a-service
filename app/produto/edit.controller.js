(function() {
    'use strict';
    
    angular.module('baas-front-end.produto')
    .controller('EditProdutoCtrl', EditProdutoCtrl);
  
    EditProdutoCtrl.$inject = ['produtoFactory', '$state', '$stateParams'];
  
    /* @ngInject */
    function EditProdutoCtrl(produtoFactory, $state, $stateParams) {
      var vm = this;
      var produtoId = $stateParams.produtoId;
      vm.produto = {};
      vm.update = update;
      
      activate();
  
      function update(produto) {
        if (produto.name && produto.descricao) {
           produtoFactory.create(produto).then(function(res) {
             vm.produto = res;
             $state.go('app.produto');
           }).catch(function (error) {
             console.log(error);
           });
        }
      }
  
      function activate() {
          produtoFactory.findOne(produtoId).then(function(res) {
            vm.produto = res;
            console.log(vm.produto);
          }).catch(function (error) {
            console.log(error);
          });
      }
  
    }
  })();
    