(function(){

  var app =angular.module("MenuApp");
  
  app.component("categories", {
    restrict: 'AE',
    templateUrl: 'templates/categories.template.html',
    bindings: {
      categoriesdata: '<'
    }
  });

})();


