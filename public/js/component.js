"use strict";
const cartItems = {
  template: `

  <form class="itemform" ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input class="newitem" type="text" placeholder="Name" ng-model="$ctrl.newItem.product">
    <input class="newitem" type="text" placeholder="Price" ng-model="$ctrl.newItem.price">
    <input class="newitem" type="text" placeholder="Quantity" ng-model="$ctrl.newItem.quantity">
    <button>Add Item</button>
  </form>

  <div class="cart">

    <section ng-repeat="item in $ctrl.cartItems" class="cards">

    <div class="x">
    <a href="" ng-click="$ctrl.deleteItem(item.id);"><i class="material-icons">close</i></a><br>
    </div>

      <input class="newitem" type="text" ng-blur= "$ctrl.updateItem(item);" ng-model="item.product">
      <p ng-model="item.price"> price: {{ item.price | currency }}</p>
      <input class="newitem" type="text" ng-blur= "$ctrl.updateItem(item);" ng-model="item.quantity"><br>
      <button ng-click="$ctrl.increaseItem(item);"> + </button>
      <button ng-click="$ctrl.decreaseItem(item);"> - </button>

    </section>

  </div>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) =>{
      vm.cartItems = response.data;
    });
    vm.addItem = (newItem) => {
      CartService.addItem(newItem).then((response) =>{
        vm.cartItems = response.data;
      });
      vm.newItem = {};
    };
    vm.updateItem = (item) => {
      CartService.updateItem(item).then((response) =>{
        vm.cartItems = response.data;
      })
    }
    vm.deleteItem = (id) => {
      CartService.deleteItem(id).then((response) =>{
        vm.cartItems = response.data;
      })
    }
    vm.increaseItem = (item) => {
      item.quantity++;
      vm.updateItem(item);
    }

    vm.decreaseItem = (item) => {
      if (item.quantity > 0) {
        item.quantity--;
      };
      vm.updateItem(item);
    }

  }]
}

angular
  .module("cartApp")
  .component("cartItems", cartItems)
