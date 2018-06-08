"use strict";
function CartService($http) {
  const getAllItems = () =>{
    return $http({
      method: "GET",
      url: "/portal/cart-items"
    });
  };
  const addItem = (newItem) =>{
    return $http({
      method: "POST",
      url: "/portal/cart-items",
      data: newItem
    });
  };
  const updateItem = (item) =>{
    return $http({
      method: "PUT",
      url: "/portal/cart-items/" + item.id,
      data: item
    });
  }
  const deleteItem = (id) =>{
    return $http({
      method: "DELETE",
      url: "/portal/cart-items/" + id
    });
  }


  return {
    getAllItems,
    addItem,
    updateItem,
    deleteItem
  }
}
angular
  .module("cartApp")
  .factory("CartService", CartService);
