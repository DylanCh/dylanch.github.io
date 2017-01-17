(function() {
    var app = angular.module('public');  
    
    SignupController.$inject = ['DataService', 'menuItems'];
    function SignupController(DataService, menuItems) {
        var myself = this;
        myself.customer = DataService.getCustomerInformation();
        myself.menuNumberExists = true;

        myself.submitForm = function() {
          myself.customer.registered = true;
          DataService.setCustomerInformation(myself.customer);
          if(menuItems.indexOf(myself.customer.menuNumber) <0) {
            myself.menuNumberExists = false;
          } else {
            myself.menuNumberExists = true;
            alert('Congratulations you have signed up.');
          }
    };
    
    
  }; // end function
  app.controller("SignupController", SignupController);
})();