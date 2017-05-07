(function () {
    var app = angular.module('weatherForm',[]);
    
    app.appName = 'WeatherCzar';
    
    var urlRoot = 'http://api.openweathermap.org/data/2.5/weather?q=';
    
    app.controller('weatherController', ['$scope','$http', function ($scope, $http) {
           $scope.urlRoot = new String(urlRoot);
            $scope.countryCode= new String("");
            $scope.cityName=new String('');
            $scope.modelData;
            
            $scope.getWeather = function(){
                console.log('Loading weather in '+$scope.cityName + ', ' +$scope.countryCode);
                //var cityName = $('#city').val(); //$scope.cityName;
                //var countryCode = $('#countrySelect').val();
                $scope.urlRoot = $scope.urlRoot + $scope.cityName + ',' + $scope.countryCode + '&APPID=a90be4664ca52ef6ed8d2ab21fdfe90a';
                console.log($scope.urlRoot);
                
//                var getW =  
//                  $.getJSON($scope.urlRoot,function(data){
//                    var items=[];
//                    $scope.$apply(function(){
//                        $scope.modelData = data;
//                        $each($scope.modelData,function(key,val){
//                        console.log(key+" "+val);
//                        $('#result').prepend('<li>'+key+" "+val+'</li>');
//                    });
//                    });
//                }); // end getJson

                  $http({
                      url: $scope.urlRoot,
                      cache: false
                  }).then(function(data){
                      $scope.modelData = data;
                      successCallback();
                  },ifFail);
                
                function ifFail(){
                   console.log("get weather fail"); 
                };
                
                function successCallback(){
                    console.log($scope.modelData.data);
//                      $.each($scope.modelData.data,function(key,val){
//                        console.log(key+" "+val);
//                        $('#result').prepend('<li>'+key+" "+val+'</li>');
//                      });
                    var googleMap = 'https://www.google.com/maps/@'+$scope.modelData.data.coord.lat+
                            ','+$scope.modelData.data.coord.lon+',12z';
                    $('#result').prepend('<li>Visibility: '+$scope.modelData.data.visibility+'</li>');
                    $('#result').prepend('<li>Clouds: '+$scope.modelData.data.clouds.all +'</li>');
                    $('#result').prepend('<li>Wind: '+ $scope.modelData.data.wind +'</li>');
                    $('#result').prepend('<li>Humidity: '+ $scope.modelData.data.main.humidity+'</li>');
                    $('#result').prepend('<li>Lowest Temperature: '+calculateTemp( $scope.modelData.data.main.temp_min) +'°F</li>');
                    $('#result').prepend('<li>Highest Temperature: '+calculateTemp( $scope.modelData.data.main.temp_max) +'°F</li>');
                    $('#result').prepend('<li>Temperature: '+calculateTemp( $scope.modelData.data.main.temp) +'°F</li>');
                    $('#result').prepend('<li>Weather: '+ $scope.modelData.data.weather[0].description +'</li>');
                    $('#result').prepend('<li><a href="'+googleMap+'" target="_blank">View in Google Map</a></li>');
                    $('#result').prepend('<li>Longitude: '+$scope.modelData.data.coord.lon +'</li>');
                    $('#result').prepend('<li>Latitude: '+$scope.modelData.data.coord.lat +'</li>');
                    $('#result').prepend('<li>City: '+$scope.modelData.data.name +'</li>');
                };
                
                function calculateTemp(kevin){
                    return (kevin * 9/5 - 459.67).toFixed(2) ;
                };
            };
    }]);
    
})();


