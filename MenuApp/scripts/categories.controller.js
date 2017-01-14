(function(){
    var app = angular.module("MenuApp");
    
    app.controller('CategoriesViewController', CategoriesViewController);
  
  CategoriesViewController.$inject = ['categoriesData'];
  function CategoriesViewController(categoriesData) {
    var myself = this;
    this.categoriesData = categoriesData;
  };
})();