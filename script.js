/*global $*/
/*global navigator*/
$(document).ready(function(){

var long;
var lat;
       
       if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        long = position.coords.longitude;
        lat = position.coords.latitude;
      
    });
  }
  

    var api = "https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long+'";

    $.getJSON(api, function(data){
        // alert(data.coord.long)
    var weatherType = data.weather[0].description;
    var fahrenheit = (C * 9/5) + 32;
    var celsius = data.main.temp;
    var city = data.name;
        
        
        
        console.log(city);
        console.log(api);
    });
    
});
