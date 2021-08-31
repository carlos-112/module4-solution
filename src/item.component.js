(function() {
    'use strict';

    angular.module('data')
    .component('menuItem', {
        templateUrl: 'templates/item.template.html',
        bindings: {
            menuItem: '<'
        },
    })

})();