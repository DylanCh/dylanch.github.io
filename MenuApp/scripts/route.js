(function() {

  var app=angular.module("MenuApp");
  
  app.config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'ui-views/home.html'
    });

    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'ui-views/categories.html',
      resolve: {
        categoriesData: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      },
      controller: 'CategoriesViewController as cvc'
    });

    $stateProvider.state('item', {
      url: '/item/{catID}/{catName}',
      
      templateUrl: 'ui-views/item.html',
      resolve: {
        catName: ['$stateParams', function($stateParams){
          return $stateParams.catName;
        }],
        itemData: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.catID);
        }]
      },
      controller: 'ItemViewController as ivc'
    });

    $urlRouterProvider.otherwise('/home');
  }

})();

