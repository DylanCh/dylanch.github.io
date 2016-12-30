(function () {
    var shoppingListApp = angular.module('shoppingListApp',[]);
    shoppingListApp.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    shoppingListApp.controller('toBuyController',toBuyController);
    shoppingListApp.controller('boughtController',boughtController);
    
    toBuyController.$inject = ['ShoppingListCheckOffService'];
    boughtController.$inject=['ShoppingListCheckOffService'];
    
    function ShoppingListCheckOffService(){
        var service = this;
        service.toBuy=[
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
        service.boughtList=[];

        service.boughtEmpty;
        service.toBuyEmpty;
        service.setToBuyEmpty=function (){
            //var tbe;
            for(var i =0; i<service.toBuy.length;i++){
                if(service.toBuy[i].bought===true){
                    service.toBuyEmpty = true;
                }
                else{
                    service.toBuyEmpty=false;
                    break;
                }
            }
        };
        service.setBoughtEmpty=function(){
            if (service.boughtList.length===0){
                service.boughtEmpty= true;
            }
            else service.boughtEmpty= false;
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
            service.toBuy[index].quantity +=10;
            service.toBuy[index].bought = true;
            //console.log($scope.toBuy[index].quantity);
            service.boughtList.push(service.toBuy[index]);
            //service.boughtEmpty=setBoughtEmpty();
            //service.toBuyEmpty = setToBuyEmpty();
        };
        
        service.getToBuyList=function(){
            return service.toBuy;
        };
        
        service.getBoughtList = function(){
            return service.boughtList;
        };
        
        service.getToBuyEmpty=function(){
            return service.toBuyEmpty;
        };
//        
        service.getBoughtEmpty=function(){
            return service.boughtEmpty;
        };
    };
    

    
    function boughtController(ShoppingListCheckOffService){
        var bought = this;
        bought.boughtList = ShoppingListCheckOffService.getBoughtList();
        bought.boughtEmpty = function(){
             return ShoppingListCheckOffService.getBoughtEmpty();//(ShoppingListCheckOffService.getBoughtList().length===0);                
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
                //console.log(ShoppingListCheckOffService.getToBuyEmpty());
                //console.log(this.toBuyEmpty);
                //console.log(ShoppingListCheckOffService.getBoughtEmpty());
            };          
    }; // end controller
    
    
    
}());

