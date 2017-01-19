(function() {

  var signupPage =angular.module('public');
  signupPage.controller("SignupController", SignupController);
  
  SignupController.$inject = ['DataService', 'menuItems'];
  function SignupController(DataService, menuItems) {
    var myself = this;
    myself.customer = DataService.getCustomerInformation();
    myself.menuNumberExists = true;
    
    myself.resetForm=function(){
            jQuery('#signUpForm')[0].reset();
//            console.log(jQuery('#signUpForm')[0]);
    };

    myself.goback=function(){
        if(confirm('Cancel sign up?'))
            window.history.back();
    };

    myself.submitForm = function() {
      myself.customer.registered = true;
      DataService.setCustomerInformation(myself.customer);
      if(menuItems.indexOf(myself.customer.menuNumber) <0) {
        myself.menuNumberExists = false;
      } else {
        myself.menuNumberExists = true;
      }
    };
  }
})();
