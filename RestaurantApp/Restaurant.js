(function(){
    var NarrowItDownApp =angular.module('NarrowItDownApp',[]);
    NarrowItDownApp.service('MenuSearchService',MenuSearchService);
    NarrowItDownApp.controller('MenuController',MenuController);

    MenuSearchService.$inject=['$http'];
    function MenuSearchService($http){       
        this.getMatchedMenuItems=function(searchItem){
             var foundItems =$http({
                method:'GET',
                url:'https://davids-restaurant.herokuapp.com/menu_items.json'
                ,params: {
                    name: searchItem
                }
            });
            return foundItems;
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
                        m.foundItems = new Array();
                        for (var i=0;i<result.data.menu_items.length;i++){
                            if (result.data.menu_items[i].name.toLowerCase().indexOf(searchItem)>=0){
                            //if(result.data.menu_items[i].name.search(searchItem)>0){
                                console.log(result.data.menu_items[i].name);
                                m.foundItems.push(result.data.menu_items[i]);       
                            }
                        }
                        console.log(m.foundItems);  
                    }
                    else{
                        $q.reject(result.data);
                    }
                    }).catch(function (error) {
                        console.log(error.message());
                });
            }; // end onclick
        }; // end controller
    
})();  
