(function() {
    'use strict';

    angular.module('data')
    .component('menuCategory', {
        templateUrl: 'templates/categories.template.html',
        bindings: {
            category: '<'
        }
    });

})();