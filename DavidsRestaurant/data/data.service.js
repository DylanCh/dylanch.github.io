(function(){
    
    function dataService(){
        var myself = this;
        myself.customerInformation = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            menuNumber: '',
            registered: false
        };

        myself.getCustomerInformation = function() {
          return myself.customerInformation;
        };

        myself.setCustomerInformation = function(customer) {
          myself.customerInformation = customer;
        };
    };// end function
    
    var app=angular.module('data');
    app.service('DataService',dataService);
});

