

// Key is from MobileCSP
var key = "8bb5e8bedfe6fe3f1a44e0a2c04b6540";
    var text = document.getElementById("weather-info");

fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=20.7503&lon=-156.5003&appid='+key
    ).then(function(resp){return resp.json();}
).then(function(data){
    // Kelvin to Celcius
	var temp = Math.round(parseFloat(data.main.temp)-273.15);
    text.innerHTML = "It is currently "+temp+"°C in Hawaii";
}).catch(function(){
    
});
