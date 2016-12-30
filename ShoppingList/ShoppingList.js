(function () {
    var shoppingListApp = angular.module('shoppingListApp',[]);
    shoppingListApp.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    shoppingListApp.controller('toBuyController',toBuyController);
    shoppingListApp.controller('boughtController',boughtController);
    
    toBuyController.$inject = ['ShoppingListCheckOffService'];
    boughtController.$inject=['ShoppingListCheckOffService'];
    
    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy=[
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
        var boughtList=[];

        var boughtEmpty;
        var toBuyEmpty;
        service.setToBuyEmpty=function (){
            //var tbe;
            for(var i =0; i<toBuy.length;i++){
                if(toBuy[i].bought===true){
                     toBuyEmpty = true;
                }
                else{
                    toBuyEmpty=false;
                    break;
                }
            }
        };
        service.setBoughtEmpty=function(){
            if (boughtList.length===0){
                boughtEmpty= true;
            }
            else boughtEmpty= false;
        };
        
        service.btnOnClick = function (itemName){
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
            toBuy[index].quantity +=10;
            toBuy[index].bought = true;
            //console.log($scope.toBuy[index].quantity);
            boughtList.push(toBuy[index]);
            //service.boughtEmpty=setBoughtEmpty();
            //service.toBuyEmpty = setToBuyEmpty();
        };
        
        service.getToBuyList=function(){
            return toBuy;
        };
        
        service.getBoughtList = function(){
            return boughtList;
        };
        
        service.getToBuyEmpty=function(){
            return toBuyEmpty;
        };
//        
        service.getBoughtEmpty=function(){
            return boughtEmpty;
        };
    };
    

    
    function boughtController(ShoppingListCheckOffService){
        var bought = this;
        bought.boughtList = ShoppingListCheckOffService.getBoughtList();
        bought.boughtEmpty = function(){
             return ShoppingListCheckOffService.getBoughtEmpty();                
        };
    };
    
    function toBuyController(ShoppingListCheckOffService){
        this.toBuy = ShoppingListCheckOffService.getToBuyList();
        this.toBuyEmpty;
        this.btnOnClick = function(itemName){
                ShoppingListCheckOffService.btnOnClick(itemName);
                ShoppingListCheckOffService.setBoughtEmpty();
                ShoppingListCheckOffService.setToBuyEmpty();
                this.toBuyEmpty=ShoppingListCheckOffService.getToBuyEmpty();
            };          
    }; // end controller
    
    
    
}());

