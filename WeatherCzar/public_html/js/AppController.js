(function () {
    var app = angular.module('weatherForm',[]);
    
    app.appName = 'WeatherCzar';
    
    var urlRoot = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    
    app.controller('weatherController', ['$scope', function ($scope) {
           $scope.urlRoot = new String(urlRoot);
            $scope.countryCode= new String("");
            $scope.cityName=new String('');
            $scope.modelData;
            
            $scope.getWeather = function(){
                console.log('Loading weather in '+$scope.countryCode +$scope.cityName);
                var cityName = $('#city').val(); //$scope.cityName;
                var countryCode = $('#countrySelect').val();
                $scope.urlRoot = $scope.urlRoot + cityName + ',' + countryCode + '&appid=2702b31ff4e7f0888f2a594888ff1257';
                console.log($scope.urlRoot);
                
                var getW =  $.getJSON($scope.urlRoot,function(data){
                    var items=[];
                    $scope.$apply(function(){
                        $scope.modelData = data;
                        $each($scope.modelData,function(key,val){
                        console.log(key+" "+val);
                        $('#result').prepend('<li>'+key+" "+val+'</li>');
                    });
                    });
                }); // end getJson
                
                getW.fail(function(){
                   console.log("get weather fail"); 
                });
            };
    }]);
    
})();


