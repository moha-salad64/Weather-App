const apikey = "ada2d9e1b79a93e3ffbefe4976d56e75";

//getting weather data elements
const weatherData = document.getElementById("weather-data");
//getting cinty input element 
const cityInput = document.getElementById("city-input");
//getting the form element that makes submit function
const formElement = document.querySelector("form");

//event handlers of the form element 
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //get the value of the city input
    const cityValue = cityInput.value;
   
    //function that get value from the api response
    getWeatherData(cityValue);
    
});
//function to fetch weather data from the api
async function getWeatherData(cityValue) {
    try {
        //fetchiing the weather data from  the api 
        const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
        //checking if the response is ok
        if (!response.ok) {
            throw new Error('the response is not is not ok'); 
            // throw new Error(`HTTP error! status: ${response.status}`);
        }
        //converting the response to json data
        const data = await response.json();
       console.log(data);
       
        //get the icon image from the response api 
        const icon = data.weather[0].icon;
        //getting the temperature from the response api 
        const temperature = data.main.temp; 
        //getting the description from the response api
        const description = data.weather[0].description; 
        // get the humidity feel_like and wind speed from the response api
        const details = [
            //getting feels like
            `Feels Like: ${Math.round(data.main.feels_like)}°C`,
            //getting humidity
            `Humidity: ${data.main.humidity}%`,
            //getting wind speed
            `Wind Speed: ${data.wind.speed} km/h`,
        ]

        //displaying the weather data in the HTML

        //displaying the weather icon 
        weatherData.querySelector(
            ".icon"
            ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-image">`;

        //displaying the the weather temperature
        weatherData.querySelector(
            '.temperature'
        ).textContent = `${Math.round(temperature)}°C`;

        //displaying the weather description
        weatherData.querySelector(
            '.description'
        ).textContent = `${description}`;

        //displaying the weather details
        weatherData.querySelector(
            '.details'
        ).innerHTML = details.map((detail) =>`<div>${detail}</div>`).join("");
    
    } catch (error) {
        //displayying error message if the fecht is not found or failed
        document.getElementById('city-input').value ="";
        weatherData.querySelector('.icon').innerHTML = "";
        weatherData.querySelector('.temperature').textContent ="";
        const des = weatherData.querySelector('.description'); 
        des.textContent = "An Error happened pleace try again";
        weatherData.querySelector('.details').innerHTML = "";
        
    }
}





