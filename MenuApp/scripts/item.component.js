(function(){

  var app=angular.module("MenuApp");
  
  app.component('items', {
      restrict: 'AE',
      templateUrl: 'templates/items.template.html',
      bindings: {
        itemdata: '<'
      }
  })

})();


