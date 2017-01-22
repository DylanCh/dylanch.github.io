(function(){

  var myinfoPage = angular.module('public');
  myinfoPage.controller('myInfoController', myInfoController);

myInfoController.$inject = ['DataService','MenuService'];
function myInfoController(DataService,MenuService){
    var myself = this;
    var customer = DataService.getCustomerInformation();
    
    MenuService.getMenuItems('').then(function(response){
        myself.customer=customer; 
        for (var i=0; i<response.menu_items.length;i++){
            if(response.menu_items[i].short_name === customer.menuNumber) {
                customer.menuItem = response.menu_items[i];
                DataService.setCustomerInformation(customer);
            }
        }
        
        myself.customer.menuItem= customer.menuItem;
        console.log(myself.customer);
    }); //end then;
    
    
}; // end controller

})();
