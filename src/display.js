const display = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return

        const searchResults = document.querySelector("[data-search-results]")
        searchResults.classList.add("active")

        const cityName = document.querySelector("[data-city-name]")
        const temperature = document.querySelector("[data-temperature]")
        const feelsLike = document.querySelector("[data-feels-like]")
        const humidity = document.querySelector("[data-humidity]")
        const wind = document.querySelector("[data-wind]")

        cityName.textContent = `${weatherData.cityName}`
        temperature.textContent = `${weatherData.temperature} °C`
        feelsLike.textContent = `Feels like: ${weatherData.feelsLike} °C`
        humidity.textContent = `Humidity: ${weatherData.humidity} %`
        wind.textContent = `Wind: ${weatherData.windSpeed} km/h`

    }
    return { setSearchResult }
})()

export default display