(function(){
  'use strict';
  angular.module('st-angular',['ngRoute'])
    .controller('mainController',['productsService', mainController])
    .factory('productsService', productsService);

  function productsService($http){
    var svc = {
      get: get
    }
    return svc;
    function get(callback){
      $http.get('/api/polls')
        .success(callback);
    }
  }
  function mainController(productsService){
    var store = this;
    store.categories = [];
    productsService.get(function(data){
      store.categories = data.category;
    });
  }
  // function productList() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'templates/product.html',
  //     controllerAs: 'prod',
  //     controller: 'productController'
  //   }
  // }
  // function productController() {
  //   this.productName = "product listing"
  //   this.products = [{name:"Lions",city:"Detroit"}];
  // }
})();
