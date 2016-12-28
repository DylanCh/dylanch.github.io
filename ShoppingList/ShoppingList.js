(function () {
    var shoppingListApp = angular.module('shoppingListApp',[]);
    shoppingListApp.controller('shoppingListController',shoppingListController);
    
    shoppingListController.$inject = ['$scope'];
    
    function shoppingListController($scope){
        $scope.toBuy=[
             cookies={
                name:'cookies',quantity:10
            },
            water={
                name:'water',quantity:3
            },
            bananas={
                name:'bananas',quantity:14
            },
            milk={
                name:'milk',quantity:1
            },
            coconut={
                name:'coconut',quantity:1
            }
        ];  // end array     
        
        $scope.boughtList=[];
        $scope.btnOnClick = function addAndDropItems(itemName){
        if(itemName === 'cookies'){
            $scope.toBuy[0].quantity +=10;
            //console.log($scope.toBuy[0].quantity);
            $scope.boughtList.push($scope.toBuy[0]);
        }
    };
        
    }; // end controller
    
    
    
}());
