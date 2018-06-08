"use strict";
angular
  .module("cartApp")
  .config(($routeProvider) =>{
  $routeProvider
  .when("/cart", {
    template: `<cart-items></cart-items>`
  });
})
