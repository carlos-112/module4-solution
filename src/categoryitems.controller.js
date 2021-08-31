(function () {
    'use strict';
    
    angular.module('data')
    .controller('CategoryItemsController', CategoryItemsController);
    
    CategoryItemsController.$inject = ['menuItems'];
    function CategoryItemsController(menuItems) {
      var $ctrl = this;
      $ctrl.menuItems = menuItems;
    }
    
})();
