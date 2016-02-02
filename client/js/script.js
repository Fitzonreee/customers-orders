var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

// Is ngRoute installed???
// Client Side Routing
myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'partials/customers.html'})
  .when('/orders', {templateUrl: 'partials/orders.html'})
  .otherwise({redirectTo: '/'});
});
