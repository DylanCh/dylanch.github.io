(function () {
    var shoppingListApp = angular.module('shoppingListApp',[]);
    shoppingListApp.controller('shoppingListController',shoppingListController);
    
    shoppingListController.$inject = ['$scope'];
    
    shoppingListApp.filter('hideBoughtItems',function(){
        return function(item){
            if(item.bought ===false){return false;}
            else return true;
        };
    });
    
    function shoppingListController($scope){
        $scope.toBuy=[
             cookies={
                name:'cookies',quantity:0,bought:false
            },
            water={
                name:'water',quantity:0,bought:false
            },
            bananas={
                name:'bananas',quantity:0,bought:false
            },
            milk={
                name:'milk',quantity:0,bought:false
            },
            coconut={
                name:'coconut',quantity:0,bought:false
            }
        ];  // end array     
        
        $scope.boughtList=[];
        $scope.boughtEmpty=true;
        $scope.toBuyEmpty=false;
        
        function setBoughtEmpty(){
            if ($scope.boughtList.length===0){
                return true;
            }
            else return false;
        };
        
        function setToBuyEmpty(){
            var tbe;
            for(var i =0; i<$scope.toBuy.length;i++){
                if($scope.toBuy[i].bought===true){
                    tbe = true;
                }
                else{
                    tbe=false;
                    break;
                }
            }
            return tbe;
        };
        
        //$scope.toBuyEmpty = setToBuyEmpty();
        
        $scope.btnOnClick = function addAndDropItems(itemName){
            var index;
            if(itemName === 'cookies'){
                index=0;
            }
            else if(itemName === 'water'){
                index=1;
            }
            else if(itemName ==='bananas'){
                index=2;
            }
            else if(itemName==='milk'){
                index=3;
            }
            else if (itemName==='coconut'){
                index=4;
            }
            $scope.toBuy[index].quantity +=10;
            $scope.toBuy[index].bought = true;
            //console.log($scope.toBuy[index].quantity);
            $scope.boughtList.push($scope.toBuy[index]);
            $scope.boughtEmpty=setBoughtEmpty();
            $scope.toBuyEmpty = setToBuyEmpty();
            console.log("Bought list empty: "+$scope.boughtEmpty);
            console.log("To buy list empty: "+$scope.toBuyEmpty);
    }; // end function
        
    }; // end controller
    
    
    
}());


