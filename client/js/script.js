var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

// Client Side Routing
myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'partials/customers.html'})
  .when('/orders', {templateUrl: 'partials/orders.html'})
  .otherwise({redirectTo: '/'});
});

// Factories
myApp.factory('CustomersFactory', function($http){
  var factory = {};

  factory.create_customer = function(info, callback){
    $http.post('/create_customer', info).success(function(output){
      callback(output);
    })
  };

  factory.get_all = function(callback){
    $http.get('/get_customers').success(function(output){
      callback(output);
    })
  };

  factory.delete_customer = function(info, callback){
    $http.post('/delete_customer', info).success(function(output){
      callback(output);
    })
  };

  return factory;
});

myApp.factory('OrdersFactory', function($http){
  var factory = {};

  factory.get_products = function(callback){
    var products = [
                    {product: "Nike Cleats"},
                    {product: "Adidas Cleats"},
                    {product: "Diadora Cleats"},
                    {product: "Puma Cleats"},
                    {product: "Kelme Cleats"},
                   ];
    callback(products);
  }

  factory.get_quantity = function(callback){
    var quantity = [];

    for (var i = 1; i < 11; i++) {
      quantity.push(i);
    };

    callback(quantity);
  }

  return factory;
})

// Client Controllers
myApp.controller('CustomersController', function($scope, CustomersFactory, OrdersFactory){
  $scope.addCustomer = function(){
    // console.log($scope.new_customer);
    customer_repack = { name: $scope.new_customer.name,
                        created_at: new Date()
                      };
    // console.log(customer_repack);
    CustomersFactory.create_customer(customer_repack, function(data){
      $scope.customers = data;
      // clears form after saving record
      $scope.form.$setPristine();
      $scope.new_customer.name = null;
    })
  }

  $scope.deleteCustomer = function(customer){
    CustomersFactory.delete_customer(customer, function(data){
      $scope.customers = data;
    })
  }

  CustomersFactory.get_all(function(data){
    $scope.customers = data;
  })
});

myApp.controller('OrdersController', function($scope, CustomersFactory, OrdersFactory){

  CustomersFactory.get_all(function(data){
    $scope.customers = data;
  });

  OrdersFactory.get_products(function(data){
    $scope.products = data;
  });

  OrdersFactory.get_quantity(function(data){
    $scope.quantity = data;
  });

  $scope.addOrder = function(){
    console.log($scope.new_order);
  }

});
