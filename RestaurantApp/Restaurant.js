(function(){
    var NarrowItDownApp =angular.module('NarrowItDownApp',[]);
    NarrowItDownApp.service('MenuSearchService',MenuSearchService);
    NarrowItDownApp.controller('MenuController',MenuController);
    NarrowItDownApp.directive('foundItems',FoundItems);
    
    function FoundItems(){
        var ddo={            
            controller:MenuController,
//             scope:{
//                 items:'='
//             },
            templateUrl:'menuItems.html',          
            replace:false,
            bindToController:true
            ,restrict:'E'
        };
        return ddo;
    };
    
    MenuSearchService.$inject=['$http'];
    function MenuSearchService($http){       
        this.getMatchedMenuItems=function(searchItem){
             var results =$http({
                method:'GET',
                url:'https://davids-restaurant.herokuapp.com/menu_items.json'
                ,params: {
                    name: searchItem
                }
            });
            return results;
        }; // end function
    }; // end service
    
    MenuController.$inject=['MenuSearchService','$q'];
    function MenuController(MenuSearchService,$q){
        var m=this;
        m.title = "Narrow Down Your Chinese Menu Choice";
        m.query = new String();
        m.promise;
        m.searchClicked=false;
        m.clickToSearch = function(searchItem){
            m.searchClicked=true;
            m.query=searchItem;
            console.log(m.query);
            m.promise=MenuSearchService.getMatchedMenuItems()
                .then(function(result){
                    if (typeof result.data === 'object') {
                        m.founditems = new Array();
                        for (var i=0;i<result.data.menu_items.length;i++){
                            if (result.data.menu_items[i].name.toLowerCase().indexOf(searchItem)>=0)
                            //if(result.data.menu_items[i].name.search(searchItem)>0){
                                console.log(result.data.menu_items[i].name);
                                m.founditems.push(result.data.menu_items[i]);       
                            //}
                        }
                        console.log(m.founditems);  
                    }
                    else{
                        $q.reject(result.data);
                    }
                    }).catch(function (error) {
                        console.log(error.message());
                });
            }; // end onclick
        
        m.remove = function(id){
            if(window.confirm("Removing "+id+" "+m.founditems[id].name)){
                if(id>-1)
                    m.founditems.splice(id,1);
            }
        };
    }; // end controller
    
})();
