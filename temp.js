

// Key is from MobileCSP
var key = "8bb5e8bedfe6fe3f1a44e0a2c04b6540";
var text = document.getElementById("temperature");

fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=20.7503&lon=-156.5003&units=metric&appid='+key
    ).then(function(resp){return resp.json();}
).then(function(data){
    text.innerHTML = Math.round(data.main.temp);
}).catch(function(){
    console.log("Failed to load weather data");
});
