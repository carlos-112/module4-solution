(function() {
    'use strict';

    angular.module('data')
    .component('menuItems', {
        template: 'items.template.html',
        bindings: {
            menuItems: '<'
        }
    })

})();