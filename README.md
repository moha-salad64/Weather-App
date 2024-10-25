# Weather App 🌤️

A responsive web application that allows users to check the current weather in any city. This app leverages the OpenWeather API to display temperature, humidity, wind speed, and a visual icon representing the weather conditions.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [License](#license)

---

## Features

- **Real-Time Weather Data**: Get up-to-date weather conditions for any city worldwide.
- **City Search**: Enter a city name to view its current weather.
- **Responsive Design**: The app adapts to mobile and desktop screen sizes.
- **Error Handling**: Provides feedback when an error occurs (e.g., invalid city name or network issues).

## Technologies

- **HTML**: Structure of the app
- **CSS**: Styling for layout and responsive design
- **JavaScript**: Logic for fetching and displaying weather data
- **OpenWeather API**: External API for retrieving real-time weather data

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

1. An API key from [OpenWeather](https://openweathermap.org/).
   
2. **Clone the repository**:
   ```bash
   git clone https://github.com/moha-salad64/Weather-App.git

Project Structure:'\n'

  Weather-App/
├── index.html          # Main HTML file
├── style.css           # Styles for the app
├── main.js             # JavaScript logic for fetching and displaying weather
└── README.md           # Project documentation

Usage:
Open the App: Load index.html in a browser.
Enter a City Name: Type the name of any city in the input box (e.g., "New York").
Get Weather: Press "Get Weather" or hit "Enter."
View Results: The app displays:
Icon: Visual representation of the weather
Temperature: Current temperature in Celsius
Description: Weather description (e.g., "clear sky")
Additional Details: Feels like temperature, humidity, and wind speed.
