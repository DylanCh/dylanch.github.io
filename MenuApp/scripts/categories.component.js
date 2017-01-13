(function(){

  var app =angular.module("MenuApp");
  
  app.component("categories", {
    restrict: 'AE',
    templateUrl: 'templates/categories.template.html',
    bindings: {
      categoriesdata: '<'
    }
  }).controller('CategoriesViewController', CategoriesViewController);
  
  CategoriesViewController.$inject = ['categoriesData'];
  function CategoriesViewController(categoriesData) {
    var myself = this;
    this.categoriesData = categoriesData;
  };

})();


