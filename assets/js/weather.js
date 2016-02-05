function getWeather(forecast) {

	var lat = -22.8884;
	var long = -43.1147;
	$.ajax({
		url:"https://api.forecast.io/forecast/3f74fa963e2e53d2b59af16e36cdd6d7/" + lat + "," + long + ",2016-02-04T00:00:00?units=si&exclude=minutely,hourly,alerts&lang=pt", 
		dataType: 'jsonp',
		success:function(data) {
			forecast(data); 
		}
	});
}

getWeather(function(output){
	
	// temperatura atual
	document.querySelector(".weather-temperature").textContent = output.currently.temperature.toFixed() + "°";

	// icone
	document.querySelector(".weather-temperature").textContent = output.daily.data[0].temperatureMax.toFixed() + "°";

	// temperatura máxima
	document.querySelector(".weather-max").textContent = output.daily.data[0].temperatureMax.toFixed() + "°";

	// temperatura mínima
	document.querySelector(".weather-min").textContent = output.daily.data[0].temperatureMin.toFixed() + "°";

	// previsão e sensação térmica
	document.querySelector(".weather-day").textContent = output.daily.data[0].summary; 
})