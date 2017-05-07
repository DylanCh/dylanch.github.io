(function () {
    var app = angular.module('weatherForm',[]);
    
    app.appName = 'WeatherCzar';
    
    var urlRoot = 'http://api.openweathermap.org/data/2.5/weather?q=';
    
    app.controller('weatherController', ['$scope','$http', function ($scope, $http) {
           $scope.urlRoot = new String(urlRoot);
            $scope.countryCode= new String("US");
            $scope.cityName=new String('');
            $scope.stateName;
            $scope.showStartOver = false;
            $scope.modelData;
            
            $scope.getWeather = function(){
                $scope.showStartOver = !$scope.showStartOver;
                console.log('Loading weather in '+$scope.cityName + ', ' +$scope.countryCode);
                if ($scope.countryCode == 'US')
                    $scope.urlRoot = $scope.urlRoot + $scope.cityName +','+$scope.stateName + ',US&APPID=a90be4664ca52ef6ed8d2ab21fdfe90a';
                else 
                    $scope.urlRoot = $scope.urlRoot + $scope.cityName + ',' + $scope.countryCode + '&APPID=a90be4664ca52ef6ed8d2ab21fdfe90a';
                console.log($scope.urlRoot);

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
                    var googleMap = 'https://www.google.com/maps/@'+$scope.modelData.data.coord.lat+
                            ','+$scope.modelData.data.coord.lon+',12z';
                    $('#result').prepend('<li>Visibility: '+$scope.modelData.data.visibility+'</li>');
                    $('#result').prepend('<li>Clouds: '+$scope.modelData.data.clouds.all +'</li>');
                    $('#result').prepend('<li>Wind: '+ ($scope.modelData.data.wind.speed * 3.6) + ' km/h</li>');
                    $('#result').prepend('<li>Humidity: '+ $scope.modelData.data.main.humidity+'</li>');
                    $('#result').prepend('<li>Lowest Temperature: '+calculateTemp( $scope.modelData.data.main.temp_min) +'°F</li>');
                    $('#result').prepend('<li>Highest Temperature: '+calculateTemp( $scope.modelData.data.main.temp_max) +'°F</li>');
                    $('#result').prepend('<li>Temperature: '+calculateTemp( $scope.modelData.data.main.temp) +'°F</li>');
                    $('#result').prepend('<li>Weather: '+ $scope.modelData.data.weather[0].description +'</li>');
                    $('#result').prepend('<li><a href="'+googleMap+'" target="_blank">View in Google Map</a></li>');
                    $('#result').prepend('<li>Longitude: '+$scope.modelData.data.coord.lon +'</li>');
                    $('#result').prepend('<li>Latitude: '+$scope.modelData.data.coord.lat +'</li>');
                    $('#result').prepend('<li>Country: '+ getCountryName($scope.modelData.data.sys.country)+'</li>');
                    $('#result').prepend('<li>City: '+$scope.modelData.data.name +'</li>');
                    
                    $('#result').find('li').addClass("list-group-item");
                };
                
                function calculateTemp(kevin){
                    return (kevin * 9/5 - 459.67).toFixed(2) ;
                };
            };
            
            function getCountryName(code){
                code = code.trim().toUpperCase();
                if (code==='GB')
                    return 'United Kingdom';
                var item;
                for(item=0; item< $scope.countryList.length; item++){
                    if($scope.countryList[item].countryCode === code)
                        return $scope.countryList[item].countryName;
                }
                return code;
            };
            
            $scope.countryList = [
                {countryName:"Andorra, Principality Of", countryCode : "AD"},
                {countryName:"United Arab Emirates", countryCode : "AE"},
                {countryName:"Afghanistan, Islamic State Of", countryCode : "AF"},
                {countryName:"Antigua And Barbuda", countryCode : "AG"},
                {countryName:"Anguilla", countryCode : "AI"},
                {countryName:"Albania", countryCode : "AL"},
                {countryName:"Armenia", countryCode : "AM"},
                {countryName:"Netherlands Antilles", countryCode : "AN"},
                {countryName:"Angola", countryCode : "AO"},
                {countryName:"Antarctica", countryCode : "AQ"},
                {countryName:"Argentina", countryCode : "AR"},
                {countryName:"American Samoa", countryCode : "AS"},
                {countryName:"Austria", countryCode : "AT"},
                {countryName:"Australia", countryCode : "AU"},
                {countryName:"Aruba", countryCode : "AW"},
                {countryName:"Azerbaidjan", countryCode : "AZ"},
                {countryName:"Bosnia-Herzegovina", countryCode : "BA"},
                {countryName:"Barbados", countryCode : "BB"},
                {countryName:"Bangladesh", countryCode : "BD"},
                {countryName:"Belgium", countryCode : "BE"},
                {countryName:"Burkina Faso", countryCode : "BF"},
                {countryName:"Bulgaria", countryCode : "BG"},
                {countryName:"Bahrain", countryCode : "BH"},
                {countryName:"Burundi", countryCode : "BI"},
                {countryName:"Benin", countryCode : "BJ"},
                {countryName:"Bermuda", countryCode : "BM"},
                {countryName:"Brunei Darussalam", countryCode : "BN"},
                {countryName:"Bolivia", countryCode : "BO"},
                {countryName:"Brazil", countryCode : "BR"},
                {countryName:"Bahamas", countryCode : "BS"},
                {countryName:"Bhutan", countryCode : "BT"},
                {countryName:"Bouvet Island", countryCode : "BV"},
                {countryName:"Botswana", countryCode : "BW"},
                {countryName:"Belarus", countryCode : "BY"},
                {countryName:"Belize", countryCode : "BZ"},
                {countryName:"Canada", countryCode : "CA"},
                {countryName:"Cocos (Keeling) Islands", countryCode : "CC"},
                {countryName:"Central African Republic", countryCode : "CF"},
                {countryName:"Congo, The Democratic Republic Of The", countryCode : "CD"},
                {countryName:"Congo", countryCode : "CG"},
                {countryName:"Switzerland", countryCode : "CH"},
                {countryName:"Ivory Coast (Cote D'Ivoire)", countryCode : "CI"},
                {countryName:"Cook Islands", countryCode : "CK"},
                {countryName:"Chile", countryCode : "CL"},
                {countryName:"Cameroon", countryCode : "CM"},
                {countryName:"China", countryCode : "CN"},
                {countryName:"Colombia", countryCode : "CO"},
                {countryName:"Costa Rica", countryCode : "CR"},
                {countryName:"Former Czechoslovakia", countryCode : "CS"},
                {countryName:"Cuba", countryCode : "CU"},
                {countryName:"Cape Verde", countryCode : "CV"},
                {countryName:"Christmas Island", countryCode : "CX"},
                {countryName:"Cyprus", countryCode : "CY"},
                {countryName:"Czech Republic", countryCode : "CZ"},
                {countryName:"Germany", countryCode : "DE"},
                {countryName:"Djibouti", countryCode : "DJ"},
                {countryName:"Denmark", countryCode : "DK"},
                {countryName:"Dominica", countryCode : "DM"},
                {countryName:"Dominican Republic", countryCode : "DO"},
                {countryName:"Algeria", countryCode : "DZ"},
                {countryName:"Ecuador", countryCode : "EC"},
                {countryName:"Estonia", countryCode : "EE"},
                {countryName:"Egypt", countryCode : "EG"},
                {countryName:"Western Sahara", countryCode : "EH"},
                {countryName:"Eritrea", countryCode : "ER"},
                {countryName:"Spain", countryCode : "ES"},
                {countryName:"Ethiopia", countryCode : "ET"},
                {countryName:"Finland", countryCode : "FI"},
                {countryName:"Fiji", countryCode : "FJ"},
                {countryName:"Falkland Islands", countryCode : "FK"},
                {countryName:"Micronesia", countryCode : "FM"},
                {countryName:"Faroe Islands", countryCode : "FO"},
                {countryName:"France", countryCode : "FR"},
                {countryName:"France (European Territory)", countryCode : "FX"},
                {countryName:"Gabon", countryCode : "GA"},
                {countryName:"Great Britain", countryCode : "UK"},
                {countryName:"Grenada", countryCode : "GD"},
                {countryName:"Georgia", countryCode : "GE"},
                {countryName:"French Guyana", countryCode : "GF"},
                {countryName:"Ghana", countryCode : "GH"},
                {countryName:"Gibraltar", countryCode : "GI"},
                {countryName:"Greenland", countryCode : "GL"},
                {countryName:"Gambia", countryCode : "GM"},
                {countryName:"Guinea", countryCode : "GN"},
                {countryName:"Guadeloupe (French)", countryCode : "GP"},
                {countryName:"Equatorial Guinea", countryCode : "GQ"},
                {countryName:"Greece", countryCode : "GR"},
                {countryName:"S. Georgia & S. Sandwich Isls.", countryCode : "GS"},
                {countryName:"Guatemala", countryCode : "GT"},
                {countryName:"Guam (USA)", countryCode : "GU"},
                {countryName:"Guinea Bissau", countryCode : "GW"},
                {countryName:"Guyana", countryCode : "GY"},
                {countryName:"Hong Kong", countryCode : "HK"},
                {countryName:"Heard And McDonald Islands", countryCode : "HM"},
                {countryName:"Honduras", countryCode : "HN"},
                {countryName:"Croatia", countryCode : "HR"},
                {countryName:"Haiti", countryCode : "HT"},
                {countryName:"Hungary", countryCode : "HU"},
                {countryName:"Indonesia", countryCode : "ID"},
                {countryName:"Ireland", countryCode : "IE"},
                {countryName:"Israel", countryCode : "IL"},
                {countryName:"India", countryCode : "IN"},
                {countryName:"British Indian Ocean Territory", countryCode : "IO"},
                {countryName:"Iraq", countryCode : "IQ"},
                {countryName:"Iran", countryCode : "IR"},
                {countryName:"Iceland", countryCode : "IS"},
                {countryName:"Italy", countryCode : "IT"},
                {countryName:"Jamaica", countryCode : "JM"},
                {countryName:"Jordan", countryCode : "JO"},
                {countryName:"Japan", countryCode : "JP"},
                {countryName:"Kenya", countryCode : "KE"},
                {countryName:"Kyrgyz Republic (Kyrgyzstan)", countryCode : "KG"},
                {countryName:"Cambodia, Kingdom Of", countryCode : "KH"},
                {countryName:"Kiribati", countryCode : "KI"},
                {countryName:"Comoros", countryCode : "KM"},
                {countryName:"Saint Kitts & Nevis Anguilla", countryCode : "KN"},
                {countryName:"North Korea", countryCode : "KP"},
                {countryName:"South Korea", countryCode : "KR"},
                {countryName:"Kuwait", countryCode : "KW"},
                {countryName:"Cayman Islands", countryCode : "KY"},
                {countryName:"Kazakhstan", countryCode : "KZ"},
                {countryName:"Laos", countryCode : "LA"},
                {countryName:"Lebanon", countryCode : "LB"},
                {countryName:"Saint Lucia", countryCode : "LC"},
                {countryName:"Liechtenstein", countryCode : "LI"},
                {countryName:"Sri Lanka", countryCode : "LK"},
                {countryName:"Liberia", countryCode : "LR"},
                {countryName:"Lesotho", countryCode : "LS"},
                {countryName:"Lithuania", countryCode : "LT"},
                {countryName:"Luxembourg", countryCode : "LU"},
                {countryName:"Latvia", countryCode : "LV"},
                {countryName:"Libya", countryCode : "LY"},
                {countryName:"Morocco", countryCode : "MA"},
                {countryName:"Monaco", countryCode : "MC"},
                {countryName:"Moldavia", countryCode : "MD"},
                {countryName:"Madagascar", countryCode : "MG"},
                {countryName:"Marshall Islands", countryCode : "MH"},
                {countryName:"Macedonia", countryCode : "MK"},
                {countryName:"Mali", countryCode : "ML"},
                {countryName:"Myanmar", countryCode : "MM"},
                {countryName:"Mongolia", countryCode : "MN"},
                {countryName:"Macau", countryCode : "MO"},
                {countryName:"Northern Mariana Islands", countryCode : "MP"},
                {countryName:"Martinique (French)", countryCode : "MQ"},
                {countryName:"Mauritania", countryCode : "MR"},
                {countryName:"Montserrat", countryCode : "MS"},
                {countryName:"Malta", countryCode : "MT"},
                {countryName:"Mauritius", countryCode : "MU"},
                {countryName:"Maldives", countryCode : "MV"},
                {countryName:"Malawi", countryCode : "MW"},
                {countryName:"Mexico", countryCode : "MX"},
                {countryName:"Malaysia", countryCode : "MY"},
                {countryName:"Mozambique", countryCode : "MZ"},
                {countryName:"Namibia", countryCode : "NA"},
                {countryName:"New Caledonia (French)", countryCode : "NC"},
                {countryName:"Niger", countryCode : "NE"},
                {countryName:"Norfolk Island", countryCode : "NF"},
                {countryName:"Nigeria", countryCode : "NG"},
                {countryName:"Nicaragua", countryCode : "NI"},
                {countryName:"Netherlands", countryCode : "NL"},
                {countryName:"Norway", countryCode : "NO"},
                {countryName:"Nepal", countryCode : "NP"},
                {countryName:"Nauru", countryCode : "NR"},
                {countryName:"Neutral Zone", countryCode : "NT"},
                {countryName:"Niue", countryCode : "NU"},
                {countryName:"New Zealand", countryCode : "NZ"},
                {countryName:"Oman", countryCode : "OM"},
                {countryName:"Panama", countryCode : "PA"},
                {countryName:"Peru", countryCode : "PE"},
                {countryName:"Polynesia (French)", countryCode : "PF"},
                {countryName:"Papua New Guinea", countryCode : "PG"},
                {countryName:"Philippines", countryCode : "PH"},
                {countryName:"Pakistan", countryCode : "PK"},
                {countryName:"Poland", countryCode : "PL"},
                {countryName:"Saint Pierre And Miquelon", countryCode : "PM"},
                {countryName:"Pitcairn Island", countryCode : "PN"},
                {countryName:"Puerto Rico", countryCode : "PR"},
                {countryName:"Portugal", countryCode : "PT"},
                {countryName:"Palau", countryCode : "PW"},
                {countryName:"Paraguay", countryCode : "PY"},
                {countryName:"Qatar", countryCode : "QA"},
                {countryName:"Reunion (French)", countryCode : "RE"},
                {countryName:"Romania", countryCode : "RO"},
                {countryName:"Russian Federation", countryCode : "RU"},
                {countryName:"Rwanda", countryCode : "RW"},
                {countryName:"Saudi Arabia", countryCode : "SA"},
                {countryName:"Solomon Islands", countryCode : "SB"},
                {countryName:"Seychelles", countryCode : "SC"},
                {countryName:"Sudan", countryCode : "SD"},
                {countryName:"Sweden", countryCode : "SE"},
                {countryName:"Singapore", countryCode : "SG"},
                {countryName:"Saint Helena", countryCode : "SH"},
                {countryName:"Slovenia", countryCode : "SI"},
                {countryName:"Svalbard And Jan Mayen Islands", countryCode : "SJ"},
                {countryName:"Slovak Republic", countryCode : "SK"},
                {countryName:"Sierra Leone", countryCode : "SL"},
                {countryName:"San Marino", countryCode : "SM"},
                {countryName:"Senegal", countryCode : "SN"},
                {countryName:"Somalia", countryCode : "SO"},
                {countryName:"Suriname", countryCode : "SR"},
                {countryName:"Saint Tome (Sao Tome) And Principe", countryCode : "ST"},
                {countryName:"Former USSR", countryCode : "SU"},
                {countryName:"El Salvador", countryCode : "SV"},
                {countryName:"Syria", countryCode : "SY"},
                {countryName:"Swaziland", countryCode : "SZ"},
                {countryName:"Turks And Caicos Islands", countryCode : "TC"},
                {countryName:"Chad", countryCode : "TD"},
                {countryName:"French Southern Territories", countryCode : "TF"},
                {countryName:"Togo", countryCode : "TG"},
                {countryName:"Thailand", countryCode : "TH"},
                {countryName:"Tadjikistan", countryCode : "TJ"},
                {countryName:"Tokelau", countryCode : "TK"},
                {countryName:"Turkmenistan", countryCode : "TM"},
                {countryName:"Tunisia", countryCode : "TN"},
                {countryName:"Tonga", countryCode : "TO"},
                {countryName:"East Timor", countryCode : "TP"},
                {countryName:"Turkey", countryCode : "TR"},
                {countryName:"Trinidad And Tobago", countryCode : "TT"},
                {countryName:"Tuvalu", countryCode : "TV"},
                {countryName:"Taiwan", countryCode : "TW"},
                {countryName:"Tanzania", countryCode : "TZ"},
                {countryName:"Ukraine", countryCode : "UA"},
                {countryName:"Uganda", countryCode : "UG"},
                {countryName:"United Kingdom", countryCode : "UK"},
                {countryName:"USA Minor Outlying Islands", countryCode : "UM"},
                {countryName:"United States", countryCode : "US"},
                {countryName:"Uruguay", countryCode : "UY"},
                {countryName:"Uzbekistan", countryCode : "UZ"},
                {countryName:"Holy See (Vatican City State)", countryCode : "VA"},
                {countryName:"Saint Vincent & Grenadines", countryCode : "VC"},
                {countryName:"Venezuela", countryCode : "VE"},
                {countryName:"Virgin Islands (British)", countryCode : "VG"},
                {countryName:"Virgin Islands (USA)", countryCode : "VI"},
                {countryName:"Vietnam", countryCode : "VN"},
                {countryName:"Vanuatu", countryCode : "VU"},
                {countryName:"Wallis And Futuna Islands", countryCode : "WF"},
                {countryName:"Samoa", countryCode : "WS"},
                {countryName:"Yemen", countryCode : "YE"},
                {countryName:"Mayotte", countryCode : "YT"},
                {countryName:"Yugoslavia", countryCode : "YU"},
                {countryName:"South Africa", countryCode : "ZA"},
                {countryName:"Zambia", countryCode : "ZM"},
                {countryName:"Zaire", countryCode : "ZR"},
                {countryName:"Zimbabwe", countryCode : "ZW"}
            ];
            
    }]);
    
})();


