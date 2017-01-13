(function(){

  var app=angular.module("data");
  app.service("MenuDataService", MenuDataService);
  app.constant('CategoriesServiceURL','https://davids-restaurant.herokuapp.com/categories.json');
  app.constant("MenuItemsServiceURL","https://davids-restaurant.herokuapp.com/menu_items.json?category=");

  MenuDataService.$inject = ['CategoriesServiceURL', 'MenuItemsServiceURL', '$http'];
  function MenuDataService(CategoriesServiceURL, MenuItemsServiceURL, $http) {
    var myself = this;

    myself.getAllCategories = function() {
      return $http({ method: 'get', url: CategoriesServiceURL}).then(function(result) {
        return result.data;
      }, function(error) {
        console.log(error);
      });

    };

    myself.getItemsForCategory = function(categoryShortName) {
      return $http({method: 'get', url: (MenuItemsServiceURL+categoryShortName)}).then(function(result) {
        return result.data.menu_items;
      }, function(error) {
        console.log(error);
      });
    };
  }
})();


