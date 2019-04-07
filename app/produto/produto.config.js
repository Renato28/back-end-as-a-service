(function () {
  'use strict';

  angular.module('baas-front-end.produto').config(function ($stateProvider) {

    var produtoState = {
      name: 'app.produto',
      url: '/produto',
      templateUrl: 'produto/produto.html',
      controller: 'ProdutoCtrl',
      controllerAs: 'vm'
    }

    var createProdutoState = {
      name: 'app.createProduto',
      url: '/produto/create',
      templateUrl: 'produto/create.html',
      controller: 'CreateProdutoCtrl',
      controllerAs: 'vm'
    }

    var editProdutoState = {
      name: 'app.editProduto',
      url: '/produto/edit/:produtoId',
      templateUrl: 'produto/edit.html',
      controller: 'EditProdutoCtrl',
      controllerAs: 'vm'
    }
      
    $stateProvider.state(produtoState);
    $stateProvider.state(createProdutoState);
    $stateProvider.state(editProdutoState);

  })
})();
  