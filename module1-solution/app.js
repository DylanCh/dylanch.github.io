(function(){
    var LunchCheck = angular.module('LunchCheck', []);

    LunchCheck.controller('LunchCheckController', 
                          LunchCheckController                     
    );

    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope){
        jQuery('#messageHolder').hide();
        $scope.title="Lunch Checker";
        $scope.count=0;
        $scope.message;
        $scope.btnClick=function(){
            $scope.count=getCount();
            
            if($scope.count<=3 && $scope.count >0){
                jQuery('#message').css('color','green');
                $scope.message="Enjoy!";
            }
            else if($scope.count>3){
                jQuery('#message').css('color','light-green');
                $scope.message ="Too much!" ;
            }
            else if($scope.count===0){
                jQuery('#message').css('color','red');
                $scope.message="Please enter data first";
            
            }
            jQuery('#message').text($scope.message);
            jQuery('#messageHolder').show();
            
        };

    };

    function getCount(){
        var itemsStr = jQuery('#lunch-menu').val();
        var items = new Array();
        items =  itemsStr.split(",");
        if(itemsStr.endsWith(","))
            return items.length-1;
        else if(!itemsStr.trim() || !itemsStr)
            return 0;
        else return items.length;
    };
})();
