(function(){
    var app=angular.module("MenuApp");
    
    app.controller('ItemViewController', ItemViewController);

  ItemViewController.$inject = ['itemData', 'catName'];
  function ItemViewController(itemData, catName) {
    var myself = this;
    myself.itemData = itemData;
    myself.catName = catName;
    console.log(itemData);
  };
})();


