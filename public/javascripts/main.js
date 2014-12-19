(function(){
  'use strict';
  angular.module('st-angular',['ngRoute'])
     .config([  //'home' state
        '$routeProvider',
        function($routeProvider) {
    $routeProvider
		.when('/', {
			templateUrl: '/templates/product.html'
		})
    .when('/:category_name', {
      templateUrl: '/templates/sub_product.html'
    })
    .when('/:category_name/:sub_category', {
      templateUrl: '/templates/sale.html'
    })
    .when('/:category_name/:sub_category/:sale_name', {
      templateUrl: '/templates/sale_products.html'
    })
		.otherwise({
			redirectTo: '/'
		});

        }

    ])
    .controller('mainController',['$http','productsService', mainController])
    .controller('categoryController',['$http','$routeParams','subprodService', categoryController])
    .controller('saleController',['$http','$routeParams','saleService', saleController])
    .controller('saleproductController',['$http','$routeParams','saleproductService', saleproductController])
    .factory('subprodService', subprodService)
    .factory('saleproductService', saleproductService)
    .factory('saleService', saleService)
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
  function mainController($http,productsService){
    var store = this;
    store.categories = [];
    productsService.get(function(data){
      store.categories = data.category;
    });
  }



function subprodService($http){
return {
list: function(id,callback){
$http.get('/api/sub_category?permalink='+id.id).success(callback);
}
}
};
  function categoryController($http,$routeParams,subprodService){
    var category = this;
    category.sub_categories = [];
      subprodService.list({id: $routeParams.category_name},function(data){
      category.sub_categories = data.sub_category;
    });
  }


function saleService($http){
return {
list: function(params,callback){
$http.get('/api/sale_category?c1='+params.c1+'&c2='+params.c2).success(callback);
}
}
};
  function saleController($http,$routeParams,saleService){
    var sale = this;
    sale.sale_category = [];
      saleService.list({c1: $routeParams.category_name ,c2 : $routeParams.sub_category},function(data){
      sale.sale_category = data.sale_category;
    });
  }

  function saleproductService($http){
return {
list: function(params,callback){
$http.get('/api/sale_products?c1='+params.c1+'&c2='+params.c2+'&c3='+params.c3).success(callback);
}
}
};
  function saleproductController($http,$routeParams,saleproductService){
    var sale = this;
    sale.products = [];
      saleproductService.list({c1: $routeParams.category_name ,c2 : $routeParams.sub_category,c3 : $routeParams.sale_name},function(data){
      sale.products = data.products;
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