(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
      })
    
       .state('categoriesList', {
        url: '/categories-list',
        templateUrl: 'templates/main-categories.template.html',
        controller: 'CategoriesController',
        controllerAs: "categoriesCtrl",
        resolve: {
          menuCategories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
      .state('menuitems', {
        url: '/categories-list/{shortName}',
        templateUrl: 'templates/items.template.html',
        controller: "CategoryItemsController",
        controllerAs: "menuItemsCtrl",
        resolve: {
          menuItems: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
    
      });
    
    }
    
    })();
    