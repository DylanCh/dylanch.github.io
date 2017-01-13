(function(){

  var app=angular.module("MenuApp");
  
  app.component('items', {
      restrict: 'AE',
      templateUrl: 'templates/items.template.html',
      bindings: {
        itemdata: '<'
      }
  }).controller('ItemViewController', ItemViewController);

  ItemViewController.$inject = ['itemData', 'catName'];
  function ItemViewController(itemData, catName) {
    var myself = this;
    myself.itemData = itemData;
    myself.catName = catName;
    console.log(itemData)
  };

})();


